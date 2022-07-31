import { Link } from 'react-router-dom';

import companyLogoWhite from '../assets/images/logo-white.svg';
import facebookLogo from '../assets/images/icon-facebook.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src={companyLogoWhite} className='h-8' alt='' />
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <Link to='#'>
              <img src={facebookLogo} className='h-8' alt='' />
            </Link>
            {/* Link 2 */}
            <Link to='#'>
              <img src={youtubeLogo} className='h-8' alt='' />
            </Link>
            {/* Link 3 */}
            <Link to='#'>
              <img src={twitterLogo} className='h-8' alt='' />
            </Link>
            {/* Link 4 */}
            <Link to='#'>
              <img src={pinterestLogo} className='h-8' alt='' />
            </Link>
            {/* Link 5 */}
            <Link to='#'>
              <img src={instagramLogo} className='h-8' alt='' />
            </Link>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-brightRed'>
              Home
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Pricing
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Products
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              About
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-brightRed'>
              Careers
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Community
            </Link>
            <Link to='#' className='hover:text-brightRed'>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright © 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
