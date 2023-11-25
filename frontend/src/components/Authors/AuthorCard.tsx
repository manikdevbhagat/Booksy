import { Author } from "../../types";

const AuthorCard = ({ author }: { author: Author }) => {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 rounded-xl shadow-lg items-center">
      <img
        src={author.image}
        alt={author.name}
        className="w-[220px] h-[220px] rounded-t-xl object-cover"
      />
      <p className="font-semibold text-lg max-w-[220px] h-[35px] text-center leading-4 overflow-hidden">
        {author.name}
      </p>
    </div>
  );
};

export default AuthorCard;