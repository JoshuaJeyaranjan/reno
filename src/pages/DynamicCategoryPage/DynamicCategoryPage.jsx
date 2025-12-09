import { useParams } from "react-router-dom";
import { servicesData } from "../../data/services";
import CategoryPage from "../CategoryPage/CategoryPage";

export default function DynamicCategoryPage() {
  const { slug } = useParams();

  // convert slug → category name (kitchens → Kitchens)
  const formatted = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  const data = servicesData.find(
    (s) => s.category.toLowerCase() === formatted.toLowerCase()
  );

  if (!data) return <div className="container">Category not found.</div>;

  return (
    <CategoryPage
      title={data.category}
      description={data.description}
      services={data.items}
      images={data.images}
    />
  );
}