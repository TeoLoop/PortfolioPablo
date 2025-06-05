import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/pablo-lopez-sellanes/',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:pablolopez2830@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/+59896765656',
      color: '#25d366'
    },
    {
      name: 'Teléfono',
      icon: '📱',
      url: 'tel:+59896765656',
      color: '#007bff'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Consultoría Estratégica',
    'Gestión de Equipos',
    'Desarrollo de Negocios',
    'E-commerce y Retail',
    'Auditoría Empresarial',
    'Recursos Humanos'
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            
            {/* Información Principal */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3>Consultor Empresarial</h3>
                <p className="footer-tagline">
                  Transformando empresas con más de 20 años de experiencia en 
                  gestión estratégica y liderazgo de equipos.
                </p>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Montevideo, Uruguay</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:pablolopez2010@gmail.com">pablolopez2010@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+59899123456">+598 96 765 656</a>
                </div>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="footer-section">
              <h4>Navegación</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="service-item">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociales y CTA */}
            <div className="footer-section">
              <h4>Conectemos</h4>
              <p className="connect-text">
                ¿Listo para llevar tu empresa al siguiente nivel?
              </p>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    title={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>

              <a href="#contact" className="cta-button">
                <span>Solicitar Consulta</span>
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© {currentYear} Consultor Empresarial. Todos los derechos reservados.</p>
            </div>
            
            <div className="footer-bottom-links">
              <a href="#privacy" className="bottom-link">Política de Privacidad</a>
              <span className="separator">•</span>
              <a href="#terms" className="bottom-link">Términos de Servicio</a>
              <span className="separator">•</span>
              <button onClick={scrollToTop} className="scroll-top">
                <span>Volver arriba</span>
                <span className="scroll-icon">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-circle decoration-1"></div>
        <div className="decoration-circle decoration-2"></div>
        <div className="decoration-circle decoration-3"></div>
      </div>
    </footer>
  );
};

export default Footer;