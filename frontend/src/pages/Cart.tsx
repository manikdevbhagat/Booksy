import CartItem from "../components/Cart/CartItem";
import CartTotal from "../components/Cart/CartTotal";
import { useAppSelector } from "../hooks/reduxhooks";

const Cart = () => {
  const { books } = useAppSelector((state) => state.cart);
  let totalAmount = 0;
  for(const el of books){
    totalAmount = totalAmount + el.book.price*el.quantity;
  }
  return (
    <section className="min-h-screen">
      <h1 className="heading text-center">Cart Items</h1>
      {books.length === 0 ? (
        <h1 className="text-textColor mt-12 font-semibold text-2xl text-center">{`Cart is empty :-(`}</h1>
      ) : (
        <section className="px-[50px]">
          <div className="flex flex-col md:flex-row w-full justify-around">
            {/*cart items*/}
            <div>
              {books.map((book) => (
                <CartItem bookAndQuantity={book} />
              ))}
            </div>
            {/*total*/}
            <div>
              <CartTotal total={totalAmount}/>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Cart;