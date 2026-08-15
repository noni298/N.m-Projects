function Header() 
{
     return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg fw-bold" style={{backgroundColor: '#670b43'}}>
        <div className="container">
         <a className="navbar-brand text-white fw-bold" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav"> 
            <li className="nav-item">
            <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-bold disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
</header>
        </>

     )
    
}
export default Header