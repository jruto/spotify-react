import { Row } from "react-bootstrap"

import ContentCard from "../../ContentCard/ContentCard"

const ContentGrid = props => {
  return (
    <Row>
      {props.data.map((el, i) => {
        if (i <= 11) {
          return <ContentCard key={el.id} item={el} />
        }
      })}
    </Row>
  )
}

export default ContentGrid
