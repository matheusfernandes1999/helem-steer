// components/Mentoria.tsx
import React from 'react';
import Text from '../Components/Text';
import Span from '../Components/TextGradient';

export default function Mentoria() {
  return (
    <section className="bg-black text-white w-full mt-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Imagem esquerda */}
        <img
          src="/images/quadro-helem.png"
          alt="Professora ensinando"
          className="object-cover w-full h-auto rounded-br-xl"
        />

        {/* Texto principal */}
        <div className='flex flex-col items-center px-2 md:px-0'>
          <Text type="subtitle" className="mb-4 text-center md:text-left">
            Mentoria de verdade <br />
            com quem <Span>vive o que ensina</Span>
          </Text>
          <Text type='info' className="text-gray-300 text-base leading-relaxed md:max-w-full max-w-[75%]">
            Embora mentorias em grupo possam ser extremamente enriquecedoras — e também façam parte do
            trabalho da Helem — esta mentoria individual oferece um nível de personalização e profundidade
            que permite resultados ainda mais rápidos e alinhados aos seus objetivos específicos. É um
            acompanhamento direto com uma especialista que conhece as dores e os atalhos da carreira docente.
          </Text>
        </div>
      </div>

      {/* Bloco inferior */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Lista de benefícios */}
        <div className='flex flex-col items-center pt-12 mx-8'>
          <h3 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
            Oportunidade <Span>única</Span>
          </h3>
          <ul className="space-y-4 w-fit text-center">
            {[
              'Encontros individuais por videoconferência',
              'Um plano estratégico personalizado',
              'Feedbacks práticos, diretos e construtivos',
              'Correção e análise de aulas reais',
              'Acesso direto à Helem durante toda a mentoria',
            ].map((item, index) => (
              <li
                key={index}
                className={`px-4 py-3 rounded-md text-sm font-medium bg-semantic-background-list hover:bg-primary-helem-500 duration-300 ease-linear transition-all`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem direita */}
        <img
          src="/images/ensinando-helem.png"
          alt="Professora explicando"
          className="hidden md:block object-cover w-full h-auto rounded-tl-xl bg-white"
        />
      </div>

      <div className="hidden md:flex flex-col items-center justify-center w-full min-h-[20vh] bg-[#7725c470] text-center py-4">
        <p className="text-primary-helem-500 font-semibold text-xl md:text-4xl">
          Vagas limitadas — apenas para quem leva a profissão a sério.
        </p>
      </div>

      <div className='relative flex md:hidden flex-col items-center rounded-t-lg overflow-hidden'>
        <img
          src="/images/ensinando-helem.png"
          alt="Professora explicando"
          className="object-cover w-full h-auto rounded-t-lg"
        />
        <div className="absolute inset-0 w-full h-full bg-purple-700 opacity-30 pointer-events-none rounded-t-lg" />
        <div className=" inset-0 flex flex-col items-center justify-center w-full min-h-[20vh] text-center py-4">
          <p className="text-primary-helem-500 font-semibold text-xl">
        Vagas limitadas — apenas para quem leva a profissão a sério.
          </p>
        </div>
      </div>


    </section>
  );
}
