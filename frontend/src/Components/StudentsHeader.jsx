// Importing Styles
import '../Styles/StudentsHeader.css';

function StudentsHeader() {
    return(
            <div className="student-header-row">
              <p className="name">Name</p>
              <p className="id">ID</p>
              <div className="buttons">Actions</div>
              <p className="status">Status</p>
            </div>
    )
    
}

export default StudentsHeader;
