import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minWidth: '345px',
    marginTop: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function InfoCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
      <div className="cardLayout">
    <Card className={classes.card}>

      <CardMedia
        className={classes.media}
        image="https://assets.climatecentral.org/images/uploads/gallery/DecadesofWarming.jpg"
        title="Paella dish"
      />
      <CardContent>
        <CardHeader
        title="Global Temperature Rise"
        subheader=""
      />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          The planet's average surface temperature has risen about 1.62 degrees Fahrenheit (0.9 degrees Celsius) since the late 19th century, a change driven largely by increased carbon dioxide and other human-made emissions into the atmosphere. Most of the warming occurred in the past 35 years, with the five warmest years on record taking place since 2010. Not only was 2016 the warmest year on record, but eight of the 12 months that make up the year — from January through September, with the exception of June — were the warmest on record for those respective months.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://assets.climatecentral.org/images/made/2017WorldOceansDay_TempMap_en_title_lg_900_506_s_c1_c_c.jpg"
        title=""
      />
      <CardContent>
      <CardHeader
        title="Warming Oceans"
        subheader=""
      />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            The oceans have absorbed much of this increased heat, with the top 700 meters (about 2,300 feet) of ocean showing warming of more than 0.4 degrees Fahrenheit since 1969.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="http://news.nationalgeographic.com/content/dam/news/photos/000/617/61710.jpg"
        title="shrinking ice sheets"
      />
      <CardContent>
      <CardHeader
        title="Shrinking Ice Sheets"
      />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          The Greenland and Antarctic ice sheets have decreased in mass. Data from NASA's Gravity Recovery and Climate Experiment show Greenland lost an average of 286 billion tons of ice per year between 1993 and 2016, while Antarctica lost about 127 billion tons of ice per year during the same time period. The rate of Antarctica ice mass loss has tripled in the last decade. Both the extent and thickness of Arctic sea ice has declined rapidly over the last several decades.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://media.treehugger.com/assets/images/2011/10/then-and-now-chooyu.jpg"
        title="Glacial Retreat"
      />
      <CardContent>
      <CardHeader
        title="Glacial Retreat"
      />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Glaciers are retreating almost everywhere around the world — including in the Alps, Himalayas, Andes, Rockies, Alaska and Africa.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

<Card className={classes.card}>
<CardMedia
  className={classes.media}
  image="http://d2ouvy59p0dg6k.cloudfront.net/img/original/scr_239533_1.jpg"
  title="Decreased Snow Cover"
/>
<CardContent>
<CardHeader
  title="Decreased Snow Cover"
  subheader=""
/>
</CardContent>
<CardActions disableSpacing>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>
      Satellite observations reveal that the amount of spring snow cover in the Northern Hemisphere has decreased over the past five decades and that the snow is melting earlier.
    </Typography>
  </CardContent>
</Collapse>
</Card>

<Card className={classes.card}>

<CardMedia
  className={classes.media}
  image="https://assets.climatecentral.org/images/made/2016CoastalFloodDays_GlobalSLR_900_506_s_c1_c_c.jpg"
  title="Sea Levels Rising"
/>
<CardContent>
<CardHeader
  title="Sea Levels Rising"
  subheader=""
/>
</CardContent>
<CardActions disableSpacing>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>
     Global sea level rose about 8 inches in the last century. The rate in the last two decades, however, is nearly double that of the last century and is accelerating slightly every year.
    </Typography>
  </CardContent>
</Collapse>
</Card>

<Card className={classes.card}>
<CardMedia
  className={classes.media}
  image="https://insideclimatenews.org/sites/default/files/styles/opengraph_large/public/Keppelbleaching.jpg?itok=QfQ5BBnU"
  title="Ocean Acidification"
/>
<CardContent>
<CardHeader
  title="Ocean Acidification"
  subheader=""
/>
</CardContent>
<CardActions disableSpacing>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>
    Since the beginning of the Industrial Revolution, the acidity of surface ocean waters has increased by about 30 percent. This increase is the result of humans emitting more carbon dioxide into the atmosphere and hence more being absorbed into the oceans. The amount of carbon dioxide absorbed by the upper layer of the oceans is increasing by about 2 billion tons per year.
    </Typography>
  </CardContent>
</Collapse>
</Card>

<Card className={classes.card}>
<CardMedia
  className={classes.media}
  image="https://media.pri.org/s3fs-public/styles/story_main/public/story/images/MANN-NASA-entire-u.s.-of-Jan-4-nor'easter.jpg?itok=wYECIjru"
  title="Extreme Weather Events"
/>
<CardContent>
<CardHeader
  title="Extreme Weather Events"
  subheader=""
/>
</CardContent>
<CardActions disableSpacing>
  <IconButton
    className={clsx(classes.expand, {
      [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>
     The number of record high temperature events in the United States has been increasing, while the number of record low temperature events has been decreasing, since 1950. The U.S. has also witnessed increasing numbers of intense rainfall events.
    </Typography>
  </CardContent>
</Collapse>
</Card>
  </div>



  );
}