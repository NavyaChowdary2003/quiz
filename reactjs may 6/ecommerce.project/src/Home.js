import React from "react";
import { BoxIconElement } from "boxicons";


let Home = () => {
    return (
        <div className="Home">
        <div className="home-content">
            <h1>Welcome to The Chand Hit</h1>
            <image src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'/>
            <h2>Discover the Art of Fine Dining</h2>
            <p>Welcome to The Chand Hit, where culinary excellence meets a warm and inviting atmosphere. Located in the heart of downtown, our restaurant is the perfect destination for food enthusiasts seeking an unforgettable dining experience.</p>
        </div>
        <div className="login-content">
        <form>
            <h1>Welcome Back!</h1>
            <p>We are Happy to see you again please login and enjoy the Food</p>
            <input type="username" placeholder="Username" ></input> <br/>
            <input type="password" placeholder="Password" radioGroup="toggle-password" required ></input> <br/>
            <button>Login</button>
            <p>or Continue with</p>
            
            <box-icon className="icons" type="logo" name="facebook-circle"></box-icon>
            <box-icon type="logo" name="twitter"></box-icon>
            <box-icon type="logo" name="instagram"></box-icon>
            </form> 
        </div>
        </div>
    );
}
export default Home;