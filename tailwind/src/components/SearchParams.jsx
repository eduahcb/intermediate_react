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
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center"
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
            className="w-60 block mb-5"
            type="text"
            name="location"
            id="location"
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            className="w-60 block mb-5"
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
          <select 
            className="w-60 block mb-5 disabled:opacity-50"
            name="breed" 
            id="breed" 
            disabled={breeds.length === 0}
          >
            <option value="" />
            {breeds.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded px-6 py-2 color text-white hover:opacity-50 border-none bg-orange-500">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
