import "./style.css"
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 w-100">
    <div className="container-fluid">
      
      <a className="navbar-brand fw-bold" style={{ color: "blue",fontSize: "30px" ,  fontFamily: "Poppins, sans-serif" }}>FickleFlight</a>

      <div className="d-flex gap-3">
        <button className="btn  mx-2">Explore</button>
        <button className="btn  mx-2">Search</button>
        <button className="btn  mx-2">Hotels</button>
        <button className="btn  mx-2">Offers</button>
      <i className="bi bi-bell" style={{ fontSize: "24px", cursor: "pointer" }}></i>
      <i className="bi bi-person" style={{ fontSize: "24px", cursor: "pointer" }}></i>
      </div>

    </div>
  </nav>
  );
}

export default Header;
