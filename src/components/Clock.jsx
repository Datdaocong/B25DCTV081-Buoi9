import { useState, useEffect } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Clock mounted: bat dau timer')
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      console.log('Clock unmounted: huy timer')
      clearInterval(timerId)
    }
  }, [])

  useEffect(() => {
    if (count > 0) {
      document.title = `Đã bấm ${count} lần`
    }
  }, [count])

  return (
    <div className="clock-box">
      <h3>{time.toLocaleTimeString()}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Đã bấm: {count} (Đổi tiêu đề trang)
      </button>
    </div>
  )
}

export default Clock
