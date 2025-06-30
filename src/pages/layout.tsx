import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import '../index.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='back'>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </div>
  );
};