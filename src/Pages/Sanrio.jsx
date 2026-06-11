import { useParams } from "react-router-dom";
import sanrios from "../Date/sanrios";
import SanrioCard from "../Components/SanrioCard";
import "../App.css";

function Sanrio() {
    const { sanrioId } = useParams(); 

    const sanrio = sanrios.find((sanrio) => sanrio.id === Number(sanrioId)); 

    if (!sanrio) {
        return <h1>Personagem não encontrado</h1>;
    }


    return (

<div className="container">
<h1>Conheça os aniversários de Hello Kitty e seus amigos, algum será o seu?</h1>

<SanrioCard
  id={sanrio.id}
  nome={sanrio.nome}
  aniversario={sanrio.aniversario}
  imagem={sanrio.imagem}
  cor={sanrio.cor}
  temBotao={true}
/>

</div>

    );
}

export default Sanrio; 