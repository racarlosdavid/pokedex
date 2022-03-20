import { useHistory } from "react-router-dom";
const Navbar = () => {

    const history = useHistory();

    const onProfile = (event) => {
        event.preventDefault();
        history.replace("/profile")
    }

    const onDashboard = (event) => {
        history.replace("/dashboard")
    }

    const onMyPokemons = (event) => {
        history.replace("/mypokemons")
    }

    const onLogOut = (event) => {
        history.replace("/")
    }

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button class="btn btn-light" onClick={onProfile}><i class="bi bi-person-fill"></i></button>
                </li>
                <li className="nav-item">
                    <button class="btn btn-light" onClick={onDashboard}>dashboard</button>
                </li>
                <li className="nav-item">
                    <button class="btn btn-light" onClick={onMyPokemons}>My Pokemons</button>
                </li>
           
            </ul>
        </div>
        <button class="btn btn-light" onClick={onLogOut}><i class="bi bi-x-circle"></i></button>
        </nav>
    )
    
}

export default Navbar;
