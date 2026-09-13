const posts = [
  { date: "12 de setembro", read: "6 min", title: "Como funciona a propriedade de NFTs", desc: "Aprenda a colecionar, negociar e verificar ativos digitais.", img: "/nft03.png" },
  { date: "13 de setembro", read: "2 min", title: "10 artistas digitais para acompanhar", desc: "Conheça criadores que moldam a cultura digital.", img: "/nft01.png" },
  { date: "15 de setembro", read: "3 min", title: "Raridade, atributos e procedência", desc: "Entenda raridade, procedência, direitos autorais e utilidade.", img: "/nft02.png" },
  { date: "15 de setembro", read: "2 min", title: "Como proteger sua carteira", desc: "Proteja sua carteira, seus ativos e sua identidade.", img: "/nft04.png" },
]

function Blog() {
  return (
    <section className="px-40 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Diário da Cunhagem</h2>
      <p className="text-[#CFB28C] text-sm text-center mb-10">
        Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.
      </p>

      <div className="grid grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="bg-[#1f1208] rounded-xl overflow-hidden">
            <img src={post.img} alt={post.title} className="w-full h-48.75 object-cover" />
            <div className="p-4">
              <p className="text-[#CFB28C] text-sm mb-2">{post.date}  |  Leitura de {post.read}</p>
              <h4 className="font-bold mb-2 text-[#F5F1EB]">{post.title}</h4>
              <p className="text-[#CFB28C] text-sm mb-3">{post.desc}</p>
              <span className="text-[#D28A4C] text-sm cursor-pointer">Ler mais →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog