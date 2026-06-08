import Eyebrow from "../ui/Eyebrow";
import Cta from "../ui/Cta";
import VslPlayer from "../ui/VslPlayer";

export default function Hero() {
  return (
    <section className="bg-hero-glow text-center pt-9 pb-16 md:pb-[84px]">
      <div className="wrap">
        <img
          src="/img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[200px] sm:w-[224px] mb-6"
        />
        <Eyebrow className="mb-4">A Mecânica do Amor</Eyebrow>

        <VslPlayer />

        <h1 className="text-[clamp(34px,8vw,56px)] mt-7 mb-[18px]">
          Os nomes mudam.
          <br />A sensação é <span className="text-gold">sempre a mesma.</span>
        </h1>
        <p className="text-[18px] max-w-[560px] mx-auto mb-[30px]">
          Você troca de homem, troca de cidade, jura que dessa vez vai ser
          diferente. E do nada você se vê no mesmo lugar de novo, amando mais do
          que é amada, com medo de perder, implorando pra ser escolhida. Não é
          azar. É uma engrenagem. E dá pra ver ela funcionar.
        </p>
        <Cta microcopy="Workshop completo + bônus Oráculo das Chaves · Acesso imediato · Garantia de 7 dias">
          QUERO VER A ENGRENAGEM
        </Cta>
      </div>
    </section>
  );
}
