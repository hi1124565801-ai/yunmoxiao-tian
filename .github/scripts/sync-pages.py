"""Keep the branch-based Pages source usable between Actions deployments."""
import json
from pathlib import Path
import shutil
import subprocess
import sys

root = Path.cwd()
export = Path(sys.argv[1]).resolve()
manifest = Path(".github/pages-export.json")
previous = set(json.loads(manifest.read_text())) if manifest.exists() else set()
current = {p.relative_to(export).as_posix() for p in export.rglob("*") if p.is_file()}
if not {"index.html", "photography/index.html", "literary-mapping/index.html"} <= current:
    raise SystemExit("Incomplete Pages export")

# A previous export can own only published files, never source files or Git metadata.
protected = {".git", ".github", "app", "public", "components", "data", "config", "lib"}
for name in sorted(previous | current):
    path = Path(name)
    if path.is_absolute() or ".." in path.parts or path.parts[0] in protected:
        raise SystemExit(f"Unsafe Pages path: {name}")
    if path.resolve() != root / path:
        raise SystemExit(f"Unexpected symbolic link at {name}")
    if name in current and name not in previous and path.exists():
        raise SystemExit(f"Pages export conflicts with existing file: {name}")

for name in previous - current:
    Path(name).unlink(missing_ok=True)
for name in sorted(current):
    path = Path(name)
    path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(export / name, path)

manifest.write_text(json.dumps(sorted(current), indent=2) + "\n")
# Stage deleted paths as well as new ones, restricted to files managed above.
subprocess.run(["git", "add", "-f", "--", str(manifest), *sorted(previous | current)], check=True)
