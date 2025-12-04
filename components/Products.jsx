'use client'

import { useState } from "react"
import Portal from "./Portal"
import { useProducts } from "@/context/ProductContext"

export default function Products(props) {
    const {planner, stickers} = props

    const [portalImage, setPortalImage] = useState(null)

    const {handleIncrementProduct,cart} = useProducts()
    console.log(cart)

    if (!stickers.length || !planner) {return null}

    return (
        <>
        {portalImage && (
            <Portal handleClosePortal={() => { setPortalImage(null) }}>
                <div className="portal-content">
                    <img className="img-display" src={`med_res/${portalImage}.jpeg`} alt={`${portalImage}-high-res`} />
                </div>
            </Portal>
        )}
        
            <div className="section-container">
                <div className="section-header">
                    <h2>Shop Our Selection</h2>
                    <p>From organisation or accessorization</p>
                </div>

                <div className="planner-container"> 
                    <div>
                        <button onClick={() => {
                            setPortalImage('planner')
                        }} className="img-button">
                            <img src="low_res/planner.jpeg" alt="high-res-planner"></img>
                        </button>
                    </div>
                    <div className="planner-info">
                        <p className="text-large planner-header">
                            Intel I9 PC
                        </p>
                        <h3><span>$</span>299</h3>
                        <p>Intel i9 pc, with RTX 5090</p>
                        <div className="purchase-btns">
                            <button onClick={() =>{
                                const plannerPriceId = planner.default_price
                                handleIncrementProduct(plannerPriceId,1, planner)
                            }}>Add to cart</button>
                        </div>
                    </div>
                </div> 

            </div>


            <div className="section-container">
                <div className="section-header">
                    <h2>Or Collect Your Favorite Tech</h2>
                    <p>Choose from our custom designed tech logos</p>
                </div>
                <div className="sticker-container">
                    {stickers.map((sticker,stickerIndex) =>{
                        const stickerName = sticker.name
                        const stickerImageUrl = sticker.name.replaceAll(' Sticker.png', '').replaceAll(' ','_')
                        return(
                            <div key={stickerIndex} className="sticker-card">
                                <button onClick={() => {
                            setPortalImage(stickerImageUrl)
                        }} className="img-button">
                                    <img src={`low_res/${stickerImageUrl}.jpeg`} alt={`${stickerImageUrl}-low_res`}/>
                                </button>
                                <div className="sticker-info">
                                    <p className="text-medium">{stickerName}</p>
                                    <p>{sticker.description}</p>
                                    <h4><span>$</span>{sticker.prices[0].unit_amount / 100}</h4>
                                    <button onClick={() =>{
                                const stickerPriceId = sticker.default_price
                                handleIncrementProduct(stickerPriceId,1,sticker)
                            }}>Add to cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}