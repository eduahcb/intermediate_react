import { useQuery } from '@tanstack/react-query';
import { fetchBreedList } from '../services/fetchBreedList';

export const useBreedList = (animal) => {
  const { data, isError, isLoading } = useQuery(
    ['breeds', animal],
    fetchBreedList
  );

  const breeds = data?.breeds ?? [];

  return [
    breeds,
    {
      isError,
      isLoading,
    },
  ];
};
