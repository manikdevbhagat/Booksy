import { Book } from "../../types";
import silentPatientImage from "../images/silent_patient.jpg";
import educatedImg from "../images/educated.jpg";
import crawdadsImg from "../images/crawdads.jpg";
import greatAloneImg from "../images/great_alone.jpg";
import littleFiresImg from "../images/little_fires.jpg";
import girlOnTrainImg from "../images/girl_on_train.jpg";
import nightCircusImg from "../images/night_circus.jpg";
import becomingImg from "../images/becoming.jpg";
import pridePrejudiceImg from "../images/pride_prejudice.jpg";
import davinciCodeImg from "../images/davinci_code.jpg";

const booksData: Book[] = [
  {
    id: 1,
    image: silentPatientImage,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    description:
      'In "The Silent Patient," Alicia Berenson, a celebrated painter, shoots her husband and then goes mute. Theo Faber, a criminal psychotherapist, takes a keen interest in her case and is determined to unravel the mystery behind her silence. As Theo delves deeper into Alicia\'s past, he discovers dark secrets and hidden traumas that lead to a shocking revelation. The novel is a psychological thriller that explores the complexities of the human mind and the consequences of suppressed memories.',
    price: 300,
  },
  {
    id: 2,
    image: educatedImg,
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    description:
      "Tara Westover's \"Educated\" is a powerful memoir recounting her extraordinary journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University. The narrative explores the author's quest for knowledge, the challenges of breaking free from familial expectations, and the transformative power of education. Westover's resilience and determination shine through as she navigates a path from isolation and ignorance to empowerment and enlightenment.",
    price: 495,
  },
  {
    id: 3,
    image: crawdadsImg,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Mystery",
    description:
      'Delia Owens\'s "Where the Crawdads Sing" is a mesmerizing mystery and coming-of-age novel set in the marshes of North Carolina. The story follows Kya Clark, known as the "Marsh Girl," as she grows up in isolation. When a local man is found dead, Kya becomes the prime suspect. The narrative alternates between Kya\'s coming-of-age journey and the investigation, weaving a tale of love, loss, and the beauty of the natural world. Owens masterfully blends mystery, romance, and atmospheric storytelling in this captivating novel.',
    price: 375,
  },
  {
    id: 4,
    image: greatAloneImg,
    title: "The Great Alone",
    author: "Kristin Hannah",
    genre: "Fiction",
    description:
      'Set in Alaska in the 1970s, Kristin Hannah\'s "The Great Alone" follows the Allbright family as they embark on a journey to live off the grid. The novel explores themes of survival, resilience, and the impact of the untamed wilderness on the human spirit. As they face the challenges of Alaska\'s harsh environment, the family discovers the strength within themselves and the bonds that hold them together. "The Great Alone" is a gripping and emotionally charged story of love, loss, and the power of the human spirit.',
    price: 299,
  },
  {
    id: 5,
    image: littleFiresImg,
    title: "Little Fires Everywhere",
    author: "Celeste Ng",
    genre: "Fiction",
    description:
      'Celeste Ng\'s "Little Fires Everywhere" is a compelling novel that explores the complexities of motherhood, privilege, and the secrets that shape our lives. Set in the planned community of Shaker Heights, the story revolves around two families - the Richardsons and the Warrens - whose lives become intertwined in unexpected ways. As tensions rise, long-buried secrets are revealed, leading to a devastating chain of events. Ng skillfully delves into the intricacies of human relationships and societal expectations in this thought-provoking and emotionally resonant novel.',
    price: 499,
  },
  {
    id: 6,
    image: girlOnTrainImg,
    title: "The Girl on the Train",
    author: "Paula Hawkins",
    genre: "Mystery",
    description:
      'Paula Hawkins\'s "The Girl on the Train" is a psychological thriller that follows the intertwined lives of three women - Rachel, Megan, and Anna - and a mysterious incident witnessed from a train. As the narrative unfolds, the line between truth and illusion blurs, and dark secrets are brought to light. Hawkins weaves a gripping tale of suspense, obsession, and the unreliability of memory. The novel explores the complexities of human relationships and the impact of trauma on the psyche.',
    price: 450,
  },
  {
    id: 7,
    image: nightCircusImg,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fiction",
    description:
      'Erin Morgenstern\'s "The Night Circus" is a magical fantasy novel set in a mysterious and enchanting circus that appears at night. The story revolves around Celia and Marco, two illusionists engaged in a competition that spans years and tests the boundaries of their magical abilities. As the circus travels the world, its enchanting wonders captivate both the characters and the readers. Morgenstern crafts a beautifully atmospheric and immersive narrative, inviting readers into a world where dreams come alive and magic is a reality.',
    price: 360,
  },
  {
    id: 8,
    image: becomingImg,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Non-Fiction",
    description:
      'Michelle Obama\'s "Becoming" is a deeply personal and inspiring memoir that traces her life from her childhood on the South Side of Chicago to her years in the White House as the First Lady of the United States. The narrative explores her values, experiences, and the challenges she faced as she navigated public life. With authenticity and grace, Obama shares her journey of self-discovery, resilience, and the impact of her role on the world stage. "Becoming" is a testament to the power of hope, determination, and the pursuit of one\'s own identity.',
    price: 295,
  },
  {
    id: 9,
    image: pridePrejudiceImg,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description:
      'Jane Austen\'s "Pride and Prejudice" is a classic romance novel that follows the spirited Elizabeth Bennet as she navigates the societal expectations and class dynamics of 19th-century England. The novel explores themes of love, marriage, and personal growth, with the iconic Mr. Darcy as Elizabeth\'s enigmatic suitor. Austen\'s witty social commentary and memorable characters have made "Pride and Prejudice" a timeless tale of romance and social satire.',
    price: 999,
  },
  {
    id: 10,
    image: davinciCodeImg,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    description:
      'Dan Brown\'s "The Da Vinci Code" is a fast-paced thriller that follows symbologist Robert Langdon as he tries to solve a murder mystery connected to a secret society and hidden messages in famous artworks. As Langdon unravels the cryptic clues, he discovers a conspiracy that challenges traditional beliefs about Christianity and the history of art. The novel combines suspense, code-breaking, and historical intrigue, keeping readers on the edge of their seats until the final revelation.',
    price: 475,
  },
  // Add more books as needed
];

export default booksData;