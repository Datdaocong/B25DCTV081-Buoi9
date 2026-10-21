import { useState } from 'react'

function StudentForm({ onAdd }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('CNTT')
  const [gpa, setGpa] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (name.trim().length < 3) {
      errs.name = 'Họ tên tối thiểu 3 ký tự'
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Email không hợp lệ'
    }
    const gpaNum = parseFloat(gpa)
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4) {
      errs.gpa = 'GPA phải từ 0 đến 4'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    onAdd({
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      major,
      gpa: parseFloat(gpa)
    })

    setName('')
    setEmail('')
    setMajor('CNTT')
    setGpa('')
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h3>Thêm sinh viên</h3>
      <div className="form-group">
        <label>Họ tên: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Ngành: </label>
        <select value={major} onChange={(e) => setMajor(e.target.value)}>
          <option value="CNTT">CNTT</option>
          <option value="ATTT">ATTT</option>
          <option value="DTVT">DTVT</option>
        </select>
      </div>

      <div className="form-group">
        <label>GPA: </label>
        <input
          type="number"
          step="0.1"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
        {errors.gpa && <span className="error">{errors.gpa}</span>}
      </div>

      <button type="submit">Thêm</button>
    </form>
  )
}

export default StudentForm
