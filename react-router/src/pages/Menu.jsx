import axios from "axios"
import { useState, useEffect} from "react"

export default function Menu() {

    const [menu, setMenu] = useState ([])

    const fetchMenu = () => {
        axios.get("http://localhost:3000/posts").then((response) => {
            setMenu(response.data);
        })
    }

    useEffect(fetchMenu, []);

    return (
        <>
        <h1>Menu</h1>
        {
            menu.map((posts) => <li key={posts.id}>
            <img src={posts.image} alt={posts.title} />
             <h3>{posts.title}</h3></li>)
        }
        </>
        
    )
}