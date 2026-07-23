export type PhotographyLocation = {
  id: string;
  city: string;
  country: string;
  coordinates: [number, number] | null;
  description?: string;
  photos: {
    src: string;
    alt: string;
    caption?: string;
    year?: string;
  }[];
};

function album(
  slug: string,
  alts: string[],
  captions: string[] = [],
): PhotographyLocation["photos"] {
  return alts.map((alt, index) => ({
    src: `/images/photography/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.jpg`,
    alt,
    caption: captions[index],
  }));
}

export const photographyLocations: PhotographyLocation[] = [
  {
    id: "beijing",
    city: "Beijing",
    country: "China",
    coordinates: [116.4074, 39.9042],
    photos: album("beijing", [
      "A sunlit interior in Beijing with trees visible through large windows",
      "Dark tree branches silhouetted against a bright blue Beijing sky",
    ]),
  },
  {
    id: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    coordinates: [100.5018, 13.7563],
    photos: album("bangkok", [
      "Wat Arun illuminated at dusk across the Chao Phraya River in Bangkok",
    ]),
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    coordinates: [2.1734, 41.3851],
    photos: album("barcelona", [
      "A sand volleyball court beneath a dark evening sky in Barcelona",
      "Two diners reflected in a red-lit window in Barcelona",
    ]),
  },
  {
    id: "jeju",
    city: "Jeju Island",
    country: "South Korea",
    coordinates: [126.5312, 33.3617],
    photos: album("jeju", [
      "Blue water and a distant volcanic island seen from the Jeju coast",
      "A low coastal settlement beside bright blue water on Jeju Island",
      "A cyclist riding beside the sea beneath hanging laundry on Jeju Island",
    ]),
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    country: "the Netherlands",
    coordinates: [4.9041, 52.3676],
    photos: album("amsterdam", [
      "Late sunlight falling through an Amsterdam station",
      "Cyclists passing through a warm evening street in Amsterdam",
    ]),
  },
  {
    id: "leiden",
    city: "Leiden",
    country: "the Netherlands",
    coordinates: [4.497, 52.1601],
    photos: album("leiden", [
      "A quiet canal bordered by grass and trees in Leiden",
    ]),
  },
  {
    id: "tromso",
    city: "Tromsø",
    country: "Norway",
    coordinates: [18.9553, 69.6492],
    photos: album("tromso", [
      "A snow-covered valley and dark water seen from above near Tromsø",
      "A snowy fjord settlement beneath mountains near Tromsø",
    ]),
  },
  {
    id: "copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    coordinates: [12.5683, 55.6761],
    photos: album(
      "copenhagen",
      [
        "Colourful waterfront buildings reflected in Copenhagen harbour",
        "A pedestrian crossing a rain-darkened Copenhagen street at night",
        "A bicycle outside a warmly lit Copenhagen building after rain",
        "A blue spiral staircase seen from above in Copenhagen",
      ],
      ["Copenhagen harbour.", "Copenhagen, after the rain."],
    ),
  },
  {
    id: "prague",
    city: "Prague",
    country: "Czech Republic",
    coordinates: [14.4378, 50.0755],
    photos: album("prague", [
      "A crucifix illuminated inside a dark stone church in Prague",
      "A monochrome view of a historic monument and square in Prague",
    ]),
  },
  {
    id: "santorini",
    city: "Santorini",
    country: "Greece",
    coordinates: [25.4615, 36.3932],
    photos: album("santorini", [
      "White walls and a turquoise door beneath a deep blue Santorini sky",
      "Santorini buildings glowing on a hillside after sunset",
      "Illuminated terraces and pools in Santorini at night",
    ]),
  },
  {
    id: "budapest",
    city: "Budapest",
    country: "Hungary",
    coordinates: [19.0402, 47.4979],
    photos: album("budapest", [
      "A yellow tram approaching Budapest's Liberty Bridge",
      "A figure seated beside an ornate theatre balcony in Budapest",
      "A person crossing a Budapest bridge beneath a pink evening sky",
    ]),
  },
  {
    id: "oslo",
    city: "Oslo",
    country: "Norway",
    coordinates: [10.7522, 59.9139],
    photos: album("oslo", [
      "People walking down a sloping Oslo street in autumn",
      "An orange-leaved tree beside a brick wall in Oslo",
    ]),
  },
  {
    id: "krakow",
    city: "Kraków",
    country: "Poland",
    coordinates: [19.945, 50.0647],
    photos: album("krakow", [
      "A painted figure on a wall in Kraków",
      "Silhouettes framed in lit windows above a mural in Kraków",
      "A suspended performer beneath intersecting lines in Kraków",
    ]),
  },
  {
    id: "helsingor",
    city: "Helsingør",
    country: "Denmark",
    coordinates: [12.5926, 56.0308],
    photos: album("helsingor", [
      "A distant statue beyond a green lawn near the coast in Helsingør",
    ]),
  },
  {
    id: "niagara-falls",
    city: "Niagara Falls",
    country: "Canada",
    coordinates: [-79.0849, 43.0896],
    photos: album("niagara-falls", [
      "A sightseeing boat approaching the mist below Niagara Falls",
      "Visitors in red raincoats viewing Niagara Falls from the water",
    ]),
  },
  {
    id: "perce",
    city: "Percé",
    country: "Quebec, Canada",
    coordinates: [-64.2143, 48.5244],
    photos: album("perce", [
      "A green cliff descending to the coast near Percé, Quebec",
      "Two views of blue water and distant land near Percé, Quebec",
    ]),
  },
  {
    id: "montreal",
    city: "Montréal",
    country: "Canada",
    coordinates: [-73.5673, 45.5017],
    photos: album("montreal", [
      "Figures silhouetted at a Montréal overlook at dusk",
      "Montréal buildings glowing beneath a layered evening sky",
      "A bottle held against a bright Montréal summer sky",
      "A colourful glass interior and escalator in Montréal",
    ]),
  },
  {
    id: "kuala-lumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    coordinates: [101.6869, 3.139],
    photos: album("kuala-lumpur", [
      "A white church seen through rain in Kuala Lumpur",
      "Tropical plants blurred by heavy rain in Kuala Lumpur",
    ]),
  },
  {
    id: "busan",
    city: "Busan",
    country: "South Korea",
    coordinates: [129.0756, 35.1796],
    photos: album("busan", [
      "Small objects displayed in numbered compartments in Busan",
      "Dark rocks and blue water along the Busan coast",
      "Figurines and hanging crystals in a Busan shop window",
    ]),
  },
  {
    id: "kyoto",
    city: "Kyoto",
    country: "Japan",
    coordinates: [135.7681, 35.0116],
    photos: album("kyoto", [
      "A Kyoto street at night framed by red architectural columns",
      "Fruit and glassware arranged on a warmly lit table in Kyoto",
    ]),
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    coordinates: [139.6917, 35.6895],
    photos: album("tokyo", [
      "A dense Tokyo intersection and illuminated signs seen from above at night",
    ]),
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    coordinates: [103.8198, 1.3521],
    photos: album("singapore", [
      "A geometric spiral ceiling receding into the distance in Singapore",
    ]),
  },
  {
    id: "ho-chi-minh-city",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    coordinates: [106.6297, 10.8231],
    photos: album("ho-chi-minh-city", [
      "A silver dress displayed in a rain-darkened Ho Chi Minh City shopfront",
      "Motorcycles moving through a crowded night street in Ho Chi Minh City",
    ]),
  },
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "Hong Kong",
    coordinates: [114.1694, 22.3193],
    photos: album("hong-kong", [
      "A Hong Kong tram and street seen through out-of-focus leaves",
    ]),
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    coordinates: [-0.1276, 51.5072],
    photos: album("london", [
      "People seated in striped deckchairs in a London park",
      "Long shadows beneath mature trees in a London park",
      "A pale sun reflected on water in London",
    ]),
  },
  {
    id: "yantai",
    city: "Yantai",
    country: "China",
    coordinates: [121.4479, 37.4638],
    photos: album("yantai", [
      "People walking along a foggy waterfront path in Yantai",
    ]),
  },
  {
    id: "turkey",
    city: "City to be confirmed",
    country: "Türkiye",
    coordinates: null,
    photos: album("turkey", [
      "People walking beside water in a misty Turkish city",
      "Seagulls flying above blue water with a Turkish city skyline beyond",
    ]),
  },
  {
    id: "egypt",
    city: "City to be confirmed",
    country: "Egypt",
    coordinates: null,
    photos: album("egypt", [
      "Sunlight filtering through clear blue water in Egypt",
      "A low sun over a desert landscape in Egypt",
      "The pyramids at Giza beneath a pale sky",
    ]),
  },
  {
    id: "sri-lanka",
    city: "City to be confirmed",
    country: "Sri Lanka",
    coordinates: null,
    photos: album("sri-lanka", [
      "A silhouetted person standing on rocks beside the sea in Sri Lanka",
      "People gathered around a speaker on a rooftop in Sri Lanka",
      "People wading and resting in surf on a Sri Lankan beach",
    ]),
  },
];

export const mappedPhotographyLocations = photographyLocations.filter(
  (location) => location.coordinates !== null,
);

export const unlocatedPhotographyAlbums = photographyLocations.filter(
  (location) => location.coordinates === null,
);
