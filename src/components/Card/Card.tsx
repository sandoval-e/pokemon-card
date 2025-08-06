import CardFooter from "./CardFooter";
import type { PokemonData } from "../../types";

interface CardProps {
  pokemonImgUrl: any;
  pokemonData: PokemonData;
}

const Card = (props: CardProps) => {
  let pokemonImgUrl = props.pokemonImgUrl;
  const pokemonData = props.pokemonData;

  return (
    <>
        <img
            src="https://card-poke-simple.netlify.app/images/bg-pattern-card.svg"
            className="card-header"
        />
        <div className="card-body">
            <img
            src={pokemonImgUrl}
            alt="Pokemon image"
            className="card-body-img"
            />
            <h1 className="card-body-title">
                {pokemonData?.name + " "}
                <span>
                    {
                        pokemonData?.stats && pokemonData.stats.length > 0
                        ? pokemonData.stats[0].base_stat?.toString() + "hp"
                        : ""
                    }
                </span>
            </h1>
            <p className="card-body-text">{pokemonData?.base_experience}{" exp"}</p>
        </div>
        <div className="card-footer">
            <CardFooter pokemonData={pokemonData} />
        </div>
    </>
  );
};

export default Card;
