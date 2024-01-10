import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Signup() {
    const [credentials, setcredentials,] = useState({ name: "", email: "", password: "", geolocation: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials")
        } else {
            Navigate("/login")
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" >
                        {/* onChange event linsner to change static value */}
                        <label htmlFor="name" className="form-label" >name</label>
                        <input type="text" className="form-control" name="name" placeholder='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="email" style={{ textColor: "black" }} value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text"  >We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="password" style={{ textColor: "black" }} value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <input type="text" className="form-control" name="geolocation" placeholder="address" style={{ textColor: "black" }} value={credentials.geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>

        </div>
    )
}
