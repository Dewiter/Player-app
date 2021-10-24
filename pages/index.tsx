import type { NextPage } from 'next';

import Search from '../components/SearchBar/Search';
import Player from '../components/Player/Player';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const [queue, setQueue] = useState([]);

  return (
    <>
      <Head>
        <title>Player</title>
      </Head>
      <Link href="/dewi">
        <a>Hello HOMEPAGE</a>
      </Link>
      <Player queue={queue} />
    </>
  );
};

export default HomePage;
