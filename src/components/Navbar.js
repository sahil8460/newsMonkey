import React, { Component, createContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Provider } from 'react';
export default class Navbar extends Component {
    state={
        themecolor:"green"
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" to="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item"><Link to="/business" className="nav-link">Business</Link></li>
                            <li className="nav-item"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
                            <li className="nav-item"><Link to="/general" className="nav-link">General</Link></li>
                            <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
                            <li className="nav-item"><Link to="/science" className="nav-link">Science</Link></li>
                            <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                            <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
                        </ul>
                        
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Prefered Theme
                        </button>
                        <div className="dropdown-menu" style={{minWidth:'100%'}} aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("black")}>Black</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("blue")}>Blue</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("red")}>Red</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("blueviolet")}>Purple</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("brown")}>Brown</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("indigo")}>Indigo</button>
                            <button className="dropdown-item btn btn-sm text-center" onClick={()=>this.props.handleState("maroon")}>Maroon</button>
                        </div>
                    </div>
                </nav>
                
            </>
        )
    }
}
