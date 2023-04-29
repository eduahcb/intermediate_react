import { useSearchQuery } from "../petApiService";


export const usePetsList = ({ animal, location, breed }) => {
  const { data: pets }  = useSearchQuery({ animal, location, breed });


  return [pets ?? []]
};
