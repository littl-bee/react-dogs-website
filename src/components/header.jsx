import Nav from "./Nav";

function Header() {
    return (
        <header className="header">
            <div className="logo-title">
            <img className="logo" src="/paw-logo.png" alt="Paw Logo" />
            <h1 className="title">Pawsome Dogs</h1>
            </div>
            <Nav />
        </header>
    );
}

export default Header;