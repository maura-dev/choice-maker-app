import React, { Component } from 'react'
import { DarkButton, LightButton } from './Button'
import {MdAutorenew, MdQuestionAnswer} from "react-icons/md";
//import {BsPatchQuestion} from 'react-icons/bs';

export default class AnswerPage extends Component {
    render() {
        return (
            <>
                <p className="text-left text-lg font-semibold flex">
                    Your Question:
                </p><br/>
                {/* {console.log(this.props.answers)}
                {console.log(this.props.question)} */}
                <div>
                    <p className=" text-center capitalize text-green-900 text-2xl font-semibold">
                        {this.props.question==="" ? "You have no questions!" : this.props.question+" ?"} 
                    </p>
                </div><br/>

                <p className="text-left text-lg font-semibold">
                   Your Options:
                </p><br/>
                {this.props.questions!=="" ? (<div id="options">
                    {this.props.answers.map(answer => (
                        this.props.random===answer ?(<div className="py-3 bg-red-100 text-red-900 mb-5 text-center text-xl font-semibold rounded-xl" key={answer}>
                            <p>{answer}</p>
                        </div>) : 
                        (<div className="py-3 bg-green-100 text-green-900 mb-5 text-center text-xl font-semibold rounded-xl" key={answer}>
                        <p>{answer}</p>
                    </div>)
                    ))}

                </div>) : null}

                <div className="flex justify-around">
                    <LightButton
                        text="Ask Again"
                        icon={<MdAutorenew className="mt-1"/>}
                        handleClick={this.props.handleAskAgain}
                    />
                    <DarkButton
                        text="New question"
                        icon={<MdQuestionAnswer className="mt-1"/>}
                        handleClick={this.props.handleAskNewQuestion}
                    />
                </div>
            </>
        )
    }
}
