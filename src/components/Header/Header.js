import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* 로고 */}
        <h1 className="logo">
          <Link to="/" class="logo">
            <span class="edu">Edu</span><span class="report">Report</span>
          </Link>
        </h1>

        {/* 네비게이션 */}
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/dashboard" className="nav-item">대시보드</Link>
            </li>
            <li>
              <Link to="/student" className="nav-item">학생 관리</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
