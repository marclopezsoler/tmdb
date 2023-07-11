import { Link } from 'react-router-dom';

//Page where the footer is created

export default function Footer() {
    return (
      <footer className="footer">
      <div><Link className="title" to="/">
            <img src="/logo2.png" className='logo2' alt='logo'></img>
            </Link>
          </div>
          <div className='fText'>
            <p className='fTextChild'>Copyright © Marc López 2023. All rights reserved</p>
            <p className='fTextChild'>Version 1.2</p>
            <p className='fTextChild'>Terms of use | Privacy Policy</p>
          </div>
    </footer>
    );
};