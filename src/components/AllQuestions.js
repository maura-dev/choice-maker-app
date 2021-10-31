import React, { Component } from 'react'

export default class AllQuestions extends Component {
    constructor(props){
        super(props);
        this.state={
            allQuestions:[]
        }
    }
    componentDidMount(){
        const questions = [localStorage.getItem("questions")]
        //console.log(questions)
        this.setState({...this.state, allQuestions:[questions]})
    }

    render() {
        return (
            <div className="main h-screen pt-10">
                <div className="w-2/3 p-10 bg-white-100 h-5/6 mx-auto z-20 shadow-2xl rounded overflow-y-scroll">
                    {console.log(this.state.allQuestions)}
                </div>
            </div>
        )
    }
}
