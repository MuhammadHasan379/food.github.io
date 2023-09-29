import React from 'react'
import './Contactus.css'

export default function Contactus() {
  return (
    <section>
        <h1 style={{margin: '2em 1em auto auto'}}>Contact us</h1>
        <hr />
    <div className='Contact-wrapper'>
        <form className="login">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div>
            <textarea className="MessageArea" name="Message" id="Message"></textarea>
          </div>
         
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
        </form>
      
    </div>
    </section>
  )
}
