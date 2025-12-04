import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const baseUrl = process.env.BASE_URL;

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store"
  });

  const products = await res.json();
  return products;
}

export default async function Home() {
  const products = await getProducts();

  let planner = null;
  let stickers = [];

  for (let product of products) {
    if (product.name === "Intel I9") {
      planner = product;
      continue;
    }
    stickers.push(product);
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
