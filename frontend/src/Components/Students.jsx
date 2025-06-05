import '../Styles/Students.css';

function Students({ name, id, status, onStatusUpdate }) {

  const requestExit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/exit-requests/Request-Exit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ studentId: id })
      });

      const result = await response.json();

      if (response.ok) {
        // Inform parent component to update status
        onStatusUpdate("Requested");
      } else {
        alert(result.message || "Request failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

const ExitChecked = async () => {
      try {
      const response = await fetch("http://localhost:5000/api/exit-requests/Check-Exit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ studentId: id })
      });

      const result = await response.json();

      if (response.ok) {
        // Inform parent component to update status
        onStatusUpdate("Exited");
      } else {
        alert(result.message || "Request failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
}

  return (
    <div className="student-row">
      <p className="name">{name}</p>
      <p className="id">{id}</p>
      <div className="buttons">
        <button onClick={requestExit} disabled={status !== "Present"}>
          Request Exit
        </button>
        <button onClick={ExitChecked} disabled={status !== "Approved"}>
          Checked
        </button>
      </div>
      <p className="status">{status}</p>
    </div>
  );
}

export default Students;
