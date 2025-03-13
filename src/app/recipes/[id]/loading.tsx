import { Skeleton } from "@/components/ui/skeleton";

export default function RecipeDetailsSkeleton() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Skeleton className="h-10 w-40 mb-6" />

      <div className="grid md:grid-cols-2 gap-8">
        <Skeleton className="h-[450px] w-full rounded-lg" />

        <div className="h-[450px]">
          <Skeleton className="h-8 w-3/4 mb-4" />

          <div className="flex gap-4 mb-6">
            <Skeleton className="h-8 w-28" />
            <Skeleton className="h-8 w-28" />
          </div>

          <div className="border rounded-lg p-4">
            <Skeleton className="h-6 w-32 mb-4" />{" "}
            <div className="space-y-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-3/4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
