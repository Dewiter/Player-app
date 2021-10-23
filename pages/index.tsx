import type { NextPage } from 'next';
import Search from '../components/SearchBar/Search';
interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  const printVideo = (found) => {
    console.log(found);
  };

  return (
    <>
      <h1>Hello HOMEPAGE</h1>
      <Search onFound={printVideo} />
    </>
  );
};

export default HomePage;
