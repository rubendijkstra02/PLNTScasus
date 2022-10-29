import Link from "next/link";
import useCart from "../hooks/useCart";

const ShoppingCartButton = props => {
    const {
        count
    } = props

    return (
        <Link href='/cart' className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative m-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                 className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
            {
                count > 0 &&
                <div className="text-sm rounded-full bg-white text-blue-500 text-center absolute px-1.5 -top-2 -right-2">{count}</div>
            }
        </Link>
    )
}

export default ShoppingCartButton