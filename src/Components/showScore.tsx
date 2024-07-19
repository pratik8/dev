export default function ShowScore({ answer, score }) {
    return (
      <div>
        {(answer && Object.keys(answer).length && score) ? <div data-testid="score">Your Score is : {score}</div> : <></>}
      </div>
    )
  }