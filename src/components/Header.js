import {GiThink} from "react-icons/gi"
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Header extends Component {
    
    render() {
        return (
            <div className="header flex justify-between px-10 py-3 text-base text-green-500">
                <Link to="/">    
                    <div className="flex cursor-pointer"> <GiThink/>&nbsp; 
                        <p className="font-cursive">Decipher</p>
                    </div>
                </Link>
                <Link to="/all-questions">
                    <p className="hover:text-red-500 cursor-pointer">See all questions</p>
                </Link>
            </div>
        )
    }
}
