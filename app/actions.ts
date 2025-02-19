"use server";
import { redirect } from "next/navigation";

export async function fetchGetAllRecipes() {
  const endpoint = process.env.NEXT_PUBLIC_API_URL;

  // 환경변수 유효성 검사
  if (!endpoint) {
    console.error("API URL is not defined in environment variables");
    redirect("/error-page");

    return;
  }
  try {
    const res = await fetch(`${endpoint}/recipes`, {});

    if (!res.ok) {
      throw new Error(`Error fetching Recipes data `);
    }

    const data = await res.json();

    console.log("Action Recipes Data ==>>", data.recipes[0].name);

    return data;
  } catch (error) {
    console.error(`Failed to fetch cart data`, error);

    redirect("/error-page");
  }
}

export async function fetchGetSingleRecipe(recipeId: string) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL;

  // 환경변수 유효성 검사
  if (!endpoint) {
    console.error("API URL is not defined in environment variables");
    redirect("/error-page");

    return;
  }
  try {
    const res = await fetch(`${endpoint}/recipes/${recipeId}`, {});

    if (!res.ok) {
      throw new Error(`Error fetching Recipes data `);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(`Failed to fetch cart data`, error);

    redirect("/error-page");
  }
}
