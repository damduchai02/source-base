import { Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link to='/'>
        <Armchair className='h-6 w-6' />
      </Link>
    </Button>
  );
}

export default Logo;
