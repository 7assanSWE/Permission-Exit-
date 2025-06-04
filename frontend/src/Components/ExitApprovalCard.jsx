
import '../Styles/Students.css';

function Students(student) {
  return (
    <div className="student-row">
      <p className="name">{student.name}</p>
      <p className="id">{student.id}</p>
      <div className="buttons">
        <button>Approve</button>
        <button>Reject</button>
      </div>
      <p className="status">{student.status}</p>
    </div>
  );
}

export default Students;