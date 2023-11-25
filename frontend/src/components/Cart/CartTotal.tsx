
const CartTotal = ({total}:{total:number}) => {
  return (
    <div className="mt-6 h-auto w-full rounded-lg border bg-gray-100 p-6 shadow-md md:mt-0 md:w-full">
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="ml-4">
          <p className="mb-1 text-lg font-bold">₹ {total}</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};

export default CartTotal;