import React from 'react';
import "./PokemonItem.style.css"
class PokemonItem extends React.Component {


    render() { 
     const Poke_api_img='https://cdn.traction.one/pokedex/pokemon/'; 
     const img=`${Poke_api_img}${this.props.id}.png`;


        return (
            <div className='Pokecard'>
            <div className='Pokecard-title'>
                {this.props.name}
            </div>
           
            <img src={img} width='200' alt={this.props.name}/>
            
            <div className='Pokecard-data '>
            Type: {this.props.type}
            </div>
            <div className='Pokecard-data '>
            Exp: {this.props.exp}
            </div>
        </div>
        )
    }
}
 
export default PokemonItem;