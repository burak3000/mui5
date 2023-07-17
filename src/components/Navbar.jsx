import styled from '@emotion/styled'
import { Pets, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white"
}));

const Icons = styled(Box)(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "%40",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "%40",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    //const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Typography
                    variant='h6'
                    sx={{ display: { xs: "none", sm: "block" } }}>
                    LEONIS
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder='search'></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="primary">
                        <Mail color="action" />
                    </Badge>
                    <Badge badgeContent={2} color="primary">
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={e => setIsOpen(true)}
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=complete"></Avatar>
                </Icons>
                <UserBox onClick={e => setIsOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=complete"></Avatar>
                    <Typography variant='span'>Burak</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={isOpen}
                onClose={e=>setIsOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar