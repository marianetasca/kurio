function Explorar() {
  return (
    <section className="px-40 py-12 flex gap-6">
      {/* Card 1 */}
      <div className="flex-1 bg-[#1f1208] rounded-xl overflow-hidden flex">
        <img
          src="/nft01.png"
          alt="Lançamentos"
          className="w-62.5 h-62.5 object-cover"
        />
        <div className="p-6 flex flex-col justify-center text-right">
          <h3 className="font-bold text-lg mb-2">
            Lançamentos gênesis de edição limitada
          </h3>
          <p className="text-[#CFB28C] text-sm mb-4">
            Colecione edições escassas diretamente dos criadores antes da
            revelação pública.
          </p>
          <div className="flex justify-end">
            <button className="bg-[#D28A4C] text-black text-sm px-4 py-2 rounded font-bold">
              Explorar →
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-1 bg-[#1f1208] rounded-xl overflow-hidden flex">
        <img
          src="/nft03.png"
          alt="Arte digital"
          className="w-62.5 h-62.5 object-cover"
        />
        <div className="p-6 flex flex-col justify-center text-right">
          <h3 className="font-bold text-lg mb-2">
            Arte digital selecionada e muito mais
          </h3>
          <p className="text-[#CFB28C] text-sm mb-4">
            Explore novos artistas, coleções verificadas e obras digitais que
            definem a
          </p>
          <div className="flex justify-end">
            <button className="bg-[#D28A4C] text-black text-sm px-4 py-2 rounded font-bold">
              Explorar →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explorar;
