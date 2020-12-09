import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
import {useGLTFLoader} from 'drei'


function Background(){
    
    
    const Light = () =>{
    return(
        <ambientLight intensity={0.3}/>
    )
    }
    
    const Model1 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.10
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle1.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model2 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.03
        mesh.current.position.y -= 0.11
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle2.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model3= ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.09
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle3.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model4 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.09
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle4.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model5 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.02
        mesh.current.position.y -= 0.08
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle5.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model6 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.10
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle6.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model7 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.02
        mesh.current.position.y -= 0.09
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle7.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model8 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.08
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle8.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model9 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.03
        mesh.current.position.y -= 0.10
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle9.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model10 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.12
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle10.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model11 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.02
        mesh.current.position.y -= 0.09
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle11.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    const Model12 = ({position}) =>{
    
    const mesh = useRef(null)
    useFrame(() => {
        mesh.current.rotation.y += 0.01
        mesh.current.position.y -= 0.12
        if(mesh.current.position.y < -25){
            mesh.current.position.y = 20
        }
    })
    const gltf = useGLTFLoader('/dropperbottle12.gltf', true)
    return(
        <primitive object={gltf.scene} dispose = {null} ref={mesh} position = {position}/>
    )
}
    
    

    
    
    return(
    <div id='mainbackground'>
    <div id='mainbackgroundblurry'>
        
    </div>
    <Canvas id='canvas'>
       <Light/>
        <Suspense fallback={null}>
            <Model1 position={[0, 14, -17]}/>
            <Model2 position={[6, 10, -19]}/>
            <Model3 position={[12, 24, -20]}/>
            <Model4 position={[17, 13, -21]}/>
            <Model5 position={[-5, 9, -21]}/>
            <Model6 position={[-13, 0, -20]}/>
            <Model7 position={[-20, 7, -19]}/>
            <Model8 position={[21, -12, -20]}/>
            <Model9 position={[-25, -2, -19]}/>
            <Model10 position={[-31, -14, -18]}/>
            <Model11 position={[30, -8, -20]}/>
            <Model12 position={[26, 10, -20]}/>
        </Suspense>
    </Canvas>
    </div>
    )
}

export default Background