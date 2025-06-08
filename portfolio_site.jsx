// namhyeonuk.github.io - Portfolio Homepage

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">남현욱</h1>
      <p className="text-lg">연구자 · 아티스트 · 기타 제작자</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/about"><Card><CardContent className="p-4">소개</CardContent></Card></Link>
        <Link to="/research"><Card><CardContent className="p-4">연구</CardContent></Card></Link>
        <Link to="/music"><Card><CardContent className="p-4">음악</CardContent></Card></Link>
        <Link to="/guitars"><Card><CardContent className="p-4">기타</CardContent></Card></Link>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">소개</h2>
      <p>연구, 음악, 기타 제작을 통해 삶의 의미를 탐색하고 있는 남현욱입니다.</p>
    </div>
  );
}

function Research() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">연구</h2>
      <ul className="list-disc pl-6">
        <li>HEAR: Hierarchical Extensive Acoustic Recognition (ICASSP 2025 제출 예정)</li>
        <li>JiTTER: Jigsaw Temporal Transformer (arXiv, 2025)</li>
        <li>다수의 SED 및 오디오 인식 관련 연구 수행 중</li>
      </ul>
    </div>
  );
}

function Music() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">음악</h2>
      <ul className="list-disc pl-6">
        <li>남현 - 정규 1집 [자유], 싱글 [속박]</li>
        <li>밴드 오얀 - 2025년 롤링홀 공연 예정</li>
        <li>장르: 디스코, 싸이키델릭, 개러지 록 기반</li>
      </ul>
    </div>
  );
}

function Guitars() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">기타 제작</h2>
      <ul className="list-disc pl-6">
        <li>싱싱텔레: 싱글픽업 텔레 스타일 자작기타</li>
        <li>어쿠텔레(쿠텔): 솔리드-풀할로우 하이브리드 기타 제작중</li>
        <li>P+P 베이스, 스트랫형 기타 등 다수 프로젝트 예정</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/music" element={<Music />} />
        <Route path="/guitars" element={<Guitars />} />
      </Routes>
    </Router>
  );
}
