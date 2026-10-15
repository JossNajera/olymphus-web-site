import olymphusLogo from '../assets/logo/logo.png'
import platformLogo from '../assets/logo/Power_Platform.png'
import D365 from '../assets/logo/D365_Sales.png'
import web from '../assets/logo/web.png'
import QA from '../assets/logo/QA.png'
import cloud_serv from '../assets/logo/cloud_serv.png'

const Footer = () => {
  return (
    <>
    
<footer className="footer">
    <div className="container">
        <div className="row gy-4">
            
            <div className="col-lg-4">
                <a className="footer-brand" href="#inicio">
                ✓ <img 
                    src={olymphusLogo}
                    alt="Olymphus TI Logo" 
                    className="img-fluid" 
                    style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                </a>
                <p>Automatiza tus pruebas. Impulsa tu negocio. Soluciones y calidad de software para empresas en México.</p>
            </div>

            <div className="col-6 col-lg-3">
                <h4>Soluciones</h4>
                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={platformLogo}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Power Platform
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={D365}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    CRM
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={web}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Desarrollo Web
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={QA}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Automatización de Pruebas (QA)
                  </span>
              </h3>

                <h3 className="h5 fw-bold mb-0 tracking-wide text-uppercase" style={{ letterSpacing: '1px' }}>
                  <img 
                      src={cloud_serv}
                      alt="Power Platform" 
                      className="img-fluid" 
                      style={{ maxHeight: '100px', objectFit: 'contain' }} 
                    />
                    
        
                  <span className=" mx-2" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                    Infraestructura en la nube
                  </span>
              </h3>
            </div>
            <div className="col-2 col-lg-3">
                <h4>Contacto</h4>
                <a href="mailto:olymphusti.soluciones@gmail.com">
                    <i className="bi bi-envelope me-2"/>olymphusti.soluciones@gmail.com
                </a>
                <a href="#contacto">
                    <i className="bi bi-chat-square-text me-2"/>Solicitar cotización
                </a>
                <p>Pachuca de Soto, Hgo. · Atención remota</p>
            </div>

            <div className="col-2 col-lg-2 ">
                <h4>Síguenos</h4>
                <div className="d-flex justify-content-start align-items-center">
                        {/* Facebook */}
                    <a href="https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr" className="text-white text-decoration-none fs-4 transition-all mx-2" style={{ color: '#0a66c2' }}>
                    <i className="bi bi-facebook"></i>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="text-white text-decoration-none fs-4 transition-all mx-2" style={{ color: '#0a66c2' }}>
                    <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

            <div className="footer-bottom ">
            <span>© {new Date().getFullYear()} Olymphus TI. Todos los derechos reservados.</span>
            <span>Calidad • Confianza • Innovación</span>
            </div>
    </div>
</footer>
    
    </>
  )
}

export default Footer