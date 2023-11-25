import { Author } from "../../types";
import { AiOutlineClose } from "react-icons/ai";

const AuthorDescription = ({
  author,
  setShowDescription,
}: {
  author: Author;
  setShowDescription: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  return (
    <div
      className={`z-10 absolute min-w-[300px] p-4 text-center transform -translate-x-1/2 -translate-y-1/2 
    border top-1/2 left-1/2 bg-white  border-solid border-gray-400 shadow-2xl
    rounded-xl`}
    >
      <div className="flex justify-end">
        <button onClick={() => setShowDescription(false)}>
          <AiOutlineClose className="w-6 h-6 text-red-600"/>
        </button>
      </div>
      <div>
        <p className="text__para">{author.description}</p>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-xl text-textColor">Books</h2>
        <ul>
          {author.books.map((book) => (
            <li key={book.id} className="text__para">
              {book.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorDescription;