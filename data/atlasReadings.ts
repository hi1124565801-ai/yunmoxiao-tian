// Stop coordinates and ordering follow the featured routes in 小说城市漫游图.
// Map positions are percentages in each local north-up street map.
export const atlasReadings = [
  {
    id: "chengnan", work: "城南旧事", author: "Lin Haiyin", city: "Beijing",
    question: "How do you map a street that a child remembers as a spoon?",
    walk: [1, 2, 0],
    stops: [
      { sceneId: "scene-cn-new-lianzi", illustration: "/images/projects/atlas/cn-new-lianzi.webp", name: "Xinlianzi Hutong", local: "新帘子胡同", scene: "“妈妈说的，新帘子胡同像一把汤匙。”", sceneLang: "zh", reading: "Yingzi borrows her mother’s image. The traders enter by the handle of the spoon. A child could find her way home with that description.", ground: "Only the eastern section survives. The atlas places this pin near Hepingmen, where the old lane used to run.", precision: "Approximate street", x: 43.26, y: 32.41 },
      { sceneId: "scene-cn-hufangqiao", illustration: "/images/projects/atlas/cn-hufangqiao.webp", name: "Hufangqiao", local: "虎坊桥大街", scene: "“到了黄昏，虎坊桥大街另是一种样子啦。”", sceneLang: "zh", reading: "Come back at dusk. People sit outside, a record plays, a carriage kicks up dust. Yingzi can tell the time by what the street sounds like.", ground: "Today’s Hufangqiao subway station anchors the street scene. The sound of that evening belongs to the book.", precision: "Street area", x: 43.90, y: 54.61 },
      { sceneId: "scene-cn-tianqiao", illustration: "/images/projects/atlas/cn-tianqiao.webp", name: "Tianqiao", local: "天桥", scene: "“我现在上天桥唱戏去了，围一圈子人听。”", sceneLang: "zh", reading: "Niu’er describes the circle her listeners make. When the singing stops she goes round with a basket. For a moment the shape of a crowd tells us how she earns a living.", ground: "The pin marks the Tianqiao district. The listeners drew their circle wherever a performance happened.", precision: "District", x: 56.64, y: 67.52 },
    ],
  },
  {
    id: "dalloway", work: "Mrs. Dalloway", author: "Virginia Woolf", city: "London",
    question: "How far can a clock reach in a novel that lasts one day?",
    walk: [0, 2, 1],
    stops: [
      { sceneId: "scene-md-big-ben", illustration: null, name: "Big Ben", local: "Westminster", scene: "“The leaden circles dissolved in the air.”", sceneLang: "en", reading: "The clock strikes. People on different streets can hear the same note without ever meeting. Woolf gives their separate mornings a common measure.", ground: "The tower has an exact address in Westminster. Its sound travels well beyond the pin.", precision: "Landmark", x: 70.57, y: 80.11 },
      { sceneId: "scene-md-bond-street", illustration: null, name: "Bond Street", local: "Mayfair", scene: "“Bond Street fascinated her.”", sceneLang: "en", reading: "Clarissa looks at what the shops have put on display. Somewhere between one window and the next, she starts to see herself through other people’s eyes.", ground: "This marker stands for a stretch of shopping street. There are several windows to pass before the scene is over.", precision: "Street area", x: 29.57, y: 20.07 },
      { sceneId: "scene-md-hatchards", illustration: null, name: "Hatchards", local: "Piccadilly", scene: "“she looked into Hatchards’ shop window.”", sceneLang: "en", reading: "A line of Shakespeare catches Clarissa’s eye. A reader following her across London has to stop walking to read with her.", ground: "Hatchards is a named bookshop on Piccadilly. On the atlas walk it falls between Westminster and Bond Street.", precision: "Bookshop", x: 46.03, y: 43.75 },
    ],
  },
  {
    id: "lover", work: "The Lover", author: "Marguerite Duras", city: "Cholon",
    question: "Can a whole neighbourhood be certain and a single room impossible to locate?",
    walk: [0, 2, 1],
    stops: [
      { sceneId: "scene-cholon", illustration: null, name: "Cholon", local: "Chợ Lớn · 堤岸", scene: "She arrives in Cholon for the first time.", sceneLang: "en", reading: "The district has a name. Inside it, the lovers can disappear into the noise of a city that goes on doing business around them.", ground: "The atlas anchors the district in present-day Ho Chi Minh City. Zooming in on the neighbourhood opens several less certain locations.", precision: "District", x: 39.77, y: 26.25 },
      { sceneId: "scene-cholon-apartment-room", illustration: null, name: "The shuttered room", local: "堤岸公寓房间", scene: "The shutters stay closed. The street still gets in.", sceneLang: "en", reading: "Light filters into the room and the sounds outside carry through the shutters. Duras gives the reader enough to imagine being there.", ground: "The novel gives no street address. The atlas uses a point in central Cholon to hold the scene.", precision: "Unlocated interior", x: 79.09, y: 52.34 },
      { sceneId: "scene-cholon-chinese-restaurant", illustration: null, name: "The restaurant", local: "堤岸中国饭店", scene: "In a noisy dining room, the silence between two people grows audible.", sceneLang: "en", reading: "The restaurant is full of people making themselves heard. Reading the scene, what catches the ear is how little the two diners say.", ground: "The restaurant is unnamed. Its pin represents the commercial district. The building itself remains unidentified.", precision: "Approximate area", x: 20.83, y: 73.69 },
    ],
  },
] as const;
