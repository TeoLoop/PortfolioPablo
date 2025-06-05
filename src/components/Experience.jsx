import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const experiences = [
    {
      id: 1,
      category: 'consulting',
      company: 'Jfilms',
      position: 'Asesor de Imagen Empresarial y Producción de Medios',
      location: 'EE.UU. - Argentina',
      address: '5077 Lakewood Dr.SW Shallotte City, North Carolina',
      phone: '+1(910)664-9309',
      period: 'Actualidad',
      type: 'Consultoría',
      responsibilities: [
        'Asesoramiento estratégico en producción audiovisual',
        'Consultoría empresarial internacional',
        'Gestión de proyectos transnacionales'
      ]
    },
    {
      id: 2,
      category: 'ecommerce',
      company: 'Imagen Latinoamérica',
      position: 'Asesor E-Commerce',
      location: 'Uruguay - Argentina',
      period: 'Reciente',
      type: 'E-commerce',
      responsibilities: [
        'Desarrollo de estrategias digitales',
        'Optimización de plataformas e-commerce',
        'Análisis de mercados latinoamericanos'
      ]
    },
    {
      id: 3,
      category: 'education',
      company: 'Conecta Empleo - Movistar',
      position: 'Tutor Especializado',
      location: 'Uruguay',
      period: '2023',
      type: 'Formación',
      responsibilities: [
        'Itinerario Formativo de Office I (Básico) y II (Intermedio)',
        'Itinerario Formativo: Habilidades para la Función',
        'Desarrollo de competencias digitales'
      ]
    },
    {
      id: 4,
      category: 'public',
      company: 'INISA - Instituto Nacional de Inclusión Social Adolescente',
      position: 'Director División Gestión y Desarrollo del Capital Humano',
      location: 'Uruguay',
      period: '2020-2023',
      type: 'Sector Público',
      responsibilities: [
        'Implementación de sistemas de gestión humana',
        'Desarrollo de políticas de recursos humanos',
        'Evaluación de desempeño y carrera funcional'
      ]
    },
    {
      id: 5,
      category: 'private',
      company: 'Reactor SA',
      position: 'Gerente General',
      location: 'Montevideo, Uruguay',
      contact: 'Kechichan Pedrosian, Martin',
      period: '2015-2018',
      type: 'Retail',
      responsibilities: [
        'Gestión integral de supermercados',
        'Dirección de centros de formación',
        'Auditoría de Colegio Maranatha',
        'Supervisión de locales comerciales'
      ]
    },
    {
      id: 6,
      category: 'private',
      company: 'Importadora Grupo Kaitazoff Thomson y Efimenco',
      position: 'Jefe Encargado',
      location: 'Montevideo, Uruguay',
      contact: 'Kaitazoff, Nigel y Efimenco, Rita',
      period: '2012-2015',
      type: 'Importación',
      inventory: '+6000 artículos',
      responsibilities: [
        'Auditoría interna y control de stock (+6000 artículos)',
        'Control de procedimientos administrativos',
        'Gestión administrativa general',
        'Supervisión de operaciones de importación'
      ]
    },
    {
      id: 7,
      category: 'private',
      company: 'Ledonia Importadora SA',
      position: 'Gerente General',
      location: 'Buenos Aires, Argentina',
      period: '2008-2012',
      type: 'Importación',
      inventory: '+10000 artículos',
      responsibilities: [
        'Gestión integral de importadora',
        'Control de stock (+10000 artículos de importación)',
        'Negociaciones con grandes cadenas (Carrefour, Max, Jumbo)',
        'Supervisión de compras y proveedores'
      ]
    },
    {
      id: 8,
      category: 'private',
      company: 'Soleada SA Importadora',
      position: 'Jefe Encargado - Gerente',
      location: 'Argentina',
      period: '2005-2008',
      type: 'Importación',
      inventory: '+16000 artículos',
      responsibilities: [
        'Control de personal y operaciones',
        'Gestión de stock (+16000 artículos)',
        'Coordinación con proveedores locales e internacionales',
        'Responsable de departamento de compras'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'Todas', count: experiences.length },
    { id: 'consulting', label: 'Consultoría', count: experiences.filter(exp => exp.category === 'consulting').length },
    { id: 'public', label: 'Sector Público', count: experiences.filter(exp => exp.category === 'public').length },
    { id: 'private', label: 'Sector Privado', count: experiences.filter(exp => exp.category === 'private').length },
    { id: 'ecommerce', label: 'E-commerce', count: experiences.filter(exp => exp.category === 'ecommerce').length },
    { id: 'education', label: 'Formación', count: experiences.filter(exp => exp.category === 'education').length }
  ];

  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        
        <div className="experience-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="experience-timeline">
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-card">
                <div className="card-header">
                  <div className="header-main">
                    <h3 className="position-title">{exp.position}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="header-meta">
                    <span className="period">{exp.period}</span>
                    <span className={`type-badge ${exp.type.toLowerCase().replace(' ', '-')}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {(exp.team || exp.inventory || exp.contact || exp.address) && (
                  <div className="card-details">
                    {exp.team && (
                      <div className="detail-item">
                        <span className="detail-label">👥 Equipo:</span>
                        <span className="detail-value">{exp.team}</span>
                      </div>
                    )}
                    {exp.inventory && (
                      <div className="detail-item">
                        <span className="detail-label">📦 Inventario:</span>
                        <span className="detail-value">{exp.inventory}</span>
                      </div>
                    )}
                    {exp.contact && (
                      <div className="detail-item">
                        <span className="detail-label">📞 Contacto:</span>
                        <span className="detail-value">{exp.contact}</span>
                      </div>
                    )}
                    {exp.address && (
                      <div className="detail-item">
                        <span className="detail-label">📍 Dirección:</span>
                        <span className="detail-value">{exp.address}</span>
                      </div>
                    )}
                    {exp.phone && (
                      <div className="detail-item">
                        <span className="detail-label">📱 Teléfono:</span>
                        <span className="detail-value">{exp.phone}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="card-responsibilities">
                  <h4 className="responsibilities-title">Responsabilidades principales:</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="responsibility-item">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;