import './App.css';
import React  from 'react'
import Face from './face.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Main from './main.js'
import Body from './body.js'
import Men from './men.js'
import Sale from './sale.js'
import {AiOutlineHeart} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {BiShoppingBag} from 'react-icons/bi'
import logo from './logo.svg'
import ShopingCart from './shopingCart.js'
import inShopingCart from './inShopingCart.js'
import Checkout from './checkout.js'
import Liked from './likedItems.js'


class App extends React.Component{
    constructor(){
        super()
        this.state ={
            cartAmount: inShopingCart.length,
            shopingCart: false,
            liked: false,
        }
        this.cartClick = this.cartClick.bind(this)
        this.makeItUpdate = this.makeItUpdate.bind(this)
        this.updateNumber = this.updateNumber.bind(this)
        this.heartClick = this.heartClick.bind(this)
    }

    cartClick(){
            this.setState(state => ({
            shopingCart: !state.shopingCart,
            liked: false,
        }))
    }
    
    updateNumber(){
        this.setState(state =>({cartAmount: inShopingCart.length}))
    }
    
    heartClick(){
        this.setState(state => ({
            liked: !state.liked,
            shopingCart: false
        }))
    }
    
    
    makeItUpdate(){
        this.setState(state => ({cartAmount: inShopingCart.length, shopingCart: false, liked: false,}))
    }
    

render(){
  return (
    <div className="App">
     <div>
         <Router>
      <div>
        <nav id='navigator'>
         <div id='list'>
          <ul id='navlist'>
            <li>
              <Link to="/"><img alt='Logo' src={logo} id='logo'/></Link>
            </li>
            <li>
              <Link id='facenavigationbutton' className='linkitem' to="/face">FACE</Link>
            </li>
            <li>
              <Link className='linkitem'to="/body" id='bodynavigationbutton'>BODY</Link>
            </li>
            <li>
              <Link  className='linkitem' to="/men" id='formnenavigationbutton'>FOR MEN</Link>
            </li>
              <li>
              <Link  className='linkitem' to="/sale" id='salenavigationbutton'>SALE</Link>
            </li>
          </ul>
          </div>
          
          <div id='icons'>
             <IconContext.Provider value={{ color: "darkgray", className: "react-icons", size: '2.6em' }}>
                     <div className= "react-icons" id='heart'>
                      <AiOutlineHeart onClick={this.heartClick} />
                      </div>
                  <div className= "react-icons" id='cart'>
                  <BiShoppingBag onClick={this.cartClick}/>
                  <div id='cartamount'>{this.state.cartAmount}</div>
                  </div>
             </IconContext.Provider>
          </div>
        </nav>
        {this.state.liked ? <Liked/> : null}
        {this.state.shopingCart ? <ShopingCart amountOfItems={this.state.cartAmount} updater={this.makeItUpdate} updateNumber={this.updateNumber}/> : null}
        <Switch>
         <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/face">
            <Face updater={this.makeItUpdate}/>
          </Route>
          <Route path="/body">
            <Body updater={this.makeItUpdate} />
          </Route>
          <Route path="/men">
            <Men updater={this.makeItUpdate}/>
          </Route>
            <Route path="/sale">
            <Sale updater={this.makeItUpdate} />
          </Route>
           <Route path="/">
            <Main updater={this.makeItUpdate}/>
          </Route>
          
        </Switch>
      </div>
    </Router>
     </div>
    </div>
  );
}
}

export default App;





{/*
CONTRIBUTORS:
ICONS:

<div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


Photo by Karolina Grabowska from Pexels

Photo by Mareefe from Pexels

Photo by Chokniti Khongchum from Pexels

*/}