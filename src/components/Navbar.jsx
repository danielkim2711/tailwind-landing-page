import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} alt='' />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Product
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            About Us
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Careers
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Community
          </Link>
        </div>
        {/* Button */}
        <Link
          to='#'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
