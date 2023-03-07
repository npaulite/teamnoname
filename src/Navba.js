import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navba() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        NoName
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/FDA">FDA</CustomLink>
        <CustomLink to="/Bavaria">Bavaria</CustomLink>
        <CustomLink to="/JaneHopkinsAdmin">JaneHopkinsAdmin</CustomLink>
        <CustomLink to="/JaneHopkinsDoctor">JaneHopkinsDoctor</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>

      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}