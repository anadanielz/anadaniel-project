function Card({ nome, aniversario, imagem, cor }) {
return (
    <div className="flip-card">
    <div className="flip-card-inner">

        <div className="flip-card-front">
        <img src={imagem} alt={nome} />

        <h2>{nome}</h2>
        </div>

        <div
        className="flip-card-back"
        style={{
            backgroundColor: cor
        }}
        >
        <h2>Aniversário 🎂</h2>

        <p>{aniversario}</p>
        </div>

    </div>
    </div>
)
}

export default Card