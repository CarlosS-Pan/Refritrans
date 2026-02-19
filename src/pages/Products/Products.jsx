import { ProductsHero, ProductsSection1, ProductsSection2 } from "../../components"

function Products() {
  return (
    <div className="page-products">
        <ProductsHero />
        <ProductsSection1 />
        <ProductsSection2 />
    </div>
  )
}

export default Products