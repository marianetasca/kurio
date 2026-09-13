const collections = [
  { name: "Arte digital", count: 33 },
  { name: "Fotografia", count: 12 },
  { name: "Música", count: 65 },
  { name: "Arte 3D", count: 39 },
  { name: "Colecionáveis", count: 23 },
  { name: "Generativa", count: 17 },
  { name: "Jogos", count: 19 },
  { name: "Assinaturas", count: 13 },
  { name: "Utilidade", count: 18 },
];

const nfts = [
  { name: "Emerald Ape #042", price: "1.19 ETH", img: "/nft01.png" },
  { name: "Sage Nomad #009", price: "1.69 ETH", img: "/nft02.png" },
  {
    name: "Neon Vessel #552",
    price: "1.99 ETH",
    oldPrice: "2.29",
    img: "/nft03.png",
  },
  { name: "Cosmic Bloom #118", price: "1.29 ETH", img: "/nft02.png" },
  { name: "Violet Nomad #314", price: "1.39 ETH", img: "/nft02.png" },
  { name: "Ivory Baron #088", price: "1.79 ETH", img: "/nft03.png" },
  { name: "Golden Beat #207", price: "0.99 ETH", img: "/nft04.png" },
  { name: "", price: "", img: "/nft04.png" },
  { name: "Golden Signal #160", price: "0.39 ETH", img: "/nft04.png" },
];

function Catalog() {
  return (
    <section className="flex py-8 gap-20 px-40">
      {/* Sidebar */}
      <aside className="w-80 shrink-0 flex flex-col">
        {/* Coleções */}
        <div className="bg-[#1f1208] p-6">
          <h3 className="font-bold text-xl mb-4 text-[#F5F1EB]">Coleções</h3>
          <ul className="space-y-6">
            {collections.map((c, index) => (
              <li key={c.name} className="flex justify-between pl-4">
                <span
                  className={`cursor-pointer hover:text-[#D28A4C] ${index === 0 ? "text-[#D28A4C]" : "text-[#CFB28C]"}`}
                >
                  {c.name}
                </span>
                <span
                  className={index === 0 ? "text-[#D28A4C]" : "text-[#CFB28C]"}
                >
                  ({c.count})
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Faixa de preço */}
        <div className="bg-[#1f1208] p-6">
          <h3 className="font-bold text-xl text-[#F5F1EB] mb-4">Faixa de preço</h3>
          <input type="range" className="w-full accent-[#D28A4C]" />
          <p className="text-sm text-[#CFB28C] mt-2">Preço: 0,02 – 12,30 ETH</p>
          <button className="mt-3 bg-[#D28A4C] text-black text-sm px-4 py-1 rounded font-bold">
            Aplicar
          </button>
        </div>

        {/* Rede */}
        <div className="bg-[#1f1208] p-6">
          <h3 className="font-bold text-xl mb-4 text-[#F5F1EB]">Rede</h3>
          <ul className="space-y-6">
            {[
              ["Ethereum", 119],
              ["Polygon", 78],
              ["Solana", 86],
            ].map(([name, count]) => (
              <li key={name} className="flex justify-between pl-4">
                <span className="text-[#CFB28C]">{name}</span>
                <span className="text-[#CFB28C]">({count})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NFT em Destaque */}
        <div className="bg-[#1f1208] mt-4">
          <p className="text-[#D28A4C] pl-6 pt-6 font-bold text-2xl mb-1">
            NFT EM DESTAQUE
          </p>
          <p className="text-white font-bold text-2xl text-center mb-3">OFERTA LIMITADA</p>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/nft02.png"
              alt="NFT Destaque"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </aside>

      {/* Grid */}
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-6 text-sm">
            <span className="text-[#D28A4C] border-b border-[#D28A4C] pb-1 cursor-pointer">
              Todos os NFTs
            </span>
            <span className="cursor-pointer text-[#F5F1EB]">
              Novos lançamentos
            </span>
            <span className="cursor-pointer text-[#F5F1EB]">
              Em alta
            </span>
          </div>
          <span className="text-sm text-[#F5F1EB]">
            Ordenar por: Listados recentemente
          </span>
        </div>

        {/* NFTs */}
        <div className="grid grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div key={nft.name} className="cursor-pointer py-6">
              <div className="overflow-hidden mb-3 bg-[#1f1208] py-6 px-1">
                <img
                  src={nft.img}
                  alt={nft.name}
                  className="w-full rounded-xl aspect-square object-cover"
                />
              </div>
              <p className="">{nft.name}</p>
              <div className="flex gap-2 items-center mt-1">
                <span className="text-[#D28A4C] font-bold text-lg">
                  {nft.price}
                </span>
                {nft.oldPrice && (
                  <span className="text-[#856951]">
                    {nft.oldPrice} ETH
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Paginação */}
        <div className="flex justify-end gap-2 mt-8">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded text-lg font-bold ${n === 1 ? "bg-[#D28A4C] text-black" : "text-white border border-[#4b2c14]"}`}
            >
              {n}
            </button>
          ))}
          <button className="w-8 h-8 border border-[#4b2c14]">›</button>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
