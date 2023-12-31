import React, { useState, useRef, useEffect } from "react";
import Logo from "/logo.svg";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Auth from "../utils/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const handleLogin = () => {
    // If you have a login mechanism, you might want to set isLoggedIn after a successful login
    setOpen(false);
  };
  const handleLogout = () => {
    Auth.logout(); // Logging out the user
    setIsLoggedIn(false); // Updating state to reflect the logout
    setOpen(false); // Closing the menu after logout
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      anchorRef.current.focus();
    }
  }, [open]);

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
            <img src={Logo} alt="Logo" />
          

          <div className="flex items-center justify-between">
            {/* Navigation */}
            <nav className="flex">
              <Link
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                to="/"
              >
                <BiHomeAlt />
              </Link>
              <Link
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                to="/contact"
              >
                <BsChatSquare />
              </Link>
              <div
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                  ref={anchorRef}
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <BiUser />
             
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                     <Paper className="rounded-lg">
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                            className="footer1   "
                          >
                            <MenuItem onClick={handleClose}>
                              <Link to="/profiles">Profile</Link>
                            </MenuItem>
                            
                            {isLoggedIn ? (
                              <MenuItem onClick={handleLogout}>
                                Logout
                              </MenuItem>
                            ) : (
                              <MenuItem onClick={handleLogin}>
                                <Link to="/login">Login</Link>
                                <ul> / </ul>
                                <Link to="/signup">Sign-Up</Link>
                              </MenuItem>
                            )}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
