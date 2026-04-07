import { useNavigate } from "react-router-dom";

function Projeto1() {
  const navigate = useNavigate();

  return (
    <div className="bg-[rgb(67,67,67)] min-h-screen pt-30 flex justify-center">

      <div className="bg-white w-full max-w-[800px] min-h-20 p-6 rounded-xl shadow-lg relative">

        {/* SETA CLEAN COM ANIMAÇÃO */}
        <button
          onClick={() => navigate(-1)}
          className="
            absolute top-4 left-4 
            text-gray-700 text-2xl font-bold 
            transition-transform duration-200 
            hover:-translate-x-1
            select-none
          "
        >
          ←
        </button>

        <h1 className="text-2xl font-bold mt-10">Projeto 1</h1>
        <p>Conteúdo…</p>

      </div>

    </div>
  );
}

export default Projeto1;