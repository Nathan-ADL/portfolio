import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";
import {
    SiPython, SiMysql, SiDocker, SiGit, SiGithub
} from "react-icons/si";

import img1 from "../img/projeto4/pj4-1.png";
import img2 from "../img/projeto4/pj4-2.png";
import img3 from "../img/projeto4/pj4-3.png";
import img4 from "../img/projeto4/pj4-4.png";
import img5 from "../img/projeto4/pj4-5.png";
import img6 from "../img/projeto4/pj4-6.png";
import img7 from "../img/projeto4/pj4-7.png";

function Projeto4() {
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

                <p className="text-[rgb(255,28,28)] text-xl font-poppins">Projeto Acadêmico - FATEC</p>


                <h1 className="text-4xl font-bold mb-5 mt-3 font-poppins">
                    Barbearia NL

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
                        <span
                            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            style={{
                                background:
                                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                                    "linear-gradient(to right, rgb(255,28,28), rgb(255,28,28)) border-box",
                            }}
                        >
                            <SiDocker className="text-blue-500 text-xl" /> Docker
                        </span>

                    </div>
                    <a href="https://github.com/Nathan-ADL/atividade4" target="_blank" className="hover:text-[rgb(255,28,28)] text-blue-400 text-xl">Repositório no GitHub</a>
                    <p className="text-gray-400">Verificar no READE.md e GUIA_USUARIO.md o passo a passo</p>
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
                    Sistema web de gerenciamento e agendamento para barbearias desenvolvido como projeto acadêmico, com foco na automatização do processo de marcação de horários e administração dos serviços oferecidos.

                    <br /><br />

                    A plataforma possui dois perfis de acesso. Os clientes podem criar uma conta, realizar login, visualizar os serviços disponíveis e agendar horários de acordo com sua preferência, selecionando os procedimentos desejados por meio de uma interface simples e intuitiva.

                    <br /><br />

                    Já os barbeiros podem se cadastrar utilizando uma chave de acesso especial, garantindo maior controle sobre os profissionais autorizados na plataforma. Além disso, possuem acesso a funcionalidades administrativas, como cadastro e gerenciamento de serviços, definição de horários de funcionamento, configuração de dias de folga, criação de horários especiais e gerenciamento completo da agenda.

                    <br /><br />

                    Um dos principais diferenciais deste projeto foi a utilização do Docker para containerização da aplicação. Esta foi minha primeira experiência trabalhando com containers, permitindo configurar e executar todo o ambiente de desenvolvimento de forma padronizada e isolada. O uso do Docker tornou o processo de implantação mais organizado e me proporcionou uma compreensão prática sobre ambientes reproduzíveis, integração entre serviços e boas práticas modernas de desenvolvimento.

                    <br /><br />

                    Durante o desenvolvimento foram aplicados conceitos de autenticação, controle de permissões, integração entre front-end e back-end, manipulação de banco de dados e gerenciamento de regras de negócio relacionadas ao sistema de agendamentos.
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

export default Projeto4;