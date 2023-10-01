import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
const Header = () => {
    return (
        <div className="header">
            <PersonIcon fontSize="large" className="header_icon" />
            <img src="/react.svg" alt="header" className="header_logo" />
            <ForumIcon fontSize="large" className="header_icon" />
        </div>
    )
}

export default Header;