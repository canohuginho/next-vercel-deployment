import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </MainLayout>
  );
}
