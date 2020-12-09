import React from 'react'
import inShopingCart from './inShopingCart.js'

function ShopingCartItem(props){
    
    
    function removeFromCart(){
        for(let i =0; i<inShopingCart.length; i++){
            if(inShopingCart[i].title == props.title){
                inShopingCart.splice(i, 1)
               props.refresh()
            }
        }
    }
    
    
    return(
    <div id='shopingcartall'>
    <div id='shopingcartitem'>
    <img id='sciPicture' src={process.env.PUBLIC_URL + props.image}/>
    <div id='sciSub'>
    <p id='sciTitle'>{props.title}</p>
    <p id='sciAmount'>{props.amount}</p>
    <p id='sciPrice'>{props.price}</p>
    </div>
    </div>
    <button id='sciButton' onClick={removeFromCart}>Remove from cart</button>
    </div>
    )
}

export default ShopingCartItem