import { useParams } from "react-router-dom";
import books from "../assets/data/books";
import { useState } from "react";
import { useAppDispatch } from "../hooks/reduxhooks";
import { addToCart } from "../features/Cart/CartSlice";

const BookDetails = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  let book = books.filter((book) => book.id === Number(id))[0];

  const handleAddToCart = () => {
    const payload = { book: book, quantity: quantity };
    dispatch(addToCart(payload));
  };
  return (
    <section className="min-h-screen max-w-[1000px]">
      {!book ? (
        <h1 className="heading text-center">404 Book not found!!</h1>
      ) : (
        <div className="px-[25px] md:px-[100px]">
          <div className="flex flex-col items-center sm:flex-row gap-6 md:gap-12">
            <div>
              <img
                src={book.image}
                alt={book.title}
                className="w-auto max-w-[200px]"
              />
            </div>
            <div className="">
              <h1 className="heading">{book.title}</h1>
              <p className="font-semibold text-xl text-textColor">
                by {book.author}
              </p>
              <p className="font-semibold text-sm text-textColor mt-8">
                Genre: {book.genre}
              </p>
              <p className="text-red-600 text-2xl mt-8">₹ {book.price}</p>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className=" mt-8 cursor-pointer rounded-l bg-gray-200 py-1 px-3.5 duration-100 hover:bg-black hover:text-blue-50"
              >
                {" "}
                -{" "}
              </button>
              <span className="mx-2 text-center text-md">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="cursor-pointer rounded-r bg-gray-200 py-1 px-3 duration-100 hover:bg-black hover:text-blue-50"
              >
                {" "}
                +{" "}
              </button>
              <button onClick={handleAddToCart} className="btn mt-2">
                Add to Cart
              </button>
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