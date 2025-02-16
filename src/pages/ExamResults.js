import React, { useState, useEffect } from "react";

function ExamResults() {
  const [template, setTemplate] = useState(
    `[수학 주간TEST 성적 알림]

1.학생: {name}

2.단원: {examName}

3.점수: {score}/{maxScore} ({passed})

*재시험자는 토요일 11시 20분까지 등원
재시험 미등원 시 다음주 월-금 3:30~5:00 까지 등원하여 자습 및 보강 실시 

*재시험 미통과시 개인 보강 진행

*합격 기준: {maxScore}문항 중 {passCriteria}개 이상

--------------------------------------------------------------`
  );

  const [examName, setExamName] = useState("");
  const [maxScore, setMaxScore] = useState(15);
  const [passCriteria, setPassCriteria] = useState(12);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    let defaultExamName = `${month}/${dayOfMonth} ` + (day === 5 ? "주간테스트" : "일일테스트");
    setExamName(defaultExamName);
  }, []);

  const handleKeyDown = (event, field) => {
    if (event.key === "Tab" && field === "name") {
      event.preventDefault();
      document.getElementById("score").focus();
    }
    if (event.key === "Enter") {
      event.preventDefault();
      submitForm();
    }
  };

  const submitForm = () => {
    if (name && score) {
      const passed = score >= passCriteria ? "통과" : "미통과";
      const resultText = template
        .replace("{name}", name)
        .replace("{examName}", examName)
        .replace("{score}", score)
        .replace("{maxScore}", maxScore)
        .replace("{passed}", passed)
        .replace("{passCriteria}", passCriteria);

      setResults((prevResults) => `${prevResults}\n\n${resultText}`);
      setName("");
      setScore("");
      document.getElementById("name").focus();
    } else {
      alert("모든 필드를 입력해 주세요.");
    }
  };

  const copyResults = () => {
    navigator.clipboard.writeText(results);
    alert("복사되었습니다.");
  };

  const resetResults = () => {
    setResults("");
  };

  return (
    <div className="container mx-auto max-w-2xl p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">시험 결과 보고</h1>

      {/* 양식 입력 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">양식 입력:</label>
        <textarea
          className="w-full h-40 p-2 border rounded"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        />
      </div>

      {/* 시험지명 입력 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">시험지:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />
      </div>

      {/* 문항 수 및 합격 기준 */}
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">문항 수:</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={maxScore}
            onChange={(e) => setMaxScore(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">통과(이상):</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={passCriteria}
            onChange={(e) => setPassCriteria(e.target.value)}
          />
        </div>
      </div>

      {/* 학생 정보 입력 */}
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">이름:</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "name")}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">점수:</label>
          <input
            type="number"
            id="score"
            className="w-full p-2 border rounded"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* 버튼 그룹 */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={copyResults}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          복사
        </button>
        <button
          onClick={resetResults}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          리셋
        </button>
      </div>

      {/* 결과 출력 */}
      <textarea className="w-full h-48 p-2 border rounded" value={results} readOnly />
    </div>
  );
}

export default ExamResults;