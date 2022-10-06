import React from 'react'
function Footer(){
    const currentYear=new Date().getFullYear();
    return(
        <footer>
            <p>&copy;Copy Rights @{currentYear}</p>
        </footer>
    )

}
export default Footer;