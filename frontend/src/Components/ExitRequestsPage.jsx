// React Components
import Students from "./Students";
import Header from "./Header";

// Styles
import '../Styles/ExitRequestsPage.css';

// Others
import { useState } from "react";

function ExitRequestsPage() {
    // Example students array
    const [students] = useState([
        { name: "Zahraa Mohammad", id: "101", status: "Requested" },
        { name: "Jood Ahmed", id: "102", status: "Approved" },
        { name: "Sara Ali", id: "103", status: "Exited" },
        { name: "Farah Mohammad", id: "104", status: "Rejected" },
        { name: "Fatima Noor", id: "105", status: "Approved" }
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
                    <Students
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

export default ExitRequestsPage;