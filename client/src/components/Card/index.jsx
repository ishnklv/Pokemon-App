import React from 'react'
import styles from './Card.module.scss'
import {Typography, makeStyles, CardMedia, Tooltip, CardContent, CardActions, CardActionArea, Card, IconButton} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveIcon from '@material-ui/icons/HighlightOff';
import { useDispatch } from 'react-redux';
import { deletePokemon } from '../../redux/actions/cards';
import { visibleFavorite } from '../../redux/actions/favorites';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 20,
  },
  media: {
    height: 250,
    objectFit: 'contain'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const CardItem = ({id, name, imageUrl, description, isFavorite}) => {
  const dispatch = useDispatch()
  const [toggleFavorite, setToggleFavorite] = React.useState(isFavorite)
  const classes = useStyles()

  const removeCard = (id) => {
    dispatch(deletePokemon(id))
  }

  const setFavorite = (id, isFavorite) => {
    setToggleFavorite(!toggleFavorite)
    dispatch(visibleFavorite(id, isFavorite))
  }

  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Tooltip title="add this pokemon to favorites">
          <IconButton onClick={() => setFavorite(id, isFavorite)} color={toggleFavorite ? 'secondary' : 'default'} size="small" component="span">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="remove this pokemon">
          <IconButton onClick={() => removeCard(id)} size="small" color="primary" component="span">
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

export default CardItem