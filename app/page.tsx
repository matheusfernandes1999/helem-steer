//Landing
'use client';
import React from 'react';
import Header from './Components/Header';
import Hero from './Landing/Hero';
import HelemProfile from './Landing/HelemProfile';
import {BrightonShowcase} from './Landing/Studies';
import SelectableList from './Components/List';
import Personalized from './Landing/Personalized';
import MentorshipPage from './Landing/Mentorship';
import LimitedSpaces from './Landing/LimitedSpaces';
import Accounts from './Landing/Accounts';
import Footer from './Landing/Footer';
import Final from './Landing/Final';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen overflow-x-hidden bg-semantic-background-primary text-text-primary">
      <Header />
      <Hero />
      <HelemProfile />
      <BrightonShowcase />
      <SelectableList 
        title="Essa mentoria é pra você que..."
          highlightedWord="é pra você"
          items={[
            "Já fala inglês e quer ensinar com confiança e método.",
            "Deseja dar aulas para um público exigente e bem remunerado.",
            "Busca reconhecimento e liberdade financeira como educador(a).",
            "Quer ter aulas bem planejadas, envolventes e com resultados reais.",
            "Sonha em viver da profissão e até dar aulas fora do Brasil.",
          ]}
      />
      <Personalized />
      <MentorshipPage />
      
      <LimitedSpaces />
      <Accounts />
      <Final />
      <Footer />
    </div>
  );
}