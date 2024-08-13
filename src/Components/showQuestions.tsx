import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { QUESTIONS } from '../questions';
import { scoreContext } from '../ContextApi/scoreContext';

const ShowQuestions = () => {
  const { scoreData } = useContext(scoreContext);
  const [answer, setAnswer] = useState<Object>({});
  const Button = lazy(() => import('./button'));
  const ShowScore = lazy(() => import('./showScore'));

  useEffect(() => {
    let answers = JSON.parse(localStorage.getItem('answers'));
    if (answers) {
      setAnswer(answers);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };

  return (
    <div className="questions-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <ShowScore answer={answer} score={scoreData} />
      </Suspense>
      {Object.keys(QUESTIONS).map((key) => {
        return (
          <>
            <div className="question-text">
              <label>{QUESTIONS[key]}</label>
            </div>
            <div>
              <input
                key={key.toString()}
                type="radio"
                onChange={handleChange}
                name={`language_${key}`}
                checked={
                  Object.keys(answer).length > 0
                    ? answer[`language_${key}`] === 'yes'
                    : false
                }
                value="yes"
                data-testid={`language_yes_${key}`}
                id={`Yes-${key}`}
              />
              <label
                htmlFor={`Yes-${key}`}
                className={`yes-no-label ${
                  answer[`language_${key}`] === 'yes' ? ' selected' : ''
                }`}
              >
                Yes
              </label>
              <input
                key={key.toString()}
                type="radio"
                onChange={handleChange}
                name={`language_${key}`}
                checked={
                  Object.keys(answer).length > 0
                    ? answer[`language_${key}`] === 'no'
                    : false
                }
                value="no"
                data-testid={`language_no_${key}`}
                id={`No-${key}`}
              />
              <label
                htmlFor={`No-${key}`}
                className={`yes-no-label ${
                  answer[`language_${key}`] === 'no' ? ' selected' : ''
                }`}
              >
                No
              </label>
            </div>
          </>
        );
      })}
      <Suspense fallback={<div>Loading...</div>}>
        <Button answer={answer} />
      </Suspense>
    </div>
  );
};

export default ShowQuestions;
