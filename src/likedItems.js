import React from 'react'
import likedData from './likedData.js'
import LikedComponent from './likedItemComponent.js'

class Liked extends React.Component{
    constructor(){
        super()
        this.state = {
            likedItems: likedData.map((item) => <LikedComponent key={item.title} image={item.image} price={item.price} name={item.title} updateLiked ={this.updateLiked.bind(this)}/>)
        }
    }
                                      
    updateLiked(){
        this.setState(state=>({
            likedItems: likedData.map((item) => <LikedComponent key={item.title} price={item.price}  name={item.title} image={item.image} updateLiked = {this.updateLiked.bind(this)}/>)
        }))
    }
    
    render(){
        return(
        <div id='likedmain'>
        {this.state.likedItems}
        </div>
        )
    }
}

export default Liked