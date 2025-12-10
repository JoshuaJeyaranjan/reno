import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/services";
import CategoryPage from "./CategoryPage";

export default function CategoryPageLoader() {
  const { slug } = useParams();

  // Find the matching category based on slug
  const category = servicesData.find((c) => c.slug === slug);

  if (!category) {
    return <div className="container section">Category not found.</div>;
  }

  return (
    <CategoryPage
      title={category.category}
      description={category.description}
      images={category.images}
      services={category.items}
      
    />
  );
}