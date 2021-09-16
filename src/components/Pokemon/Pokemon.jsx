import React from 'react';
import "./Pokemon.styles.css"
import PokemonItem from "../PokemonItem/PokemonItem"



class Pokemon extends React.Component {
    render() { 
        let WinnerOrLoser;
        if(this.props.winner)
        {
            WinnerOrLoser=<h1 className='Pokedex-winner'>Wining 😎😎🤩</h1>
        }
        else
        {
            WinnerOrLoser=<h1 className='Pokedex-loser'>Loser 😪😭😭</h1>
        }


        return (
            <div className='Pokedex'>
            {
                WinnerOrLoser
            }
            <h4>
            Total Experience : {this.props.experience}
            </h4>
            {
                this.props.items.map(({id,name,type,base_experience})=>(
                    <div className='Pokedex-cards'>
                    <PokemonItem id={id} name={name} type={type} exp={base_experience} />
                    </div>
                ))
            }
            </div>
        );
    }
}
 

export default Pokemon;