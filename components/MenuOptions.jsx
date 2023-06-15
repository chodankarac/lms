import { Delete, Edit } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MenuOptions = ({ Action }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {Action}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>
          <Edit />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Delete />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuOptions;
