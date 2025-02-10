import axios from "axios"
import { useState, useEffect} from "react"

export default function Menu() {

    const [menu, setMenu] = useState ([])

    const fetchMenu = () => {
        axios.get("http://localhost:3000/post/").then((response) => {
            setMenu(response.data);
        })
    }

    useEffect(fetchMenu, []);

    return (
        <>
        <h1>Menu</h1>
        {
            menu.map((post) => (
         <li key={post.id}>
            <img src={post.image} alt={post.title} />
             <h3>{post.title}</h3>
        </li>
        ))}
        </>
        
    )
}