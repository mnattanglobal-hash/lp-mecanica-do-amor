import Section from "../ui/Section";
import Quote from "../ui/Quote";

export default function ParaQuem() {
  return (
    <Section band>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="card">
          <h3 className="text-[22px] text-gold">
            A Mecânica do Amor é pra você se:
          </h3>
          <ul className="check mt-[14px] mb-0">
            <li>Você já passou por mais de um término parecido e cansou de repetir</li>
            <li>
              Você entende que a parte que precisa mudar é a sua, e está disposta a
              olhar pra ela
            </li>
            <li>
              Você quer entender a engrenagem inteira, não só um truque pra fisgar
              alguém
            </li>
            <li>Você está pronta pra ouvir verdade, mesmo a que dói</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-[22px] text-danger">Não é pra você se:</h3>
          <ul className="cross mt-[14px] mb-0">
            <li>
              Você acha que a culpa é só dos homens e quer alguém pra confirmar
              isso
            </li>
            <li>
              Você quer uma fórmula mágica de atrair sem mexer em nada dentro de
              você
            </li>
            <li>
              Você acha que não tem nenhuma carência, nenhuma sombra, nada pra
              olhar
            </li>
            <li>
              Você procura papinho gratiluz, positividade, "o universo vai te
              trazer o amor"
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-[26px] text-muted-token">
        Se você se reconheceu na segunda lista, tudo bem. Mas esse trabalho vai te
        irritar mais do que ajudar. Fica pra quando você estiver pronta.
      </p>
      <Quote>
        "Toda pessoa que precisa ser amada por todo mundo, ela não é íntegra,
        porque ela se vende, ela se perde."
      </Quote>
    </Section>
  );
}
