import React from "react";

interface fruit {
  name: string;
}

interface fruitProps {
  fruitList: fruit[];
}

export class Fruit extends React.Component<fruitProps> {
  render() {
    return (
      <div>
        <ul style={{ listStylePosition: 'inside' }}>
          {this.props.fruitList.map(({ name }) => {
            return <li>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
