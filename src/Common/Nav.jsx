import React from 'react'
import { Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" class="nav-item nav-link ">Home</Link>
                        <Link to="/register" class="nav-item nav-link">Register</Link>
                        <Link to="/allstudent" class="nav-item nav-link">All Student</Link>

                        
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Nav
