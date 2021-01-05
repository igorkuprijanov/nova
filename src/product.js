import React, {useEffect, Suspense, useState} from 'react'
import Select from 'react-dropdown-select'
import {AiOutlineHeart} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {Canvas} from 'react-three-fiber';
import {OrbitControls, useGLTFLoader} from 'drei'
import inShopingCart from './inShopingCart.js'
import ShopingCart from './shopingCart.js'
import likedData from './likedData.js'

function Product(props){
    
    const[amount, setAmount] = useState(1)
    
    function addAmount(){
        setAmount(amount+1)
    }
    
    
    function subtracktAmount(){
        if(amount >= 2){
        setAmount(amount - 1)
        }
    }
    
    function addToLiked(){
        console.log('add to liked')
        for(let i =0; i<likedData.length; i++){
            if(likedData[i].title == props.name){
                console.log('already liked')
                return
            }
        }
        likedData.push({title: props.name, image: props.image, price: props.price})
        pleaseUpdate()
    }
    
    function addToCart(){
        for(let i = 0; i<inShopingCart.length; i++){
            if(inShopingCart[i].title == props.name){
                inShopingCart[i].amount = parseInt(inShopingCart[i].amount) + amount
                pleaseUpdate()
                return
               }
        }
        inShopingCart.push({title: props.name, image: props.image, amount: amount, price: props.price})
        pleaseUpdate()
     }
    
    function pleaseUpdate(){
        props.updater()
    }
    
     const options = [
         {label: '30ml', value: '30'},
         {label: '50ml', value: '50'},
         {label: '75ml', value: '75'}
     ]
     
     const Light = () =>{
    return(
    <ambientLight intensity={0.3}/>
        )
     }
     
     const Model = ({position}) =>{
        const gltf = useGLTFLoader(props.model, true)
        return(
            <primitive object = {gltf.scene} dispose={null} position ={position} rotation={[0, 7.5, 0]}/>
            )
        }
    
    
    return(
    <div id='product'>
        <div id='productright'>
           <div id='rightproducts'>
            <div id='productmenu'>
                <h2>Description</h2>
                <h2>Composition</h2>
                <h2>Usage</h2>
            </div>
            <div id='desctexts'>
                <div>
                    <h3 className='descitem'>Description</h3>
                    <p className='descpar'>{props.description}</p>
                </div>
                <div>
                    <h3 className='descitem'>Purpose</h3>
                    <p className='descpar'>{props.purpose1}</p>
                    <p className='descpar'>{props.purpose2}</p>
                </div>
                <div>
                    <h3 className='descitem'>Biocosmetic effect</h3>
                    <p className='descpar'> {props.effect}</p>
                </div>
            </div>
            </div>
        </div>
        <div id='productcenter'>
            <Canvas>
              <Light/>
               <Suspense fallback={null}>
                   <Model position={[0, -2, 0]}/>
               </Suspense>
                <OrbitControls/>
            </Canvas>
        </div>
        <div id='productleft'>
           <div id='lefttext'>
            <div>
                <h1 id='productname'>{props.name}</h1>
                <h2 id='productdeveloper'>{props.dev}</h2>
                <h3 id='productcompose'>{props.composition}</h3>
            </div>
            <div id='amountselect'>
                <button onClick={subtracktAmount}>-</button>
                <h2>{amount}</h2>
                <button onClick={addAmount}>+</button>
            </div>
            <div>
                <Select style={{width: "40%", height: '4em'}} options={options} values={[]} onChange={console.log('change')}/>
            </div>
            <div>
                <h2>{props.price}</h2>
            </div>
            <div id='productbuttons'>
                <button id='addtocardbtn' onClick={addToCart}>ADD TO CART</button>
                <button id='heartbutton' onClick={addToLiked}><IconContext.Provider value={{ color: "darkgray", className: "icon", size: '2em' }}><AiOutlineHeart/></IconContext.Provider></button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Product