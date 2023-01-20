import React from "react";
import { useState } from "react";

const QuizComp = () => {
    var Questionbank = [
        {
            Question: "what is name of you compny ?",
            AnswerText: [
                { Answer: "wm", isCorrect: true },
                { Answer: "tcs", isCorrect: false },
                { Answer: "ibm", isCorrect: false },
                { Answer: "infosys", isCorrect: false }
            ]
        },
        {
            Question: "what india capital ?",
            AnswerText: [
                { Answer: "dilhi", isCorrect: true },
                { Answer: "guj", isCorrect: false },
                { Answer: "rajs", isCorrect: false },
                { Answer: "mumb", isCorrect: false }
            ]
        },
        {
            Question: "what is date when celb indipendesday?",
            AnswerText: [
                { Answer: "26jan", isCorrect: true },
                { Answer: "15og", isCorrect: false },
                { Answer: "31oct", isCorrect: false },
                { Answer: "14jna", isCorrect: false }
            ]
        },
        {
            Question: "what is teachers day date ?",
            AnswerText: [
                { Answer: "5spt", isCorrect: true },
                { Answer: "5oct", isCorrect: false },
                { Answer: "5nov", isCorrect: false },
                { Answer: "5july", isCorrect: false }
            ]
        },
        {
            Question: "what is emp in wm ? includ self emp",
            AnswerText: [
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

    return (
        <div>
            Quiz app
            {showScore ? (
                <div>
                    you have score{score} out of{Questionbank.length}
                </div>
            )
                : (
                    <>
                        <div className='question----'>
                            <div className='question-num'>
                                <span>{currentQuestion}</span>/{Questionbank.length}
                            </div>
                            <div className='question-text'>
                                {currentQuestion[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer'>
                            {Questionbank[currentQuestion].AnswerText.map((answer)=>
                            (
                                <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                                18:15
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default QuizComp