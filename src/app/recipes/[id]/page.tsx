import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getRecipeById } from "@/services/requests";
import BackButton from "@/components/backButton";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const recipe = await getRecipeById(id);

  if (!recipe) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
        <p className="mb-6">
          The recipe you're looking for doesn't exist or has been removed.
        </p>
        <BackButton label="Back to recipes" />
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <BackButton label="Back to recipes" />

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            {recipe.readyInMinutes && (
              <Badge
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                <Clock className="h-4 w-4" />
                <span>{recipe.readyInMinutes} minutes</span>
              </Badge>
            )}

            {recipe.servings && (
              <Badge
                variant="outline"
                className="flex items-center gap-1 px-3 py-1"
              >
                <Users className="h-4 w-4" />
                <span>{recipe.servings} servings</span>
              </Badge>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{ingredient.original}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
