import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) {
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`)
        return res.json()
      })
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, setData, loading, error }
}
