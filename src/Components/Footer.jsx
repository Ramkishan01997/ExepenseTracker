import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
        <div className="socialMedia">
       
        <a href="https://www.instagram.com/ramkishan1997/"> <InstagramIcon style={{"color":"#fc036f"}} /></a>
       <a href="https://www.facebook.com/ramkishan.suryawanshi.5"> <FacebookIcon style={{"color":"#3341ab"}}/></a>
       <a href="https://www.linkedin.com/in/ramkishan-suryawanshi/" ><LinkedInIcon style={{"color":"#283abf"}} /></a>
       <a href="https://github.com/Ramkishan01997/"> <GitHubIcon style={{"color":"#dde324"}} /></a>
        </div>
            <p>&copy; 2022 Ram IT Services</p>
        </div>
    )
}

export default Footer