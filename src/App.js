import React from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import PokoGame from './components/PokoGame/PokoGame';



class App extends React.Component {
  
    render() { 
    
        return (
            <div>
            <PokoGame/>
            </div>
        );
    }
}
 
export default App;