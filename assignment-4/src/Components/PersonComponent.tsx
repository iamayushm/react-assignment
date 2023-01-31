export interface Person {
  id: number;
  name: string;
  age: number;
  skill: string;
}

export interface PersonListProps {
  persons: Person[];
}

export function PersonList({ persons }: PersonListProps) {
  return (
    <div>
      {persons.map(({ id, name, age, skill }) => {
        return (
          <div>{`I am ${name}. I am ${age} years old. I Know ${skill}`}</div>
        );
      })}
    </div>
  );
}
