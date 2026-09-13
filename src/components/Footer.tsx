import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="px-40 mt-12">
      {/* Features */}
      <div className="bg-[#1f1208] px-10 pt-10 pb-5 grid grid-cols-4 gap-5">
        {/* W */}
        <div className="border-r border-[#D28a4C] pr-8">
          <div className="w-18 h-18 rounded-full bg-[#D28A4C] flex items-center justify-center text-black font-bold text-2xl mb-4">W</div>
          <h4 className="font-bold mb-2 text-lg text-[#F5F1EB]">Segurança da carteira</h4>
          <p className="text-[#CFB28C] text-sm leading-relaxed pr-10">Proteja sua carteira e colecione arte digital verificada com confiança.</p>
        </div>

        {/* C */}
        <div className="border-r border-[#D28a4C] pr-8">
          <div className="w-18 h-18 rounded-full bg-[#D28A4C] flex items-center justify-center text-black font-bold text-2xl mb-4">C</div>
          <h4 className="font-bold mb-2 text-lg text-[#F5F1EB]">Criadores em destaque</h4>
          <p className="text-[#CFB28C] text-sm leading-relaxed pr-10">Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.</p>
        </div>

        {/* D */}
        <div className="border-r border-[#D28a4C] pr-8">
          <div className="w-18 h-18 rounded-full bg-[#D28A4C] flex items-center justify-center text-black font-bold text-2xl mb-4">D</div>
          <h4 className="font-bold mb-2 text-lg text-[#F5F1EB]">Alertas de lançamentos</h4>
          <p className="text-[#CFB28C] text-sm leading-relaxed pr-10">Receba calendários de cunhagem, novidades de listas de acesso e análises do mercado.</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-3">Antecipe-se ao próximo lançamento</h4>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="digite seu e-mail..."
              className="flex-1 bg-[#38220F] text-[#CFB28C] text-xs px-3 py-2 rounded-l outline-none placeholder:text-[#CFB28C]"
            />
            <button className="bg-[#D28A4C] text-black text-lg px-4 py-2 rounded-r font-bold">Enviar</button>
          </div>
          <p className="text-[#CFB28C] text-sm leading-relaxed">Receba lançamentos selecionados, histórias de criadores e novidades do mercado.</p>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-[#38220F] grid grid-cols-4 gap-8 px-10 py-7 items-center">
        <span className="font-bold text-[#F5F1EB]">KURIO</span>
        <span className="text-[#F5F1EB]">Feito para colecionadores, criadores e cultura</span>
        <span className="text-[#F5F1EB]">contato@email.com</span>
        <span className="text-[#F5F1EB]">+55 11 4002 8922</span>
      </div>

      {/* Links */}
      <div className="bg-[#1f1208] grid grid-cols-4 gap-8 px-10 py-8">
        <div>
          <h5 className="font-bold text-lg mb-4">Meu perfil</h5>
          {["Meu perfil", "Minha coleção", "Atividade", "Estúdio do criador", "Lista de interesse"].map(l => (
            <p key={l} className="text-[#F5F1EB] mb-2 cursor-pointer">{l}</p>
          ))}
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Central de ajuda</h5>
          {["Central de ajuda", "Como comprar NFTs", "Carteira e segurança", "Política do mercado", "Denunciar item"].map(l => (
            <p key={l} className="text-[#F5F1EB] mb-2 cursor-pointer">{l}</p>
          ))}
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Coleções</h5>
          {["Arte digital", "Fotografia", "Música", "Arte 3D", "Utilidade"].map(l => (
            <p key={l} className="text-[#F5F1EB] text- mb-2 cursor-pointer hover:text-white">{l}</p>
          ))}
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Redes sociais</h5>
          <div className="flex gap-2 mb-6">
  {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
    <div
      key={index}
      className="w-8 h-8 border border-[#D28A4C] rounded flex items-center justify-center text-[#D28A4C] cursor-pointer hover:bg-[#D28A4C] hover:text-black transition"
    >
      <Icon size={14} />
    </div>
            ))}
          </div>
          <h5 className="font-bold text-lg mb-3">Carteiras compatíveis</h5>
          <div className="border border-[#D28A4C] mr-11 bg-[#38220F] font-bold rounded px-2 py-1 text-[#D28A4C] text-[10px]">
            METAMASK • WALLETCONNECT • COINBASE
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-[#F5F1EB] text-sm py-6 font-mon">
        © 2026 Kurio. Propriedade digital para todos.
      </p>
    </footer>
  )
}

export default Footer