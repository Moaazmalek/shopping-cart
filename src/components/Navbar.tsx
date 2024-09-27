import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
export const Navbar = () => {
  const {openCart , closeCart , cartQuantitiy,isOpen } = useShoppingCart()
  const handleClick =() =>  {
    if(isOpen) {
      closeCart()
    }
    else {
      openCart()
    }

  }
  return (
    <nav className="p-4 bg-white shadow-lg  flex justify-between items-center sticky top-0 min-h-[80px] ">
      <section className="flex min-w-[40%] gap-10 items-center p-1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/store">Store</NavLink>
      </section>

     {cartQuantitiy > 0 && (
       <button className=" outline-2 outline-double outline-blue-500  p-2 rounded-full relative   hover:bg-blue-500 " onClick={() => handleClick()}>
       <i className="fa-solid fa-cart-shopping text-blue-500 p-2  hover:text-white"></i>
       <div
         style={{ position: "absolute", right: "-6px", bottom: "-2px" }}
         className="rounded-full bg-red-600 justify-center items-center flex  text-white w-6  h-6  "
       >
         {cartQuantitiy}
       </div>
     </button>
     )}
    </nav>
  );
};
