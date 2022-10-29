import useCart from "../hooks/useCart";
import Link from "next/link";

const Cart = () => {
    const {
        items,
        remove,
        decrement,
        add
    } = useCart()

    return (
        <section className="w-fit my-[10%] mx-auto border-white border-solid border-2 p-5 rounded-xl text">
            <h1 className="text-center pb-4 bold text-3xl">Cart</h1>
            {
                items.map(
                    ({quantity, product}, i) => (
                        <article key={i} className="flex gap-4 justify-end py-2 items-center">
                            <p className="px-4">{product.name}</p>
                            <button className="items-center text-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => add(product)}>+</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => decrement(product.code)}>-</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => remove(product.code)}>remove</button>
                            <p>Amount: {quantity}</p>
                        </article>
                    )
                )
            }
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/">To home</Link>
        </section>
    )
}

export default Cart