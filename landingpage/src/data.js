import React from 'react';
import {FaBehance, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';
export const links =[
  { id: 1,
    url: '/',
    text: 'Pricing',
  },
  { id: 2,
    url: '/Product',
    text: 'Product',
  },
  { id: 3,
    url: '/About Us',
    text: 'About Us',
  },
  { id: 4,
    url: '/Careers',
    text: 'Careers',
  },
  { id: 5,
    url: '/Community',
    text: 'Community',
  },
]

export const social = [
  {
     id: 1,
     url:'https://www.twitter.com',
     icon: <FaTwitter/>,
  },
  {
    id: 2,
    url:'https://www.facebook.com',
    icon: <FaFacebook/>,
 },
 {
  id: 3,
  url:'https://www.linkedin.com',
  icon: <FaLinkedin/>,
},
{
  id: 4,
  url:'https://www.behance.com',
  icon: <FaBehance/>,
}
];