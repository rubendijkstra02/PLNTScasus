import ClientOnly from "../../components/ClientOnly";
import Cart from "../../components/Cart";

const Index = () => {
    return (
        <ClientOnly>
            <Cart/>
        </ClientOnly>
    )
}

export default Index