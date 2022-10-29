const cartStorage = {
    loadOrDefault: () => {
        const cartJson = window.localStorage.getItem('cart')
        return cartJson ? JSON.parse(cartJson) : {}
    },
    save: (cart) => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export default cartStorage