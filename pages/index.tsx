import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import App from '../components/App';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <Head>
        <title>Player</title>
      </Head>
      <Link href="/dewi">
        <a>Hello HOMEPAGE</a>
      </Link>
      <App></App>
    </>
  );
};

export default HomePage;
