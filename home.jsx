import React from "react"
import './design.css'
function Home()
{
    return(
        <div className="home">
            <h1>E Book</h1>
        <div>
        <h1>Registration</h1>
       <form action="">
       <label htmlFor="">FirstName:</label>
        <input type="text" name="" id="" /><br />
        <label htmlFor="">LastName:</label>
        <input type="text" name="" id="" /><br />
        <label htmlFor="">D.O.B: </label>
        <input type="date" name="" id="" /><br />
        <label htmlFor="">Email:</label>
        <input type="email" name="" id="" /><br />
        <label htmlFor="">Password:</label>
        <input type="password" name="" id="pass" /><br />
        <button type="submit">Submit</button>
       </form>
       
        
      </div>
        </div>

    );
}
export default Home;