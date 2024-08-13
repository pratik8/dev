import React from 'react';
export default function ShowScore({ answer, score }) {
  return (
    <h3>
      {answer && Object.keys(answer).length && score ? (
        <div data-testid="score">Your Score is : {score}</div>
      ) : (
        <></>
      )}
    </h3>
  );
}
