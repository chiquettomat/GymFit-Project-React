import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Generator from "./components/Generator";

function App() {
  return (
    <main
      className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800
       to-slate-950 text-white text-sm sm:text-base"
    >
      <Hero></Hero>
      <Generator></Generator>
      <Workout></Workout>
    </main>
  );
}

export default App;
