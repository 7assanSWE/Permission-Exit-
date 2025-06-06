// React Components
import Students from "./Students";
import Header from "./Header";
import StudentsHeader from "./StudentsHeader";

// Styles
import '../Styles/ExitRequestsPage.css';

// Others
import { useState, useEffect } from "react";

function ExitRequestsPage() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch all students from backend when component mounts
    useEffect(() => {
        fetch("http://localhost:5000/api/exit-requests/Students")
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
            <Header />
            {/* Search Bars */}
            <div className="search-container">
              <label htmlFor="searchBar">Search by Name or ID</label>
              <input
                type="search"
                id="searchBar"
                name="searchBar"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Enter name or ID"
              />
            </div>

            <StudentsHeader/>

            <div className="students_container">
              {filteredStudents.map((student) => (
                <Students
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

export default ExitRequestsPage;
