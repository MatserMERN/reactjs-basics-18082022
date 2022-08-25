import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ProductsAPI from '../11.ajax-calls/ProductsAPI'
import StudentFetchAPI from '../11.ajax-calls/StudentFetchAPI'
import NameListFive from '../7.list-rendering/NameListFive'


const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const Error = () => <div className="container"><h1>Please Contact Administrator</h1></div>

const Routing = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">ReactJS</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/users" className="nav-item nav-link">Users</Link>
                            <Link to="/students" className="nav-item nav-link">Students</Link>
                            <Link to="/products" className="nav-item nav-link">Products</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users" element={<NameListFive />}></Route>
                <Route path="/students" element={<StudentFetchAPI />}></Route>
                <Route path="/products" element={<ProductsAPI />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing