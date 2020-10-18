import React from 'react'
import "./Footer.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Footer() {
    return (
        <div className="footer">
            <p> &#169; 2020 Airbnb clone! No rights reserved</p>
            <p>Privacy &#183; Terms &#183; Sitemap &#183; Company Details </p>
            <p>Made with <FavoriteBorderIcon /> Ankush Chauhan</p>
        </div>
    )
}

export default Footer
