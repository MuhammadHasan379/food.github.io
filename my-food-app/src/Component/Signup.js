import React from "react";
import {Link} from 'react-router-dom'


export default function Signup() {
  return (
    <div style={{width:'100vw', height: '100vh', overflow: 'hidden'}}>
        <img src="https://images.pexels.com/photos/776314/pexels-photo-776314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image background" style={{width: '100%', height: '100%', position: 'absolute', zIndex: '-1'}} />
    <div className="Navbar" style={{position: 'absolute', margin: '1em auto'}}>
        <Link to='/'>
        <button class="btn btn-primary" >
            Home
        </button>
        </Link>
    </div>
    <div style={{width:'45vw',margin: '13em auto'}}>
      <form>
        <div class="form-group">
            <h1 style={{color: 'white', fontSize: '2em', fontWeight: 'bolder'}}>Signup Before Placing An Order</h1>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary" style={{margin: '2em auto'}}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
