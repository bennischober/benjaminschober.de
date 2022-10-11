import React from 'react';
import {Typography, Menu, Tooltip, Button} from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {MenuItems} from "./menuItems";
import {getLanguageIndex, getLanguageKey} from "../../../utils/languages";

export function LanguageToggle(props) {
    const text = props.text;
    const langChange = props.onLangChange;
    const menuData = getLanguageIndex();
    const curLang = getLanguageKey();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title={text.tooltip}>
                <Button
                    id="lang-button"
                    aria-controls="lang-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                    onClick={handleClick}
                    startIcon={<TranslateIcon/>}
                    endIcon={<KeyboardArrowDownIcon/>}
                >
                    <Typography variant="body1" sx={{fontWeight: "500"}}>{text.text}</Typography>
                </Button>
            </Tooltip>
            <Menu
                id="lang-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItems menuData={menuData} onLangChange={langChange} onMenuClose={handleClose} activeItem={curLang}/>
            </Menu>
        </div>
    );
}