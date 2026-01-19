import { Routes, Route, Link } from "react-router-dom"
import { ROUTES } from "../shared/utils/constant"

const ChallengeRouter = () => {
  return (
    <>
      <nav style={{ padding: 16 }}>
        {ROUTES.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            style={{ marginRight: 12 }}
          >
            <p>

              {route.label}
            </p>
          </Link>
        ))}
      </nav>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  )
}

export default ChallengeRouter
