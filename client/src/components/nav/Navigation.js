import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <div className='container-fluid navigation-blk'>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
                        <span className="fs-4">LOGO</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to='/register' className="nav-link">REGISTER</Link></li>
                        <li className="nav-item"><Link to='/login' className="nav-link">LOGIN</Link></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default Navigation
