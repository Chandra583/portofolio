import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub,FaLinkedin  } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">

    <div>
      <a href="https://github.com/Chandra583" target="_blank" rel="noopener noreferrer" aria-label='Github'>
        <FaGithub />
      </a>
    </div>

    <div>
      <a href="https://www.linkedin.com/in/chandrashekhar-gowda-417a40260/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
        <FaLinkedin />
      </a>
    </div>

    <div>
      <a href="https://www.instagram.com/pratulshekar/" target="_blank" rel="noopener noreferrer" aria-label='Instagram'>
        <BsInstagram />
      </a>
    </div>

    <div>
      <a href="https://twitter.com/Chandra13167093" target="_blank" rel="noopener noreferrer" aria-label='Twitter'>
        <BsTwitter />
      </a>
    </div>


  </div>
);

export default SocialMedia;






