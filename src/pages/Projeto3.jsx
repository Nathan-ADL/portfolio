import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import {
    SiPython, SiMysql, SiHtml5, SiBootstrap, SiFlask, SiGit, SiGithub
} from "react-icons/si";
import { FaPlug } from "react-icons/fa";
import img1 from "../img/projeto3/pj3-1.png";
import img2 from "../img/projeto3/pj3-2.png";
import img3 from "../img/projeto3/pj3-3.png";
import img4 from "../img/projeto3/pj3-4.png";
import img5 from "../img/projeto3/pj3-5.png";
import img6 from "../img/projeto3/pj3-6.png";
import img7 from "../img/projeto3/pj3-7.png";

function Projeto3() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const location = useLocation();

    const handleVoltar = () => {
        if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const imagens = [img1, img2, img3, img4, img5, img6, img7];
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
                    onClick={handleVoltar}
                    className="text-white hover:text-red-500 text-2xl font-bold hover:-translate-x-1 transition mb-4 block"
                >
                    ←
                </button>

                <p className="text-[rgb(255,28,28)] text-xl font-poppins">Projeto Semestral - FATEC</p>


                <h1 className="text-4xl font-bold mb-5 mt-3 font-poppins">
                    Radar Cidadão
                </h1>


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
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiPython className="text-yellow-500" /> Python
                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiMysql className="text-blue-500 text-xl" /> MySQL
                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiHtml5 className="text-orange-500 text-xl" /> MySQL
                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiFlask className="text-blue-500 text-xl" /> Flask
                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <FaPlug className="text-gray-400 text-xl" /> Flask
                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiGit className="text-orange-500 text-xl" /> Git

                        </span>
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiGithub className="text-white text-xl" /> GitHub
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
                            className={`w-24 h-16 object-cover rounded cursor-pointer border-2 transition ${indexAtual === i ? "border-[rgb(255,28,28)] border-2" : "border-white/10"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-3 mt-8 mb-2">
                    <div className="w-[3px] h-12 bg-gradient-to-b from-transparent via-[rgb(255,28,28)] to-transparent" />


                    <h3 className="text-xl text-gray-400 font-semibold ">
                        Descrição
                    </h3>
                </div>
                <p className="mt-6 text-gray-400">
                    Projeto semestral de faculdade desenvolvido para democratizar o acesso a dados públicos da Câmara dos Deputados. A aplicação consome informações diretamente da API oficial e as transforma em gráficos, estatísticas e visualizações intuitivas, tornando a navegação muito mais simples para o usuário comum.

                    <br /><br />

                    O sistema permite consultar informações sobre parlamentares, gastos públicos, partidos, proposições e atividades legislativas, apresentando os dados de maneira organizada e acessível.

                    <br /><br />

                    Além do consumo e tratamento de dados via API REST, o projeto foi construído com foco em experiência do usuário, responsividade e clareza na apresentação das informações, buscando aproximar a população dos dados governamentais e incentivar decisões mais informadas.
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
                            className="absolute top-2 right-2 text-gray-400 hover:text-[rgb(255,28,28)] text-3xl transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projeto3;