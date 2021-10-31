import React, { Component } from 'react'
import HeroImg from "./undraw_my_answer_re_k4dv.svg";
import {LightButton} from "./Button";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push("/decipher")
  }

  render() {
    return (
      <div className="p-10 bg-white-100 h-full flex justify-around">
        <div className="w-1/3">
          <img src={HeroImg} alt="hero-img"/>
        </div>
        <div className="w-2/3 pt-16 px-24 text-center">
          <h3 className="font-cursive text-green-900 text-4xl font-bold">Decipher</h3><br/>
          <p className="text-green-900 text-2xl">Making choices just got easier</p>
          <p className="text-green-900 text-2xl">Create your own  questions with possible options and let decipher decide the best option</p><br/>
          <div className="m-auto hero-btn">
            <LightButton text="Get Started" handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    )
  }
}
