import React from "react";
import "../../Dashboard.css";

const ParentCommunication = () => {
  return (
    <div className="dashboard-content-section">
      <h2>학부모 전달</h2>
      <div className="communication-list">
        <div className="communication-item">
          <h4>공지사항 1</h4>
          <p>다음 주 학부모 회의 일정 안내</p>
        </div>
        <div className="communication-item">
          <h4>공지사항 2</h4>
          <p>학생 상담 일정 안내</p>
        </div>
        <div className="communication-item">
          <h4>공지사항 3</h4>
          <p>학원 행사 관련 안내</p>
        </div>
      </div>
    </div>
  );
};

export default ParentCommunication;
