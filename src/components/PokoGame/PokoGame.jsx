import React from 'react';
import PokemonData from "../../Data"
import Pokemon from "../Pokemon/Pokemon"



class PokoGame extends React.Component {

    state=
    {
       POKE_DATA:PokemonData
    }
    render() { 
        const items=this.state.POKE_DATA;
        let hand1=[];
        let hand2=[...items];
        while(hand1.length <hand2.length)
        {
            let RandomIdx=Math.floor(Math.random() * hand2.length);
            let RandomPoke=hand2.splice(RandomIdx,1)[0];
            hand1.push(RandomPoke)

        }

        let experience1=hand1.reduce((exprienceNumber,items) => exprienceNumber + items.base_experience , 0 )
        let experience2=hand2.reduce((exprienceNumber,items) => exprienceNumber + items.base_experience , 0 )

        return (
            <div>
            <Pokemon items={hand1} experience={parseInt(experience1).toString()} winner={experience1 > experience2}/>
            <Pokemon items={hand2} experience={parseInt(experience2).toString()} winner={experience2 > experience1 }/>
         
            </div>
            );
    }
}
 
export default PokoGame;