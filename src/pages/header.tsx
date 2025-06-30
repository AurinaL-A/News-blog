
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
          <img src="/images/logo.svg" alt="" />
        </Link>
      </nav>
      </div>
      
    </header>
  );
};