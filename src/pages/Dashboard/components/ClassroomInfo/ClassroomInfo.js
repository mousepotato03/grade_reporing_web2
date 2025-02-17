import React from "react";
import "../../Dashboard.css";

const ClassroomInfo = () => {
  return (
    <div className="dashboard-content-section">
      <h2>강의실 정보</h2>
      <div className="classroom-grid">
        <div className="classroom-card">
          <h3>강의실 101</h3>
          <p>수용 인원: 30명</p>
          <p>위치: 1층</p>
        </div>
        <div className="classroom-card">
          <h3>강의실 102</h3>
          <p>수용 인원: 25명</p>
          <p>위치: 1층</p>
        </div>
        <div className="classroom-card">
          <h3>강의실 201</h3>
          <p>수용 인원: 35명</p>
          <p>위치: 2층</p>
        </div>
      </div>
    </div>
  );
};

export default ClassroomInfo;
