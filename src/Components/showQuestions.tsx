import { useState, useEffect } from "react";
import { QUESTIONS } from "../questions";
import Button from "./button";

const ShowQuestions = () => {
  const [answer, setAnswer] = useState<Object>({ ['language_']: '' });

  useEffect(() => {
    let answers = JSON.parse(localStorage.getItem("answers"))
    if (answers) {
      setAnswer(answers);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  
  }

  return (
    <div className='questions-wrapper'>
      {Object.keys(QUESTIONS).map(key => {
        return (
          <>
            <div>
              <label>{QUESTIONS[key]}</label>
			</div>
			<div>			
              <input
                key={key.toString()}
                type="radio"
                onChange={handleChange}
                name={`language_${key}`}
                checked={Object.keys(answer).length > 0 ? answer[`language_${key}`] === "yes" : false}
                value="yes"
              />
              <label>Yes</label>
              <input
                key={key.toString()}
                type="radio"
                onChange={handleChange}
                name={`language_${key}`}
                checked={Object.keys(answer).length > 0 ? answer[`language_${key}`] === "no" : false}
                value="no"
              />
              <label>No</label>
            </div>
          </>)
      })}
      <Button answer={answer} />
    </div>
  )
}

export default ShowQuestions;