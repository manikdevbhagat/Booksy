import { useState } from "react";
import authors from "../assets/data/authors";
import AuthorCard from "../components/Authors/AuthorCard";
import AuthorDescription from "../components/Authors/AuthorDescription";

const Authors = () => {
  const [showDescription, setShowDescription] = useState<Boolean>(false);
  const [authorId, setAuthorId] = useState<number | null>(null);

  const author = authors.filter((author) => author.id === authorId)[0];

  return (
    <div className="relative">
      {showDescription && (
        <>
          <div className="absolute w-full h-full bg-gray-200 bg-opacity-50 z-10"></div>
          <AuthorDescription
            author={author}
            setShowDescription={setShowDescription}
          />
        </>
      )}
      <section>
        <h1 className="heading text-center">Meet our talented authors</h1>
      </section>
      <section>
        <div className="flex flex-wrap gap-10 justify-around px-[50px] md:px-[150px]">
          {authors.map((author) => (
            <div
              onClick={() => {
                setAuthorId(author.id);
                setShowDescription(true);
              }}
            >
              <AuthorCard key={author.id} author={author} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Authors;