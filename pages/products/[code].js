import ClientOnly from "../../components/ClientOnly";
import Product from "../../components/Product";
import { useRouter } from 'next/router'

const ProductPage = () => {
    const router = useRouter()
    const { code } = router.query

    return (
        <ClientOnly>
            <Product code={code}/>
        </ClientOnly>
    )
}

export default ProductPage