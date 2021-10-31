import {GiThink} from "react-icons/gi"
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Header extends Component {
    
    render() {
        return (
            <div className="flex justify-between px-10 py-3 text-base text-green-900">
                <Link to="/">    
                    <div className="flex cursor-pointer"> <GiThink/>&nbsp; 
                        <p className="font-cursive">Decipher</p>
                    </div>
                </Link>
                <Link to="/all-questions">
                    <p className="hover:text-green-400 cursor-pointer">See all questions</p>
                </Link>
            </div>
        )
    }
}
