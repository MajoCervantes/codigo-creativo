import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>Logo</div>
      <div className={styles.menu}>
        <Link href={''}>Inicio</Link>
        <Link href={''}>Quienes somos</Link>
        <Link href={''}>Contacto</Link>
      </div>
    </div>
  );
};

export default Header;
