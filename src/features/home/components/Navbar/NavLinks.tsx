import { NavLink } from 'react-router-dom';
import { links } from '../../utils/links';

function NavLinks() {
  return (
    <div className=' items-center justify-center gap-x-4 flex'>
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            className={({ isActive }) => {
              return `capitalize tracking-wide ${
                isActive ? 'text-primary' : ''
              }`;
            }}
            key={link.label}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
