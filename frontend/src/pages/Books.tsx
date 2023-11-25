import { useState } from "react";
import books from "../assets/data/books";
import BookCard from "../components/Books/BookCard";

const Books = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const handleGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    let genresCopy = [...genres];
    if (genresCopy.includes(e.target.value)) {
      genresCopy.splice(genresCopy.indexOf(e.target.value), 1);
      setGenres(genresCopy);
    } else {
      setGenres([...genresCopy, e.target.value]);
    }
  };

  const getFilteredBooks = () => {
    let filteredBooks = books;
    if (searchInput) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    if (genres.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        genres.includes(book.genre.toLowerCase())
      );
    }
    return filteredBooks;
  };

  return (
    <>
      <section className="px-[50px]">
        <div className="text-center">
          <h1 className="heading">Discover Our Book Collection</h1>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-yellow-100
        rounded-md flex items-center justify-between"
          >
            <input
              type="search"
              value={searchInput}
              onChange={handleSearch}
              className="py-4 pl-4 pr-2 bg-transparent w-full 
          focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Book or Author"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4">
            <p>Filter by genre:</p>
            <label className="flex items-center space-x-3 w-[150px] sm:w-auto">
              <input
                type="checkbox"
                name="fiction"
                value="fiction"
                onChange={handleGenre}
                className=" bg-white h-4 w-4 rounded-xl border border-gray-300 checked:border-transparent focus:outline-none"
              />
              <span className="font-normal text-gray-700">Fiction</span>
            </label>
            <label className="flex items-center space-x-3 w-[150px] sm:w-auto">
              <input
                type="checkbox"
                name="non-fiction"
                value="non-fiction"
                onChange={handleGenre}
                className=" bg-white h-4 w-4 rounded-xl border border-gray-300 checked:border-transparent focus:outline-none"
              />
              <span className="font-normal text-gray-700">Non-Fiction</span>
            </label>
            <label className="flex items-center space-x-3 w-[150px] sm:w-auto">
              <input
                type="checkbox"
                name="romance"
                value="romance"
                onChange={handleGenre}
                className=" bg-white h-4 w-4 rounded-xl border border-gray-300 checked:border-transparent focus:outline-none"
              />
              <span className="font-normal text-gray-700">Romance</span>
            </label>
            <label className="flex items-center space-x-3 w-[150px] sm:w-auto">
              <input
                type="checkbox"
                name="mystery"
                value="mystery"
                onChange={handleGenre}
                className=" bg-white h-4 w-4 rounded-xl border border-gray-300 checked:border-transparent focus:outline-none"
              />
              <span className="font-normal text-gray-700">Mystery</span>
            </label>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap gap-10 justify-around px-[50px] md:px-[150px]">
          {getFilteredBooks().map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;