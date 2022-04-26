import Link from 'next/link';
import React from 'react'
import styles from './NavButton.module.css'

type props = {
  label: string
};

const NavButton = ({ label }: props) => {
  return (
    <div className={styles.navbarItem}>
      <Link href={`/${encodeURIComponent(label)}`}>
        <a>{label}</a>
      </Link>
    </div>
  );
}

export default NavButton