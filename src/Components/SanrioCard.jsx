import { Link } from "react-router-dom";

function Card({ nome, aniversario, imagem, cor, id, temBotao = false }) {
  return (
    <div className="flip-card">
      <Link to={`/anadaniel-project/${id}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
          </div>

          <div className="flip-card-back" style={{ backgroundColor: cor }}>
            <h2>Aniversário 🎂</h2>
            <p>{aniversario}</p>
          </div>
        </div>
      </Link>

      {/* Botão de voltar para a Home fora do Link principal */}
      {temBotao && (
      <Link to="/anadaniel-project/" className="btn-voltar">
      ⬅ Voltar para Home
      </Link>
      )}
    </div>
  );
}

export default Card;
