import { Pet } from './Pet';

export const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => <Pet key={pet.id} pet={pet} />)
      )}
    </div>
  );
};
