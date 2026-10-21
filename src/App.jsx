import { useState, useEffect, useContext } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import Clock from './components/Clock'
import { ThemeContext } from './context/ThemeContext'
import useFetch from './hooks/useFetch'
import './App.css'

function App() {
  const { theme, toggle } = useContext(ThemeContext)
  const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/users')
  const { data, loading, error } = useFetch(apiUrl)
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [showClock, setShowClock] = useState(true)

  useEffect(() => {
    if (data && data.length > 0) {
      const mapped = data.slice(0, 5).map((item, index) => ({
        id: item.id ? item.id.toString() : (index + 1).toString(),
        name: item.name || `Sinh viên ${index + 1}`,
        email: item.email || `sv${index + 1}@ptit.edu.vn`,
        major: item.major || (index % 2 === 0 ? 'CNTT' : 'ATTT'),
        gpa: item.gpa || (3.0 + (index * 0.2)).toFixed(1)
      }))
      setStudents(mapped)
    } else if (!loading && !error) {
      setStudents([
        { id: '1', name: 'Nguyễn Văn An', email: 'an@ptit.edu.vn', major: 'CNTT', gpa: 3.5 },
        { id: '2', name: 'Trần Thị Bình', email: 'binh@ptit.edu.vn', major: 'ATTT', gpa: 3.8 },
        { id: '3', name: 'Lê Văn Cường', email: 'cuong@ptit.edu.vn', major: 'CNTT', gpa: 3.2 }
      ])
    }
  }, [data, loading, error])

  const handleAddStudent = (newSv) => {
    setStudents((prev) => [...prev, newSv])
  }

  const handleRemoveStudent = (id) => {
    setStudents((prev) => prev.filter((sv) => sv.id !== id))
  }

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={`container ${theme}`}>
      <div className="header-box">
        <h2>Quản lý sinh viên (Hooks) - B25DCTV081</h2>
        <button onClick={toggle} className="btn-toggle">
          Giao diện: {theme === 'light' ? 'Sáng' : 'Tối'}
        </button>
      </div>

      <div className="api-box">
        <label>Nguồn API (MockAPI / REST): </label>
        <input
          type="text"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          placeholder="Nhập URL mockapi..."
        />
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <StudentForm onAdd={handleAddStudent} />

      <StudentList
        items={filteredStudents}
        loading={loading}
        error={error}
        onRemove={handleRemoveStudent}
      />

      <hr />

      <h2>Đồng hồ & Lifecycle (useEffect)</h2>
      <button onClick={() => setShowClock((prev) => !prev)}>
        {showClock ? 'Ẩn đồng hồ' : 'Hiện đồng hồ'}
      </button>

      {showClock && <Clock />}
    </div>
  )
}

export default App
