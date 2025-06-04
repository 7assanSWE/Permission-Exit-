// React Components
import ExitApprovalCard from "./ExitApprovalCard";
import Header from "./Header";


// Styles
import '../Styles/ExitApprovals.css';

// Others
import { useState } from "react";

function ExitApprovals() {
    // Example students array
    const [students] = useState([
        { name: "Zahraa Mohammad", id: "20202002", status: "Approved" },
        { name: "Ali Ahmed", id: "20202003", status: "Pending" },
        { name: "Sara Ali", id: "20202004", status: "Rejected" },
        { name: "Zahraa Mohammad", id: "20202002", status: "Approved" },
        { name: "Fatima Noor", id: "20202005", status: "Approved" }
    ]);
    const [search, setSearch] = useState("");

    // Filter students by name or id
    const filteredStudents = students.filter(
        s =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.id.includes(search)
    );

    return (
        <>
            <Header/>
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
                        name={student.name}
                        id={student.id}
                        status={student.status}
                    />
                ))}
            </div>
        </>
    );
}

export default ExitApprovals;