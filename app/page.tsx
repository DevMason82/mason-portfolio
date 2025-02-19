import { fetchGetAllRecipes } from "@/app/actions";
import AllRecipes from "@/components/allRecipes";

export default async function Home() {
  const data = await fetchGetAllRecipes();
  const { recipes } = data;

  return (
    <section>
      <h3>Recipes Data</h3>
      <AllRecipes recipes={recipes} />
    </section>
  );
}
