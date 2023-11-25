import alexImg from "../images/alex.jpg";
import taraImg from "../images/tara.png";
import deliaImg from "../images/delia.jpg";
import kristinImg from "../images/krisitn.jpg";
import celesteImg from "../images/celeste.jpg";
import paulaImg from "../images/paula.jpg";
import erinImg from "../images/erin.jpg";
import michelleImg from "../images/michelle.jpg";
import { Author } from "../../types";

const authorsData: Author[] = [
  {
    id: 1,
    image: alexImg,
    name: "Alex Michaelides",
    description:
      'Alex Michaelides is a British-Cypriot author known for his psychological thrillers. His debut novel, "The Silent Patient," gained widespread acclaim for its gripping narrative and unexpected twists. Michaelides has a background in psychotherapy, bringing a unique perspective to his exploration of the human mind in his works.',
    books: [
      {
        id: 1,
        title: "The Silent Patient",
      },
      {
        id: 11,
        title: "The Maidens",
      },
      {
        id: 12,
        title: "Untitled Thriller",
      },
    ],
  },
  {
    id: 2,
    image: taraImg,
    name: "Tara Westover",
    description:
      'Tara Westover is an American author and memoirist. Her memoir, "Educated," chronicles her remarkable journey from a survivalist family in rural Idaho to achieving academic success against all odds. Westover\'s work delves into themes of education, self-discovery, and the impact of familial expectations on individual growth.',
    books: [
      {
        id: 2,
        title: "Educated",
      },
      {
        id: 14,
        title: "Down the Rabbit Hole",
      },
      {
        id: 15,
        title: "Untitled Memoir",
      },
    ],
  },
  {
    id: 3,
    image: deliaImg,
    name: "Delia Owens",
    description:
      'Delia Owens is an American author and zoologist. Her debut novel, "Where the Crawdads Sing," seamlessly blends mystery, coming-of-age, and the beauty of the natural world. Owens draws on her background in wildlife biology to create an atmospheric and vivid portrayal of the marshes of North Carolina.',
    books: [
      {
        id: 3,
        title: "Where the Crawdads Sing",
      },
      {
        id: 16,
        title: "Cry of the Kalahari",
      },
      {
        id: 17,
        title: "The Eye of the Elephant",
      },
    ],
  },
  {
    id: 4,
    image: kristinImg,
    name: "Kristin Hannah",
    description:
      'Kristin Hannah is an American author known for her novels spanning various genres. In "The Great Alone," Hannah explores themes of survival, resilience, and the transformative power of the Alaskan wilderness. Her storytelling prowess and emotionally charged narratives have garnered her widespread readership.',
    books: [
      {
        id: 4,
        title: "The Great Alone",
      },
      {
        id: 18,
        title: "The Nightingale",
      },
      {
        id: 19,
        title: "Firefly Lane",
      },
    ],
  },
];

export default authorsData;