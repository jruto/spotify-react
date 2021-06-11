import { useEffect, useState } from "react"
import ContentGrid from "../ContentGrid/ContentGrid"

import "./ContentSection.css"

const ContentSection = props => {
  const [contentData, setContentData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": "7d208f71b8mshfd6cd40bfde572fp107ab9jsnfda73eb5809a",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          if (data.error) {
            fetchData()
          } else {
            if (props.type === "artists") {
              setContentData(data.data.map(track => track.artist))
            } else {
              setContentData(data.data)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="content-section">
      <h2 className="my-4">{props.type}</h2>
      <ContentGrid data={contentData} />
    </section>
  )
}

export default ContentSection
