import Image from "next/image";
import { Card, CardFooter } from "../ui/card";
import { RecipeList } from "@/services/requests";
import Link from "next/link";

type RecipesCardProps = Omit<RecipeList, "imageType">;

export const RecipesCard = ({ recipe }: { recipe: RecipesCardProps }) => {
  return (
    <Link href={`recipes/${recipe.id}`}>
      <Card className="overflow-hidden h-full  flex flex-col p-3">
        <div className="relative aspect-video ">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="w-full rounded-lg"
          />
        </div>
        <h3 className="font-medium text-lg">{recipe.title}</h3>
      </Card>
    </Link>
  );
};
