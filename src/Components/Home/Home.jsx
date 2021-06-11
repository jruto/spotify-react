import ContentSection from "./ContentSection/ContentSection"
import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container>
      <ContentSection type="albums" url="https://deezerdevs-deezer.p.rapidapi.com/artist/1182/albums" />
      <ContentSection type="artists" url="https://deezerdevs-deezer.p.rapidapi.com/search?q=best" />
      <ContentSection type="tracks" url="https://deezerdevs-deezer.p.rapidapi.com/artist/511975/top" />
    </Container>
  )
}

export default Home
