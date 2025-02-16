import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">학생 관리, 이제 스마트하게!</h3>
          <h2 className="card-subtitle">
            실시간 성적 확인과 활동 진도 추적, 빠르고 쉽게 학부모와 소통하세요.
          </h2>
          <button className="card-button">바로 가기</button>
        </div>
        <div className="card-image">
          <img src="/students.png" alt="Students" />
        </div>
      </div>
    </div>
  );
}

export default Home;