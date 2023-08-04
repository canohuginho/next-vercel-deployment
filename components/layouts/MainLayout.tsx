import React, { FC } from 'react';
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout: FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Hugo</title>
        <meta name="description" content="Home app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
