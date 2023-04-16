import { useState, useEffect } from "react";
import useCart from "store/store";
import { Link } from "react-router-dom";
import basket from "assets/images/svg/basket.png";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {};

const Cart = (props: Props) => {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const clearCart = useCart((state) => state.clearCart);

  const removeFromCart = useCart((state) => state.removeFromCart);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();

  const handleClearCart = () => {
    clearCart();
  };

  useEffect(() => {
    setCart(cart);
    console.log(cart, "cart items");
    setTotal(total);
  }, [cart]);

  return (
    <section className="text-white dark:text-black">
      <div className="flex justify-between items-center">
        <p className="title-text">My Shopping Cart</p>
        <button className="primary-button" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {mycart.length > 0 ? (
        <div className="flex flex-col w-full mx-auto gap-y-1 mt-6">
          <div className="flex flex-col gap-3">
            {mycart &&
              mycart.map((item: any, key: any) => {
                return (
                  <div
                    className="text-white user-card bg-[#562EBB] dark:bg-[#00000005] dark:text-black p-3"
                    key={key}
                  >
                    <div className="flex flex-col lg:flex-row gap-3 relative">
                      <div className="basis-1/4">
                        <img
                          className="mx-auto w-full h-[180px] object-cover rounded-md"
                          alt="..."
                          src={item.thumbnail}
                        />
                      </div>
                      <div className="basis-2/4 flex flex-col gap-1">
                        <span className="uppercase font-bold">
                          {item.title}
                        </span>
                        <span className="text-sm text-gray-400">
                          {item.description}
                        </span>
                        <p className="text-xl text-gray-400 flex items-center">
                          <span className="text-success font-bold mr-2">
                            ₹{item.price}
                          </span>
                          <span className="text-gray-400 text-xs">
                            ({item.discountPercentage}% off)
                          </span>
                        </p>
                        <span className="text-sm text-gray-500">
                          Quantity - {item.quantity}
                        </span>
                        <span className="text-sm text-gray-500">
                          Amount - ₹{item.quantity * item.price}
                        </span>
                      </div>
                      <div className="absolute bottom-0 right-0">
                        <button
                          className="w-10 h-10 rounded-md hover:bg-red-500 hover:text-white text-white dark:text-black flex justify-center items-center"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                        >
                          <MdOutlineDelete className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="flex flex-row w-full justify-between items-center mt-4">
              <span className="uppercase font-bold">Total: ₹{mytotal}</span>
              <button
                className="primary-button"
                onClick={() => {
                  toast.success("Order Placed Successfully");
                  clearCart();
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center">
          <img src={basket} alt="basket" className="w-[200px] h-auto" />
          <p className="text-center">No items in cart</p>
          <Link to="/products">
            <button className="primary-button">Continue Shopping</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
