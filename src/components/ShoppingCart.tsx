import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"

export function ShoppingCart() {
    const {isOpen,cartItems}=useShoppingCart()
    
   
    return (<section className="transition duration-1000   bg-slate-200    " style={{
        minHeight:'100vh',
        position:'absolute',
        minWidth:'50%',
        top:'80px',
        display:isOpen?'block':'none' ,
        right:'0'
        }}>
        <h1 className="text-3xl text-center mt-3">Cart</h1>
        <article className="grid grid-cols-1 gap-2 place-content-center  px-5 ">
            {cartItems.map(item => <CartItem key={item.id} {...item}/>)}

        </article>
    </section>


    )
}