import { decrementQuantity, incrementQuantity, removeFromCart } from "../../features/Cart/CartSlice";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { Book } from "../../types";
import { MdDeleteOutline } from "react-icons/md";

const CartItem = ({
  bookAndQuantity,
}: {
  bookAndQuantity: { book: Book; quantity: number };
}) => {
  const { book, quantity } = bookAndQuantity;
  const dispatch = useAppDispatch();

  return (
    <div className="justify-between mb-6 rounded-lg bg-gray-100 p-6 shadow-md sm:flex sm:justify-start">
      <img src={book.image} alt={book.title} className=" rounded-lg w-20" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{book.title}</h2>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className=" ml-4 flex items-center border-gray-100">
            <button
              onClick={() => {
                if (quantity > 1) dispatch(decrementQuantity(book));
              }}
              className="cursor-pointer rounded-l bg-brownColor py-1 px-3.5 duration-100 hover:bg-black text-white"
            >
              {" "}
              -{" "}
            </button>
            <span className="mx-2 text-center text-md">{quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(book))}
              className="cursor-pointer rounded-r bg-brownColor py-1 px-3 duration-100 hover:bg-black text-white"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-md">₹ {book.price}</p>
            <button onClick={() => dispatch(removeFromCart(book))}>
              <MdDeleteOutline className="h-6 w-6 hover:text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;