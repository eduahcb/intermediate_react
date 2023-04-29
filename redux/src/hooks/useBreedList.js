import { useGetBreedsQuery } from "../petApiService";

export const useBreedList = (animal) => {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal
  })

  if(!animal)
    return [[], isLoading]

  return [breeds ?? [], { isLoading }];
};
