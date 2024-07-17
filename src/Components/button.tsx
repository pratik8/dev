import { useState } from "react";
import { QUESTIONS } from "../questions";
import ShowScore from "./showScore";

export default function Button({ answer }) {

  const [score, setScore] = useState<number>(0);

  function calculateScore(): void {
    const totalQuestions = Object.keys(QUESTIONS).length;
    let data = Object.values(answer).reduce((total: number, current): number => {
      if (current === "yes") {
        return total + 1;	
      }
      return total;
    }, 0);
    setScore(data * 100 / totalQuestions);
	localStorage.setItem("answers", JSON.stringify(answer));
  }

  return (<>
    {answer && Object.keys(answer).length === Object.keys(QUESTIONS).length ?
      <div>
        <button className="button" onClick={calculateScore}>Calculate Score</button>
      </div> 
      : <></>}

    <ShowScore answer={answer} score={score} /></>)
}
