export default function ShowScore({ answer, score }) {
    return (
      <div>
        {(answer && Object.keys(answer).length && score) ? <div>Your Score is : {score}</div> : <></>}
      </div>
    )
  }