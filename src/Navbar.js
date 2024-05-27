export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            Ellipsis
        </a>
        <ul>
            <li className="active">
                <a href="/pricing">Pricing</a>
            </li>
            <li>
                <a href="/about">about</a>
            </li>
        </ul>
    </nav>
}