import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';  

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">Pablo López Sellanes</span>
              <span className="hero-role">Consultor Senior</span>
            </h1>
            
            <p className="hero-description">
              Más de 20 años de experiencia liderando proyectos estratégicos en sectores 
              públicos y privados en Uruguay, Argentina y EE.UU. Especialista en transformación 
              organizacional y gestión del cambio.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Países</span>
              </div>
              <div className="stat">
                <span className="stat-number">1700+</span>
                <span className="stat-label">Empleados Dirigidos</span>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={scrollToContact} className="btn btn-primary">
                Contactar
              </button>
              <button onClick={scrollToAbout} className="btn btn-outline">
                Conocer más
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="profile-section">
                  <div className="profile-avatar">
                    <span className="avatar-text">PL</span>
                  </div>
                  <div className="profile-info">
                    <h3>Pablo López Sellanes</h3>
                    <p>Senior Business Consultant</p>
                    <div className="location">
                      <span>🌎 Uruguay • Argentina • EE.UU.</span>
                    </div>
                  </div>
                </div>
                
                <div className="specialties">
                  <div className="specialty-tag">Transformación Organizacional</div>
                  <div className="specialty-tag">Gestión del Talento</div>
                  <div className="specialty-tag">Auditoría Operativa</div>
                  <div className="specialty-tag">E-commerce</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;