import React, {PropTypes} from 'react';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <img src="http://adslot.com/wp-content/uploads/2015/05/Adslot_logo_large.png" alt="Adslotmedia" width="100" height="50" />
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </div>
  );
};


Header.propTypes = {
};

export default Header;
