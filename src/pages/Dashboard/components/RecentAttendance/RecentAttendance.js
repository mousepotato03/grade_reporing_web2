import React from "react";
import "../../Dashboard.css";

const RecentAttendance = () => {
  return (
    <div className="dashboard-content-section">
      <h2>최근 출결 기록</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>학생 이름</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-02-16</td>
            <td>홍길동</td>
            <td>출석</td>
          </tr>
          <tr>
            <td>2025-02-16</td>
            <td>김철수</td>
            <td>지각</td>
          </tr>
          <tr>
            <td>2025-02-16</td>
            <td>이영희</td>
            <td>결석</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentAttendance;
