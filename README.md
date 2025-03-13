## Work Done

### 1 **Set up Next.js 15 with the App Router**

- The project uses the **App Router** for optimized rendering.
- Page components are structured into server and client components.

### 2 **Implemented Recipe Search**

- The search form allows users to enter **a keyword, cuisine, and max preparation time**.
- On submission, users are redirected to the results page.

### 3 **Integrated Spoonacular API**

- API requests fetch recipes from Spoonacular based on user parameters.
- The **API key** is stored securely in the `.env` file.

### 4 **Enabled API Request Caching**

- `fetch()` with `{ next: { revalidate: 60 } }` caches responses for **1 minute**.
- Reduces API calls and speeds up page loading.

### 5 **Created Recipe List Page**

- Displays recipes in **cards** (`RecipesCard`).
- Shows a "No recipes found" message if there are no results.

### 6 **Developed Recipe Details Page**

- Loads full recipe details using `id`.
- Displays **image, preparation time, servings, and ingredient list**.

### 7 **Added Loading Skeletons**

- Uses **Suspense** + `Skeleton` for a smoother UX.
- Created `RecipesPageSkeleton` and `RecipeDetailsSkeleton`.

### 8 **Implemented "Back" Button**

- `BackButton` uses `router.back()` for navigation.
- Supports dynamic text via props.

### 9 **Used UI Components from ShadCN**

- **ShadCN** (based on Radix UI) for buttons, cards, inputs, and badges.
- Styled with Tailwind CSS.

### 10 **Optimization & Error Handling**

- Added `console.error()` for API request failures.
- Ensures data is available before rendering components.

### 11 **To run roject**

```sh
 - npm install
 - npm run dev
```
