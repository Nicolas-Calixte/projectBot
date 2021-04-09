import { useEffect } from "react"
import { useHistory } from "react-router"

const HomePage = () => {
  const history = useHistory()

  useEffect(() => {
    history.push("/login")
  }, [])
}

export default HomePage
