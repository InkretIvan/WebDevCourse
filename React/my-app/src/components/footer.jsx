import React from 'react';

function Footer(){
  var year=new Date();
  year=year.getFullYear();
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}

export default Footer;
