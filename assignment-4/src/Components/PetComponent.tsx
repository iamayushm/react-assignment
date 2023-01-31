interface PetDetails {
  name: string;
  type: string;
}

interface userDetails {
  Name: string;
  pets: PetDetails[];
}

interface PetProps {
  users: userDetails[];
}

export function PetList({ users }: PetProps) {
  return (
    <div>
      {users.map(({ Name, pets }) => {
        return (
          <div>
            <h2> {`${Name}'s Pets`} </h2>
            <div>
              {pets.map(({ name, type }) => {
                return <p>{`${type} named ${name} `}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
