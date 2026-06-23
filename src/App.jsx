import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaServer, FaPalette, FaDatabase, FaDownload } from "react-icons/fa";
import {
  SiTailwindcss, SiPython, SiNodedotjs, SiOpenjdk, SiPhp, SiHtml5, SiReact, SiBootstrap, SiMysql, SiMongodb, SiDotnet, SiJavascript, SiCsswizardry,
} from "react-icons/si";
import { FaPlug } from "react-icons/fa";
import { Link } from "react-router-dom";
import NetworkBackground from "./components/NetworkBackground";

export default function App() {
  useEffect(() => {
    const savedPos = sessionStorage.getItem('scrollPos');
    if (savedPos) {
      window.scrollTo(0, parseInt(savedPos));
      sessionStorage.removeItem('scrollPos');
    }
  }, []);
  const [open, setOpen] = useState(false);

  const handleNavigation = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;

      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen h-full scroll-smooth pt-30">
      <NetworkBackground />
      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MENU LATERAL (DRAWER) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#1e1e1e] border-r border-white/10 p-8 shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full "
          }`}
      >
        <div className="flex items-center justify-between mb-10 text-gray-100">
          <h1 className="text-xl font-bold uppercase tracking-tighter opacity-50">
            Menu
          </h1>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-red-500 transition-colors text-2xl"
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-lg font-medium text-gray-100">
          {["intro", "sobre", "Form&Part", "projetos", "hab", "contato"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="hover:text-red-500 transition-all hover:translate-x-2 capitalize"
                >
                  {item === "hab" ? "Habilidades" : item.replace("&", " & ")}
                </button>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex items-center justify-between">

        {/* Botão hamburguer - esquerda */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 cursor-pointer group p-2"
        >
          <span className="block w-8 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
          <span className="block w-8 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
          <span className="block w-8 h-0.5 bg-white group-hover:bg-red-500 transition-colors"></span>
        </button>

        {/* NL - centralizado absolutamente */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-black  text-[rgb(255,46,46)]">
          NL
        </h1>

        {/* Direita */}
        <div className="flex items-center gap-4 text-white">
          <a
            href="/CV-Nathan Ariel Damasio Leão.pdf"
            download
            className="hidden sm:block text-xs font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-red-500 transition">
            BAIXAR CV
          </a>
          <div className="flex gap-3 text-3xl text-white">
            <a href="https://github.com/Nathan-ADL" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nathan-ariel-damasio-le%C3%A3o-7a64522b5/" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="max-w-[1200px] w-full mx-auto mt-10 bg-transparent px-20 py-6 rounded-xl  flex flex-col gap-80 ">
        <div id="intro" className="bg-transparent rounded text-white p-4">
          <div className="flex items-center justify-center gap-12 md:gap-20">
            {/* TEXTO */}
            <div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Nathan Ariel <br />
                <span className="text-[rgb(255,46,46)]">
                  Damasio Leão
                </span>
              </h1>
              <h2 className="text-2xl font-poppins font-medium tracking-widest uppercase">
                Técnico em <span className="text-[rgb(255,46,46)] ">Informática</span>
              </h2>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="/CV-Nathan Ariel Damasio Damasio Leão.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-2.5 bg-[rgb(255,46,46)] text-white text-xs font-bold tracking-widest rounded-[12px] hover:bg-white hover:text-black transition"
                >
                  <FaDownload className="text-sm" />
                  BAIXAR CV
                </a>
                <button
                  onClick={() => handleNavigation("projetos")}
                  className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white text-xs font-bold tracking-widest rounded-full hover:bg-[rgb(255,255,255)] hover:border-[rgb(255,255,255)] transition hover:text-black"
                >
                  PROJETOS
                </button>

                <button
                  onClick={() => handleNavigation("contato")}
                  className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white text-xs font-bold tracking-widest rounded-full hover:bg-[rgb(255,255,255)] hover:border-[rgb(255,255,255)] transition hover:text-black"
                >
                  CONTATO
                </button>
              </div>

            </div>

            {/* IMAGEM */}
            <div className="w-60 h-60 rounded-full overflow-hidden border-2">
              <img src="/NathanAriel-pfp.png" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="w-100 h-[2px] bg-gradient-to-r from-transparent via-[rgb(255,28,28)] to-transparent mx-auto" />


        <section id="sobre" className="min-h-20 rounded text-white p-4">
          <h2 className="text-5xl mb-5 font-poppins">
            Sobre{" "}
            <span className=" text-[rgb(255,46,46)]">
              Mim
            </span>
          </h2>

          <p className="text-xl">
            Atualmente sou aluno do curso tecnólogo de Desenvolvimento de
            Software Multiplataforna na Fatec unidade de São José dos Campos,
            com foco principalmente em no desenvolvimento de aplicações Web
            Full-Stack.
            <br />
            <br />
            Me formei no ensino médio técnico no curso de Informática na escola
            UNIVAP - Unidade centro,portanto assim experienciei diversas
            situações que favoreceram meu desenvolviment como técnico e que me
            permitiu o contato com a Informática antes de começar o ensino
            superior.
            <br />
            <br />
            Almejo seguir carreira na área e assim construir uma carreira a
            partir desse ponto
          </p>
        </section>

        {/*---------------------------------------------------------------------------------------------------------------------*/}
        <section
          id="Form&Part"
          className="relative min-h-20 text-white p-4 rounded-br-lg rounded-tl-lg rounded-tr-4xl rounded-bl-4xl"
        >
          <h1 className="text-5xl font-poppins">
            Formação &{" "}
            <span className="text-[rgb(255,46,46)]">Participações</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-15 p-2 items-start mt-10 grid-rows-[180px]">
            {/* CARD UNIVAP */}
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/univap-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />

              {/* Camada de escurecimento sobre a imagem no hover */}
              <div className="absolute inset-0 bg-[#1e1e1e]/0 group-hover:bg-[#1e1e1e]/80 transition-all duration-300" />

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/univap-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg transition-all duration-500
            group-hover:scale-90 group-hover:-translate-y-3"
                />

                <div>
                  <h2 className="text-xl font-bold">UNIVAP</h2>

                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    Técnico em Informática
                  </p>
                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    {"[Completo]"}
                  </p>

                  <p
                    className="text-sm opacity-0 max-h-0 overflow-hidden
              group-hover:opacity-100 group-hover:max-h-40
              transition-all duration-500"
                  >
                    Formação técnica que marcou o início da minha trajetória na
                    área de tecnologia, onde tive contato com lógica de
                    programação, banco de dados e desenvolvimento de sistemas.
                    Foi aqui que desenvolvi minha base e interesse pela área.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD FATEC */}
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60  cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/fatec-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-[#1e1e1e]/0 group-hover:bg-[#1e1e1e]/80 transition-all duration-300" />

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/fatec-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg transition-all duration-500
            group-hover:scale-90 group-hover:-translate-y-3"
                />

                <div>
                  <h2 className="text-xl font-bold">FATEC</h2>

                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    DSM - Desenvolvimento de Software
                  </p>
                  <p className="text-sm opacity-80 group-hover:opacity-0 transition duration-300">
                    {"[Em Curso]"}
                  </p>
                  <p
                    className="text-sm opacity-0 max-h-0 overflow-hidden
              group-hover:opacity-100 group-hover:max-h-40
              transition-all duration-500"
                  >
                    Experiência voltada ao desenvolvimento full-stack, com foco
                    em aplicações web modernas, APIs REST, banco de dados e boas
                    práticas de desenvolvimento. Participação ativa em projetos
                    acadêmicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-40 ml-2">
            <div className="flex items-center gap-4">
              <div className="w-[3px] h-7 bg-[rgb(255,28,28)] rounded-full shrink-0" />
              <span className="text-sm text-gray-300">2025 - Maratona de Programação (Univap)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[3px] h-7 bg-[rgb(255,28,28)] rounded-full shrink-0" />
              <span className="text-sm text-gray-300">2026 - Maratona de Programação (FATEC)</span>
            </div>
          </div>
        </section>

        <section id="projetos" className="min-h-20 text-white p-4">
          <h1 className="text-5xl font-poppins">
            Meus<span className="text-[rgb(255,46,46)]"> Projetos</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <Link
              to="/Projeto1"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 min-h-[150px]"
            >
              {/* Brilho de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">TCC</h2>
                <p className="text-sm text-gray-400">
                  Trabalho de Conclusão de Curso, sistema de emissão de notas de despesas
                </p>

                <div className="group/footer flex items-center gap-2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="transition-colors duration-300 group-hover/footer:text-red-400">
                    Ver projeto
                  </span>
                  <span className="transition-all duration-300 group-hover/footer:text-red-400 group-hover/footer:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/Projeto2"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 min-h-[150px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">Street Fungus</h2>
                <p className="text-sm text-gray-400">
                  Jogo de Luta feito para feira técnica no primeiro ano técnico
                </p>

                <div className="group/footer flex items-center gap-2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="transition-colors duration-300 group-hover/footer:text-red-400">
                    Ver projeto
                  </span>
                  <span className="transition-all duration-300 group-hover/footer:text-red-400 group-hover/footer:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/Projeto3"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 min-h-[150px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">Radar Cidadão</h2>
                <p className="text-sm text-gray-400">
                  Site projetado projetado com o intuito de auxiliar no busca por um deputado estadual permitindo analisar e observardados do mesmo
                </p>

                <div className="group/footer flex items-center gap-2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="transition-colors duration-300 group-hover/footer:text-red-400">
                    Ver projeto
                  </span>
                  <span className="transition-all duration-300 group-hover/footer:text-red-400 group-hover/footer:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/Projeto4"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 min-h-[150px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">Projeto Barbearia</h2>
                <p className="text-sm text-gray-400">
                  Site projetado como atividade de faculdade para funcionar como sistema de agendamento e gerenciamento de uma barbearia
                </p>

                <div className="group/footer flex items-center gap-2 mt-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="transition-colors duration-300 group-hover/footer:text-red-400">
                    Ver projeto
                  </span>
                  <span className="transition-all duration-300 group-hover/footer:text-red-400 group-hover/footer:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>



        <section id="hab" className="relative flex flex-col gap-16 py-20 items-center px-4">
          {/* TÍTULO */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-5xl md:text-6xl font-poppins text-white">
              Habili
              <span className="text-[rgb(255,28,28)]">
                dades
              </span>
            </h1>
            <div className="w-50 h-[2px] bg-gradient-to-r from-transparent via-[rgb(255,28,28)] to-transparent mt-1" />
          </div>

          {/* LINHAS HORIZONTAIS POR CATEGORIA */}
          <div className="w-full max-w-4xl border-t border-white/10">
            {[
              {
                title: "Backend",
                skills: [
                  { icon: <SiPython className="text-yellow-500" />, label: "Python" },
                  { icon: <SiDotnet className="text-purple-500" />, label: "C#" },
                  { icon: <SiOpenjdk className="text-orange-500" />, label: "Java" },
                  { icon: <SiPhp className="text-blue-400" />, label: "PHP" },
                  { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
                  { icon: <FaPlug className="text-gray-400" />, label: "APIs" },
                ],
              },
              {
                title: "Frontend",
                skills: [
                  { icon: <SiHtml5 className="text-orange-600" />, label: "HTML" },
                  { icon: <SiCsswizardry className="text-blue-600" />, label: "CSS" },
                  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
                  { icon: <SiReact className="text-cyan-400" />, label: "React" },
                  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind" },
                  { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap" },
                ],
              },
              {
                title: "Banco de Dados",
                skills: [
                  { icon: <SiMysql className="text-blue-500" />, label: "MySQL" },
                  { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
                ],
              },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-7 border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.02] px-2"
              >
                {/* RÓTULO DA CATEGORIA */}
                <div className="flex items-center gap-3 md:w-44 shrink-0 text-left">
                  <div className="w-[3px] h-7 bg-[rgb(255,28,28)] rounded-full" aria-hidden="true" />
                  <div className="w-20 w-[3px] rounded-full bg-[rgb(255,28,28)] mt-1" />
                  <h3 className="text-base text-white font-semibold uppercase tracking-wide">
                    {title}
                  </h3>
                </div>

                {/* FILEIRA DE SKILLS */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 justify-start md:justify-end flex-1">
                  {skills.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="relative mt-20 py-16 px-6 flex flex-col items-center text-center"
        >
          {/* Efeito de brilho de fundo (opcional, dá um toque premium) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/10 blur-[100px] -z-10"></div>

          <div className="space-y-4 mb-12">
            <h2 className="text-5xl font-black text-[rgb(255,46,46)]">
              Vamos conversar?
            </h2>
            <p className="text-white max-w-md mx-auto">
              Estou aberto a novas oportunidades e colaborações. Sinta-se à
              vontade para me chamar em qualquer uma das redes abaixo!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* GITHUB */}
            <a
              href="https://github.com/Nathan-ADL"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub className="text-2xl text-white group-hover:text-red-500 transition-colors" />
              <div className="text-left">
                <span className="text-white font-bold">GitHub</span>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/nathan-ariel-damasio-le%C3%A3o-7a64522b5/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#1e1e1e] border border-zinc-700/60 hover:border-[rgb(255,28,28)] rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-red-500 transition-colors" />
              <div className="text-left">

                <span className="text-white font-bold">LinkedIn</span>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:nathanarieldamasioleao@gmail.com"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[rgb(255,46,46)] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] shadow-xl"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="text-xl">✉️</span>
              </div>
              <div className="text-left">
                <span className="block text-xs text-white uppercase font-bold tracking-widest">
                  nathanarieldamasioleao@gmail.com
                </span>
                <span className="text-white font-bold">Email Me</span>
              </div>
            </a>
          </div>
        </section>
      </div>

      <div className="mt-10 flex justify-center ">
        <h1 className="text-2xl font-bold text-[rgb(255,46,46)] mb-5">
          NL
        </h1>
      </div>
    </div>
  );
}