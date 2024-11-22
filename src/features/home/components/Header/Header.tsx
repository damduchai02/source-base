import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';

function Header() {
  return (
    <header className='border-b'>
      <div className='align-element flex justify-end py-2'>
        <div className='flex items-center gap-x-2'>
          <Button asChild variant='link'>
            <Link to='/login'>Login</Link>
          </Button>
          <Button asChild variant='link'>
            <Link to='/register'>Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
