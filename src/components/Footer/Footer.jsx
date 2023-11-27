import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

import Logo from '../../../public/assets/logo.png';

const services = [
  'Desarrollo Web Profesional',
  'Paquetes de diseño Web',
  'Diseño de Tiendas Virtuales',
  'Manejo de Redes Sociales',
  'Posicionamiento SEO',
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content_container}>
        <Image src={Logo} alt='Logo' />
        <div>
          <p>
            Somos una agencia digital especializada en Diseño Gráfico, Desarrollo Web y Marketing
            Online con sede en CDMX, México.
          </p>
          <p>Tenemos más de 3 años de Experiencia creando soluciones para nuestros clientes.</p>
          <div className={styles.contact_container}>
            <p>Teléfono y WhatsApp:</p>
            <p>5534276643</p>
          </div>
        </div>
      </div>

      <div className={styles.content_container}>
        <h3>Servicios</h3>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
