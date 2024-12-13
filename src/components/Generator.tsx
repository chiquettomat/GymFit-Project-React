import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/workouts-gymfit";
import SectionWrapper from "./SectionWrapper";

function Header(props: any) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strenght_power");

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper
      header={"Gerar o seu treino"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Escolha seu tipo de treino"}
        description={"Selecione entre os tipos de treino que deseja criar"}
      ></Header>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type: any, typeIndex) => {
          return (
            <button
              className="bg-slate-950 border border-blue-400 py-3 rounded-lg 
              duration-200 hover:border-blue-600"
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      {/* --------------------------------------------------------------- */}
      <Header
        index={"02"}
        title={"Escolha o músculo alvo"}
        description={"Selecione os músculos a serem destruidos"}
      ></Header>
      <div
        className="bg-slate-950 border border-solid border-blue-400  
      rounded-lg flex flex-col"
      >
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && <div>modal</div>}
      </div>
      {/* --------------------------------------------------------------- */}
      <Header
        index={"03"}
        title={"Escolha seu tipo de treino"}
        description={"Selecione entre os tipos de treino que deseja criar"}
      ></Header>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme: any, schemeIndex) => {
          return (
            <button
              className="bg-slate-950 border border-blue-400 py-3 rounded-lg 
              duration-200 hover:border-blue-600"
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
