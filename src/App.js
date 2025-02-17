import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import ExamResults from './pages/ExamResults';
import Header from './components/Header/Header';
import './App.css';  
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 헤더 컴포넌트 */}
        <Header />

        {/* 페이지 콘텐츠 */}
        <div className="main-content">
          <Routes>
            {/* 라우팅 설정 */}
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exam-results" element={<ExamResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
