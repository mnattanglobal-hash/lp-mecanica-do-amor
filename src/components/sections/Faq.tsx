import { useState } from "react";
import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";

const faqs = [
  {
    q: "\"Já tentei terapia, já li os livros, já fiz curso. Por que isso seria diferente?\"",
    a: "Porque a maioria dessas coisas mexe na cabeça. Você entende o problema e continua repetindo, porque entender não é o mesmo que mudar a engrenagem. A Mecânica do Amor não é sobre entender melhor. É sobre ver o mecanismo funcionando e desligar ele na raiz. Por isso é o workshop inteiro, do começo ao fim, te mostrando a engrenagem na ordem certa, não dicas soltas.",
  },
  {
    q: "\"Não tenho um relacionamento agora. Faz sentido pra mim?\"",
    a: "Faz, e talvez seja a melhor hora. Você vai entender o padrão sem o desespero de uma relação acontecendo em cima de você. Quando o próximo chegar, você não chega como a mesma pessoa.",
  },
  {
    q: "\"E se eu não tiver tempo?\"",
    a: "São aulas que você assiste no celular, no seu ritmo. Quinze, vinte minutos por vez. Você não precisa de uma agenda livre, precisa de querer parar de repetir.",
  },
  {
    q: "\"R$197 não é caro pra um curso online?\"",
    a: "Compara com o que você já gastou tentando resolver isso por fora. Compara com o custo de mais um relacionamento que termina igual. R$197 uma vez, com garantia de 7 dias, pra olhar a coisa na raiz. Caro é continuar pagando o cheque sem fundo do amor a vida inteira.",
  },
  {
    q: "\"O que é o Oráculo das Chaves?\"",
    a: "Um oráculo que a Durga criou pra te dar direção nos momentos de confusão. Quando você não sabe se está amando ou se está em carência, você tira uma chave e ela te aponta o caminho. Vem junto, dentro da plataforma.",
  },
  {
    q: "\"E se não for pra mim?\"",
    a: "Você tem 7 dias pra testar. Entra, assiste, sente. Se não for, pede reembolso e recebe tudo de volta, sem precisar justificar. Você não arrisca nada.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section narrow>
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-[22px]">
        Perguntas que toda mulher faz antes
      </h2>
      <div>
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="border-b border-[color:var(--hairline)] last:border-b-0 py-[22px]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-display font-semibold text-[22px] text-accent-strong">
                  {item.q}
                </span>
                <span
                  className={`flex-none text-gold text-[26px] leading-[0.8] mt-1 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mb-0">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
