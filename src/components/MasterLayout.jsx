import { AppBar, IconButton, Typography, Toolbar, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, makeStyles, Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    menu: {
        width: 320
    },
    container: {
        paddingTop: 80
    },
    header: {
        paddingBottom: 20
    }
}));

export default function MasterLayout({ tituloPagina, children }) 
{
    const styles = useStyles();
    const [menuIsOpened, setMenuOpened] = useState(false);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => setMenuOpened(!menuIsOpened)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="h1">
                        Carango Bom
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left"
                transitionDuration={600} 
                open={menuIsOpened} 
                onClose={() => setMenuOpened(!menuIsOpened)}
            >
                <List className={styles.menu}>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Entrar" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <TransitEnterexitIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon>
                            <DriveEtaIcon />
                        </ListItemIcon>
                        <ListItemText primary="Veículos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BrandingWatermarkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Marcas" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Usuários" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </List>
            </Drawer>
            <Container className={styles.container} component="main">
                <Typography className={styles.header} variant="h4" component="h2">
                    { tituloPagina }
                </Typography>
                <Divider />
                { children }
            </Container>
        </>
    );
}