import React from 'react'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}
                            
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/book'}>Book</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/state'}>State</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/parent'}>Parent</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/myform'}>MyForm</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/child'}>Child</NavLink>
                            </li>
                            {/* {/* <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            {/* <NavLink className="btn-dark" to={'/card1'}>Card1</NavLink>
                            </li> } */}

                            {/* <li className="nav-item"> */}
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            {/* <NavLink className="btn-dark" to={'/cardhome'}>CardHome</NavLink>
                            </li> */} 


                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <NavLink className="btn-dark" to={'/login'}>Login</NavLink>
                            </li>

                            

                            
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar ;