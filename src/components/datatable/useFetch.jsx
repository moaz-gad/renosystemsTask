import { useState, useEffect } from "react"
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [ispending, SetPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource")
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          SetPending(false)
          setError(null)
        })
        .catch((err) => {
          setError(err.message)
          SetPending(false)
        })
    }, 1000)
  }, [url])

  return { data, ispending, error }
}
export default useFetch
