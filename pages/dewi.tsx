import type { NextPage } from 'next';
import Link from 'next/link';
interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      <h1>Hello DEWIPAGE</h1>
      return to
      <Link href="/">
        <a> Homepage</a>
      </Link>
    </>
  );
};

export default HomePage;
