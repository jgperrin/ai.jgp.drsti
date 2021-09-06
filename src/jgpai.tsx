
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default function JgpAiSignature() {
    //       <div style={{ height: 1000, width: '100%' }}>
    // Visit jgp.ai.
    //       </div>
    const classes = useStyles();
    //const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    return (
        <Typography className={classes.root}>
            <BottomNavigation   >
                <Box color="text.primary" m={1}>Made with
                    <FavoriteIcon style={{ color: "purple" }} />
                    at&nbsp;
                    <Link target="_blank" href="https://jgp.ai" >
                        jgp.ai
                    </Link>
                </Box>
            </BottomNavigation>
        </Typography>
    );
}