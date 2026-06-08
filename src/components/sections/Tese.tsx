import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";
import Quote from "../ui/Quote";
import Cta from "../ui/Cta";

export default function Tese() {
  return (
    <Section narrow>
      <Eyebrow>A engrenagem real</Eyebrow>
      <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
        Você não precisa de mais uma fórmula pra atrair. Você precisa entender
        por que sempre repete.
      </h2>
      <p className="mb-[18px]">
        Todo curso de relacionamento te vende a mesma coisa. Seja mais
        misteriosa. Não responda rápido. Use isso, fale aquilo, faça ele correr
        atrás. Truque de sedução.
      </p>
      <p className="mb-[18px]">
        Isso é tapar o sol com a peneira. Você até consegue o homem. E aí em três
        meses está no mesmo buraco, porque a engrenagem que te colocou ali
        continua girando por dentro.
      </p>
      <p className="mb-[18px]">A verdade que ninguém te conta é mais dura e muito mais simples:</p>
      <Quote>
        "Existe uma ilusão, conto de fada, que o amor é só bonito, que ele só é
        luzinha. Isso é uma mentira. O amor é a força mais selvagem que existe, é
        a que mais rasga todo mundo."
      </Quote>
      <p className="mb-[18px]">
        O amor tem mecânica. Tem peça, tem encaixe, tem lei. E quando você não
        enxerga essa mecânica, você acha que é o homem, acha que é o destino,
        acha que é você que é "muito intensa". Não é nada disso. É uma engrenagem
        que ninguém te ensinou a ler.
      </p>
      <p className="mb-[18px]">
        A Mecânica do Amor é isso. Não é positividade. Não é gratiluz. É o mapa
        concreto de como o amor funciona dentro de você, pra você parar de ser
        refém de um padrão que você nem sabia que tinha.
      </p>
      <Quote>
        "Eu me amo é a capacidade que eu tenho de me conectar comigo mesma. De
        ficar bem sozinha. E mesmo que eu gostaria de me conectar com alguém,
        isso não me mata, não me traz sofrimento terrível, não paralisa minha
        vida."
      </Quote>
      <p className="mb-[18px]">É pra chegar nesse lugar. Onde amar não é mais te matar.</p>
      <div className="mt-8">
        <Cta>QUERO ENTENDER MEU PADRÃO</Cta>
      </div>
    </Section>
  );
}
