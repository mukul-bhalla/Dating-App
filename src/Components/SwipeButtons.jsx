import React from "react";
import './SwipeButtons.css';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CancelIcon from '@mui/icons-material/Cancel';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <div className="btn">
                <ReplayCircleFilledIcon fontSize="large" className="repeat" />

            </div>
            <div className="btn">

                <CancelIcon fontSize="large" className="cancel" />
            </div>
            <div className="btn">

                <StarRateIcon fontSize="large" className="star" />
            </div>
            <div className="btn">
                <FavoriteIcon fontSize="large" className="like" />

            </div>
            <div className="btn">
                <FlashOnIcon fontSize="large" className="lightning" />

            </div>









        </div>
    )
}

export default SwipeButtons;