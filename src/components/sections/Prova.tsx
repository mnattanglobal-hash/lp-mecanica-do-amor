import Section from "../ui/Section";
import Quote from "../ui/Quote";
import Cta from "../ui/Cta";

export default function Prova() {
  return (
    <Section narrow tone="dark">
      <h2 className="text-[clamp(28px,6vw,40px)] text-center mb-[22px]">
        Quem está te falando isso já foi você.
      </h2>
      <img
        src="img/durga_solo.jpg"
        alt="Durga, hoje"
        className="block w-full h-auto rounded-md border border-[color:var(--border)] shadow-[var(--card-shadow)] mt-2 mb-7"
      />
      <p className="mb-[18px]">Eu não aprendi isso em livro. Eu aprendi caída no chão.</p>
      <Quote>
        "Eu já fui uma mulher que ama demais, e eu não desejo isso pra ninguém.
        Sofri tanto com o término de um relacionamento a ponto de chorar todos os
        dias por 6 meses. Na primeira semana a tristeza foi tanta que eu tive
        pneumonia. A minha vontade era de morrer."
      </Quote>
      <Quote>
        "Toda a minha vida estava voltada para ele, todos meus planos, todo o meu
        propósito girava em torno do relacionamento, e quando ele terminou comigo
        não tinha sobrado absolutamente nada. Pra completar, minha mãe tinha
        acabado de falecer."
      </Quote>
      <p className="mb-[18px]">
        Levei perto de um ano pra levantar. E quando levantei, jurei pra mim
        mesma que nunca mais. Não que nunca mais ia amar. Que nunca mais ia me
        perder desse jeito.
      </p>
      <p className="mb-[18px]">
        Aí começou o trabalho. O duro. Olhar pra dentro e ver as minhas sombras,
        os meus jogos, a minha carência, a minha parte de menina que queria ser
        salva. Foi feio. Mas foi ali que eu achei o que eu procurava a vida
        inteira fora.
      </p>
      <Quote>
        "Achei o meu tesouro na minha sombra. Hoje sou uma mulher emocionalmente
        curada, independente, que tem propósitos próprios e vida própria."
      </Quote>
      <p className="mb-[18px]">
        E a prova de fogo veio depois. A relação mais difícil da minha vida foi
        amar alguém que, por muito tempo, não me amava de volta. Antes, isso
        teria me destruído de novo. Dessa vez eu fiz diferente. Eu amei, e ao
        mesmo tempo aceitei o direito dele de não me amar, sem me apagar, sem
        implorar, sem deixar de ser eu.
      </p>
      <Quote>
        "Então foi um trabalho muito grande que eu fiz internamente de aceitar
        conviver com ele, mesmo ele não me amando, aceitar o direito dele de não
        me amar."
      </Quote>
      <p className="mb-[18px]">
        Hoje estou com o homem da minha vida. Há doze anos. Um companheiro que me
        ama, me respeita, e que antes de tudo é o meu melhor amigo.
      </p>

      <img
        src="img/casal_durga_anki.jpg"
        alt="Durga e o companheiro, hoje — o amor que durou"
        className="block w-full h-auto rounded-md border border-[color:var(--border)] shadow-[var(--card-shadow)] my-7"
      />

      <Quote>
        "Sabe qual que é o melhor amor que você pode ter? É o seu melhor amigo.
        Seu parceiro tem que ser o seu melhor amigo. Isso é o amor que dura."
      </Quote>
      <p className="mb-0">
        Tudo o que está na Mecânica do Amor é o caminho que eu fiz. Não é teoria.
        É o mapa de como eu saí de querer morrer pra construir o amor que dura.
      </p>

      <div className="mt-9">
        <Cta>QUERO ESSE CAMINHO</Cta>
      </div>
    </Section>
  );
}
