import DarkMode from './DarkMode';
import Logo from './Logo';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex items-center justify-between'>
        <Logo />
        <NavLinks />
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
