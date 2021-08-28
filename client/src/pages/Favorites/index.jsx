import React from 'react' 
import {Container, Typography, makeStyles} from '@material-ui/core'
import styles from './Favorites.module.scss'
import { fetchFavorites } from '../../redux/actions/favorites'
import { useDispatch, useSelector } from 'react-redux'

import {Card} from '../../components'

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  }
})

const Favorites = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const items = useSelector(({favorites}) => favorites.items)

  React.useEffect(() => {
    dispatch(fetchFavorites())
    console.log(items)
  }, [])

  return(
    <Container maxWidth="md">
      <Typography className={classes.title} variant="h4">Favorites</Typography>
      <div className={styles.wrapper}>
        <div className={styles.cardList}>
          {
            items.map((obj) => {
              return <Card key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.imageUrl} description={obj.description} isFavorite={obj.isFavorite}/>
            })
          }
        </div>
      </div>
    </Container>
  )
}

export default Favorites