import { useMemo, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { ROUTES } from "../shared/utils/constant"
import '../App.css'
import useDebounce from "../shared/hooks/useDebounce";

const ChallengeRouter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-viewport">
      {/* Show "Back to Home" only when inside a challenge */}
      {!isHomePage && (
        <nav className="internal-nav">
          <Link to="/" className="back-link">Back to Dashboard</Link>
          <span className="current-challenge">
            {ROUTES.find(r => r.path === location.pathname)?.label}
          </span>
        </nav>
      )}
      <main className="content-area">
        <Routes>
          <Route path="/" element={<HomeView />} />
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  )
};

const HomeView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedInputValue = useDebounce(searchQuery, 300);

  const filteredRoutes = useMemo(() => {
    return ROUTES.filter((route) =>
      route.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [debouncedInputValue]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="home-title">Machine Coding</h1>
        <p className="home-subtitle">Interactive React Interview Prep Playground</p>
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a challenge (e.g., 'Counter', 'Modal')..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <p className="search-meta">
        Showing {filteredRoutes.length} {filteredRoutes.length === 1 ? 'challenge' : 'challenges'}
      </p>
      <div className="challenge-grid">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route) => (
            <Link key={route.path} to={route.path} className="challenge-card">
              <div className="card-icon">{route.label.charAt(0)}</div>
              <div className="card-content">
                <h3>{route.label}</h3>
                <span className="solve-btn">Solve Challenge →</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            No challenges match "<strong>{searchQuery}</strong>"
          </div>
        )}
      </div>
    </div>
  )
};

export default ChallengeRouter
