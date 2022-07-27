import React, {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

class Pokedex extends Component {
    
    render() {
        const props = this.props;
        let title;
        if (props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand 👍</h1>;
        } else {
            title = <h1 className="Pokedex-loser">Loser Hand 👎</h1>;
        }

        return (
        <div className="Pokedex">
            {title}
            <h3>Total Experience: {props.exp}</h3>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>        
        );
    }
}

export default Pokedex;

