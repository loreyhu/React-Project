import React from "react"

import HeaderCSS from "../css/Header.module.css"

const Navbar = () => {
    return (
        <>
            <div className={HeaderCSS.headerContainer}>
                <div className={HeaderCSS.headerText}>
                    <h3 className={HeaderCSS.headerH3}>look for the best</h3>
                    <h1 className={HeaderCSS.headerH1}>Vegetarian Recipes</h1>
                    <p className={HeaderCSS.headerP}>Search for your favorite dishes, discover the recipes, stories and all the information you need for a healthy diet.</p>
                </div>
                <div className={HeaderCSS.blackBackground}></div>
                <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="salad"
                />
            </div>
      </> 
    )
}

export default Navbar