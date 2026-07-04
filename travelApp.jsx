import Header from "./components/header"
import Entry from "./components/entry"
import data from "./data"


export default function App() {
  const dataEelement = data.map((data) => {
    return (
      <Entry 
        img={data.img}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {dataEelement}
      </main>
    </>
  )
}