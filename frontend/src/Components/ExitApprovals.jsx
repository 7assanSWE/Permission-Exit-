// React Components
import ExitApprovalCard from "./ExitApprovalCard";
import Header from "./Header";

// Styles
import '../Styles/ExitApprovals.css';

// Others
import { useState, useEffect } from "react";

function ExitApprovals() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch students from backend on mount when Status: Requested
useEffect(() => {
    fetch("http://localhost:5000/api/requests-approvals/get-students-status-requested")
        .then(res => res.json())
        .then(data => {
            // Combine first + middle + last into full name
            const formatted = data.map(student => ({
                id: student.Student_ID.toString(),
                name: `${student.First_n} ${student.Middle_n} ${student.Last_n}`,
                status: student.Status
            }));
            setStudents(formatted);
        })
        .catch(err => console.error("Error fetching students:", err));
}, []);


    // Filter students by full name or ID
    const filteredStudents = students.filter(
        s =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.id.includes(search)
    );

    return (
        <>
            <Header/>
            {/* Search Bar */}
            <label htmlFor="searchBar">Search by Name or ID </label>
            <input
                type="search"
                id="searchBar"
                name="searchBar"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Enter name or ID"
            />
            {/* Students' Records */}
            <div className="students_container">
              {filteredStudents.map((student) => (
                <ExitApprovalCard
                  key={student.id}
                  name={student.name}
                  id={student.id}
                  status={student.status}
                  onStatusUpdate={(newStatus) => {
                    setStudents(prev =>
                      prev.map(s =>
                        s.id === student.id ? { ...s, status: newStatus } : s
                      )
                    );
                  }}
                />
              ))}
            </div>
        </>
    );
}

export default ExitApprovals;