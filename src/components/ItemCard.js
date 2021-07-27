import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginRight: '2rem',
    marginBottom: '2rem',
  },
  media: {
    height: 140,
  },
});

export default function ItemCard({item}) {
  const history = useHistory()
  const classes = useStyles();
  const { title, description, picture, condition } = item

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=> history.push(`/item/${item._id}`)}>
        <CardMedia
          className={classes.media}
          image={picture}
          title={title} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {condition}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Wishlist
        </Button>
      </CardActions> */}
    </Card>
  );
}