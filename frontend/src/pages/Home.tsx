import { Link } from "react-router-dom";
import heroImage from "../../public/hero_image.jpg";
import featuredBook from "../../public/featured.jpg";

const Home = () => {
  return (
    <div className="px-[50px]">
      {/*hero section*/}
      <section>
        <div className="flex justify-between">
          <div className="lg:w-[40%] w-full">
            <h1 className="heading">Welcome to Our Bookstore!</h1>
            <p className="text__para">
              Step into a realm where stories unfold like magic, and every page
              is a portal to new adventures. At our bookstore, we celebrate the
              art of storytelling, offering you a haven for literary
              exploration.
            </p>
            <p className="text__para">
              Whether you're a seasoned bibliophile or just beginning your
              journey into the world of books, our shelves are stocked with
              tales that span genres and captivate hearts.
            </p>
            <Link to="/books">
              <button className="btn mt-8">Explore Books</button>
            </Link>
          </div>
          <div className="w-[50%] hidden lg:block">
            <img src={heroImage} alt="Bookstore image" className="rounded-xl" />
          </div>
        </div>
      </section>
      {/*featured book section*/}
      <section>
        <div className="flex flex-col items-center">
          <h1 className="heading">Featured Book</h1>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-12 mt-12 max-w-[900px]">
            <div>
              <img
                src={featuredBook}
                alt="Featured book"
                className="max-h-[450px] max-w-[350px]"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="heading text-3xl">Ikigai</h2>
              <h3 className="heading font-semibold text-xl mt-1">
                THE JAPANESE SECRET TO A LONG AND HAPPY LIFE
              </h3>
              <h3 className="heading font-semibold text-xl mt-1">
                By Héctor García and Francesc Miralles
              </h3>
              <p className="text__para font-semibold">Book Description:</p>
              <p className="text__para">
                We all have an ikigai. It's the Japanese word for ‘a reason to
                live’ or ‘a reason to jump out of bed in the morning’. It’s the
                place where your needs, desires, ambitions, and satisfaction
                meet. A place of balance. Small wonder that finding your ikigai
                is closely linked to living longer. Finding your ikigai is
                easier than you might think. This book will help you work out
                what your own ikigai really is, and equip you to change your
                life. You have a purpose in this world: your skills, your
                interests, your desires and your history have made you the
                perfect candidate for something. All you have to do is find it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;