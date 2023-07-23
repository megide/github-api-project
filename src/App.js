import {  useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Repositories from "./components/github/Repositories"
import axios from "axios"

export default function App() {

  const [username, setUsername] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])



  const getRepos = async () => {
    try {
      const { data: repositories } = await axios.get(`https://api.github.com/users/${username}/repos`)
      setRepos(repositories)
      setError(null)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setRepos(null)
      setLoading(false)
      setTimeout(() => {
        getRepos()
      }, 5000);
    }
  };

  const handleSearchKey = e => {
    setLoading(true)
    if (e.key === 'Enter') {
      getRepos()
    }
  }



  return (
    <div
      className="bg-gradient-to-r from-slate-900 to-gray-800 min-h-screen pb-10"
    >
      <Header />
      <Search searchTxt={username} setSearchTxt={setUsername} onkey={handleSearchKey} />
      {/* repositories */}
      {error && <div className="text-center my-11">{error}</div>}
      {loading && <div className="text-center my-11">
        <h1 className="text-center my-11 text-xl">Press enter key to search ...</h1>
      </div>}
      {!error && <div className="px-10">
        {repos.length > 0 && <Repositories data={repos} onError={setError} />}
      </div>
      }
    </div>
  )
}