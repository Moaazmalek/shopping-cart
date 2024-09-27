import { MdProductionQuantityLimits } from "react-icons/md";
import { ShoppingCartContext, ShoppingCartProvider, useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
    id:number , 
    name:string , 
    imgUrl:string , 
    price:number; 
}

export const StoreItem=({id,imgUrl,name,price}:Props ) => {
    const {getItemQuantity,increseCartQuantity ,decreseCartQuantity , removeFromCart}=useShoppingCart()
    const quantity:number =getItemQuantity(id)
    
    return  <section className="bg-white px-3  py-5 rounded-lg shadow-lg ">
        <img src={imgUrl} alt={`img-${name}`}  className=" h-[200px] object-full w-[100%]  md:w-[400px]   " />
        <div className="flex flex-col  mt-2">
            <div className="flex justify-between items-center ">
                <span className='font-bold '>{name}</span>
                <span className="text-slate-700 font-bold  ">{price}$</span>
            </div>
            <div className="flex justify-center">
                {
                    quantity ===0 ? (
                        <button className="text-white  w-full  mt-5 rounded-lg py-2  bg-blue-500 min-h-6  " onClick={() => increseCartQuantity(id)}>+ Add To Cart</button>

                    ):
                    <div className="flex flex-col items-center gap-2 ">
                        
                        
                        <div className="flex items-center justify-center gap-5 ">
                        <button onClick={() => increseCartQuantity(id)} className="bg-blue-400 w-8  text-white text-3xl  flex items-center justify-center  rounded-lg pb-2  ">+</button>
                        <span className="text-lg font-bold">{quantity } 
                            <span className='text-sm font-normal '> in cart</span>
                        </span>
                        <button onClick={() => decreseCartQuantity(id)} className="bg-blue-400 w-8  text-white text-3xl  flex items-center justify-center  rounded-lg pb-2  ">-</button>
                        </div>
                        <button className= 'bg-red-500 text-white w-32 py-1 rounded-xl  ' onClick={() => removeFromCart(id)}>Remove</button>

                        </div>
                    
                }


            </div>
        </div>

    </section>
}