import React from 'react'
import inShopingCart from './inShopingCart.js'
import ShopingCartItem from './shopingCartItem.js'
import Checkout from './checkout.js'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class ShopingCart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            total: 0,
            amountOfItems: this.props.amountOfItems,
            items: inShopingCart.map((item) => <ShopingCartItem key={item.title}  title={item.title} picture={item.picture} amount={item.amount} price={item.price} image={item.image} refresh = {this.refresh.bind(this)}/>)
        }
        this.resetCart = this.resetCart.bind(this)
        this.calcTotal = this.calcTotal.bind(this)
    }
        
    calcTotal(){
    let subTotal = 0
    
    for(let i = 0; i<inShopingCart.length; i++){
        subTotal = subTotal + (parseFloat(inShopingCart[i].price) * parseInt(inShopingCart[i].amount))
    }
    this.setState(state=>({
        total: subTotal
    }))
        
    }
        
    refresh(){
        this.calcTotal()
        this.props.updateNumber()
        this.setState(state=>({
            items: inShopingCart.map((item) => <ShopingCartItem key={item.title}  title={item.title} picture={item.picture} amount={item.amount} price={item.price} image={item.image} refresh = {this.refresh.bind(this)}/>)
        }))
    }
                    
    resetCart(){
        this.calcTotal()
        inShopingCart.splice(0, inShopingCart.length)
        this.props.updater()
        this.setState(state=>({
            items: inShopingCart.map((item) => <ShopingCartItem key={item.title}  title={item.title} picture={item.picture} amount={item.amount} price={item.price} image={item.image} refresh = {this.refresh.bind(this)}/>)
        }))
        }
                                    
    
    render(){
    return(
    <div id='shopingcartmain' onLoad={this.calcTotal}>
        {this.state.items}
        <div id='pricediv'>
        <h3>TOTAL PRICE:</h3>
        <p id='priceFinal'>{this.state.total}$</p>
        </div>
        <div id='cartbuttons'>
           <button id='paybutton' onClick={()=> window.open('/checkout', '_blank')}>TO PAY</button>
            <button id='clearcartbutton' onClick={this.resetCart}>CLAER ALL</button>
        </div>
    </div>
    )
        }
}

export default ShopingCart