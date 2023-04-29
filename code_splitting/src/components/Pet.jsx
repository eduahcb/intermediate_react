import { Link } from 'react-router-dom';

export const Pet = ({ pet }) => {
  let hero = 'http://pets-images.dev-app';

  if (pet.images.length) {
    hero = pet.images[0];
  }

  return (
    <Link to={`/details/${pet.id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={pet.name} />
      </div>
      <div className="info">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
      </div>
    </Link>
  );
};
