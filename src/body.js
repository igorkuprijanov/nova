import React, {useEffect} from 'react'
import Data from './data.js'
import Product from './product.js'

class Body extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            products: Data.filter((product) => product.use == 'body').map((product) => <Product key={product.id} name={product.name} dev={product.dev} composition ={product.composition} description={product.description} purpose1={product.purpose1} purpose2={product.purpose2} effect={product.effect} price={product.price} model={product.model} image={product.image} updater={props.updater}/>)
        }
    }
    
    componentDidMount(){
         document.getElementById('facenavigationbutton').style.color = 'black'
         document.getElementById('bodynavigationbutton').style.color = 'red'
         document.getElementById('formnenavigationbutton').style.color = 'black'
         document.getElementById('salenavigationbutton').style.color = 'black'
             document.getElementById('heart').style.visibility = 'visible'
         document.getElementById('cart').style.visibility = 'visible'
     }
    render(){
    return(
    <div className='productSection'>
        {this.state.products}
    </div>   
    )
    }
}
export default Body