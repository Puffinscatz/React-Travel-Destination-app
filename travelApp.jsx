import Header from "./components/header"
import Entry from "./components/entry"
import data from "./data"


export default function App() {
  const dataEelement = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
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