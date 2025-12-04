'use client'

import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

export default function ProductsProvider(props){
    const {children} = props

    const [cart, setCart] = useState({})

    function handleIncrementProduct(price_id, num, data, noIncrement = false){
        const newCart = {
            ...cart
        }
        if (price_id in cart){
            //turns out the product is already in the cart so take the prevoius
            //value and increment/decrement
            //newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num: newCart[price_id]?.quantity + num
            }
        } else {
            //product not yet in cart so add it
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }
        if(parseInt(newCart[price_id].quantity) <= 0){
            //the user has set the number to 0, so we need to remove the product
            //from the cart
            delete newCart[price_id]
        }

        //ovverite the cart state with new cart object
        setCart(newCart)
    }

    const value = {
        cart,
        handleIncrementProduct,
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)