import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const services = [
  {icon:'bi-check2-square',title:'Pruebas funcionales',desc:'Validamos los procesos críticos y la experiencia de usuario.'},
  {icon:'bi-speedometer2',title:'Pruebas de rendimiento',desc:'Identificamos cuellos de botella y evaluamos la estabilidad.'},
  {icon:'bi-shield-lock',title:'Pruebas de seguridad',desc:'Detectamos riesgos y fortalecemos la protección de aplicaciones.'},
  {icon:'bi-cloud-check',title:'Pruebas en la nube',desc:'Ejecutamos pruebas escalables en entornos cloud.'},
  {icon:'bi-phone',title:'Pruebas multiplataforma',desc:'Verificamos el funcionamiento en distintos dispositivos.'},
  {icon:'bi-arrow-repeat',title:'Pruebas regresivas',desc:'Comprobamos que los cambios no afecten funcionalidades existentes.'},
  {icon:'bi-graph-up-arrow',title:'Reportes y análisis',desc:'Transformamos los resultados en decisiones accionables.'},
];
const sectors=[
  {icon:'bi-bank',title:'Financiero',desc:'Transacciones seguras, plataformas estables y clientes confiados.'},
  {icon:'bi-cart3',title:'Comercial',desc:'E-commerce sin fallos, mejor experiencia y más ventas.'},
  {icon:'bi-shield-check',title:'Seguridad',desc:'Aplicaciones resilientes, protección de datos y operación continua.'}
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

 const [sent,setSent]=React.useState(false);
 function submit(e){e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent('Solicitud de cotización TESTAUTOMATE');const body=encodeURIComponent(`Nombre: ${d.get('nombre')}\nEmpresa: ${d.get('empresa')}\nCorreo: ${d.get('correo')}\nServicio: ${d.get('servicio')}\nMensaje: ${d.get('mensaje')}`);window.location.href=`mailto:olymphusti.soluciones@gmail.com?subject=${subject}&body=${body}`;setSent(true)}

  return (
    <>
        <main>
            <section id="inicio" className="hero section-space">
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <p className="eyebrow"><span className="line"/> CALIDAD DE SOFTWARE PARA TU NEGOCIO</p>
                            <h1>Software que funciona, <span>Negocios que crecen.</span></h1>
                            <p className="lead mt-4"> Fabricamos tu software a la medida y Automatizamos tus pruebas para detectar errores antes de llegar a producción. Reducimos riesgos e impulsamos la estabilidad de tus aplicaciones.</p>
                            
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <a className="btn btn-gold btn-lg" href="#contacto">
                                    Solicita tu cotización 
                                    <i className="bi bi-arrow-up-right ms-2"/>
                                </a>
                                <a className="btn btn-outline-cyan btn-lg" href="#servicios">Explorar servicios</a>
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
                                {/* <div className="hero-visual">
                                    <div className="visual-orbit">
                                        <div className="visual-core">
                                            <i className="bi bi-check2-circle"/>
                                            <strong>PRUEBAS<br/>AUTOMATIZADAS</strong>
                                            <small>DE SOFTWARE</small>
                                        </div>
                                    </div>
                                        <div className="floating-chip chip-top">
                                            <i className="bi bi-shield-check"/> Confiable y seguro
                                        </div>
                                        <div className="floating-chip chip-bottom">
                                            <i className="bi bi-check-circle-fill"/> Pruebas completadas
                                        </div>

                                </div> */}
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
                        <h2>NUESTROS <span>SERVICIOS</span></h2>
                        <p>Pruebas diseñadas para mejorar la calidad, continuidad y rendimiento de tus sistemas.</p>
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
                            <p className="eyebrow">PROTEGE TU OPERACIÓN</p>
                            <h2>CALIDAD QUE IMPULSA 
                                <span>TU OPERACIÓN</span>
                            </h2>
                            <p>Detectamos defectos antes de que lleguen a tus usuarios. Integramos pruebas automatizadas en tus procesos de desarrollo para liberar software con mayor confianza.</p>
                            <a href="#contacto" className="btn btn-outline-cyan mt-3">Hablemos de tu proyecto <i className="bi bi-arrow-right ms-2"/></a>
                        </div>
                    
                        <div className="col-lg-6">
                            <div className="dashboard">
                                <div className="dashboard-head">
                                    <span><i className="bi bi-activity"/> Panel de calidad</span>
                                    <span className="status"><i className="bi bi-circle-fill"/> Ejemplo ilustrativo</span>
                                </div>
                            <div className="dashboard-row">
                                <i className="bi bi-check-circle-fill"/><span>Pruebas funcionales</span>
                                <b>OK</b>
                            </div>
                            <div className="dashboard-row"><i className="bi bi-check-circle-fill"/><span>Pruebas regresivas</span>
                                <b>OK</b>
                            </div>
                            <div className="dashboard-row"><i className="bi bi-check-circle-fill"/><span>Pruebas de seguridad</span>
                                <b>OK</b>
                            </div>
                            <div className="bars" aria-label="Gráfico decorativo de cobertura">
                                {
                                    [38,52,45,67,60,76,70,90,82,100,92,86].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)
                                }
                            </div>
                                <small>Visualización demostrativa, no representa resultados de clientes.</small>
                        </div>
                    </div>
                </div>
                </div>
            
            </section>
            
            <section id="sectores" className="section-space">
                <div className="container">
                    <div className="section-heading text-center">
                        <p className="eyebrow">EXPERIENCIA POR INDUSTRIA</p>
                        <h2>SERVICIOS ESPECIALIZADOS <span>PARA</span></h2>
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
            
            <section id="contacto" className="section-space contact-section">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <p className="eyebrow">COMENCEMOS</p>
                            <h2>PROTEGE TU SOFTWARE. 
                                <span>IMPULSA TU NEGOCIO.</span>
                                </h2>
                                    <p>Cuéntanos sobre tu aplicación y los retos que deseas resolver. Te ayudamos a identificar un enfoque de pruebas adecuado.</p>
                                    <a className="contact-link" href="mailto:olymphusti.soluciones@gmail.com">
                                        <i className="bi bi-envelope"/> olymphusti.soluciones@gmail.com
                                    </a>
                        </div>
                        
                        <div className="col-lg-7">
                            <form className="contact-form" onSubmit={submit}>
                                <h3>Solicita una cotización</h3>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre">Nombre *</label>
                                        <input 
                                            id="nombre" 
                                            name="nombre" 
                                            className="form-control" 
                                            required maxLength="100" 
                                            placeholder="Tu nombre"
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
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="servicio">Servicio de interés</label>
                                        <select 
                                            id="servicio" 
                                            name="servicio" 
                                            className="form-select"
                                        >
                                            <option>Pruebas automatizadas</option>
                                            <option>Pruebas funcionales</option>
                                            <option>Pruebas de rendimiento</option>
                                            <option>Pruebas de seguridad</option>
                                            <option>Pruebas en la nube</option>
                                            <option>Pruebas regresivas</option>
                                            <option>Otro servicio</option>
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
                                            placeholder="Describe brevemente tus necesidades"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-gold w-100" type="submit">
                                            Preparar correo de cotización 
                                            <i className="bi bi-send ms-2"/>
                                        </button>
                                        <small className="form-note">
                                            Se abrirá tu aplicación de correo para enviar la solicitud. No se almacena información en esta página.
                                        </small>
                                        {sent && (
                                            <p className="mt-2 text-info" role="status">
                                                Se intentó abrir tu aplicación de correo. Revisa y envía el mensaje para completar la solicitud.
                                            </p>
                                        )}
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