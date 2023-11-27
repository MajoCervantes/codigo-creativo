import React from 'react';
import Image from 'next/image';
import styles from './Services.module.scss';

import Rosa from '../../../public/assets/services/rosa.png';
import Verde from '../../../public/assets/services/Verde.png';
import Naranja from '../../../public/assets/services/naranja.png';

const Services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image src={Rosa} alt='Servicio' width={200} height={200} />
        </div>
        <div className={styles.price}>
          <h2>$6,500.00 MXN</h2>
        </div>
        <div>
          <p>
            Perfecto para emprendedores y empresas que buscan una solución asequible con el objetivo
            de promocionar su negocio, producto o servicio. Una landing page, compuesta por una sola
            sección o pestaña, también conocida como página de aterrizaje o de una sola tira, es la
            opción ideal para destacar de manera efectiva y centrada en un único mensaje.
          </p>
        </div>
        {/* <button>Saber más</button> */}
      </div>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image src={Verde} alt='Servicio' width={200} height={200} />
        </div>
        <div className={styles.price}>
          <h2>$9,500.00 MXN</h2>
        </div>
        <div>
          <p>
            Ideal para pequeñas empresar y emprendedores que buscan posicionar sus negocios en
            internet e incrementar su rango de alcance.
          </p>
        </div>
        {/* <button>Saber más</button> */}
      </div>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image src={Naranja} alt='Servicio' width={200} height={200} />
        </div>
        <div className={styles.price}>
          <h2>$18,500.00 MXN</h2>
        </div>
        <div>
          <p>
            Este paquete web está especialmente diseñado para empresas o individuos que buscan un
            sitio web optimizado. Ofrecemos carga rápida, una destacada puntuación en Google Page
            Speed, implementación de SEO On-site (On-page) y servicios de redacción publicitaria.
            Nos comprometemos a equilibrar el diseño gráfico de manera experta para asegurar que no
            comprometa el rendimiento del sitio.
          </p>
        </div>
        {/* <button>Saber más</button> */}
      </div>
    </div>
  );
};

export default Services;
