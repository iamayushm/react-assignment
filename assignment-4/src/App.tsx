import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PersonList } from "./Components/PersonComponent";
import { PetList } from "./Components/PetComponent";
import { ToggleCss } from "./Components/toggleCssComponent";
import { ExampleInline } from "./Components/inlineCSS";
import { ExampleCssModule } from "./Components/cssModuleExample";
import { MouseHover } from "./Components/mouseHover";
import { Fruit } from "./Components/FruitComponentClass";

function App() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const nos = [1, 2, 3, 4, 5];

  const fruitsClass = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Orange" },
    { name: "Mango" },
  ];

  const Persons = [
    { id: 1, name: "Ansh", age: 20, skill: "React" },
    { id: 1, name: "Jay", age: 20, skill: "Java" },
  ];

  const User = [
    {
      Name: "chris",
      pets: [
        { name: "bella", type: "dog" },
        { name: "cocoa", type: "dog" },
      ],
    },
    {
      Name: "nick",
      pets: [
        { name: "hilo", type: "cat" },
        { name: "polly", type: "cat" },
      ],
    },
  ];

  return (
    <div className="App">
      {fruits.map((fruit, index) => {
        if (index < 3) {
          return <div>{fruit}</div>;
        }
      })}
      ********************************************************************************
      {nos.map((no) => {
        return <div>{no * no}</div>;
      })}
      ********************************************************************************

      {<Fruit fruitList={fruitsClass}></Fruit>}

      ********************************************************************************

      {<PersonList persons={Persons} />}

      ********************************************************************************

      {<PetList users={User}></PetList>}

      ********************************************************************************

      {<ToggleCss />}

      ********************************************************************************

      {<ExampleInline></ExampleInline>}

      ********************************************************************************

      {<ExampleCssModule></ExampleCssModule>}

      ********************************************************************************

      {<MouseHover></MouseHover>}
      
    </div>
  );
}

export default App;
