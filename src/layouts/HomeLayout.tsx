import Header from '@/features/home/components/Header/Header';
import Navbar from '@/features/home/components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='align-element py-20'>
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
