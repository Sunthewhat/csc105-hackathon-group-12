import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MenuIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
  <>
        <style>
        {`
        .navigate {
          color: green;
          text-decoration: none;
        }
        `}
      </style>
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',}}>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            // sx={{ ml: 2,}}
            aria-controls={open ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>
              <img src="https://cdn3.vectorstock.com/i/1000x1000/08/57/user-icon-male-person-symbol-profile-circle-vector-20910857.jpg" style={{width:"50px", marginTop:"6px"}}></img>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </React.Fragment>
    </>
  );
}
export default MenuIcon;
