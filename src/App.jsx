import Card from './Components/Card.jsx'
import './index.css'
import backgroundImg from './assets/background.jpg'

import hellokittyImg from './assets/hellokitty.png'
import kuromiImg from './assets/kuromi.png'
import mymelodyImg from './assets/mymelody.png'
import cinnamorollImg from './assets/cinnamoroll.png'
import pompompurinImg from './assets/pompompurin.png'
import keroppiImg from './assets/keroppi.png'

function App() {
  const itens = [
    {
      id: 1,
      nome: 'Hello Kitty',
      aniversario: '1 de novembro',
      imagem: hellokittyImg,
      cor: '#ff305d'
    },
    {
      id: 2,
      nome: 'Kuromi',
      aniversario: '31 de outubro',
      imagem: kuromiImg,
      cor: '#c28ef0'
    },
    {
      id: 3,
      nome: 'My Melody',
      aniversario: '18 de janeiro',
      imagem: mymelodyImg,
      cor: '#e97fd2'


    },
    {
      id: 4,
      nome: 'Cinnamoroll',
      aniversario: '6 de março',
      imagem: cinnamorollImg,
      cor: '#7ab0e4'
    },
    {
      id: 5,
      nome: 'Pompompurin',
      aniversario: '16 de abril',
      imagem: pompompurinImg,
      cor: '#fcdd2e'
    },
    {
      id: 6,
      nome: 'Keroppi',
      aniversario: '10 de julho',
      imagem: keroppiImg,
      cor: '#80c261'
    }
  ]

return (
    <div className="container">
      <h1>Conheça os aniversários de Hello Kitty e seus amigos, algum será o seu?</h1>

      <h2>Cards: {itens.length}</h2>

<div className="cards">
  {itens.map((item) => (
    <Card
      key={item.id}
      nome={item.nome}
      aniversario={item.aniversario}
      imagem={item.imagem}
      cor={item.cor}
    />
  ))}
</div>
<a
  href="https://www.sanrio.com.br/"
  target="_blank"
  className="sanrio-btn"
>
  Gostaria de ver o aniversário de outros personagens? Clique aqui!
</a>
</div>
  )
}

export default App
