import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Navbar extends Component{

render() {
    return (
        <div className="container-fluid webPage">

            <div className="navbar row">
            <div className=" col-md-4 left-col">
                <h2 className="logo">Studio.</h2>
                </div>
                <div className=" col-md-5 main-col">
                <ul>
                    <Link exact to="/" >
                    <li>Home</li> 
                    </Link>
                    <Link exact to="/about">
                        <li>About</li>
                    </Link>
                    <Link exact to="/blog">
                        <li>Blog</li>
                    </Link>
                   
                </ul>
                </div>
                <div className=" col-md-3 right-col">
                <Link exact to="/contact">
                        <span className="border">Contact</span>
                    </Link>
                </div>
             </div>
        </div>
    )
}


}
export default Navbar;