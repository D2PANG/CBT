import { maintenance1Questions } from './maintenance1.js';
import { maintenance2Questions } from './maintenance2.js';
import { maintenance3Questions } from './maintenance3.js';
import { maintenance4Questions } from './maintenance4.js';
import { maintenance5Questions } from './maintenance5.js';
import { maintenance6Questions } from './maintenance6.js';
import { maintenance7Questions } from './maintenance7.js';


// 배열 합치기
let combinedQuestions = [
    ...maintenance1Questions, 
    ...maintenance2Questions, 
    ...maintenance3Questions, 
    ...maintenance4Questions, 
    ...maintenance5Questions, 
    ...maintenance6Questions, 
    ...maintenance7Questions
];

// **********************************************
// ⭐ 문제-풀이 매칭 보장 로직 (문제 텍스트를 키로 사용하여 묶음을 유지)
// **********************************************
let uniqueQuestionsMap = new Map();

combinedQuestions.forEach(q => {
    // q 객체(question, options, answer, explain) 전체가 문제 텍스트를 키로 저장되므로
    // 한 문제에 다른 문제의 풀이가 섞일 일은 없습니다.
    if (!uniqueQuestionsMap.has(q.question)) {
        uniqueQuestionsMap.set(q.question, q);
    }
});

// 중복 제거 후 배열로 변환
let allQuestions = Array.from(uniqueQuestionsMap.values());

// -----------------------------
// 문제/보기 랜덤 섞기 유틸리티 함수
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ✅ 문제 순서 랜덤 + 60문제 제한
let questions = shuffleArray([...allQuestions]).slice(0, 60);

// ✅ 보기 순서 랜덤화 (정답 인덱스만 새로운 순서에 맞게 업데이트)
questions.forEach((q) => {
    // 원래 보기와 원래 인덱스를 함께 저장
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    
    // 보기를 랜덤하게 섞음
    combined = shuffleArray(combined);
    
    // 새로운 정답 인덱스 찾기: 원래 정답 인덱스(q.answer)를 가진 요소가 섞인 후 몇 번째에 있는지 확인
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    
    // 섞인 보기로 업데이트
    q.options = combined.map((c) => c.opt);
});

// -----------------------------
// 답안 저장 (문제 수만큼 -1로 초기화)
let answers = Array(questions.length).fill(-1);

// -----------------------------
// 남은 문제 표시 업데이트
function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    let answered = answers.filter((a) => a >= 0).length;
    remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
}

// -----------------------------
// 문제 렌더링
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.style.marginBottom = "30px";
        div.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;

        // 이미지 경로가 있다면 추가
        if (q.imagePath) {
            div.innerHTML += `<img 
                src="${q.imagePath}" 
                alt="문제 그림" 
                style="width: 500px; max-width: 100%; height: auto; margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"
            >`;
        }

        const optsDiv = document.createElement("div");
        optsDiv.className = "options";
        optsDiv.style.display = "flex";
        optsDiv.style.flexDirection = "column";
        
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.style.display = "block";
            label.style.padding = "8px 10px";
            label.style.margin = "4px 0";
            label.style.cursor = "pointer";
            label.style.transition = "background-color 0.2s";

            // 선택된 상태를 추적하기 위한 데이터 속성 추가
            label.setAttribute('data-q-index', i);
            label.setAttribute('data-opt-index', j);

            // 마우스 오버 시 스타일
            label.onmouseover = function() { 
                if (answers[i] !== j) {
                    this.style.backgroundColor = '#f0f0f0'; 
                }
            };
            label.onmouseout = function() { 
                if (answers[i] !== j) {
                    this.style.backgroundColor = 'transparent'; 
                } else {
                    this.style.backgroundColor = '#e0e0e0'; // 선택된 보기는 유지
                }
            };

            label.innerHTML = `<input type="radio" name="q${i}" value="${j}" style="margin-right: 10px;"> ${opt}`;
            
            // 라디오 버튼 변경 이벤트 리스너
            label.querySelector("input").addEventListener("change", (e) => {
                const selectedIndex = parseInt(e.target.value);
                answers[i] = selectedIndex;
                updateRemaining();
                
                // 선택 시 스타일 변경 (선택한 것만 배경색 유지, 나머지는 제거)
                optsDiv.querySelectorAll('label').forEach(lbl => {
                    lbl.style.backgroundColor = 'transparent';
                });
                label.style.backgroundColor = '#e0e0e0'; // 현재 선택된 보기는 약간 회색으로
            });
            
            optsDiv.appendChild(label);
        });
        div.appendChild(optsDiv);

        const explainDiv = document.createElement("div");
        explainDiv.className = "explain";
        div.appendChild(explainDiv);

        quizDiv.appendChild(div);
    });

    updateRemaining();
}

// -----------------------------
// **********************************************
// ⭐ 제출 및 채점 (JS 인라인 스타일로 정/오답 표시)
// **********************************************
function submitQuiz() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";

    let score = 0;

    questions.forEach((q, i) => {
        const questionDiv = document.getElementsByClassName("question")[i];
        const explainDiv = questionDiv.querySelector(".explain");
        const radios = questionDiv.querySelectorAll('input[type="radio"]');

        // 1. 모든 라디오 버튼 비활성화 및 마우스 이벤트 제거
        radios.forEach((r) => {
            r.disabled = true;
            const label = r.closest('label');
            label.onmouseover = null;
            label.onmouseout = null;
        });

        // 2. 정답 <label> 요소 가져오기
        const correctLabel = radios[q.answer].closest('label');

        // 3. 정답 배경 (무조건 초록색 표시)
        correctLabel.style.backgroundColor = "#b6fcb6";
        correctLabel.style.fontWeight = "bold"; // 정답 강조
        correctLabel.style.padding = "8px 10px";
        correctLabel.style.borderRadius = "5px";

        if (answers[i] == q.answer) {
            score++;
            // 정답을 맞춘 경우: 별도 처리 없음 (이미 초록색)

        } else if (answers[i] >= 0) {
            // 오답을 고른 경우: 선택한 오답에 빨간색 배경 추가
            const wrongLabel = radios[answers[i]].closest('label');
            
            // 오답에 빨간색 배경 칠하기
            wrongLabel.style.backgroundColor = "#fcb6b6";
            wrongLabel.style.fontWeight = "normal"; // 굵게 표시 해제
            wrongLabel.style.padding = "8px 10px";
            wrongLabel.style.borderRadius = "5px";
        }

        // 4. 해설 표시 (인라인 스타일)
        explainDiv.innerHTML = `
            <div style="margin-top: 20px; padding: 15px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
                <p style="color: #007700; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                    ✅ 정답: ${q.options[q.answer]}
                </p>
                <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">
                    ${q.explain}
                </p>
            </div>
        `;
    });

    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay" style="font-size: 1.5em; font-weight: bold; color: #333;">총점: ${score}/${questions.length}</span>`;

    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";

    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2 style="text-align: center; color: ${score >= 36 ? 'blue' : 'red'}; margin-top: 20px;">
        ${score >= 36 ? '🎉 축하합니다! 합격 점수입니다.' : '😭 아쉽지만 불합격입니다. 다시 도전하세요.'}
    </h2>
    <p style="text-align: center; font-size: 1.2em;">최종 점수: ${score}/${questions.length} (합격 기준 36점 이상)</p>`;
}

// -----------------------------
// 타이머 설정 (60분)
let totalSeconds = 60 * 60; 
let timerInterval;

function updateTimer() {
    let m = Math.floor(totalSeconds / 60);
    let s = totalSeconds % 60;
    
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `남은 시간: ${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    timerElement.style.fontWeight = "bold";
    timerElement.style.color = totalSeconds <= 300 ? "red" : "black"; // 5분 남으면 빨간색 경고

    if (totalSeconds <= 0) {
        submitQuiz();
        timerElement.textContent = "시간 종료!";
    } else {
        totalSeconds--;
    }
}


// -----------------------------
// 초기화 및 실행
document.addEventListener("DOMContentLoaded", () => {
    // 제출 버튼에 이벤트 리스너 연결
    const submitButton = document.getElementById("submitBtn");
    if (submitButton) {
        submitButton.addEventListener("click", submitQuiz);
    } else {
        console.error("제출 버튼(submitBtn)을 찾을 수 없습니다. HTML을 확인해주세요.");
    }
    
    // 문제 렌더링 시작
    renderQuiz();
    
    // 타이머 시작
    timerInterval = setInterval(updateTimer, 1000);
});