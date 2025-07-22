import SlidingSquares from "../Components/Slider";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";

export default function Personalized() {
  return (
    <div className="flex flex-col items-center gap-3 w-full mt-8">
      
    <div className="flex flex-col items-left gap-2 mx-4">
        <Text type="subtitle"><Span>Mentoria</Span> prática, profunda e personalizada</Text>
        <Text type="info">Você aprenderá tudo o que não te ensinaram sobre ser um(a) professor(a) de inglês de elite:</Text>
    </div>

      <SlidingSquares
        topRowSquares={[
          { text: "Técnicas internacionais de ensino (CLT, Lexical Approach, TBLT, ESA)", width: 2 },
            { text: "Avaliação, correção e feedback que funcionam", width: 1 },
            { text: "Aulas online e presenciais para diferentes perfis", width: 1 },
            { text: "Como se posicionar no mercado e cobrar valores premium", width: 1.5 }
        ]}
        bottomRowSquares={[
            { text: "Planejamento de aulas de alto impacto", width: 1 },
            { text: "Como ensinar fala, leitura, escrita, escuta, gramática e vocabulário com naturalidade", width: 2 },
            { text: "Estratégias para atrair e manter alunos seletos", width: 1.5 },
        ]}
      />
    </div>
  );
}
