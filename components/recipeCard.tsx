"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// import { useRouter } from "next/navigation";

import { useRouter } from "next-nprogress-bar";

import { Recipe } from "@/model/recipeModel";

export default function RecipeCard({
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
}: Recipe) {
  const router = useRouter();

  return (
    <Card
      isPressable
      className="py-4"
      onPress={() => router.push("/recipes/" + `${id}`)}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isZoomed
          alt={name}
          className="object-cover rounded-xl"
          height={270}
          src={"https://app.requestly.io/delay/500/" + image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
