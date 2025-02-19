// "use client";

import { fetchGetSingleRecipe } from "@/app/actions";
import FoodImage from "@/app/recipes/[id]/foodImage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const data = await fetchGetSingleRecipe(slug);
  const {
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    tags,
    userId,
    id,
    image,
    rating,
    reviewCount,
    mealType,
  } = data;

  // console.log("Slug", slug);
  console.log("Single recipe data ==>>", data);

  return (
    <section className="w-full">
      <h1>{name}</h1>
      <FoodImage image={image} name={name} />
      {/*<Image src={image} />*/}
      <section>
        <h2>Ingredients(재료)</h2>
        {ingredients.map((ingredient, index) => (
          <p key={index.toString()}>{ingredient}</p>
        ))}
        <p />
      </section>
      <section>
        <h2>instructions(지침)</h2>
        {instructions.map((instruction, index) => (
          <p key={index.toString()}>{instruction}</p>
        ))}
        <p />
      </section>
      {/*{JSON.stringify(data, null, 2)}*/}
    </section>
  );
}
