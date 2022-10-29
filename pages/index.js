import ClientOnly from "/components/ClientOnly";
import Products from "/components/Products";
import {gql} from "@apollo/client";
import client from "/apollo-client";
import Footer from "/components/Footer";
import lastOrder from "/utils/orders/lastOrder";

// export async function getStaticProps() {
//     const {
//         order,
//         person
//     } = await lastOrder.fetch()
//
//     return {
//         props: {
//             order,
//             person
//         },
//         revalidate: 10
//     }
// }

export async function getServerSideProps() {
  const {
    order,
    person
  } = await lastOrder.fetch()

  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          name
        }
      }
    `
  })

  return {
    props: {
      order,
      person,
      countries: data.countries
    }
  }
}

const Index = props => {
  const {
    countries,
    person,
    order
  } = props

  return (
      <div>
        <p className="bg-blue-500 w-full text-center font-bold p-2">{person} just bought {order}!</p>
        <ClientOnly>
          <Products/>
        </ClientOnly>
        <Footer countries={countries} />
      </div>
  )
}

export default Index