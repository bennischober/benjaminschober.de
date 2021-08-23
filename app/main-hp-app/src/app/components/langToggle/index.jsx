import React from 'react';
import {Button, Menu, Tooltip} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {MenuItems} from "./menuItems";
import {getAllLanguageObjects} from "../../lang/languageRouter";

export function LanguageToggle(props) {
    const text = props.text;
    const langChange = props.onLangChange;
    const menuData = getAllLanguageObjects();

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
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    startIcon={<TranslateIcon/>}
                    endIcon={<KeyboardArrowDownIcon/>}
                >
                    {text.text}
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
                <MenuItems menuData={menuData} onLangChange={langChange} onMenuClose={handleClose}/>
            </Menu>
        </div>
    );
}