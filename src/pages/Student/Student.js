import React from "react";
import "./Student.css";

function Student() {
  // 더미 데이터 (실제 프로젝트에서는 API나 상태관리를 통해 데이터를 받아올 예정)
  const students = [
    { id: 1, name: '홍길동', grade: '1학년', class: 'A반', attendance: '출석' },
    { id: 2, name: '김철수', grade: '2학년', class: 'B반', attendance: '지각' },
    { id: 3, name: '이영희', grade: '3학년', class: 'C반', attendance: '결석' },
  ];

  return (
    <div className="student-container">
      {/* 검색창 및 학생 추가 버튼 */}
      <div className="student-header">
        <input 
          type="text" 
          placeholder="학생 검색..." 
          className="student-search-input" 
        />
        <button className="student-add-button">학생 추가</button>
      </div>
      
      {/* 학생 목록 테이블 */}
      <table className="student-table">
        <thead>
          <tr>
            <th className="student-th">번호</th>
            <th className="student-th">이름</th>
            <th className="student-th">학년</th>
            <th className="student-th">반</th>
            <th className="student-th">출결</th>
            <th className="student-th">액션</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td className="student-td">{index + 1}</td>
              <td className="student-td">{student.name}</td>
              <td className="student-td">{student.grade}</td>
              <td className="student-td">{student.class}</td>
              <td className="student-td">{student.attendance}</td>
              <td className="student-td">
                <button className="student-edit-button">수정</button>
                <button className="student-delete-button">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;