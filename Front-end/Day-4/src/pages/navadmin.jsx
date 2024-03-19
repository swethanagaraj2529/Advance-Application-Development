import '../CSS/navadmin.css'

const NavAdmin = () => {
  return (
    <div className="sidebar"> {/* Apply sidebar class here */}
      <ul>
        <h5 className="name_acadamy">Yoga academy</h5>
        <li><a href="#">Academy</a></li>
        <li><a href="#">Enrolled course</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Students</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  )
}

export default NavAdmin
