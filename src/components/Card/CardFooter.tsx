import type { PokemonData, Stat } from "../../types";

interface FooterProps {
  pokemonData: PokemonData;
}

const CardFooter: React.FC<FooterProps> = (props: FooterProps) => {
  let stats: Stat[] | null = props.pokemonData.stats;
  const footerData = ["attack", "defense", "special-attack"];
  return (
    <>
      {stats
        ?.filter((s) => footerData.includes(s.stat.name))
        ?.map((s, i) => (
          <div key={i} className="card-footer-social">
            <h3>{s.base_stat}K</h3>
            <p>{s.stat.name}</p>
          </div>
        ))}
    </>
  );
};

export default CardFooter;
