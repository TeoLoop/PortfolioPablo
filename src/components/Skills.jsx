import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    {
      category: 'management',
      name: 'Gestión de Equipos',
      level: 100,
      icon: '👥',
      description: 'Liderazgo de equipos multidisciplinarios'
    },
    {
      category: 'management',
      name: 'Planificación Estratégica',
      level: 100,
      icon: '🎯',
      description: 'Desarrollo e implementación de estrategias'
    },
    {
      category: 'management',
      name: 'Gestión de Proyectos',
      level: 100,
      icon: '📊',
      description: 'Coordinación y control de proyectos complejos'
    },
    {
      category: 'business',
      name: 'Análisis Financiero',
      level: 100,
      icon: '💹',
      description: 'Evaluación y análisis de indicadores financieros'
    },
    {
      category: 'business',
      name: 'Negociación Comercial',
      level: 100,
      icon: '🤝',
      description: 'Negociación con clientes y proveedores'
    },
    {
      category: 'business',
      name: 'Desarrollo de Negocios',
      level: 100,
      icon: '🚀',
      description: 'Identificación y desarrollo de oportunidades'
    },
    {
      category: 'business',
      name: 'Programación Neurolingüística',
      level: 100,
      icon: '🧠',
      description: 'Herramientas de comunicación y desarrollo personal orientadas a mejorar la influencia, la persuasión y el crecimiento profesional.'
    },
    {
      category: 'business',
      name: 'Lenguaje no Verbal',
      level: 100,
      icon: '👁️',
      description: 'Capacidad para interpretar y utilizar señales no verbales con el fin de potenciar la comunicación y generar confianza en entornos profesionales.'
    },    
    {
      category: 'technical',
      name: 'Microsoft Office Suite',
      level: 100,
      icon: '💻',
      description: 'Dominio avanzado de herramientas ofimáticas'
    },
    {
      category: 'technical',
      name: 'E-commerce',
      level: 100,
      icon: '🛒',
      description: 'Gestión de plataformas digitales'
    },
    {
      category: 'technical',
      name: 'CRM/ERP Systems',
      level: 100,
      icon: '⚙️',
      description: 'Implementación y gestión de sistemas'
    },
    {
      category: 'languages',
      name: 'Español',
      level: 100,
      icon: '🇪🇸',
      description: 'Nativo'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todas las Habilidades', icon: '🎯' },
    { id: 'management', label: 'Gestión y Liderazgo', icon: '👥' },
    { id: 'business', label: 'Desarrollo de Negocios', icon: '💼' },
    { id: 'technical', label: 'Herramientas Técnicas', icon: '💻' },
    { id: 'languages', label: 'Idiomas', icon: '🌐' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Habilidades y Competencias</h2>
        
        <div className="skills-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.category}-${skill.name}`} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
              
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>🎯 Experiencia</h3>
            <p>+20 años en gestión empresarial y liderazgo de equipos</p>
          </div>
          <div className="summary-card">
            <h3>🌍 Alcance</h3>
            <p>Experiencia internacional en Argentina, Uruguay y Estados Unidos</p>
          </div>
          <div className="summary-card">
            <h3>👥 Liderazgo</h3>
            <p>Gestión de equipos de hasta 1700+ Empleados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;