import Link from 'next/link';
import React from 'react'
import styles from './NavButton.module.css'

type props = {
  label: string,
  componentLocation: string,
};

const NavButton = ({ label, componentLocation }: props) => {
  return (
    <div className={styles.navbarItem}>
      <Link href={`/${encodeURIComponent(componentLocation)}`}>
        <a className={styles.navBarItemHover}>{label}</a>
      </Link>
    </div>
  );
}

export default NavButton