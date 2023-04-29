import { useState, useContext } from 'react';
import { AdoptedPetContext } from '../context/AdoptedPetContext';

import { useBreedList } from '../hooks/useBreedList';
import { usePetsList } from '../hooks/usePetsList';

import { Results } from './Results';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const [animal, setAnimal] = useState('');

  const [pets] = usePetsList(requestParams);
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          const formData = new FormData(form);
          const formJson = Object.fromEntries(formData.entries());

          setRequestParams(formJson);
        }}
      >
        {adoptedPet && (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        )}
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option value="" />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed" disabled={breeds.length === 0}>
            <option value="" />
            {breeds.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
