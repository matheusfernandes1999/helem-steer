"use client";
import React from "react";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";
import Image from "next/image";
import Button from "../Components/Button";

const benefits = [
  "Mentoria individual e personalizada",
  "Acompanhamento durante todo o período da mentoria",
  "Plano de ação prático",
  "Materiais de apoio exclusivos",
  "Orientação sobre posicionamento e precificação de aulas",
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#7725c450] flex flex-col items-center w-full py-8">
      <Text type="subtitle" className="text-center mb-4 mx-1 md:mx-0">
        <Span>Investimento</Span> em uma nova fase<br/>da sua carreira
      </Text>

      <div className="flex flex-col md:flex-row items-start justify-center md:gap-28 gap-4 w-full md:mt-12 mt-4">
        <div>
          <ul className="text-lg text-white space-y-3 mx-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="rounded-md px-4 md:px-10 py-3 text-md md:text-xl bg-semantic-background-list hover:bg-primary-helem-400 text-white text-center font-medium transition-all ease-in-out duration-300"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-right text-2xl text-white max-w-sm px-4 md:px-0">
            A mentoria completa tem o valor de <Span>R$ 12.000,00</Span> com opção de parcelamento em até 10x no cartão.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/images/perfil-helem.png"
              alt="Description"
              width={200}
              height={200}
            />
            <Button
              text={
                <>
                  <p>
                    Quero agendar uma<br />conversa com a Helem
                  </p>
                </>
              }
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
