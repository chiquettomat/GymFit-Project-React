export default function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col gap-10 justify-center items-center 
    text-center max-w-[800px] w-full mx-auto p-4"
    >
      <div className="flex flex-col gap-4 ">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Gym<span className="text-blue-400">Fit</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        GymFit: Seu Treino, Sua Conquista! Chega de planilhas genéricas e
        treinos monótonos! O GymFit é o{" "}
        <span className="text-blue-400 font-medium">
          personal trainer digital
        </span>{" "}
        que cria seu treino perfeito em segundos. Como funciona? Escolha seu
        objetivo, seu perfil e Clique em GERAR. Receba um treino 100%
        personalizado na hora!{" "}
        <span className="text-blue-400 font-medium">
          Transforme seu corpo com um clique.
        </span>{" "}
        GymFit - Seu corpo, seu código!
      </p>
      <button
        className=" px-8 py-4 rounded-md border-[2px] bg-stone-950 border-blue-400 
      border-solid blueShadow duration-200"
      >
        <p>Aceitar & Começar</p>
      </button>
    </div>
  );
}
