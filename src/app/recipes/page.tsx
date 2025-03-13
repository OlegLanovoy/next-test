import { RecipesCard } from "@/components/recipesCard/recipesCard";
import {
  getRecepiesByParams,
  getRecipesByParamsProps,
} from "@/services/requests";
import BackButton from "@/components/backButton";

type SearchParams = Promise<getRecipesByParamsProps>;
export default async function RecipesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryParams = await searchParams;
  console.log(queryParams);
  const { query, cuisine, maxReadyTime } = queryParams;

  const recipesList = await getRecepiesByParams({
    cuisine,
    maxReadyTime,
    query,
  });

  console.log(recipesList);

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Recipe Results</h1>
        <BackButton label="Back to Search" />
      </div>

      {recipesList == undefined || recipesList.length <= 0 ? (
        <div className="text-center py-10">
          <p className="text-xl">
            No recipes found. Try different search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipesList.map((recipe) => (
            <RecipesCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
}
