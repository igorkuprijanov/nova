import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IconContext } from "react-icons"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

function Footer(){
    return(
    <div id='footer'>
        <div id='footerdiv'>
            <div id='footersmall1'>
            <IconContext.Provider value={{ color: "#424141", className: "footerdescicons", size:'2em'}}>
            <div className='footerpart'>
            <FaMapMarkerAlt/>
            <p>Some Street 132, 3012 PX, Some City, Country</p>
            </div>
            <div className='footerpart'>
            <FaPhoneAlt/>
            <p>+031 440 392 372</p>
            </div>
            <div className='footerpart'>
            <GrMail/>
            <p>thismightbeamail@company.com</p>
            </div>
            </IconContext.Provider>
            </div>
            <div id='footersmall2'>
                <h3>About the company</h3>
                <p id='footerparagraph'>Through innovative biological technologies we create the best products for your beauty and wellbeeing. Our goal is to bring beauty and healt to the masses.</p>
                <div id='footericons'>
                    <IconContext.Provider value={{ color: "#424141", className: "footericon", size:'2em'}}>
                    <FaFacebookSquare/>
                    <FaTwitterSquare/>
                    <FaInstagramSquare/>
                    <FaLinkedin/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer