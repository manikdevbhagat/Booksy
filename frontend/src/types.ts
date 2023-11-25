export interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  price: number;
}

export interface Author {
  id: number;
  image: string;
  name: string;
  description: string;
  books: {
    id: number;
    title: string;
  }[];
}

