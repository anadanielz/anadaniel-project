import { useState, useEffect } from "react";
import SanrioCard from "../Components/SanrioCard";


// "Banco" de dados dos personagens Sanrio
import sanrios from "../Date/sanrios";

function Home() {

  const [listaSanrios, setListaSanrios] = useState(sanrios);

  const [qtdEvoluidos, setQtdEvoluidos] = useState(0);

  useEffect(() => {
    console.log("Executa toda vez que a lista é alterada");
    console.log(listaSanrios)
  });

  return (
    <>
      <h1>Conheça os aniversários de Hello Kitty e seus amigos, algum será o seu?</h1> 
      <h2>Cards: {sanrios.length}</h2>

      <section id="center">
        <div className ="cards">
        {listaSanrios.map((sanrio, index) => (
          <SanrioCard
            key={index}
            id={sanrio.id}
            nome={sanrio.nome}
            aniversario={sanrio.aniversario}
            imagem={sanrio.imagem}
            cor={sanrio.cor}
          />
        ))}
        </div>
        <div>
<a
href="https://www.sanrio.com.br/"
target="_blank"
className="sanrio-btn"
>
Gostaria de ver o aniversário de outros personagens? Clique aqui!
</a>
</div>
      </section>
    </>
  );
}

export default Home;