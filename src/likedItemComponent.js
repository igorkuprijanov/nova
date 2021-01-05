import React from 'react'
import likedData from './likedData.js'
import inShopingCart from './inShopingCart.js'

function LikedComponent(props){
    
    function removeItem(){
        for(let i =0; i<likedData.length; i++){
            if(likedData[i].title == props.name){
                likedData.splice(i, 1)
                props.updateLiked()
            }
        }
    }
    
    function sendToCart(){
        for(let i =0; i<inShopingCart.length; i++){
            if(inShopingCart[i].title == props.name){
               alert('its already in the cart')
                return
            }
        }
        inShopingCart.push({title: props.name, image: props.image, amount: 1, price: props.price})
        
    }
    
    return(
    <div id='likedComponent'>
    <img id='likedImage' src={process.env.PUBLIC_URL + props.image}/>
    <div>
    <p id='likedTitle'>{props.name}</p>
    <div id='likedComponentBtnDiv'>
    <button onClick={removeItem} id='likedRevmoveBtn'>REMOVE</button>
    <button onClick={sendToCart} id='likedAddToCartBtn'>ADD TO CART</button>
    </div>
    </div>
    </div>
    )
}

export default LikedComponent