import React from 'react'
import {
    makeStyles,
    AppBar, 
    Container, 
    Toolbar, 
    Typography, 
    Select, 
    MenuItem,
    createTheme,
    ThemeProvider
} from '@material-ui/core'

import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


const useStyles = makeStyles(() => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWight: "bold",
      cursor: "pointer"
    }
  }))

const Header = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const {currency, setCurrency} = CryptoState()
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: "dark"
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
                <AppBar color="transparent" position="static">
                    <Container>
                        <Toolbar>
                            <Typography 
                                onClick={()=> navigate('/')} 
                                className={classes.title}
                                variant='h6'
                                value={currency}
                            >
                                Crypto Hunter
                            </Typography>
                            <Select 
                                variant="outlined"
                                style={{
                                    width: 100,
                                    height: 40,
                                    marginRight: 15
                                }}
                                onChange={(e)=> setCurrency(e.target.value)}
                            >
                                <MenuItem value={"USD"}>USD</MenuItem>
                                <MenuItem value={"INR"}>INR</MenuItem>
                            </Select>
                        </Toolbar>
                    </Container>
                </AppBar>
        </ThemeProvider>

    )
}

export default Header