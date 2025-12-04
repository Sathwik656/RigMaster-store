import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
    try {

        const baseURL = process.env.BASE_URL
        const response = await fetch(baseURL + '/api/products')
        const products = await response.json()
        return products
    } catch (err) {
        console.log(err.message)
        return []
    }
}

export default async function Home(props) {
    const products = await getProducts()

    let planner = null
    let stickers = []


    for (let product of products) {
        if (product.name === 'Intel I9') {
            planner = product
            continue
        }
        stickers.push(product)
    }


    return (
        < >
            <ImageBanner />
            <section>
                <Products planner={planner} stickers={stickers} />
            </section>
        </>
    );
}