import React from 'react';
import styles from './Onboarding.module.scss';

const Onboarding = () => {
  return (
    <div className={styles.onboarding_container}>
      <div className={styles.dark_container}>
        <h1>¡Potencia tu presencia en línea con nuestros servicios de diseño web!</h1>
      </div>
      <div className={styles.color_container}>
        <h2>
          En MCódigo Creativo, nos especializamos en brindar soluciones únicas para profesionales y
          empresas en México.
        </h2>
        <p>
          Más de 50 empresas y profesionales ya han confiado en nosotros para crear experiencias
          digitales impactantes. ¿Estás listo para unirte a ellos?
        </p>
        <p>
          Sabemos que cada negocio es único. Por eso, todos nuestros precios son flexibles y pueden
          ajustarse según las necesidades específicas de tu proyecto. Ponte en contacto con nosotros
          para recibir una cotización personalizada.
        </p>
        <p className={styles.bold} style={{ color: '#5ddfea' }}>
          Todos nuestros paquetes incluyen un dominio, hosting y certificación SSL
        </p>
        <p className={styles.bold}>
          ¿Listo para tener una presencia en línea impactante? Inicia tu sitio web profesional con
          nosotros con un anticipo del 70%. Queremos ser parte de tu éxito desde el principio.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
