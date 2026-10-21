function StudentList({ items, loading, error, onRemove }) {
  if (loading) {
    return <p className="status-message">Đang tải dữ liệu từ API...</p>
  }

  if (error) {
    return <p className="error">Lỗi khi tải dữ liệu: {error}</p>
  }

  if (items.length === 0) {
    return <p>Chưa có sinh viên nào trong danh sách</p>
  }

  return (
    <div className="table-box">
      <h3>Danh sách sinh viên</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Ngành</th>
            <th>GPA</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {items.map((sv) => (
            <tr key={sv.id}>
              <td>{sv.name}</td>
              <td>{sv.email}</td>
              <td>{sv.major}</td>
              <td>{sv.gpa}</td>
              <td>
                <button
                  onClick={() => {
                    if (window.confirm(`Bạn có chắc muốn xóa sinh viên ${sv.name}?`)) {
                      onRemove(sv.id)
                    }
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
