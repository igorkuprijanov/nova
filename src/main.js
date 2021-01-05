import React, {useEffect} from 'react'
import Footer from './footer.js'
import Background from './background.js'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'


function Main(props) {
    
     useEffect(()=>{
         document.getElementById('facenavigationbutton').style.color = 'black'
         document.getElementById('bodynavigationbutton').style.color = 'black'
         document.getElementById('formnenavigationbutton').style.color = 'black'
         document.getElementById('salenavigationbutton').style.color = 'black'
         document.getElementById('heart').style.visibility = 'hidden'
         document.getElementById('cart').style.visibility = 'hidden'
        
     })
    
    return(
        
    <div id='mainmain'>
      <Background id='mainbackground'/>
       <div id='main1'>
       <div id='main1small'>
        <h1>Etiam a risus mattis, vulputate magna vel, ullamcorper mi</h1>
        <h2>Mauris efficitur risus quis ipsum ullamcorper</h2>
        <img id='img1' alt='first image' src={image1}/>
        </div>
        </div>
        <div id='main2'>
           <div id='main2small'>
            <h3>Mauris eget massa ante. Nam dignissim ipsum mauris</h3>
            <p>Curabitur consequat urna sed facilisis congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris velit magna, finibus quis tellus eget, semper gravida lorem.</p>
            </div>
        </div>
        <div id='main3'>
           <div id='main3small'>
            <h3>Etiam ex nisi, placerat sit amet mollis</h3>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris velit magna, finibus quis tellus eget, semper gravida lorem.</p>
            <p>Suspendisse tortor nunc, hendrerit eu rhoncus et, tristique id orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>ulla accumsan sollicitudin magna. Mauris eget massa ante. Nam dignissim ipsum mauris, sed consequat elit consequat at. Nulla suscipit diam ut.</p>
            <img src={image2} alt='second image' id='img2'/>
            </div>
        </div>
        <div id='main4'>
           <div id='main4small'>
            <h3>Curabitur consequat urna sed facilisis congue</h3>
            <p>Pellentesque consectetur metus egestas odio convallis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat bibendum nulla</p>
            <img src={image3} alt='third image' id='img3'/>
            </div>
        </div>
        <Footer/>
    </div>   
    )
}
export default Main