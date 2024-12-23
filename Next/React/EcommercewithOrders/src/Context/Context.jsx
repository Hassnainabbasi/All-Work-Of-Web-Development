import { createContext, useState,useEffect } from "react";


export const AddToCart = createContext()

function AddToCartProvider({ children }) {

    const [cartitems, setCartItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("Cart Items")) ;
        if (items) {
          setCartItems([...items]);
        }
        setIsLoaded(false);
      }, []);
    

console.log(cartitems)

      useEffect(() => {
        if (!isLoaded) {
          localStorage.setItem("Cart Items", JSON.stringify(cartitems));
        }
      }, [cartitems]);


    function add(item) {
        const arr = [...cartitems]
        const itemsIndex = arr.findIndex((data) => data.id === item.id)
        if (itemsIndex == -1) {
            arr.push({ ...item, quantity: 1 })
        } else {
            arr[itemsIndex].quantity++
        }
        setCartItems([...arr])
        
    }

    function minus(item) {

        const arr = cartitems
        const itemsIndex = arr.findIndex((data) => data.id === item.id)
        arr[itemsIndex].quantity--

        setCartItems([...arr])
    }

    function remove(id) {
        const arr = cartitems
        const itemsIndex = arr.findIndex((data) => data.id === id)
        arr.splice(itemsIndex, 1)
        setCartItems([...arr])
    }

    return (
        <AddToCart.Provider value={{ add, cartitems, minus, remove }}>{children}</AddToCart.Provider>
    )
}

export default AddToCartProvider;