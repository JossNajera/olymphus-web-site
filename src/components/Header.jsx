import React from "react";
import olymphusLogo from '../assets/logo/logo.png'

const Header = () => {

const [menuOpen,setMenuOpen]=React.useState(false);

 const closeMenu=()=>setMenuOpen(false);


  return (
    <>
        <header className="site-header sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark container py-3" aria-label="Navegación principal">

                <a className="navbar-brand brand d-flex align-items-center gap-2" href="#inicio">
                    <img src={olymphusLogo} alt="Logo" width="300" height="90" className="d-inline-block align-text-top me-2" />
                </a>
                
                <button 
                className="navbar-toggler" 
                type="button" aria-label="Abrir menú" 
                aria-expanded={menuOpen} 
                onClick={()=>setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className={`collapse navbar-collapse ${menuOpen?'show':''}`} id="mainNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
                        {
                            [
                                ['Inicio','#inicio'],['Servicios','#servicios'],['Sectores','#sectores'],['Contacto','#contacto'], ['Nosotros','#nosotros']
                            
                            ].map(([name,url])=><li className="nav-item" key={url}>
                        
                            <a className="texto-brillo nav-link" href={url} onClick={closeMenu}>
                                {name}
                            </a>
                            </li>
                            )
                        }
                        
                        <li className="texto-brillo-btn nav-item ms-lg-2">
                            <a href="#contacto" onClick={closeMenu} className="btn btn-outline-cyan btn-sm px-3">
                                Contáctanos
                                <i className="bi bi-arrow-right ms-1"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>        
    
    </>
  )
}

export default Header