import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IData } from "../components/DummyData";

export default function Lcard({ item }: { item: IData }) {
  return (
    <div>
      <Card key={item.id} sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={item.img}
            alt="cardImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">PRICE:{item.price}
            </Typography>
            <Typography variant="body1" color="text.secondary">{item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">{item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Buy
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}