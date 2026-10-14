

const Footer = () => {
  return (
    <>
    
<footer className="footer">
    <div className="container">
        <div className="row gy-4">
            
            <div className="col-lg-5">
                <a className="footer-brand" href="#inicio">
                ✓ OLYMPHUS<span>TI</span>
                </a>
                <p>Automatiza tus pruebas. Protege tu negocio. Soluciones de calidad de software para empresas en México.</p>
            </div>

            <div className="col-6 col-lg-3">
                <h4>Explora</h4>
                <a href="#servicios">Servicios</a>
                <a href="#beneficios">Beneficios</a>
                <a href="#sectores">Sectores</a>
            </div>
            <div className="col-6 col-lg-4">
                <h4>Contacto</h4>
                <a href="mailto:olymphusti.soluciones@gmail.com">
                    <i className="bi bi-envelope me-2"/>Correo electrónico
                </a>
                <a href="#contacto">
                    <i className="bi bi-chat-square-text me-2"/>Solicitar cotización
                </a>
                <p>México · Atención remota</p>
            </div>
        </div>

            <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Olymphus TI. Todos los derechos reservados.</span>
            <span>Calidad • Confianza • Innovación</span>
            </div>
    </div>
</footer>
    
    </>
  )
}

export default Footer