import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
      redirect: "manual",
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Yunmoxiao Tian/);
  assert.match(html, /田云墨筱/);
  assert.match(html, /Peking University/);
  assert.match(html, /Second Major in Sociology/);
  assert.match(html, /Expected Graduation: June 2027/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /href="\/media"/);
  assert.match(html, /href="\/literary-mapping"/);
  assert.match(html, /href="\/files\/Yunmoxiao-Tian-CV.pdf"/);
  assert.doesNotMatch(html, /EN \/ 中文/);
});

test("renders the research list without project-detail links", async () => {
  const response = await render("/research");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Standardizing the Nonstandard/);
  assert.match(html, /China–Africa Fashion Power/);
  assert.match(html, /Cross-Cultural Adaptation/);
  assert.doesNotMatch(html, /View Project|Read More/);
});

test("keeps compatibility redirects for retired routes", async () => {
  const about = await render("/about");
  const projects = await render("/projects");
  assert.ok([301, 302, 307, 308].includes(about.status));
  assert.equal(new URL(about.headers.get("location")).pathname, "/");
  assert.ok([301, 302, 307, 308].includes(projects.status));
  assert.equal(new URL(projects.headers.get("location")).pathname, "/literary-mapping");
});
