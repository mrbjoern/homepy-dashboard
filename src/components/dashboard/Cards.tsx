import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const cardmediaProps = {
  height: "200",
  alt: "Contemplative Reptile"
};

const styles = {
  root: {
    flexGrow: 1
  },
  card: {},
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    // objectFit: "cover"
  }
};

const ButtonLink = (props: { to: string }) => <Link to={props.to} />;

const DashboardCard = (props: {
  classes: any;
  title: string;
  body: string;
}) => (
  <Card className={props.classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        image="/images/africa-animals-safari-34106.jpg"
        title="Contemplative Reptile"
        className={props.classes.media}
        {...cardmediaProps}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography component="p">{props.body}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);

const Cards = (props: { classes: any }) => (
  <div className={props.classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <DashboardCard
          classes={props.classes}
          title="Inside temperature"
          body="The most recently measure temperature inside"
        />
      </Grid>
      <Grid item xs={3}>
        <DashboardCard
          classes={props.classes}
          title="Some title"
          body="Some body"
        />
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Cards);
