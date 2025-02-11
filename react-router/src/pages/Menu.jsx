import axios from "axios"
import { useState, useEffect} from "react"
import Header from "../components/Header"


export default function Menu() {

    const [menu, setMenu] = useState ([])

    const fetchMenu = () => {
        axios.get("http://localhost:3000/post/").then((response) => (
            setMenu(response.data.posts)
           
        ))}

    useEffect(fetchMenu, []);

    return (
        <>
        <Header/>
        <h5>ORDER NOW</h5>
        <div className="now">
                 <div className="order">

                {
                menu.map((post) => (
                <li key={post.id}>
                <img src={post.image} alt={post.title} />
                 <h3>{post.title}</h3>
                 <p>{post.content}</p>
            </li>
            ))}
        </div>
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