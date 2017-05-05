import React from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProjectCardContainer = props => (
  <Card className="project-card">
    {/*<CardHeader*/}
      {/*title={props.title}*/}
      {/*subtitle={props.subTitle}*/}
    {/*/>*/}
    <CardMedia
      className="project-card-media"
      // overlay={<CardTitle
      //   className="project-card-overlay"
      //   title="Overlay title"/>}
    >
      <img src={props.imgPath} />
    </CardMedia>
    <CardTitle
      className="project-card-title"
      title="Card title"
    />
    <CardText>
      Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb
      Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

export default ProjectCardContainer