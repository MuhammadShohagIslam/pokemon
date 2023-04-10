import Banners from "@/components/shared/Banner/banners";
import MainLayout from "@/layout/main/main.layout";
import { client } from "../../graphql/apollo-client";
import { GET_POKEMONS } from "../../graphql/queries/pokemon.queries";
import Pokemons from "@/components/shared/Cards/Pokemon/pokemon.cards";

type HomePropsType = {
  pokemons: any
}
export default function Home({ pokemons }: HomePropsType) {
  console.log(pokemons);
  return (
    <MainLayout>
      <Banners />
      <Pokemons data={pokemons}/>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: {
      first: -1
    }
  });
 
  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
