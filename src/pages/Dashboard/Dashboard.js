import React, { useState } from "react";
import RecentAttendance from "./components/RecentAttendance/RecentAttendance";
import ClassroomInfo from "./components/ClassroomInfo/ClassroomInfo";
import ParentCommunication from "./components/ParentCommunication/ParentCommunication";
import "./Dashboard.css";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("recentAttendance");

  const renderContent = () => {
    switch (activeMenu) {
      case "recentAttendance":
        return <RecentAttendance />;
      case "classroomInfo":
        return <ClassroomInfo />;
      case "parentCommunication":
        return <ParentCommunication />;
      default:
        return <div className="dashboard-content-section">내용이 없습니다.</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-header">학원 이름님, 환영합니다.</div>
        <button
          className={`dashboard-menu ${activeMenu === "recentAttendance" ? "active" : ""}`}
          onClick={() => setActiveMenu("recentAttendance")}
        >
          최근 출결 기록
        </button>
        <button
          className={`dashboard-menu ${activeMenu === "classroomInfo" ? "active" : ""}`}
          onClick={() => setActiveMenu("classroomInfo")}
        >
          강의실 정보
        </button>
        <button
          className={`dashboard-menu ${activeMenu === "parentCommunication" ? "active" : ""}`}
          onClick={() => setActiveMenu("parentCommunication")}
        >
          학부모 전달
        </button>
      </div>
      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
