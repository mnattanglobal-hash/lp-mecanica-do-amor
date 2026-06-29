import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";
import FlameDivider from "../ui/FlameDivider";
import Cta from "../ui/Cta";

const topicos = [
  {
    titulo: "Por que sempre repete",
    texto:
      "A engrenagem do padrão. Você vai enxergar pela primeira vez o mecanismo que te leva sempre pro mesmo tipo de homem e pra mesma dor. Quando você vê, não desvê.",
  },
  {
    titulo: "Carência não é amor",
    texto:
      "A diferença entre amar e estar em fome. Por que o que você chama de \"amar demais\" não chega no outro como amor, chega como peso. E o que fazer com isso.",
  },
  {
    titulo: "Voltar pra si",
    texto:
      "Como amar sem se perder. O truque de abrir e fechar. Aprender a ir até o outro e saber voltar pra você, em vez de ficar lá fora esperando.",
  },
  {
    titulo: "A sua parte na história",
    texto:
      "A parte que dói de olhar. Onde você manipula sem perceber, onde você se vitimiza, onde você cobra depois aquilo que deu por conta própria. Não é pra te culpar. É pra te devolver o poder.",
  },
  {
    titulo: "Amor com lei",
    texto:
      "Por que amor sem regra vira caos. Como construir acordo de verdade em vez de viver de promessa e expectativa.",
  },
  {
    titulo: "A escolha de defeitos",
    texto:
      "Relacionar-se é escolher quais defeitos você tolera. Como parar de procurar o homem perfeito e começar a escolher o homem certo pra você.",
  },
  {
    titulo: "O parceiro como melhor amigo",
    texto:
      "O amor que dura não é o que mais arde no começo. É o que vira parceria de verdade. Como sair da guerra dos sexos e entrar no \"a gente contra o mundo\".",
  },
  {
    titulo: "Sustentar",
    texto:
      "O que fazer pra não voltar pro buraco. Como manter, no dia a dia, tudo o que você reconstruiu. Onde isso te leva depois.",
  },
];

export default function OQueRecebe() {
  return (
    <Section band>
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-[22px]">
        O que tem dentro da Mecânica do Amor
      </h2>
      <p className="text-center text-muted-token mb-[18px]">
        É o workshop completo, do começo ao fim, na ordem certa, uma parte
        destravando a outra. Você assiste no seu tempo, no celular, quantas vezes
        quiser.
      </p>

      <img
        src="img/mockup_workshop.png"
        alt="O workshop A Mecânica do Amor no celular"
        className="block w-full max-w-[300px] mx-auto h-auto my-6 mb-[30px]"
      />

      <p className="text-center text-muted-token mb-[18px]">
        Dentro do workshop, você vê a engrenagem inteira do amor — do começo ao
        fim:
      </p>

      <div className="card">
        {topicos.map((t, i) => (
          <div
            key={t.titulo}
            className={`py-5 ${
              i < topicos.length - 1
                ? "border-b border-[color:var(--hairline)]"
                : ""
            }`}
          >
            <h3 className="text-[22px] mb-[6px]">{t.titulo}</h3>
            <p className="mb-0 text-muted-token">{t.texto}</p>
          </div>
        ))}
      </div>

      <FlameDivider lineOnly className="mt-9 mb-6" />

      <img
        src="img/oraculo.jpg"
        alt="Oráculo das Chaves Ascensionais"
        className="block w-full max-w-[360px] mx-auto h-auto rounded-md border border-[color:var(--border)] shadow-[var(--card-shadow)] mb-6"
      />
      <div className="card">
        <Eyebrow>Bônus de entrada</Eyebrow>
        <h3 className="text-[22px] mb-[6px] text-accent-strong">
          Oráculo das Chaves Ascensionais
        </h3>
        <p className="mb-0">
          Um oráculo criado pela Durga pra você consultar nos momentos de
          confusão. Quando a cabeça embaralha e você não sabe se está amando ou
          se está em carência, você tira uma chave e ela te devolve a direção.
          Liberado dentro da plataforma.
        </p>
      </div>

      <div className="mt-9">
        <Cta>QUERO O WORKSHOP COMPLETO</Cta>
      </div>
    </Section>
  );
}
