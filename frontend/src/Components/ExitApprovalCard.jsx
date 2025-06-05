import { useState } from 'react';
import '../Styles/Students.css';

function Students({ name, id, status, onStatusUpdate }) {
  const [visible, setVisible] = useState(true);

  const approveExit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/requests-approvals/approve-exit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: id })
      });

      const result = await response.json();

      if (response.ok) {
        onStatusUpdate("Approved");
        setTimeout(() => setVisible(false), 1000); // Hide component after 1 second
      } else {
        alert(result.message || "Request failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const rejectExit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/requests-approvals/reject-exit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: id })
      });

      const result = await response.json();

      if (response.ok) {
        onStatusUpdate("Rejected");
        setTimeout(() => setVisible(false), 1000); // Hide component after 1 second
      } else {
        alert(result.message || "Request failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  if (!visible) return null; // Don't render anything if component should be hidden

  return (
    <div className="student-row">
      <p className="name">{name}</p>
      <p className="id">{id}</p>
      <div className="buttons">
        <button onClick={approveExit} disabled={status !== "Requested"}>
          Approve
        </button>
        <button onClick={rejectExit} disabled={status !== "Requested"}>
          Reject
        </button>
      </div>
      <p className="status">{status}</p>
    </div>
  );
}

export default Students;
