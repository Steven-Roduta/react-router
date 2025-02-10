import Header from "../components/Header"


export default function AboutUs() {
    return (
        <>
        <Header/>      
        <div className="container"></div>

        <div className="description">
            <h1>138 Canti</h1>
            <p>Pasticceria 138 Canti è un luogo dove la tradizione dolciaria si unisce alla passione per l'arte del gusto. Con una selezione di dolci freschi e preparati con ingredienti di alta qualità, ogni prodotto è una vera e propria melodia per il palato. Dalle torte classiche alle creazioni innovative, ogni morso racconta una storia di dolcezza e perfezione. Vieni a scoprire la magia della Pasticceria 138 Canti, dove ogni momento è un'esperienza unica.</p>
        </div>
        <div className="bakery">
            <img src="/img/pasticceria.webp" alt="Pasticceria 138 Canti"/>
        </div>

        <div className="list-footer">

            <div className="list-first">

                <nav>
                    <ul>
                        <h2>Bakery</h2>
                        <li>Shop</li>
                        <li>Customer</li>
                        <li>Work with us</li>
                        <li>Service</li>
                        <li>Help</li>
        
                    </ul>
                </nav>
            

                <div className="list-third">
                    <nav>
                        <ul>
                            <h4>Location</h4>
                            <li>Saffierstraat 294 NL</li>
                            <li>Amsterdam</li>
                            <li>Netherlands</li>

                        </ul>
                    </nav>
                </div>
                <div className="list-fourth">
                    <nav>
                        <ul>
                            <h5>Open Info</h5>
                            <li>Monday-Friday</li>
                            <li>9:00am-18:30pm</li>
                            <li>Saturday-Sunday</li>
                            <li>12:00pm-17:30pm</li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>

               
        <div className="list-second">
            <nav>
                <ul>
                    <h3>Company</h3>
                    <li>+39 3482348002</li>
                    <li>Privacy</li>
                    <li>Term & Condition</li>
                    <li>Eventi</li>
                </ul>
            </nav>
        </div>


        </>
    )
}