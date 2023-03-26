import { useEffect, useState } from "react";

import BackSide from "./components/BackSide";
import FrontSide from "./components/FrontSide";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";

const url = "https://randomuser.me/api/?results=25"

function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const fectData = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const { results } = data;
    setUser(results)
    setLoading(false)
  }

  useEffect(() => {
    fectData()
  }, [])

  if (loading) {
    return (
      <LoadingPage />
    )
  }

  return (
    <div className="App">
      <Header />
      <section className="section">
        {
          user.map((item) => {
            return (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <FrontSide item={item} />
                  <BackSide item={item} />
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;