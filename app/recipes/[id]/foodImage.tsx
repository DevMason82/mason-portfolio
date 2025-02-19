"use client";
import React from "react";
import { Image } from "@heroui/react";

const FoodImage = ({ name, image }) => {
  return (
    <Image
      alt={name}
      className="object-cover rounded-xl"
      height={270}
      src={"https://app.requestly.io/delay/500/" + image}
      width={270}
    />
  );
};

export default FoodImage;
