import FlameDivider from "../ui/FlameDivider";
import DurgaPhoto from "../ui/DurgaPhoto";
import Cta from "../ui/Cta";
import Quote from "../ui/Quote";

export default function CtaFinal() {
  return (
    <section
      className="tone-dark text-center py-16 md:py-[84px]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 100%, rgba(176,128,48,.14), transparent 60%), #0E0B08",
      }}
    >
      <div className="wrap narrow">
        <img
          src="/img/Alquimia-Logo-Horizontal-OffWhite.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[180px] sm:w-[200px] mb-7"
        />
        <DurgaPhoto
          tall
          className="mt-2 mb-7 text-left"
          description="Durga, mesmo enquadramento do hero ou variação, olhar direto. Fecho."
        />
        <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
          Você pode fechar essa página e continuar repetindo. Ou pode ver a
          engrenagem de uma vez.
        </h2>
        <p className="mb-[18px]">
          Os nomes vão continuar mudando. O próximo vai ter outro rosto, outro
          nome, outra cidade. E a sensação vai ser a mesma, do mesmo jeito, até
          você olhar pra engrenagem que faz isso girar.
        </p>
        <p className="mb-[18px]">
          A Mecânica do Amor é o mapa pra você parar. Não com truque. Com verdade.
        </p>
        <div className="card text-left my-[26px] mb-[30px]">
          <ul className="check mb-0">
            <li>O workshop completo, a engrenagem inteira na ordem certa</li>
            <li>Bônus: Oráculo das Chaves Ascensionais</li>
            <li>Acesso imediato, no seu celular</li>
            <li>Garantia de 7 dias, risco zero</li>
          </ul>
        </div>
        <Cta to="checkout" microcopy="Acesso imediato · Garantia incondicional de 7 dias · Pagamento seguro">
          QUERO PARAR DE REPETIR
        </Cta>
        <Quote className="mt-9 text-left">
          "Desapegar não significa que você não vai sentir, significa recuperar a
          sua soberania emocional, significa que você se ama o suficiente para não
          aceitar migalhas."
        </Quote>
        <FlameDivider flameOnly size={26} className="mt-6" />
      </div>
    </section>
  );
}
