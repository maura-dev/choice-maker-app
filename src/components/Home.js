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
      <div className="flex p-10 bg-white-100 h-full flex-col sm:flex-row justify-around overflow-y-scroll">
        <div className=" w-full sm:w-3/5 pt-16">
          <img src={HeroImg} alt="hero-img"/>
        </div>
        <div className="w-full pt-16 px-0 sm:px-10 md:px-24 text-center">
          <h3 className="font-cursive text-green-500 text-4xl font-bold">Decipher</h3><br/>
          <p className="text-green-900 text-lg md:text-xl lg:text-2xl">Making choices just got easier</p>
          <p className="text-green-900 text-lg md:text-xl lg:text-2xl">Create your own  questions with possible options and let decipher decide the best option</p><br/>
          <div className="m-auto hero-btn">
            <LightButton text="Get Started" handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    )
  }
}
