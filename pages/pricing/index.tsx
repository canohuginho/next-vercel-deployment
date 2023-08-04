import styles from '@/styles/Home.module.css';
import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link';

const pricing = () => {
  return (
    <MainLayout>
    <h1 className={styles.title}>
      Ir a <Link href="/">Home</Link>
    </h1>
    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>pages/pricing.tsx</code>
    </p>
  </MainLayout>
  )
}

export default pricing;