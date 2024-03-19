
function ScoreTable({ score, name }) {

    return (
        <div>
            <li><span>NAME:</span> {name}</li>
            <li><span>SCORE:</span> {score}</li>
        </div>
    )
}

export default ScoreTable