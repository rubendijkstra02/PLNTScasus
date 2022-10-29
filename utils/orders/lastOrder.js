const people = [
    'Harry Styles',
    'Hank',
    'Ann',
    'Elizabeth',
    'Colin',
    'Ivanka',
    'Donald',
    'Keith',
    'Marc'
]

const orders = [
    'The Netherlands',
    'Andorra',
    'Russia',
    'Iraq'
]


const lastOrder = {
    fetch: async () => {
        return {
            person: people[randomNumber(0, people.length - 1)],
            order:  orders[randomNumber(0, orders.length - 1)],
        }
    }
}

export default lastOrder

const randomNumber = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}