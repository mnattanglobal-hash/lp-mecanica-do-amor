import Section from "../ui/Section";
import FlameDivider from "../ui/FlameDivider";
import Cta from "../ui/Cta";

export default function Oferta() {
  return (
    <Section id="oferta">
      <FlameDivider lineOnly />
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mt-6 mb-[22px]">
        Tudo que entra na Mecânica do Amor
      </h2>

      {/* Slot de imagem da oferta (bundle workshop + Oráculo) — o cliente adiciona depois.
          Trocar por <img src="/img/..."> quando a arte existir. */}
      <div className="photo w-full max-w-narrow mx-auto aspect-video flex items-center justify-center text-center px-6 mb-7">
        <span className="text-muted-token text-[13px] leading-relaxed max-w-[360px]">
          <strong className="block text-accent-strong font-eyebrow text-[10px] tracking-[0.18em] mb-2">
            IMAGEM DA OFERTA (inserir)
          </strong>
          Bundle: o workshop completo + o Oráculo das Chaves juntos.
        </span>
      </div>

      {/* Card único de oferta — sem duplicar preço */}
      <div
        className="card border-gold max-w-narrow mx-auto"
        style={{ boxShadow: "0 0 28px rgba(176,128,48,0.18)" }}
      >
        <div className="text-center">
          <span className="inline-block font-eyebrow text-[10px] tracking-[0.14em] bg-gold text-brown-900 px-[10px] py-[3px] rounded-pill mb-[14px]">
            OFERTA ÚNICA
          </span>
        </div>

        <ul className="check mb-0">
          <li>
            <strong>O workshop completo A Mecânica do Amor</strong> — a engrenagem
            inteira, na ordem certa
          </li>
          <li>
            <strong>Bônus: Oráculo das Chaves Ascensionais</strong> — pra
            consultar quando a cabeça embaralhar
          </li>
          <li>
            <strong>Acesso imediato</strong> — você começa hoje, no celular
          </li>
          <li>
            <strong>Garantia de 7 dias</strong> — risco zero (detalhe abaixo)
          </li>
        </ul>

        <div
          className="mt-5 pt-5 text-center"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <span className="block font-display font-bold text-gold text-[48px] leading-none">
            R$197
          </span>
          <span className="text-muted-token">
            à vista, ou parcelado no cartão
          </span>
          <div className="mt-5">
            <Cta to="checkout">QUERO COMEÇAR AGORA</Cta>
          </div>
        </div>
      </div>

      <p className="text-center max-w-[620px] mx-auto mt-7 text-accent-strong">
        <em>
          Quanto vale o trabalho de uma vida pra parar de repetir? Você já gastou
          muito mais que isso em terapia, em livro, em curso que não pegou na
          raiz.
        </em>
      </p>

      {/* Garantia */}
      <div className="text-center mt-12">
        <img
          src="/img/selo_garantia_incondicional.png"
          alt="Selo de garantia incondicional de 7 dias"
          className="block w-[140px] h-auto mx-auto mb-[18px]"
        />
        <h3 className="text-[22px] text-accent-strong mb-[8px]">
          Garantia incondicional de 7 dias.
          <br />O risco é meu, não seu.
        </h3>
        <p className="max-w-[560px] mx-auto mb-[14px] text-muted-token">
          Eu não quero o seu dinheiro se isso aqui não for pra você. Você tem 7
          dias inteiros pra entrar, assistir e sentir. Se nesse tempo você achar
          que não é pra você, é só mandar um e-mail pro nosso suporte pedindo o
          reembolso. Não tem pergunta, não tem formulário, não tem ninguém pra te
          convencer a ficar. Você não precisa justificar nada. A gente devolve
          cada centavo.
        </p>
        <p className="max-w-[560px] mx-auto mb-0 text-muted-token">
          Quem assume o risco de você experimentar sou eu. Se a Mecânica do Amor
          não te entregar o que eu prometi aqui, o problema é meu, não seu — e
          você sai sem ter perdido nada.
        </p>
        <p className="max-w-[520px] mx-auto mt-[14px] text-[13px] text-muted-token italic">
          Os 7 dias somam ao seu direito de arrependimento garantido por lei. Você
          está coberta dos dois lados.
        </p>
      </div>
    </Section>
  );
}
