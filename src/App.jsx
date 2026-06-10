import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sanrio from "./Pages/Sanrio";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path = "/anadaniel-project/" 
        element = {<Home/>} />
        <Route
        path = "/anadaniel-project/:sanrioId"
        element = {<Sanrio/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

//{return (
    //<div className="container">
      //<h1>Conheça os aniversários de Hello Kitty e seus amigos, algum será o seu?</h1>



//<div className="cards">
  //{itens.map((item) => (
    //<Card
      //key={item.id}
      //nome={item.nome}
      //aniversario={item.aniversario}
      //imagem={item.imagem}
      //
    ///>
  //))}
//</div>
//<a
  //href="https://www.sanrio.com.br/"
  //target="_blank"
  //className="sanrio-btn"
//>
  //Gostaria de ver o aniversário de outros personagens? Clique aqui!
//</a>
//</div>
  //)
//}

//export default App}
