import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.scss';

import Office from '../../../public/assets/about/office.jpg';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.about_container}>
        <div className={styles.image_container} />
        <div className={styles.text_container}>
          <p>
            Bienvenido/a a MCódigo Creativo, donde la creatividad y la tecnología se fusionan para
            dar vida a tus ideas en la web. Soy María José Cervantes, fundadora y principal artífice
            detrás de esta plataforma. Con una pasión innata por el diseño y el desarrollo web, he
            dedicado mi carrera a transformar conceptos en experiencias digitales cautivadoras. En
            MCódigo Creativo, no solo construimos sitios web; creamos una presencia digital
            distintiva para tu marca. Nuestro enfoque se centra en comprender a fondo tus
            necesidades y objetivos. Desde la planificación estratégica hasta la implementación
            técnica, cada proyecto es una oportunidad para innovar y superar expectativas.
            Trabajamos incansablemente para garantizar que tu presencia en línea no solo sea
            funcional, sino también estéticamente atractiva. En MCódigo Creativo, creemos en la
            colaboración estrecha. Consideramos tu proyecto no solo como un trabajo, sino como una
            asociación a largo plazo. Estamos aquí para materializar tu visión y ayudarte a destacar
            en el vasto mundo digital. Descubre cómo podemos dar forma a tu presencia en línea.
            ¡Permítenos ser tu socio en la creación de experiencias web impactantes!
          </p>

          <p>María José Cervantes Fundadora, MCódigo Creativo</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
