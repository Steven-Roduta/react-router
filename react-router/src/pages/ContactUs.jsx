import Header from "../components/Header"



export default function ContactUs() {

    const handleSubmit = () => {
        const user = {
            name:"",
            email:"",
            book:"",
            loged:false,
        };
        addUser(user);
    }
    return (
        <>
        <Header/>
        <h6>Contact Us</h6>
        <form onSubmit={handleSubmit} className="form">
            <div>
            <label>Name</label>
            <input type="text"></input>
            </div>
            
            <div>
            <label>Surname</label>
            <input type="text"></input>
            </div>

            <div>
            <label>Email</label>
            <input type="text"></input>
            </div>
            
            <button type="submit">Send</button>
        </form>

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