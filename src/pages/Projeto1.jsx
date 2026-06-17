import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import {
  SiPython, SiMysql
} from "react-icons/si";

import img1 from "../img/projeto1/pj1-1.png";
import img2 from "../img/projeto1/pj1-2.png";
import img3 from "../img/projeto1/pj1-3.png";
import img4 from "../img/projeto1/pj1-4.png";

function Projeto1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const imagens = [img1, img2, img3,img4];
  const [indexAtual, setIndexAtual] = useState(0);
  const [imagemAberta, setImagemAberta] = useState(false);

  const proximaImagem = () =>
    setIndexAtual((prev) => (prev < imagens.length - 1 ? prev + 1 : prev));
  const imagemAnterior = () =>
    setIndexAtual((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="bg-[#121212] min-h-screen flex justify-center px-4">

      <div
        className="w-full max-w-[800px] p-6 rounded-xl  relative text-white mt-10 mb-10"

      >
        {/* Botão voltar */}
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-red-500 text-2xl font-bold hover:-translate-x-1 transition mb-4 block"
        >
          ←
        </button>
        <p className="bg-gradient-to-r from-red-500  to-pink-400 bg-clip-text text-transparent text-xl">Projeto Escolar</p>


        <h1 className="text-4xl font-bold mb-2 mt-3">
          TCC

        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mb-6"></div>

        {/* IMAGEM PRINCIPAL */}
        <div className="relative group">
          <img
            src={imagens[indexAtual]}
            onClick={() => setImagemAberta(true)}
            className="w-full h-[400px] object-cover rounded-lg cursor-pointer border border-white/10"
          />

          <div className="flex flex-wrap gap-2 mt-5 mb-10">
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                  "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
              }}
            >
              <SiPython className="text-yellow-500" /> Python
            </span>
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                  "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
              }}
            >
              <SiMysql className="text-blue-500 text-xl" /> MySQL
            </span>
          </div>

          {indexAtual > 0 && (
            <button
              onClick={imagemAnterior}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-400"
            >
              ←
            </button>
          )}
          {indexAtual < imagens.length - 1 && (
            <button
              onClick={proximaImagem}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-400"
            >
              →
            </button>
          )}
        </div>

        {/* MINIATURAS */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {imagens.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setIndexAtual(i)}
              className={`w-24 h-16 object-cover rounded cursor-pointer border-2 transition ${indexAtual === i ? "border-red-500" : "border-white/10"
                }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-8 mb-2">
          <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
          <h3 className="text-xl text-gray-400 font-semibold ">
            Descrição
          </h3>
        </div>
        <p className="mt-6 text-gray-400">
          Projeto desenvolvido como Trabalho de Conclusão de Curso com o objetivo de substituir um sistema corporativo instável e com limitações operacionais. A solução foi construída em Python, utilizando Tkinter e CustomTkinter para a interface gráfica e MySQL para gerenciamento dos dados.
          <br /><br />
          O sistema permite o cadastro, edição, consulta e exclusão de clientes, eventos e notas de despesas, além de automatizar a organização das informações e a geração de documentos em PDF.
          <br /><br />
          Durante o desenvolvimento, foram aplicados conceitos de análise de requisitos e modelagem de dados, resultando em uma aplicação eficiente, que reduz erros manuais e melhora o controle financeiro da empresa.
        </p>
      </div>

      {/* MODAL */}
      {imagemAberta && (
        <div
          onClick={() => setImagemAberta(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative group">
            <img
              src={imagens[indexAtual]}
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />

            {indexAtual > 0 && (
              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-400"
              >
                ←
              </button>
            )}
            {indexAtual < imagens.length - 1 && (
              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-400"
              >
                →
              </button>
            )}

            <button
              onClick={() => setImagemAberta(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-3xl transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projeto1;