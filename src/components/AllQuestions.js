import React, { Component } from 'react'
import { DarkButton } from './Button';
import {HiOutlineEmojiSad} from 'react-icons/hi';

export default class AllQuestions extends Component {
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.state={
            allQuestions:[],
            singleQuestions:[],
            questionCount:[],
            showErrorPage:false,
        }
    }
    componentDidMount(){
        const questions = localStorage.getItem("questions");
        if(questions!==null && questions!==""){
            const allQuestions =questions.split(",");
            const singleQuestions =this.findSingleQuestions(allQuestions);
            const questionCount = this.getQuestionsCount(allQuestions,singleQuestions)
            this.setState({...this.state, 
                allQuestions:allQuestions,
                singleQuestions: singleQuestions,
                questionCount: questionCount,
            });
        } else {
            this.setState({...this.state, showErrorPage:true})
        }
    }
    //function to get single questions only
     findSingleQuestions(arr){
        let singleArr= [];
        for (let i = 0; i < arr.length; i++) {
            if(singleArr.includes(arr[i])===true){
                console.log("duplicate")
            } else{
                singleArr.push(arr[i])
            }
        }
        return singleArr;
    }

    //function to get number of times questions appear
    findQuestionOccurence(arr, val){
        return arr.filter( x => (x===val)).length;
    }

    //function to get question count into an array
    getQuestionsCount(arr1,arr2){
        //const generalArr= this.state.allQuestions arr1
        //const arrOfSingleQ = this.findSingleQuestions(generalArr) arr2
        const qCount = []
        for (let i = 0; i < arr2.length; i++) {
           const count = this.findQuestionOccurence(arr1, arr2[i])
            qCount.push(count)
        }
        return qCount
    }

    //function to take a user back to ask question page
    handleClick(){
        this.props.history.push("/decipher")
    }

    render() {
        const {singleQuestions, questionCount, showErrorPage} = this.state
        return (
            <div className="main h-screen pt:0 sm:pt-10">
                <div className=" cont md:w-2/3  w-full p-10 bg-white-100  h-full sm:h-5/6 mx-auto z-20 shadow-2xl rounded overflow-y-scroll">
                {showErrorPage ?    (<div className="text-center">
                        <HiOutlineEmojiSad className="text-9xl text-white-500 block m-auto mb-5"/>
                        <p className="text-center text-xl font-bold text-red-900">You have not asked any questions</p>
                        <div className="m-auto hero-btn mt-20">
                        <DarkButton text="Ask a question" handleClick={this.handleClick}/>
                    </div>
                    </div>) :
                (<>
                    <p className="text-center text-2xl font-bold text-green-900">
                    All questions
                    </p><br/>
                    {singleQuestions.map((question, id)=> (
                        //console.log(question, id)
                        <div className="py-3 capitalize bg-green-100 text-green-900 mb-5 text-center text-xl font-semibold rounded-xl" key={id}>
                            <p>{question} ?</p>
                            <sub className="text-red-900">Number of times asked: {questionCount[id]}</sub>
                        </div>
                    ))}

                    <div className="m-auto hero-btn">
                        <DarkButton text="Ask a question" handleClick={this.handleClick}/>
                    </div>
                </>)}
                
                </div>
            </div>
        )
    }
}
