import React from 'react'
import inShopingCart from './inShopingCart.js'

class Checkout extends React.Component{
    constructor(){
        super()
        this.state = {
            total: 0,
            items: inShopingCart.map((item) => <li key={item.title}>{item.title} amount of {item.amount}<p>{parseFloat(item.price) * item.amount}0$</p></li>),
            
                                     
        }
    }
                                     
                                     
    componentDidMount(){
        let subTotal = 0
    
    for(let i = 0; i<inShopingCart.length; i++){
        subTotal = subTotal + (parseFloat(inShopingCart[i].price) * parseInt(inShopingCart[i].amount))
        console.log(subTotal)
    }
    console.log(subTotal)
    this.setState(state=>({
        total: subTotal
    }))
        }
                                     
    render(){
        return(
        <div id='checkout'>
         <div id='checkoutfirst'>
          <div id='checkoutform'>
             <div id='checkoutleftform'>
               <div className='checkoutpart'>
                <label className='checkoutlabel'>Name:</label>
                 <input className='checkoutinput' type='text'></input>
                 </div>
                 <div className='checkoutpart'>
                 <label className='checkoutlabel'>Address:</label>
                 <input className='checkoutinput' type='text'></input>
                 </div>
                 <div className='checkoutpart'>
                 <label className='checkoutlabel'>PO Box:</label>
                 <input className='checkoutinput' type='text'></input>
                 </div>
                 <div className='checkoutpart'>
                     <label className='checkoutlabel'>E-mail:</label>
                     <input className='checkoutinput' type='email'></input>
                 </div>
                 </div>
                 <div id='cardinfo'>
                    <div id='cardnumdiv'>
                     <label id='cardlabel'>Card Number:</label>
                     <input id='cardinput'></input>
                     </div>
                     <div id='cardsmalldiv'>
                        <div className='cardsmalldivpart'>
                         <label className='cardsmalllabel'>Exp Data:</label>
                         <input className='cardsmallinput'></input>
                         </div>
                         <div  className='cardsmalldivpart'>
                         <label className='cardsmalllabel'>CVS Code:</label>
                         <input className='cardsmallinput'></input>
                         </div>
                     </div>
                 </div>
             
          </div>
          <div id='checkoutrightform'>
              <div id='checkoutitemscheck'>
                 <ul>
                  {this.state.items}
                  </ul>
              </div>
              <div id='checkoutboxes'>
              <div>
              <input type='checkbox'></input>
              <label className='checkboxlabel'>I have reviewed my order.</label>
              </div>
              <div>
              <input type='checkbox'></input>
              <label className='checkboxlabel'>I have read the <a>terms and conditions</a>.</label>
              </div>
              <div>
              <input type='checkbox'></input>
              <label className='checkboxlabel'>I would like to subscribe to the newsletter.</label>
              </div>
              </div>
              <div id='proceedbutton'>
                  <button id='proceed'>PROCEED</button>
                  <p id='checkouttotal'>{this.state.total}0$</p>
              </div>
          </div>
          </div>
        </div>
        )
    }
}

export default Checkout