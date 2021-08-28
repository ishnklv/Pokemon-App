import React from 'react'
import styles from './Navbar.module.scss'
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Container, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/ControlPoint';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  favoriteBtn: {
    borderRadius: '50px'
  }
})

const Navbar = () => {
  const classes = useStyles()
  return(
    <div className={styles.navbar}>
      <Container maxWidth="md">
        <nav className={styles.nav}>
          <Link to="/">
            <div className={styles.logo}>
              <HomeIcon />
            </div>
          </Link>
          <div>
            <Link to="/favorites">
              <Tooltip title="favorites">
                <IconButton className={classes.favoriteBtn} color="secondary">
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
            </Link>
            <Link to="/add">
              <Tooltip title="add">
                <IconButton color="primary">
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar