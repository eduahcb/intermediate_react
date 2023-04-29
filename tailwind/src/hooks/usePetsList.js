import { useQuery } from '@tanstack/react-query';

import { fetchPetsList } from '../services/fetchPetsList';

export const usePetsList = ({ animal, location, breed }) => {
  const { data, isError, status } = useQuery(
    ['pets', { animal, location, breed }],
    fetchPetsList
  );

  const pets = data?.pets ?? [];

  return [
    pets,
    {
      isError,
      status,
    },
  ];
};
