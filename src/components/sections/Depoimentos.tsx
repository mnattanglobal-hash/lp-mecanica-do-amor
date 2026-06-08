import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";
import AvatarPlaceholder from "../ui/AvatarPlaceholder";
import Cta from "../ui/Cta";

const depoimentos = [
  {
    nome: "Sarah",
    texto:
      "O que mais mudou foi a autorresponsabilidade e a autonomia — conseguir resolver as coisas por mim mesma e parar com a dependência emocional, com a carência. Eu me sentia muito presa, aprisionada, naquele 'conforto desconfortável', e não conseguia enxergar. Depois consegui me libertar disso e isso mudou vários aspectos: vida amorosa, profissional. Hoje sinto que posso fazer minhas escolhas porque banco aquilo que escolho.",
  },
  {
    nome: "Anna Rachel",
    texto:
      "Esse curso de libertação me libertou de uma relação de 15 anos tóxica e mal resolvida. Isso mudou tudo, amorosamente falando, na minha vida. A Durga me libertou da crença de ser perfeitinha, bonitinha e princesinha. Eu não preciso ser assim, eu posso ser do jeito que eu sou.",
  },
  {
    nome: "Samanta",
    texto:
      "Eu era muito negativa e dura. Hoje tenho mais coerência. E veio a autorresponsabilidade: hoje eu sou 'a minha senhora', assumo as coisas comigo e com as pessoas, sem desculpinha. Pra mim essa virada foi central.",
  },
  {
    nome: "Bárbara",
    texto:
      "De fora parece algo muito esotérico, mas pra mim foi um processo muito terapêutico de me empoderar, de conseguir fazer uns movimentos que não passam pela vontade de mudar. A Escola é diferente pela coragem de dizer a verdade. Ela me incomodava, mas me lapidou.",
  },
  {
    nome: "Maura",
    texto:
      "Eu era uma pessoa atormentada, uma pessoa triste, uma pessoa que tinha medo de tudo, era muito contida, muito oprimida. E o trabalho foi me libertando. Eu fui experimentando um jeito de ser que eu nunca tinha experimentado, de poder ser do meu jeito, de poder falar o que eu sinto. Hoje eu me sinto muito leve.",
  },
];

export default function Depoimentos() {
  return (
    <Section band>
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-[22px]">
        Mulheres que pararam de repetir
      </h2>
      <div className="grid gap-[18px] grid-cols-1 md:grid-cols-2 mt-2">
        {depoimentos.map((d) => (
          <div key={d.nome} className="card">
            <p className="font-display italic text-[19px] leading-[1.4] mb-4">
              "{d.texto}"
            </p>
            <div className="flex items-center gap-3">
              <AvatarPlaceholder name={d.nome} />
              <span className="text-[14px] text-accent-strong font-semibold not-italic">
                {d.nome}
                <span className="block text-[12px] text-muted-token font-normal">
                  aluna da Escola de Alquimia Ascensional
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Cta>QUERO ISSO PRA MIM</Cta>
      </div>
    </Section>
  );
}
