import Image from "next/image";

export default function HelemProfile() {
  return (
    <section className="bg-[#7725c431] flex flex-col md:flex-row items-center justify-center rounded-2xl text-white w-[75vw] min-h-max relative overflow-hidden">
      {/* Desktop Image (absolute positioned) */}
      <div className="hidden md:block flex-shrink-0 self-end absolute left-0 bottom-0">
        <Image
          src="/images/sorrindo-helem.png"
          alt="Helem Steer"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Mobile Image (centered above text) */}
      <div className="md:hidden flex flex-row items-center mt-8">
        <Image
          src="/images/sorrindo-helem.png"
          alt="Helem Steer"
          width={200}
          height={200}
          className="rounded-xl"
        />
        <h2 className="text-2xl text-center font-semibold leading-snug text-gray-100">
          Uma trajetória <span className="text-purple-500">internacional</span>{" "}
          <br className="hidden md:block" />
          que vai <span className="text-purple-500">impulsionar a sua</span>
        </h2>
      </div>

      {/* Content Container */}
      <div className="hidden md:block text-left max-w-3xl md:ml-[320px] p-22">
        <h2 className="text-2xl md:text-4xl text-center font-semibold leading-snug text-gray-100">
          Uma trajetória <span className="text-purple-500">internacional</span>{" "}
          <br className="hidden md:block" />
          que vai <span className="text-purple-500">impulsionar a sua</span>
        </h2>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300">
          Helem Steer soma 26 anos de experiência no ensino de inglês, sendo 17 desses vividos na Inglaterra.
          Lá, atuou como professora, coordenadora e diretora em instituições de renome, convivendo diariamente
          com profissionais de diferentes países e culturas.
        </p>

        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-300">
          Essa vivência internacional proporcionou um domínio profundo dos métodos e padrões de ensino aplicados
          na Europa.
        </p>
      </div>

      <div className="block md:hidden text-center max-w-3xl px-6 h-full py-6 bg-[#7725c431]">
        <p className="text-left text-base md:text-lg text-gray-300">
          Helem Steer soma 26 anos de experiência no ensino de inglês, sendo 17 desses vividos na Inglaterra.
          Lá, atuou como professora, coordenadora e diretora em instituições de renome, convivendo diariamente
          com profissionais de diferentes países e culturas.
        </p>

        <p className="text-left text-base md:text-lg text-gray-300">
          Essa vivência internacional proporcionou um domínio profundo dos métodos e padrões de ensino aplicados
          na Europa.
        </p>
      </div>

    </section>
  );
}
