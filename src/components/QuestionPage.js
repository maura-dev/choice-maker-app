import React, { Component } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { MdQuestionAnswer } from 'react-icons/md'
import { DarkButton, LightButton } from './Button'
import Input from './Input'

export default class QuestionPage extends Component {
    render() {
        return (
            <>
                <p className="text-left text-lg font-semibold flex">
                     Question:
                </p>
                <Input
                    title="question"
                    placeholder="Enter your question"
                />

                <p className="text-left text-lg font-semibold">
                    Options:
                </p>
                <div id="options">
                    <Input
                        title="choice1"
                        placeholder="Choice 1"
                    />
                    {/* <Input
                        title="choice2"
                        placeholder="Choice 2"
                    />
                    <Input
                        title="choice3"
                        placeholder="Choice 3"
                    /> */}

                </div>

                <div className="flex justify-around">
                    <LightButton
                        text="Add Option"
                        icon={<AiOutlineAppstoreAdd className="mt-1"/>}
                        handleClick={this.props.handleAddOption}
                    />
                    <DarkButton
                        text="View Answer"
                        icon={<MdQuestionAnswer className="mt-1"/>}
                        handleClick={this.props.handleViewAnswer}
                        type="submit"
                    />
                </div>
            </>
        )
    }
}
