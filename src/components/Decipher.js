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

    //   componentDidMount(){
    //     localStorage.setItem("questions", [])
    //   }

    handleAddOption =() => {
        this.setState({...this.state,
            optionCount: this.state.optionCount + 1
        })

        this.handleChange = (e) =>{
            this.setState({...this.state,
                [e.target.name] :[e.target.value]})
            
        }
    
        const cont= `<div class="mb-6 answer-class">
            <input class="block border-2 border-white-300 placeholder-white-400 rounded h-12 w-5/6 md:w-2/3 px-5 focus:border-green-900 m-auto " id=choice${this.state.optionCount} name=choice${this.state.optionCount} type="text" placeholder=Choice&nbsp;${this.state.optionCount} />
            </div>`
        
        const optionsDiv= document.getElementsByClassName("answer-class")
        optionsDiv[this.state.optionCount-1].insertAdjacentHTML("afterend",cont)
    }

    handleViewAnswer = ()=>{
            let Carr= [];
            let Qarr=[];
            //targets the value of the question field and stores the value in Qarr
            const question= document.getElementById("question").value
            //ensures that empty values are not pushed to the question store
            if(question !== "" && question !== " " && question !== null){
                Qarr.push(question)
            }
            

            //loops through the choices and stores their value in Carr
            for (let i = 1; i < this.state.optionCount; i++) {
                const choices= document.getElementById(`choice${i}`).value
                //ensures that empty options are not pushed to the choices store
                if(choices !== "" && choices !== " " && choices !== null){
                    Carr.push(choices)
                }  
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
            }, Store )   
            // setTimeout(() => {
            //     console.log(Qarr[0])
            // }, 3000);     
            
            //stores questions answered in local storage
            function Store(){
                console.log(this.state.questions[0])
                var localStore= localStorage.getItem("questions")
                var questionStore= [] 
                //console.log(localStore)
                if(localStore===null || localStore===undefined ||localStore===""){
                    questionStore.push(this.state.questions)
                    console.log(questionStore)
                    localStorage.setItem("questions", questionStore)
                } else{
                    console.log(localStore)
                    questionStore.push(localStore)
                    questionStore.push(this.state.questions)
                    localStorage.setItem("questions", questionStore)
                }
                
            }
            
        
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
            <div className="main h-screen pt:0 sm:pt-10">
                <div className=" cont md:w-2/3 w-full p-10 bg-white-100 h-full sm:h-5/6 mx-auto z-20 shadow-2xl rounded overflow-y-scroll">
                    

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
