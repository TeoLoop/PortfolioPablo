import React from 'react';
import '../styles/About.css';

const About = () => {
  const expertiseAreas = [
    {
      icon: '🏢',
      title: 'Transformación Organizacional',
      description: 'Liderazgo en procesos de cambio y reestructuración empresarial'
    },
    {
      icon: '👥',
      title: 'Gestión del Talento',
      description: 'Dirección y desarrollo de equipos de gran escala'
    },
    {
      icon: '🔍',
      title: 'Auditoría Operativa',
      description: 'Implementación de sistemas de control y calidad'
    },
    {
      icon: '💼',
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento en proyectos de alto impacto'
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Desarrollo y optimización de plataformas digitales'
    },
    {
      icon: '📈',
      title: 'Gestión del Cambio',
      description: 'Facilitación de procesos de adaptación organizacional'
    }
  ];

  const achievements = [
    {
      number: '20+',
      label: 'Años de Experiencia',
      description: 'Trayectoria consolidada en consultoría'
    },
    {
      number: '1700+',
      label: 'Empleados',
      description: 'Personal bajo dirección'
    },
    {
      number: '3',
      label: 'Países',
      description: 'Uruguay, Argentina y Estados Unidos'
    },
    {
      number: '16K+',
      label: 'Artículos',
      description: 'Gestión de inventarios complejos'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Acerca de Mí</h2>
        
        <div className="about-content">
          <div className="about-intro">
            <div className="intro-text">
              <p className="about-description">
                Consultor senior con más de 20 años de experiencia liderando proyectos 
                estratégicos en sectores públicos y privados. He trabajado extensivamente 
                en Uruguay, Argentina y Estados Unidos, desarrollando expertise en 
                transformación organizacional y gestión del talento humano.
              </p>
              
              <p className="about-description">
                Mi trayectoria incluye la dirección de Recursos Humanos en entidades publicas, así como 
                roles gerenciales en importantes empresas de importación y retail, 
                gestionando inventarios de más de 16,000 artículos.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Especialista en contextos de alta presión</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⚡</span>
                  <span>Implementación de sistemas de control</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌟</span>
                  <span>Liderazgo de equipos multiculturales</span>
                </div>
              </div>
            </div>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                  <div className="achievement-description">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-section">
            <h3 className="expertise-title">Áreas de Especialización</h3>
            <div className="expertise-grid">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="expertise-card">
                  <div className="expertise-icon">{area.icon}</div>
                  <h4 className="expertise-card-title">{area.title}</h4>
                  <p className="expertise-description">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;