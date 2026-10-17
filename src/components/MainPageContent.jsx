import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2'; 
import axios from 'axios';

const services = [
  {icon:'bi-arrow-repeat',title:'Olymphus QA Automation',desc:'Pruebas funcionales, regresivas, APIs, integración continua y reportes de calidad.', ancla:'#olymphusQA'},
  {icon:'bi-phone',title:'Olymphus Software Factory',desc:'Aplicaciones robustas, microservicios, integración de APIs y automatización de procesos.', ancla:'#olymphusSoftwareFactory'},
  {icon:'bi-cloud-check',title:'Olymphus Cloud Solutions',desc:'Diagnóstico de infraestructura, migraciones a Azure, modernización y optimización de recursos.', ancla:'#olymphusCloudSolutions'},
  {icon:'bi-gear',title:'Olymphus Ongoing Support',desc:'No te dejamos solo en el camino, te brindamos soporte continuo sobre las aplicaciones y procesos de tu negocio.', ancla:'#olymphusOngoingSupport'},
  {icon:'bi-shield-check',title:'Olymphus SecDevOps',desc:'Diagnóstico de arquitecturas y análisis de riesgos. Proponemos soluciones para la mejora, fortalecimiento y eficacia de las aplicaciones.', ancla:'#olymphusDiagnostic'},
  {icon:'bi-graph-up-arrow',title:'Dynamics 365',desc:'Automatización de procesos comerciales, conexión e integración de servicios a Dynamics 365 con Power Platform.', ancla:'#dynamics365'},
//   {icon:'bi-speedometer2',title:'Pruebas multiplataforma',desc:'Verificamos el funcionamiento en distintos dispositivos.'},
];
const sectors=[
  {icon:'bi-bank',title:'Financiero',desc:'Transacciones seguras, plataformas estables y confianza al cliente.'},
  {icon:'bi-cart3',title:'Comercial',desc:'E-commerce sin fallos, mejor experiencia y más ventas.'},
  {icon:'bi-hospital-fill',title:'Salud',desc:'Optimización de flujos administrativos Y automatización de datos clínicos.'}
];

// ===== DATOS: PRUEBAS AUTOMATIZADAS =====
const automatedTestingFeatures = [
  {icon:'bi-check2-circle',title:'Pruebas funcionales y regresivas',text:'Validamos flujos críticos y evitamos que los cambios rompan funcionalidades existentes.'},
  {icon:'bi-terminal',title:'Automatización con JavaScript y Python',text:'Creamos suites reutilizables para interfaces, APIs y procesos de negocio.'},
  {icon:'bi-arrow-repeat',title:'Integración CI/CD y reportes',text:'Ejecutamos pruebas en pipelines y entregamos evidencia clara para decidir con confianza.'}
];

// ===== DATOS: FÁBRICA DE SOFTWARE =====
const factoryFeatures = [
  { icon: 'bi-window-stack', title: 'Aplicaciones web', text: 'Interfaces responsivas con React y APIs integradas.' },
  { icon: 'bi-diagram-3', title: 'Microservicios y APIs', text: 'Servicios desacoplados con Python y Node.js.' },
  { icon: 'bi-database-check', title: 'Integración de datos', text: 'Soluciones conectadas con MySQL, MongoDB y sistemas existentes.' }
];
// ===== DATOS: SOLUCIONES EN LA NUBE =====
const cloudFeatures = [
  { icon: 'bi-cloud-arrow-up', title: 'Migración a Azure', text: 'Evaluación, planeación y traslado gradual de cargas de trabajo.' },
  { icon: 'bi-boxes', title: 'Modernización', text: 'Contenedores, servicios administrados y arquitecturas escalables.' },
  { icon: 'bi-shield-lock', title: 'Seguridad y monitoreo', text: 'Controles de acceso, observabilidad y continuidad operativa.' }
];
// ===== DATOS: SOPORTE CONTINUO =====
const supportFeatures = [
  { icon: 'bi-activity', title: 'Monitoreo', text: 'Seguimiento de salud, errores y desempeño de aplicaciones.' },
  { icon: 'bi-tools', title: 'Mantenimiento', text: 'Correcciones, actualizaciones y mejora continua.' },
  { icon: 'bi-headset', title: 'Atención técnica', text: 'Seguimiento de incidencias según los acuerdos de servicio.' }
];
// ===== DATOS: DIAGNÓSTICO DE ARQUITECTURAS =====
const architectureFeatures = [
  { icon: 'bi-diagram-2', title: 'Mapa de arquitectura', text: 'Revisión de componentes, integraciones y dependencias.' },
  { icon: 'bi-speedometer2', title: 'Riesgos y rendimiento', text: 'Identificación de cuellos de botella y puntos críticos.' },
  { icon: 'bi-clipboard2-check', title: 'Plan de mejora', text: 'Recomendaciones priorizadas por impacto y esfuerzo.' }
];
// ===== DATOS: DYNAMICS 365 =====
const dynamicsFeatures = [
  { icon: 'bi-people', title: 'Dynamics 365 CRM', text: 'Personalización de tablas, formularios, vistas y procesos.' },
  { icon: 'bi-lightning-charge', title: 'Power Automate', text: 'Flujos para automatizar aprobaciones y tareas repetitivas.' },
  { icon: 'bi-grid-1x2', title: 'Power Apps y Power Pages', text: 'Aplicaciones y portales conectados con Dataverse.' }
];


const STEPS = [
  { icon: 'bi-code-slash', name: 'DESARROLLO', time: '00:01', text: 'Componentes React y servicios Node.js compilados.', detail: 'Build exitoso · 24 módulos' },
  { icon: 'bi-git', name: 'INTEGRACIÓN', time: '00:03', text: 'Pipeline CI/CD ejecutado con validaciones automáticas.', detail: 'Commit verificado · main' },
  { icon: 'bi-check2-square', name: 'QA FUNCIONAL', time: '00:05', text: 'Flujos críticos de negocio validados con pruebas E2E.', detail: '128 escenarios aprobados' },
  { icon: 'bi-speedometer2', name: 'RENDIMIENTO', time: '00:07', text: 'Tiempos de respuesta y carga dentro del objetivo.', detail: 'P95: 180 ms' },
  { icon: 'bi-shield-lock', name: 'SEGURIDAD', time: '00:09', text: 'Controles y dependencias revisados sin hallazgos críticos.', detail: '0 vulnerabilidades críticas' },
  { icon: 'bi-cloud-check', name: 'DESPLIEGUE', time: '00:11', text: 'Versión validada y lista para publicarse en la nube.', detail: 'Release candidata · v2.4.0' }
];
const STEP_MS = 1600;
const CYCLE_MS = (STEPS.length + 2) * STEP_MS;

// Componente reutilizable: el CSS de estas secciones vive en styles.css
function NewServiceSection({id,eyebrow,title,accent,description,features,icon,reverse=false,variant=''}){
 
 return <section id={id} className={`section-space extra-section ${variant}`} aria-labelledby={`${id}-titulo`}>
  <div className="container"><div className={`row align-items-center g-4 g-lg-5 ${reverse?'flex-lg-row-reverse':''}`}>
   <div className="col-lg-6"><p className="eyebrow">{eyebrow}</p><h2 id={`${id}-titulo`} className="extra-title">{title} <span>{accent}</span></h2><p className="extra-intro">{description}</p>
    <div className="extra-feature-list">{features.map(f=><article className="extra-feature" key={f.title}><div className="extra-feature-icon"><i className={`bi ${f.icon}`} aria-hidden="true"/></div><div><h3>{f.title}</h3><p>{f.text}</p></div></article>)}</div>
    <a className="btn btn-outline-cyan mt-4" href="#contacto">Solicitar asesoría <i className="bi bi-arrow-right ms-2" aria-hidden="true"/></a>
   </div>

    <div className="col-lg-6">
        <div className="extra-visual" aria-hidden="true">
            <div className="extra-visual-grid"/>
                <div className="extra-visual-ring">
                    <i className={`bi ${icon}`}/>
                </div>
                <div className="extra-visual-tag">
                    <i className="bi bi-check-circle-fill"/> Solución que resuelve
                </div>
                <div className="extra-visual-code">
                    &lt;build /&gt; <span>•</span> QA <span>•</span> Cloud <span>•</span> DEV
                </div>
            </div>
        </div>

  </div>
  </div>
 </section>;
}

const MainPageContent = () => {

     const [elapsed, setElapsed] = useState(0);
      const [paused, setPaused] = useState(false);
      useEffect(() => {
        if (paused) return;
        const timer = window.setInterval(() => setElapsed(v => (v + 100) % CYCLE_MS), 100);
        return () => window.clearInterval(timer);
      }, [paused]);
      const current = Math.min(Math.floor(elapsed / STEP_MS), STEPS.length);
      const completed = current === STEPS.length;
      const progress = Math.min(100, Math.round((elapsed / (STEPS.length * STEP_MS)) * 100));

  
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('');
  const [mensaje, setMensaje] = useState('');

    // Función para capturar el texto del select
    const manejarCambioSelect = (e) => {
    const indiceSeleccionado = e.target.selectedIndex;
    const texto = e.target.options[indiceSeleccionado].text; // Obtiene el texto visible
    setServicio(texto);
  };

  // Función para manejar la solicitud POST
  const enviarDatos = async (e) => {
    e.preventDefault(); // Evita que la página se recargue si está dentro de un <form>


  const data = {
        nombreCompleto: nombreCompleto,
        correo: correo,
        empresa: empresa,
        cargo: cargo,
        telefono: telefono,
        servicioInteres: servicio,
        comentario: mensaje
      }


try {

   // MENSAJE AL USUARIO
        Swal.fire({
        title: '¡Datos enviados!',
        text: 'Pronto nos pondremos en contacto contigo.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Entendido'
      });
    // Realizamos la petición POST con Axios
      const respuesta = await axios.post(`${import.meta.env.OLYMPHUS_URL}/api/contactanos`, data);

      console.log('Respuesta del servidor:', respuesta.data);
        

    } catch (error) {
        console.error('Hubo un error al enviar la solicitud:', error);
       
        Swal.fire({
        title: '¡Error al enviar los datos!',
        text: 'Ya has utilizado este correo anteriormente. Intenta con otro.',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'cerrar'
      });
      }

      // LIMPIAR FORMULARIO
      setNombreCompleto('');
      setCorreo('');
      setEmpresa('');
      setCargo('');
      setTelefono('');
      setServicio('');
      setMensaje('');
  }


  return (
    <>
        <main>
            <section id="inicio" className="hero section-space">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <p className="eyebrow"><span className="line"/> CALIDAD DE SOFTWARE PARA TU NEGOCIO</p>
                            <h1>Software que funciona, <span>Negocios que crecen.</span></h1>
                            <p className="lead mt-4"> Fabricamos tu software a la medida y automatizamos tus pruebas para detectar errores antes de llegar a producción. Análizamos y reducimos riesgos para proteger la seguridad de tus aplicaciones.</p>
                            
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <a className="btn btn-gold btn-lg" href="#contacto">
                                    Solicita tu cotización 
                                    <i className="bi bi-arrow-up-right ms-2"/>
                                </a>
                                <a className="btn btn-outline-cyan btn-lg" href="#servicios">Explorar soluciones</a>
                            </div>
                            
                            <div className="row g-3 mt-4 hero-metrics">
                                <div className="col-6">
                                    <i className="bi bi-check-circle-fill"/> Automatización de procesos
                                </div>
                            
                                <div className="col-6">
                                    <i className="bi bi-shield-check"/> Reducción de Riesgos
                                </div>
                                <div className="col-6">
                                    <i className="bi bi-clock-history"/> Optimización de tiempos
                                </div>
                                <div className="col-6">
                                    <i className="bi bi-graph-up-arrow"/> Más confiabilidad
                                </div>
                            </div>
                        </div>
                        
                            <div className="col-lg-6">
                                    <div className="console" aria-label="Simulación animada de un pipeline de desarrollo y pruebas automatizadas">
                                        <div className="console-top d-flex align-items-center justify-content-between flex-wrap gap-2">
                                            <div className="d-flex align-items-center gap-2"><span className="live-dot"/><span className="mono">PIPELINE / LIVE</span></div>
                                            <div className="console-title">TESTAUTOMATE <span className="version">v2.4.0</span></div>
                                            <span className="mono status-label">{completed ? '✓ VALIDADO' : paused ? 'Ⅱ PAUSADO' : '● EJECUTANDO'}</span>
                                        </div>
                                        <div className="console-body">
                                            <div className="d-flex align-items-center justify-content-between gap-2 mb-2"><span className="section-caption">CICLO DE ENTREGA</span><span className="mono percent">{progress}%</span></div>
                                            <div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Progreso del pipeline"><div className="progress-fill" style={{width: `${progress}%`}}/></div>
                                            <div className="timeline mt-4">
                                            {STEPS.map((step, i) => {
                                                const active = i === current;
                                                const done = i < current;
                                                return <div className={`timeline-item ${active ? 'is-active' : ''} ${done ? 'is-done' : ''}`} key={step.name}>
                                                <div className="timeline-marker"><i className={`bi ${done ? 'bi-check-lg' : active ? 'bi-arrow-right-short' : 'bi-circle'}`}/></div>
                                                <span className="step-time mono">{step.time}</span>
                                                <div className="step-content"><div className="step-name"><i className={`bi ${step.icon}`}/> {step.name}</div><div className="step-text">{step.text}</div>{(active || done) && <div className="step-detail">{step.detail}</div>}</div>
                                                </div>;
                                            })}
                                            </div>
                                            <div className="console-bottom d-flex flex-wrap justify-content-between align-items-center gap-3">
                                            <div className="metric"><span className="metric-number">128<span className="text-cyan">/128</span></span><span className="metric-label">PRUEBAS APROBADAS*</span></div>
                                            <div className="metric"><span className="metric-number">98.7<span className="text-cyan">%</span></span><span className="metric-label">COBERTURA DEMO*</span></div>
                                            <button type="button" className="control-button" onClick={() => { if (completed) {setElapsed(0);setPaused(false);} else setPaused(p => !p); }}><i className={`bi ${completed ? 'bi-arrow-clockwise' : paused ? 'bi-play-fill' : 'bi-pause-fill'}`}/> {completed ? 'Reiniciar' : paused ? 'Reanudar' : 'Pausar'}</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                    </div>
                </div>
            
            </section>

            
            <section id="beneficios" className="benefits py-4">
                <div className="container">
                    <div className="row g-4 text-center">
                        {
                            [
                                ['bi-lightning-charge-fill','Rápido y eficiente'],['bi-shield-check','Confiable y seguro'],['bi-arrow-repeat','Automatización continua'],['bi-bar-chart-line-fill','Escalable a tu ritmo']
                            
                            ].map(([icon,title])=><div className="col-6 col-lg-3 benefit" key={title}><i className={`bi ${icon}`}/><strong>{title}</strong></div>)
                        }
                    </div>
                </div>
                                
            </section>
            
            <section id="servicios" className="section-space services-section">
                <div className="container">
                    <div className="section-heading text-center">
                        <p className="eyebrow">SOLUCIONES ESPECIALIZADAS</p>
                        <h2>Nuestras <span>Soluciones</span></h2>
                        <p>Soluciones desarrolladas para mejorar la calidad, continuidad y rendimiento de tus sistemas.</p>
                    </div>
                    <div className="row g-4 mt-3">
                        {services.map(s => (
                            <div className="col-md-6 col-lg-4" key={s.title}>
                                <article className="service-card h-100">
                                    
                                    <div className="service-icon">
                                        <i className={`bi ${s.icon}`}/>
                                    </div>

                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>

                                    <div className="row mt-3"> 
                                        <ul className="list-unstyled  align-items-center justify-content-center d-flex"> 
                                            <li className='nav-item' key={s.ancla}>
                                                <a href={s.ancla} className="btn btn-outline-cyan  btn-lg " >
                                                    {s.title}
                                                    <i className="bi bi-arrow-right ms-1"/>
                                                </a>
                                            </li>
                                        </ul>
                                     </div>
                                    
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-space spotlight">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h3 className="texto-brillo eyebrow">¿Por qué elegir Olymphus TI?</h3>
                            <h2>Calidad que impulsa tu negocio y    
                                <span> tu Operación</span>
                            </h2>
                            <p>Detectamos defectos antes de que lleguen a tus usuarios. Automatizamos los procesos de tu negocio para que tus operaciones no se queden átras. Cuenta con la seguridad de utilzar un software con mayor calidad y confianza.</p>
                            <a href="#contacto" className="btn btn-outline-cyan mt-3">Hablemos de tu proyecto <i className="bi bi-arrow-right ms-2"/></a>
                        </div>
                    
                        <div className="col-lg-6">
                            <div className="dashboard">
                                <div className="dashboard-head">
                                    <span><i className="bi bi-activity"/> Panel de calidad y desarrollo</span>
                                    <span className="status"><i className="bi bi-circle-fill"/> Soluciones a tu alcanse</span>
                                </div>
                            <div className="dashboard-row">
                                <i className="bi bi-check-circle-fill"/><span>Pruebas funcionales</span>
                                <b>OK</b>
                            </div>
                            <div className="dashboard-row">
                                <i className="bi bi-check-circle-fill"/><span>Desarrollo web</span>
                                <b>OK</b>
                            </div>
                            <div className="dashboard-row"><i className="bi bi-check-circle-fill"/><span>Procesos automatizados</span>
                                <b>OK</b>
                            </div>
                            <div className="dashboard-row"><i className="bi bi-check-circle-fill"/><span>Soluciones en la nube</span>
                                <b>OK</b>
                            </div>
                            <div className="bars" aria-label="Gráfico decorativo de cobertura">
                                {
                                    [38,52,45,67,60,76,70,90,82,100,92,86].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)
                                }
                            </div>
                                <small>Convierte tu negocio en una fuerza competitiva, y demuestra resultados operativos.</small>
                        </div>
                        
                    </div>

                </div>
                </div>
            
            </section>

              {/* ===== SECCIÓN ADICIONAL: PRUEBAS AUTOMATIZADAS ===== */}
            <section id="olymphusQA">
                <NewServiceSection id="pruebas-automatizadas" eyebrow="ASEGURAMIENTO DE CALIDAD QA" title="OLYMPHUS" accent="QA AUTOMATION" description="Diseñamos y ejecutamos pruebas automatizadas para detectar defectos antes de producción, reducir tiempos de validación y proteger los procesos críticos de tu negocio." features={automatedTestingFeatures} icon="bi-check2-circle" reverse variant="extra-qa"/>
            </section>

            {/* ===== SECCIÓN NUEVA 1: FÁBRICA DE SOFTWARE ===== */}
            <section id="olymphusSoftwareFactory">
                <NewServiceSection id="fabrica-software" eyebrow="INGENIERÍA A LA MEDIDA" title="OLYMPHUS" accent="SOFTWARE FACTORY" description="Diseñamos, desarrollamos y evolucionamos soluciones digitales, desde una idea hasta su puesta en producción, con calidad integrada desde el inicio." features={factoryFeatures} icon="bi-code-slash" variant="extra-factory" />
            </section>

            {/* ===== SECCIÓN NUEVA 2: SOLUCIONES EN LA NUBE ===== */}
            <section id="olymphusCloudSolutions">
                <NewServiceSection id="soluciones-nube" eyebrow="INFRAESTRUCTURA MODERNA" title="OLYMPHUS" accent="CLOUD SOLUTIONS" description="Ayudamos a migrar, desplegar y optimizar aplicaciones en Microsoft Azure con un enfoque en seguridad, escalabilidad y costos." features={cloudFeatures} icon="bi-cloud-check" reverse variant="extra-cloud" />
            </section>

            {/* ===== SECCIÓN NUEVA 3: SOPORTE CONTINUO ===== */}
            <section id="olymphusOngoingSupport">
                <NewServiceSection id="soporte-continuo" eyebrow="EVOLUCIÓN Y ESTABILIDAD" title="OLYMPHUS" accent="ONGOING SUPPORT" description="Acompañamos la operación de tus sistemas después de la implementación, además restructuramos mejoras acordadas según las necesidades de tu aplicación." features={supportFeatures} icon="bi-headset" variant="extra-support" />
            </section>

            {/* ===== SECCIÓN NUEVA 4: DIAGNÓSTICO DE ARQUITECTURAS ===== */}
            <section id="olymphusDiagnostic">
                <NewServiceSection id="diagnostico-arquitecturas" eyebrow="VISIBILIDAD TÉCNICA" title="OLYMPHUS" accent="SecDevOps" description="Analizamos el estado actual de tus aplicaciones e integraciones para identificar riesgos técnicos y proponer una ruta de modernización viable." features={architectureFeatures} icon="bi-diagram-3" reverse variant="extra-architecture" />
            </section>
            
            {/* ===== SECCIÓN NUEVA 5: DYNAMICS 365 ===== */}
            <section id="dynamics365">
                <NewServiceSection id="dynamics-365" eyebrow="ECOSISTEMA MICROSOFT" title="DYNAMICS" accent="365" description="Extendemos y automatizamos procesos comerciales con Dynamics 365, Dataverse y Power Platform, integrando las herramientas con tus operaciones." features={dynamicsFeatures} icon="bi-grid-3x3-gap" variant="extra-dynamics" />
            </section>
            
            
            <section id="sectores" className="section-space">
                <div className="container">
                    <div className="section-heading text-center">
                        <p className="eyebrow">COVERTURA POR SECTOR</p>
                        <h2> SOLUCIONES ESPECIALIZADAS <span>PARA</span></h2>
                    </div>
                    <div className="row g-4 mt-3">
                        {
                            sectors.map(
                                        s=><div className="col-md-4" key={s.title}>
                                                <article className="sector-card h-100">
                                                <i className={`bi ${s.icon}`}/>
                                                <h3>{s.title}</h3>
                                                <p>{s.desc}</p></article>
                                            </div>
                                        )
                        }
                    </div>
                </div>
            </section>

            <section id="nosotros" className="section-space spotlight">
                <div className="container">
                    <div className="eyebrow row g-5 align-items-center">
                         {/* Título Principal */}
                        <h2 className=" display-4 fw-bold mb-4" style={{ maxWidth: '800px', lineHeight: '1.15' }}>
                        Más de 5 años <span className="text-white">transformando empresas </span>
                        con nuestras soluciones
                        </h2>
                        
                        {/* Descripción */}
                        <p className="lead text-white mb-4" style={{ color: '#a0aec0', maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Innovamos la transformación digital de organizaciones públicas y privadas mediante las mejores practicas de desarrollo de software, servicios en la nube, ciberseguridad, automatización y servicios administrados.
                        </p>

                        {/* Etiquetas / Badges con Check Verdes */}
                        <div className="d-flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <i className="bi bi-check2 text-success fw-bold"></i> Experiencia empresarial
                        </span>
                        <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <i className="bi bi-check2 text-success fw-bold"></i> Innovación aplicada
                        </span>
                        <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <i className="bi bi-check2 text-success fw-bold"></i> Soluciones escalables
                        </span>
                        <span className="px-3 py-2 rounded-2 d-inline-flex align-items-center gap-2 small" style={{ backgroundColor: 'rgba(6, 18, 46, 0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <i className="bi bi-check2 text-success fw-bold"></i> Acompañamiento continuo
                        </span>
                        </div>
                    </div>

                      {/* MÓDULO DE TARJETAS NUMÉRICAS (MÉTRICAS) */}
                    <div className="row g-3 mb-4">
                    {/* Métrica 1: Años */}
                    <div className="col-md-4">
                        <div className="eyebrown p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                        <h3 className="h4 fw-bold text-white mb-1">+5 años impulsando el crecimiento de negocios</h3>
                        <p className="text-muted small mb-0" style={{ color: '#718096' }}>Experiencia comprobada</p>
                        </div>
                    </div>
                    
                    {/* Métrica 2: Proyectos */}
                    <div className="col-md-4">
                        <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                        <h3 className="h4 fw-bold text-white mb-1">+250 proyectos exitosos</h3>
                        <p className="text-muted small mb-0" style={{ color: '#718096' }}>Implementaciones tecnológicas</p>
                        </div>
                    </div>

                    {/* Métrica 3: Clientes */}
                    <div className="col-md-4">
                        <div className="p-4 rounded-3 h-100" style={{ backgroundColor: 'rgba(6, 18, 46, 0.3)', border: '1px solid rgba(0, 85, 255, 0.15)' }}>
                        <h3 className="h4 fw-bold text-white mb-1">+150 clientes satisfechos</h3>
                        <p className="text-muted small mb-0" style={{ color: '#718096' }}>Organizaciones atendidas</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
            <section id="contacto" className="section-space contact-section">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <p className="eyebrow">COMENCEMOS</p>
                            <h2>Calidad de Software. 
                                <span> Evolución de Negocio.</span>
                                </h2>
                                    <p>Cuéntanos sobre tu aplicación y los retos que deseas resolver. Te ayudamos a identificar un enfoque de pruebas adecuado.</p>
                                    
                        </div>
                        
                        <div className="col-lg-7">
                            <form className="contact-form" onSubmit={enviarDatos}>
                                <h3>Solicita una cotización</h3>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre">Nombre Completo *</label>
                                        <input 
                                            id="nombre" 
                                            name="nombre" 
                                            className="form-control" 
                                            required maxLength="100" 
                                            placeholder="Tu nombre"
                                            value={nombreCompleto}
                                            onChange={(e) => setNombreCompleto(e.target.value)}  
                                        />
                                        
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <label htmlFor="empresa">Empresa</label>
                                        <input 
                                            id="empresa" 
                                            name="empresa" 
                                            className="form-control" 
                                            maxLength="120" 
                                            placeholder="Nombre de tu empresa"
                                            value={empresa}
                                            onChange={(e) => setEmpresa(e.target.value)}  
                                        />
                                    </div>
                                    
                                    <div className="col-12">
                                        <label htmlFor="telefono">Número de Teléfono </label>
                                        <input 
                                            id="telefono" 
                                            name="telefono" 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Ejemplo: 5551234567"
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}  
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="correo">Correo electrónico *</label>
                                        <input 
                                            id="correo" 
                                            name="correo" 
                                            type="email" 
                                            className="form-control" 
                                            required 
                                            placeholder="correo@empresa.com"
                                            value={correo}
                                            onChange={(e) => setCorreo(e.target.value)}  
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="correo">Cargo *</label>
                                        <input 
                                            id="cargo" 
                                            name="cargo" 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Ej. Gerente comercial" 
                                            required 
                                            value={cargo}
                                            onChange={(e) => setCargo(e.target.value)}  
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="servicio">Servicio de interés</label>
                                        <select 
                                            id="servicio" 
                                            name="servicio" 
                                            className="form-select"
                                            onChange={manejarCambioSelect}
                                            defaultValue={""}
                                            required
                                        >
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option>Automatización de Pruebas (QA)</option>
                                            <option>Automatización de Procesos</option>
                                            <option>Desarrollo Web</option>
                                            <option>Microservicios</option>
                                            <option>Soluciones en la nube</option>
                                            <option>Microsoft Dynamics 365</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="mensaje">Cuéntanos tu proyecto *</label>
                                        <textarea 
                                            id="mensaje" 
                                            name="mensaje" 
                                            className="form-control" 
                                            rows="4" 
                                            required 
                                            maxLength="3000" 
                                            placeholder="Describe brevemente tu proyecto o solución de interés."
                                            value={mensaje}
                                            onChange={(e) => setMensaje(e.target.value)}  
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-gold w-100" type="submit">
                                            Cotizar ahora
                                            <i className="bi bi-send ms-2"/>
                                        </button>
                                        <small className="form-note">
                                            * Una vez envies tus datos, se te notificará por correo para acordar contigo.
                                        </small>
                          
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            </main>

        </>
    )
}

export default MainPageContent