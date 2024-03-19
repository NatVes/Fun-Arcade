import { Link } from 'react-router-dom';
import "./FunFacts.css";
import gamesData from "../../../games.json";

export default function FunFacts() {

  return (
    <div className="container">
      <h1 className="title text-center my-5">FUN FACTS</h1>
      <hr />
      <ul className="mx-5 my-5 p-0 table">
        {gamesData.map((game) => (
          <li key={game.title}>
              <Link to={`/funfacts/${game.title}`} className="mb-5 table-cell d-flex align-items-center">
                <img  src={game.image} alt={game.title} />
                <h3>{game.title}</h3>
              </Link>
          </li>
        ))}        
      </ul>
    </div>
  )
}
