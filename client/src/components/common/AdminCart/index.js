import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "40%",
  },
});

export default function AdminCart({ title, img, descr, link }) {
  const classes = useStyles();

  return (
    <Card className={[classes.root, styles.cart].join(" ")}>
      <Link to={link}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={img}
            title={title}
            className={styles.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {descr}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={link}>
            <Button size="small" color="primary">
              Перейти
            </Button>
          </Link>
        </CardActions>
      </Link>
    </Card>
  );
}
