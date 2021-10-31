import React, { Component } from 'react'
import QuestionPage from './QuestionPage';
import AnswerPage from './AnswerPage';

export default class Decipher extends Component {
    constructor(props){
        super(props);
        this.state={
            optionCount:2,
            showQuestionPage:true,
            choices:[],
            questions:[],
            randomAnswer:null,
        }
      }

      componentDidMount(){
        
      }

    handleAddOption =() => {
        this.setState({...this.state,
            optionCount: this.state.optionCount + 1
        })

        this.handleChange = (e) =>{
            this.setState({...this.state,
                [e.target.name] :[e.target.value]})
            
        }
    
        const cont= `<div class="mb-6 answer-class">
            <input class="block border-2 border-white-300 placeholder-white-400 rounded h-12 w-2/3 px-5 focus:border-green-900 m-auto" id=choice${this.state.optionCount} name=choice${this.state.optionCount} type="text" placeholder=Choice&nbsp;${this.state.optionCount} />
            </div>`
        
        const optionsDiv= document.getElementsByClassName("answer-class")
        optionsDiv[this.state.optionCount-1].insertAdjacentHTML("afterend",cont)
    }

    handleViewAnswer = ()=>{
            let Carr= [];
            let Qarr=[];
            //targets the value of the question field and stores the value in Qarr
            const question= document.getElementById("question").value
            //console.log(question)
            Qarr.push(question)

            //loops through the choices and stores their value in Carr
            for (let i = 1; i < this.state.optionCount; i++) {
                //console.log(i)
                const choices= document.getElementById(`choice${i}`).value
                Carr.push(choices)    
            }

            //checks the fields for empty values
            if(this.state.questions===[] || this.state.choices===[]){
                document.getElementById("error").style.display="flex"
            } else{
                
            }

            //sets the state to show answer page updating the state values of questions and choices
            this.setState({...this.state,
                showQuestionPage: false,
                choices:Carr,
                questions: Qarr,
                randomAnswer:Carr[Math.floor(Math.random()* Carr.length)],
            })        
            console.log(Qarr[0].toString())
            //stores questions answered in local storage
            // var localStore= localStorage.getItem("questions")
            // if(localStore===null || localStorage===undefined){
            //     localStore=[]
            // }
            // localStore[localStore.length] =`${Qarr}`
            // localStorage.setItem("questions", localStore)
        
    }

    handleAskAgain = () =>{
        //console.log("ask again")
        this.setState({...this.state,
            showQuestionPage: false,
            choices:this.state.choices,
            questions: this.state.questions,
            randomAnswer:this.state.choices[Math.floor(Math.random()* this.state.choices.length)],
        })     

        // setTimeout(() => {
        //     console.log(this.state)
        // }, 5000);
    }

    handleAskNewQuestion = () =>{
        this.setState({...this.state,
            showQuestionPage: true,
            optionCount:2,
            choices:[],
            questions: [],
            randomAnswer:null,
        })
    }
    render() {
        const {showQuestionPage, questions, choices, randomAnswer} = this.state
        return (
            <div className="main h-screen pt-10">
                <div className="w-2/3 p-10 bg-white-100 h-5/6 mx-auto z-20 shadow-2xl rounded overflow-y-scroll">
                    

                    {showQuestionPage ? 
                        (<QuestionPage
                        handleAddOption={this.handleAddOption}
                        handleViewAnswer={this.handleViewAnswer}
                    />) 
                    : 
                    (<AnswerPage
                        question={questions[0]}
                        answers={choices}
                        handleAskAgain={this.handleAskAgain}
                        handleAskNewQuestion={this.handleAskNewQuestion}
                        random={randomAnswer}
                    />)}
                </div>
            
            </div>
        )
    }
}
