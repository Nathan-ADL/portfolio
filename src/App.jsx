import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss, SiPython, SiNodedotjs, SiOpenjdk, SiPhp, SiHtml5, SiReact, SiBootstrap, SiMysql, SiMongodb, SiDotnet, SiJavascript, SiCsswizardry,
} from "react-icons/si";
import { FaPlug } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="bg-[#121212] min-h-screen h-full scroll-smooth pt-30">
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
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
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
</nav >

    {/* CONTEÚDO */ }
    < div className = "max-w-[1200px] w-full mx-auto mt-10 bg-transparent px-20 py-6 rounded-xl  flex flex-col gap-80 " >
        <div id="intro" className="bg-transparent rounded text-white p-4">
          <div className="flex items-center gap-40">
            {/* TEXTO */}
            <div>
              <h2 className="text-red-500 font-mono font-medium tracking-widest uppercase">
                Estudante de Informática
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Nathan Ariel <br />
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Damasio Leão
                </span>
              </h1>
            </div>

            {/* IMAGEM */}
            <div className="w-55 h-55 rounded-full overflow-hidden border-2 ">
              <img
                src="/NathanAriel-pfp.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <section id="sobre" className="min-h-20 rounded text-white p-4">
          <h2 className="text-5xl mb-5">
            Sobre{" "}
            <span className=" bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
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

  {/*---------------------------------------------------------------------------------------------------------------------*/ }
        <section
          id="Form&Part"
          className="min-h-20 text-white p-4 rounded-br-lg rounded-tl-lg rounded-tr-4xl rounded-bl-4xl  border-black"
        >
          <h1 className="text-5xl">
            Formação &{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Participações
            </span>
          </h1>
          <div className="grid md:grid-cols-2 gap-15 p-2 items-start mt-10">
            {/* CARD UNIVAP */}
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden border-2 border-black cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/univap-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:bg-black/40"
                style={{
                  background:
                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                    "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
                  opacity: 0.8,
                }}
              ></div>

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/univap-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg
        transition-all duration-500 
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
            <div className="group relative min-h-35 hover:min-h-70 rounded-xl overflow-hidden border-2 border-black cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 -m-2">
              <img
                src="/fatec-bg.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 translate-y-10 scale-110
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500"
              />

              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:bg-black/40"
                style={{
                  background:
                    "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                    "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
                  opacity: 0.8,
                }}
              ></div>

              <div className="relative z-10 flex items-start gap-3 p-4">
                <img
                  src="/fatec-logo.jpg"
                  className="w-20 h-20 object-cover rounded-lg
        transition-all duration-500 
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
        </section>

        <section
          id="projetos"
          className="min-h-20 text-white p-4 "
        >
          <h1 className="text-5xl">
            Projetos
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <Link
              to="/Projeto1"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden border-2 border-transparent cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 max-h-30"
              style={{
                background:
                  "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                  "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
              }}
            >
              {/* Brilho de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h" />
              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">TCC</h2>
                <p className="text-sm text-gray-400">
                  Trabalho de Conclusão de Curso,sistema de emissão de notas de despesas
                </p>
                {/* Linha de rodapé */}
                <div className="flex items-center gap-2 mt-2 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver projeto</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link
              to="/Projeto2"
              onClick={() => sessionStorage.setItem('scrollPos', window.scrollY)}
              className="group relative rounded-xl overflow-hidden border-2 border-transparent cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 max-h-30"
              style={{
                background:
                  "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                  "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
              }}
            >
              {/* Brilho de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h" />
              <div className="relative z-10 p-5 flex flex-col gap-3">
                <h2 className="text-xl font-bold">Street Fungus</h2>
                <p className="text-sm text-gray-400">
                  Jogo de Luta feito para feira técnica no primeiro ano técnico
                </p>
                {/* Linha de rodapé */}
                <div className="flex items-center gap-2 mt-2 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver projeto</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section id="hab" className="flex flex-col gap-12 py-10 items-center text-center">
          {/* TÍTULO */}
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-white">Habilidades</h1>
            <div className="w-full h-1 bg-gradient-to-r from-red-500 to-pink-500 mt-3"></div>
          </div>

          {/* LISTA DE HABILIDADES */}
          <div className="flex flex-col gap-10 items-center w-full">
            {/* BACKEND */}
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-xl text-gray-400 font-semibold">Backend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <SiPython className="text-yellow-500" />, label: "Python" },
                  { icon: <SiDotnet className="text-purple-500" />, label: "C#" },
                  { icon: <SiOpenjdk className="text-orange-500" />, label: "Java" },
                  { icon: <SiPhp className="text-blue-400" />, label: "PHP" },
                  { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
                  { icon: <FaPlug className="text-gray-400" />, label: "APIs" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                        "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
                    }}
                  >
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* FRONTEND */}
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-xl text-gray-400 font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <SiHtml5 className="text-orange-600" />, label: "HTML" },
                  { icon: <SiCsswizardry className="text-blue-600" />, label: "CSS" },
                  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
                  { icon: <SiReact className="text-cyan-400" />, label: "React" },
                  { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind" },
                  { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                        "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
                    }}
                  >
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* BANCO DE DADOS */}
            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-xl text-gray-400 font-semibold">Banco de Dados</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { icon: <SiMysql className="text-blue-500 text-xl" />, label: "MySQL" },
                  { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-transparent text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(#1e1e1e, #1e1e1e) padding-box, " +
                        "linear-gradient(to right, rgb(255,28,28), rgb(243,98,178)) border-box",
                    }}
                  >
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="relative mt-20 py-20 px-6 rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center text-center"
        >
          {/* Efeito de brilho de fundo (opcional, dá um toque premium) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/10 blur-[100px] -z-10"></div>

          <div className="space-y-4 mb-12">
            <h2 className="text-5xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Vamos conversar?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
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
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#1e1e1e] border border-white/10 rounded-2xl transition-all duration-300 hover:border-red-500/50 hover:-translate-y-1 shadow-xl"
            >
              <FaGithub className="text-2xl text-white group-hover:text-red-500 transition-colors" />
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase font-bold tracking-widest">
                  Follow
                </span>
                <span className="text-white font-bold">GitHub</span>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/nathan-ariel-damasio-le%C3%A3o-7a64522b5/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#1e1e1e] border border-white/10 rounded-2xl transition-all duration-300 hover:border-red-500/50 hover:-translate-y-1 shadow-xl"
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-red-500 transition-colors" />
              <div className="text-left">
                <span className="block text-xs text-gray-500 uppercase font-bold tracking-widest">
                  Connect
                </span>
                <span className="text-white font-bold">LinkedIn</span>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:nathanarieldamasioleao@gmail.com"
              className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] shadow-xl"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="text-xl">✉️</span>
              </div>
              <div className="text-left">
                <span className="block text-xs text-white/70 uppercase font-bold tracking-widest">
                  Send mail
                </span>
                <span className="text-white font-bold">Email Me</span>
              </div>
            </a>
          </div>
        </section>
      </div >

    <div className="mt-10 flex justify-center ">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[rgb(255,28,28)] to-[rgb(243,98,178)] bg-clip-text text-transparent mb-5">
        NL
      </h1>
    </div>
    </div >
  );
}
