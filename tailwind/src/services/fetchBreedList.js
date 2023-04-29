export const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!response.ok) {
    throw new Error('/breeds fetch not ok');
  }

  return response.json();
};
