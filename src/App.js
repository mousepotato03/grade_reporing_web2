import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ExamResults from './pages/ExamResults';
import Header from './components/Header/Header';
import './App.css';  

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
            <Route path="/exam-results" element={<ExamResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
