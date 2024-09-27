import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
interface CartItemProps {
    id:number, 
    quantity:number 
}

export const CartItem=({id,quantity}:CartItemProps) => {
    const {removeFromCart} =useShoppingCart();
    const item=storeItems.find(i => i.id ===id)
    if(item ==null ) return null
  
         return (
            <div className="flex justify-between item-center">
                <img src={item.imgUrl} alt="" style={{width:'125px',height:'75px', objectFit:'cover'}} />
                <div className="flex w-[100%] justify-between items-center px-3">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center ">  <span>{item.name}</span> <span>x{quantity}</span></div>

                      <span>${item.price}</span>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button>X</button>
                    </div>
                </div>


            </div>

    
    )

   
}