export interface getRecipesByParamsProps {
  cuisine: string;
  maxReadyTime: string;
  query: string;
}
export interface RecipeList {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface RecipeDetails {
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  extendedIngredients: {
    original: string;
  }[];
}

export const getRecepiesByParams = async ({
  cuisine,
  maxReadyTime,
  query,
}: getRecipesByParamsProps): Promise<RecipeList[] | undefined> => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxTime=${maxReadyTime}&apiKey=${process.env.NEXT_PUBIC_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    console.error("Request Error:", response.status, response.statusText);
    return;
  }

  const data = await response.json();
  return data.results;
};

export const getRecipeById = async (
  id: string
): Promise<RecipeDetails | undefined> => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBIC_API_KEY}`
  );

  if (!response.ok) {
    console.error("Request Error:", response.status, response.statusText);
    return;
  }

  const data = await response.json();
  return data;
};
