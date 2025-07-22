import Button from "../Components/Button";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full bg-[#7725c450] text-center pt-0 md:pt-12 pb-0 md:pb-12">
      <Text type="subtitle" className="px-1 md:px-0">
        Você quer ser <Span>apenas mais um</Span> professor... <Span>ou</Span>{" "}
        um profissional de <Span>referência?</Span>
      </Text>

      <Text type="info" className="max-w-[60%] text-primary-helem-500 opacity-75">
        Chegou a hora de dar o próximo passo. Com a orientação certa, você pode
        ensinar com confiança, conquistar alunos de alto padrão e viver com
        liberdade por meio do ensino de idiomas.
      </Text>

      <Button text={"Sim, quero ser mentorado(a) pela Helem Steer!"} />

    </div>
  );
}
