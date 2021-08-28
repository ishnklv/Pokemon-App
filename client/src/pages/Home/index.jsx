import React from 'react'
import styles from './Home.module.scss'
import {Container, Typography, makeStyles} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPokemons} from '../../redux/actions/cards'

import {Card} from '../../components'

const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
})


const Home = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const items = useSelector(({pokemons}) => pokemons.items)

  React.useEffect(() => {
    dispatch(fetchPokemons())
    console.log(items)
  }, [])
  return(
    <Container maxWidth="md">
      <Typography className={classes.title} variant="h4">Pokemon List</Typography>
      <div className={styles.wrapper}>
        <div className={styles.cardList}>
          {
            items.map((obj) => {
              return <Card key={obj.id} id={obj.id} name={obj.name} imageUrl={obj.imageUrl} description={obj.description} isFavorite={obj.isFavorite} />
            })
          }
        </div>
      </div>
    </Container>
  )
}

export default Home