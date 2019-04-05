import React from 'react';

function Footer() {
  return (
    <footer style={{background:"black"}} className="bg text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Mobile shop
    </footer>
  );
}

export default Footer;
