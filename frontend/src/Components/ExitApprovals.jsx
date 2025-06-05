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

    // Fetch students from backend on mount
    // I should fetch also the exti requests to get the stauts of 
    useEffect(() => {
        fetch("http://localhost:5000/api/exit-requests/Students")
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => {
                console.error("Failed to fetch students:", err);
                setStudents([]); // fallback to empty array on error
            });
    }, []);

    // Filter students by name or id
    const filteredStudents = students.filter(
        s =>
            (s.name && s.name.toLowerCase().includes(search.toLowerCase())) ||
            (s.id && s.id.includes(search))
    );

    return (
        <>
        <h1>hi</h1>
            {/* <Header/>
            <label htmlFor="searchBar">Search by Name or ID </label>
            <input
                type="search"
                id="searchBar"
                name="searchBar"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Enter name or ID"
            />
            <br />
            <br />
            <br />

            <div className="students_container">
                {filteredStudents.map((student, idx) => (
                    <ExitApprovalCard
                        key={idx}
                        name={student.first_n + student.middle_n + student.last_n}
                        id={student.id}
                        status={Exist_Request.status}
                    />
                ))}
            </div> */}
        </>
    );
}

export default ExitApprovals;