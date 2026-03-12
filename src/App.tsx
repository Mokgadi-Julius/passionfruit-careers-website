import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Home,
  Features,
  Pricing,
  API,
  Integrations,
  About,
  Careers,
  Press,
  Blog,
  Help,
  Community,
  Status,
  Terms,
  Privacy,
  Cookies,
  POPIA,
  JobPage,
} from './pages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product Pages */}
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api" element={<API />} />
        <Route path="/integrations" element={<Integrations />} />

        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />

        {/* Resources Pages */}
        <Route path="/help" element={<Help />} />
        <Route path="/community" element={<Community />} />
        <Route path="/status" element={<Status />} />
        <Route path="/terms" element={<Terms />} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/popia" element={<POPIA />} />

        {/* Job Pages */}
        <Route path="/jobs/:id" element={<JobPage />} />

        {/* 404 - Redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
