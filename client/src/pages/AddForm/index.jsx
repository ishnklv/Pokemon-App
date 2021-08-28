import React from 'react'
import styles from './AddForm.module.scss'
import { Container, Typography, makeStyles, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
const useStyles = makeStyles({
  title: {
    textAlign: 'center'
  },
  inputField: {
    marginTop: 20
  },
  addBtn: {
    marginTop: 20,
  }
})

const AddForm = () => {
  const [card, setCard] = React.useState({
    id: null,
    name: '',
    imageUrl: '',
    description: ''
  })
  const [visibleAlert, setVisibleAlert] = React.useState(false)

  const handleChange = (event) => {
    setCard({
      ...card,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await fetch('http://localhost:8000/api/pokemons/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
    setCard({
      name: '',
      imageUrl: '',
      description: '',
    })
    setVisibleAlert(true)
    } catch(error) {
      console.log(error)
    }
  }

  const classes = useStyles()
  return(
    <Container maxWidth="md">
      {
        visibleAlert ? (<Alert severity="success">Pokemon has been created</Alert>) : ''
      }
      <Typography className={classes.title} variant="h4">Add New Pokemon</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField onChange={handleChange} className={classes.inputField} name="name" value={card.name} id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={handleChange} className={classes.inputField} name="description" value={card.description} id="outlined-basic" label="Description" variant="outlined" />
        <TextField onChange={handleChange} className={classes.inputField} name="imageUrl" value={card.imageUrl} id="outlined-basic" label="ImageUrl" variant="outlined" />
        <Button type="submit" className={classes.addBtn} variant="contained" color="primary">Add</Button>
      </form>
    </Container>
  )
}

export default AddForm