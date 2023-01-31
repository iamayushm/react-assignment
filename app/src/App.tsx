import React, { useState } from 'react';
// import { Button } from './Components/Button';
import Keypad from './Components/Keypad';
// for handling data of component we need to use state 
// by default function don't have a state but state is by default available in a class component.
// for functional component hooks were added in version 16.8 to provide same behaviour like class

//hooks in react -> inbuilt methods to perform a complex task in react

// "use prefix indicates hook "

export const App: React.FunctionComponent=()=>{
    return <div>
      <Keypad> </Keypad>  
    </div>
}

// func App(){
//   return <h1> hello </h1>
// }

export default App;
