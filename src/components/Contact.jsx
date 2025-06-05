import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_qv7m415',           
        'template_bdwjrw5',          
        templateParams,
        'z1qHx0PA077VbpSsq'          
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'pablolopez2010@gmail.com',
      link: 'mailto:pablolopez2010@gmail.com'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      value: '+598 96 765 656',
      link: 'tel:+59896765656'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/pablo-lopez-sellanes/',
      link: 'https://www.linkedin.com/in/pablo-l%C3%B3pez-sellanes/'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Montevideo, Uruguay',
      link: null
    }
  ];

  const services = [
    {
      icon: '🎯',
      title: 'Consultoría Estratégica',
      description: 'Desarrollo de estrategias empresariales y planificación'
    },
    {
      icon: '👥',
      title: 'Gestión de Equipos',
      description: 'Liderazgo y desarrollo de recursos humanos'
    },
    {
      icon: '🚀',
      title: 'Desarrollo de Negocios',
      description: 'Expansión comercial y nuevas oportunidades'
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Asesoramiento en plataformas digitales'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>¡Conversemos sobre tu proyecto!</h3>
              <p>
                Con más de 20 años de experiencia en gestión empresarial y desarrollo 
                de negocios, estoy aquí para ayudarte a alcanzar tus objetivos.
              </p>
            </div>
            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{contact.icon}</div>
                  <div className="method-content">
                    <h4>{contact.title}</h4>
                    {contact.link ? (
                      <a href={contact.link} className="method-link">
                        {contact.value}
                      </a>
                    ) : (
                      <span className="method-value">{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="services-preview">
              <h4>Servicios de Consultoría</h4>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-content">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h3>Envíame un mensaje</h3>
                <p>Cuéntame sobre tu proyecto y cómo puedo ayudarte</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="equipos">Gestión de Equipos</option>
                    <option value="negocios">Desarrollo de Negocios</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntame sobre tu proyecto, desafíos actuales y cómo puedo ayudarte..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  ¡Mensaje enviado con éxito! Te contactaré pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <span className="error-icon">✗</span>
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
