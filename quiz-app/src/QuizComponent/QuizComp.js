import React from "react";
import { useState } from "react";
import './quizstyle.css'

const QuizComp = () => {
    var Questionbank = [
        {
            Question: "what is name of you compny ?",
            Answers: [
                { Answer: "wm", isCorrect: true },
                { Answer: "tcs", isCorrect: false },
                { Answer: "ibm", isCorrect: false },
                { Answer: "infosys", isCorrect: false }
            ]
        },
        {
            Question: "what india capital ?",
            Answers: [
                { Answer: "dilhi", isCorrect: true },
                { Answer: "guj", isCorrect: false },
                { Answer: "rajs", isCorrect: false },
                { Answer: "mumb", isCorrect: false }
            ]
        },
        {
            Question: "what is date when celb indipendesday?",
            Answers: [
                { Answer: "26jan", isCorrect: true },
                { Answer: "15og", isCorrect: false },
                { Answer: "31oct", isCorrect: false },
                { Answer: "14jna", isCorrect: false }
            ]
        },
        {
            Question: "what is teachers day date ?",
            Answers: [
                { Answer: "5spt", isCorrect: true },
                { Answer: "5oct", isCorrect: false },
                { Answer: "5nov", isCorrect: false },
                { Answer: "5july", isCorrect: false }
            ]
        },
        {
            Question: "what is emp in wm ? includ self emp",
            Answers: [
                { Answer: "21", isCorrect: true },
                { Answer: "22", isCorrect: false },
                { Answer: "23", isCorrect: false },
                { Answer: "24", isCorrect: false }
            ]
        }

    ]
    // console.log(Questionbank);

    // usestate Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setshowScore] = useState(false);

    const handleAnswerResponse=(isCorrect)=>
    {
        if(isCorrect)
        {
            setScore(score+1);
        }
        const nextQuestion = currentQuestion+1;
        if(nextQuestion<Questionbank.length)
        {
            setCurrentQuestion(nextQuestion);
        }else{
            setshowScore(true)
        }
    }

    const resetQuiz=()=>{

        setCurrentQuestion(0)
        setScore(0)
        setshowScore(false)
    }
    return (
        <div>
            Quiz app
            {showScore?(
                <div>
                    you have score{score} out of{Questionbank.length}
                    <>
                        <button type="submit" onClick={resetQuiz}>try again</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div>
                            <div>
                                <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>
                            <div>
                                {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div>
                            {Questionbank[currentQuestion].Answers.map((answer)=>
                            (
                                <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                                
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default QuizComp