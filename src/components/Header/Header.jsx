'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

import Logo from '../../../public/assets/logo.png';
import MobileMenu from '../../../public/assets/mobile-menu.svg';
import Close from '../../../public/assets/close.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <Image src={Logo} alt='Logo' />
      </div>
      <div className={isMenuOpen ? styles.menuOpen : styles.menu}>
        {isMenuOpen && (
          <Image
            className={styles.close}
            src={Close}
            alt='Cerrar'
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <Link href={'/'}>Inicio</Link>
        <Link href={'/about'}>Quienes somos</Link>
        {/* <Link href={''}>Contacto</Link> */}
      </div>

      <div className={styles.mobile_menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image src={MobileMenu} alt='Menu' width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
