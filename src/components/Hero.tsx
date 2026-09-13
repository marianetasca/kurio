function Hero() {
  return (
    <section className="flex items-center justify-between pr-10 pl-22 py-8 max-w-7xl mx-auto">
      {/* Texto */}
      <div className="max-w-6xl">
        <p className="text-sm mb-3 tracking-widest">
          Bem-vindo à Kurio
        </p>
        <h1 className="text-5xl font-bold text-[#F5F1EB] uppercase leading-normal mb-4">
          Seja dono do futuro <br /> da arte digital
        </h1>
        <p className="text-[#CFB28C] text-base mb-10 leading-relaxed max-w-xl">
          Descubra NFTs selecionados de criadores emergentes e consagrados.
          Colecione arte digital rara, apoie artistas e tenha uma parte da
          cultura da internet.
        </p>
        <button className="bg-[#D28A4C] text-black font-extrabold px-6 py-2 rounded text-lg hover:bg-[#e87c2a] transition">
          EXPLORAR
        </button>
        <div className="flex gap-2 absolute left-192">
          <span className="w-2 h-2 rounded-full bg-[#D28A4C]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D28A4C]"></span>
          <span className="w-2 h-2 rounded-full bg-[#D28A4C]"></span>
        </div>
      </div>

      {/* Imagem */}
      <div className="w-112.5 h-112.5 rounded-2xl overflow-hidden border border-[#3a2a10]">
        <img
          src="/img-hero.png"
          alt="NFT destaque"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
