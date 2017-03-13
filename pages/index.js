import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Index = ({ title, content }) => (
    <div>
        <Head>
          <title>a12a</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h2>a12a</h2>
        <div><Link href="/about">About me</Link></div>
        <div><Link href="/instagram">Instagram</Link></div>
    </div>

);

export default Index;