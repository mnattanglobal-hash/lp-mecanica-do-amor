import Section from "../ui/Section";
import Quote from "../ui/Quote";

export default function Dor() {
  return (
    <Section band narrow>
      <h2 className="text-[clamp(28px,6vw,40px)] mb-[22px]">
        Você já sabe que o problema é você. Só não sabe o que fazer com isso.
      </h2>
      <p className="mb-[18px]">
        Se você chegou até aqui, não é a primeira vez. Provavelmente você já:
      </p>
      <ul className="bullets">
        <li>
          Leu os livros. Fez a terapia. Tentou se distrair, tentou se ocupar,
          tentou "se amar primeiro".
        </li>
        <li>
          Entendeu, lá na cabeça, que você se anula nas relações. E mesmo
          entendendo, fez tudo de novo.
        </li>
        <li>
          Se viu sendo "boa demais" pra um homem que recebia tudo e devolvia
          migalha.
        </li>
        <li>
          Sentiu aquele frio no estômago toda vez que ele demorava pra responder.
          O medo de que ia acabar a qualquer momento.
        </li>
        <li>Acordou pensando nele antes de pensar em você.</li>
      </ul>
      <p className="mb-[18px]">
        E o pior é que de fora todo mundo te acha forte. Resolvida. Você
        funciona, você trabalha, você cuida de todo mundo. Mas no amor você vira
        outra pessoa.
      </p>
      <Quote>
        "Quando você existe para o outro, você deixa de existir. Porque você
        anula o seu ego, você anula os seus próprios desejos, você anula os seus
        próprios objetivos."
      </Quote>
      <p className="mb-[18px]">
        Você não ama demais. Essa é a maior confusão da sua vida.
      </p>
      <Quote>
        "Então a pessoa acha que ela ama demais, mas na verdade ela não ama
        demais, ela está em carência de amor e essa é a maior confusão."
      </Quote>
      <p className="mb-0">
        Carência não é amor. Carência é fome. É o passarinho de boca aberta
        esperando uma comida que não vem.
      </p>
    </Section>
  );
}
