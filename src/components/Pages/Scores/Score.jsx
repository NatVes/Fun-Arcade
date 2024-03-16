import ScoreTable from "../../ScoreTable/ScoreTable";
import "./Score.css"

export default function Score() {

  let MCardScore = JSON.parse(localStorage.getItem("MCardScore"));
  console.log(MCardScore)

  return (
    <div className="container">
      <h1 className="title text-center my-5">SCORES</h1>
      <hr />
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <h2>TIC-TAC-TOE</h2>
        </div>
        <div className="col-md-4">
          <h2>MEMORY GAME</h2>
            {MCardScore.map((score, index) => (
              <ul key={index}>
                  <ScoreTable name={score.name} score={score.score} />
              </ul>
        ))}
        </div>
        <div className="col-md-4">
          <h2>HANGMAN</h2>
        </div>
      </div>
    </div>
  )
}
