import { AppBar, Avatar, Box, Button, Chip, Skeleton, Toolbar, Typography } from '@mui/material'
import React from 'react'

// import { Link } from 'react-router-dom'
import { UserAuth } from '../../../Context/AuthContect'

const Navbar = () => {
    const { user, logOut } = UserAuth()




    const handleSignOut = async () => {
        try {
            logOut()
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h5" component={"div"} sx={{ flexGrow: 1 }}>
                         Tempiltin
                        </Typography>

                        {user?.displayName ?
                            <>
                                <Button onClick={handleSignOut} sx={{ color: "white" }}  > Sign-Out</Button>
                                <Chip label={user.displayName} variant="outlined" sx={{ color: "white" , margin:"0px 15px" }} />
                                <Avatar src={user.reloadUserInfo.photoUrl} alt="" />
                            </>
                            :

                            <Skeleton variant="rounded" width={210} height={60} />
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar