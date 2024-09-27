import { createContext, createRef, useContext, useState } from "react";
import { TbCurrencyLitecoin } from "react-icons/tb";
import {ShoppingCart} from '../components/ShoppingCart'
type ShoppingCartContext = {
    openCart:() => void 
    closeCart:() => void 
    cartQuantitiy:number 
    cartItems:CartItem[]
  getItemQuantity: (id: number) => number;
  increseCartQuantity: (id: number) => void;
  decreseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  isOpen:boolean

};

type CartItem = {
    id:number 
    quantity:number 
}
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
interface ShoppingCartProviderProps {
  children: React.ReactNode;
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems,setCartItems]=useState<CartItem[]>([])
    const [isOpen,setIsOpen]=useState(false)
    function openCart() {
        setIsOpen(open => true)
    }
    function closeCart() {
        setIsOpen(open => false)
    }
    const cartQuantitiy=cartItems.reduce((quantity,item) => item.quantity + quantity, 0)
    function getItemQuantity(id:number ) {
        return cartItems.find(item => item.id ===id )?.quantity || 0 
    }

   function increseCartQuantity(id:number) {
    setCartItems(currItems => {
        if(currItems.find(item => item.id === id ) ==null) {
            return  [...currItems,{id,quantity:1} ]
        } else {
            return currItems.map(item => {
                if(item.id == id) {
                    return {...item,quantity:item.quantity + 1 }
                }
                else {
                    return item
                }
            })
        }
    })
   }
   function decreseCartQuantity(id:number ) {
    setCartItems(currItems => {
        if(currItems.find(item => item.id ==id )?.quantity === 1 ) {
            return currItems.filter(item => item.id !==id )
        }
        else {
            return currItems.map(item => {
                if(item.id === id ) {
                    return {...item,quantity:item.quantity - 1}
                }
                else {
                    return item
                }
            })
        }

    })
   }
   function removeFromCart(id:number ) {
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id ) 
    })
   }
   
   
  return (
    <ShoppingCartContext.Provider value={{getItemQuantity , increseCartQuantity,decreseCartQuantity ,removeFromCart,cartItems,cartQuantitiy,openCart , closeCart,isOpen}}>
      {children}
      <ShoppingCart  />
    </ShoppingCartContext.Provider>
  );
}
