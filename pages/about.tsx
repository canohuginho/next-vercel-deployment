import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.tsx</code>
        </p>
    </>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
};