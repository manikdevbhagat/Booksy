import { useParams } from "react-router-dom";
import books from "../assets/data/books";

const BookDetails = () => {
  const { id } = useParams();
  let book = books.filter((book) => book.id === Number(id))[0];

  return (
    <section className="min-h-screen max-w-[1000px]">
      {!book ? (
        <h1 className="heading text-center">404 Book not found!!</h1>
      ) : (
        <div className="px-[25px] md:px-[100px]">
          <div className="flex flex-col items-center sm:flex-row gap-6 md:gap-12">
            <div>
              <img src={book.image} alt={book.title} className="w-auto max-w-[200px]" />
            </div>
            <div className="">
              <h1 className="heading" >{book.title}</h1>
              <p className="font-semibold text-xl text-textColor">by {book.author}</p>
              <p className="font-semibold text-sm text-textColor mt-8">Genre: {book.genre}</p>
              <p className='text-red-600 text-2xl mt-8'>₹ {book.price}</p>
              <button className="btn mt-8">Add to Cart</button>
            </div>
          </div>
          <div className="mt-8">
              <h2 className="text-textColor font-semibold text-xl">
              Description:
            </h2>
            <p className="text__para">{book.description}</p>
              </div>
        </div>
      )}
    </section>
  );
};

export default BookDetails;