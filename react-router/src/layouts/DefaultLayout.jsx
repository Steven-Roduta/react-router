import Header from "../components/Header"


export default function DefaultLayout() {
    return (
        <>
        <Header/>
        
        <div className="container"></div>

        <div className="description">
            <h1>138 Storie</h1>
            <p>Pasticceria 138 Canti è un luogo dove la tradizione dolciaria si unisce alla passione per l'arte del gusto. Con una selezione di dolci freschi e preparati con ingredienti di alta qualità, ogni prodotto è una vera e propria melodia per il palato. Dalle torte classiche alle creazioni innovative, ogni morso racconta una storia di dolcezza e perfezione. Vieni a scoprire la magia della Pasticceria 138 Canti, dove ogni momento è un'esperienza unica.</p>
        </div>
        <div className="bakery">
         <img src="/img/pasticceria.webp" alt="Pasticceria 138 Canti"/>
        </div>

        </>
    )
}