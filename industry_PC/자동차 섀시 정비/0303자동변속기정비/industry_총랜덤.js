// -----------------------------
// ✅ 1. 각 회차 문제 파일을 import하여 배열을 가져옵니다.
import { industry030301 } from './industry_자동변속1회.js';
import { industry030302 } from './industry_자동변속2회.js';
import { industry030303 } from './industry_자동변속3회.js';

// 2. 모든 문제 배열을 하나의 배열로 통합합니다.
const allCombinedQuestions = [
    ...industry030301,
    ...industry030302,
    ...industry030303
];

// -----------------------------
// ✅ 3. 문제(question) 텍스트를 기준으로 중복을 제거하여 유니크한 문제만 추출합니다.
const uniqueQuestionsMap = new Map();

allCombinedQuestions.forEach(question => {
    // 문제 텍스트를 Key로 사용하여 중복되는 문제는 무시하고,
    // 해당 문제 객체를 Map에 저장합니다.
    if (!uniqueQuestionsMap.has(question.question)) {
        uniqueQuestionsMap.set(question.question, question);
    }
});

// Map의 값들(유니크한 문제 객체들)만 배열로 변환합니다.
let uniqueQuestions = Array.from(uniqueQuestionsMap.values());

// 💡 최소 1문제 보장 로직 (유지)
if (uniqueQuestions.length === 0 && allCombinedQuestions.length > 0) {
    uniqueQuestions = [allCombinedQuestions[0]];
    console.warn("경고: 중복 제거 로직으로 인해 모든 문제가 제거되어 원본 배열의 첫 번째 문제 1개를 강제 사용합니다.");
}
// -----------------------------
// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry030301]).slice(0, 60);
  
  // ✅ 보기 순서도 랜덤화
  questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined);
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
  });
  
  // -----------------------------
  // 답안 저장
  let answers = Array(questions.length).fill(-1);
  
  // -----------------------------
  // 남은 문제 표시
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
      div.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;

      // 1. imagePath 속성이 있는지 확인
        if (q.imagePath) {
            // 2. 이미지 태그를 만들어서 문제 텍스트 아래에 추가
            div.innerHTML += `<img 
                src="${q.imagePath}" 
                alt="문제 그림" 
                style="width: 500px; height: auto; margin: 15px 0;"
            >`;
        }
  
      const optsDiv = document.createElement("div");
      optsDiv.className = "options";
      q.options.forEach((opt, j) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
        label.querySelector("input").addEventListener("change", () => {
          answers[i] = j;
          updateRemaining();
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
  // 제출 및 채점
  function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있고, 사용자가 제출을 취소하는 경우
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            // 제출 취소 시: 첫 안 푼 문제로 스크롤
            if (firstUnansweredIndex !== -1) {
                const questionDiv = document.getElementsByClassName("question")[firstUnansweredIndex];
                questionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 부드럽게 스크롤
            }
            return; // 채점 로직 실행 중지
        }
    }
    
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
  
    let score = 0;
    questions.forEach((q, i) => {
      const questionDiv = document.getElementsByClassName("question")[i];
      const explainDiv = questionDiv.querySelector(".explain");
      const radios = questionDiv.querySelectorAll('input[type="radio"]');
  
      if (answers[i] == q.answer) {
        score++;
        radios[q.answer].parentElement.style.backgroundColor = "#b6fcb6";
      } else if (answers[i] >= 0) {
        radios[answers[i]].parentElement.style.backgroundColor = "#fcb6b6";
      }
  
      explainDiv.innerHTML = `<p>정답: ${q.options[q.answer]}</p><p>${q.explain}</p>`;
      radios.forEach((r) => (r.disabled = true));
    });
  
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">자동변속기 정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동변속기 정비 1회차 총점: ${score}/${questions.length}</h2>`;
  }
  
  // -----------------------------
  // 타이머
  let totalSeconds = 60 * 60;
  function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById(
      "timer"
    ).textContent = `남은 시간: ${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    if (totalSeconds <= 0) {
      submitQuiz();
    } else {
      totalSeconds--;
    }
  }
  let timerInterval = setInterval(updateTimer, 1000);
  
  // -----------------------------
  // 초기화
  document.getElementById("submitBtn").addEventListener("click", submitQuiz);
  renderQuiz();
/*
// CBT 핵심 로직
// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// ✅ 4. 유니크 배열을 섞어 60문제로 제한합니다.
let questions = shuffleArray([...uniqueQuestions]).slice(0, 60);

// 5. 보기 순서도 랜덤화하고, 정답 인덱스를 업데이트합니다.
questions.forEach((q) => {
    let combined = q.options.map((opt, idx) => ({ opt, idx }));
    combined = shuffleArray(combined); 
    
    q.answer = combined.findIndex((c) => c.idx === q.answer);
    q.options = combined.map((c) => c.opt);
});

// -----------------------------
// 답안 저장
let answers = Array(questions.length).fill(-1);

// -----------------------------
// 남은 문제 표시
function updateRemaining() {
    const remainingDiv = document.getElementById("remaining");
    if (remainingDiv) {
        let answered = answers.filter((a) => a >= 0).length;
        remainingDiv.textContent = `남은 문제: ${questions.length - answered}/${questions.length}`;
    }
}

// -----------------------------
// 문제 렌더링
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    if (!quizDiv) return;

    quizDiv.innerHTML = "";

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<strong>${i + 1}. ${q.question}</strong>`;

        if (q.imagePath) {
            div.innerHTML += `<img 
                src="${q.imagePath}" 
                alt="문제 그림" 
                style="width: 500px; height: auto; margin: 15px 0;"
            >`;
        }

        const optsDiv = document.createElement("div");
        optsDiv.className = "options";
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
            const input = label.querySelector("input");
            if (input) {
                input.addEventListener("change", () => {
                    answers[i] = j;
                    updateRemaining();
                });
            }
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
// 제출 및 채점
  function submitQuiz() {
    // 1. 안 푼 문제 인덱스 확인
    const firstUnansweredIndex = answers.findIndex((a) => a < 0);
    const unansweredCount = answers.filter((a) => a < 0).length;

    // 2. 안 푼 문제가 있고, 사용자가 제출을 취소하는 경우
    if (unansweredCount > 0) {
        const confirmSubmit = confirm(
            `아직 ${unansweredCount}개의 문제를 풀지 않았습니다.\n계속 제출하시겠습니까? (취소 시 문제풀이 계속 및 첫 안 푼 문제로 이동)`
        );
        
        if (!confirmSubmit) {
            // 제출 취소 시: 첫 안 푼 문제로 스크롤
            if (firstUnansweredIndex !== -1) {
                const questionDiv = document.getElementsByClassName("question")[firstUnansweredIndex];
                questionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' }); // 부드럽게 스크롤
            }
            return; // 채점 로직 실행 중지
        }
    }

    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
  
    let score = 0;
    questions.forEach((q, i) => {
      const questionDiv = document.getElementsByClassName("question")[i];
      const explainDiv = questionDiv.querySelector(".explain");
      const radios = questionDiv.querySelectorAll('input[type="radio"]');
  
      if (answers[i] == q.answer) {
        score++;
        radios[q.answer].parentElement.style.backgroundColor = "#b6fcb6";
      } else if (answers[i] >= 0) {
        radios[answers[i]].parentElement.style.backgroundColor = "#fcb6b6";
      }
  
      explainDiv.innerHTML = `<p>정답: ${q.options[q.answer]}</p><p>${q.explain}</p>`;
      radios.forEach((r) => (r.disabled = true));
    });
  
    // 상단 배너에 점수 표시
    const status = document.getElementById("status");
    status.classList.add("center");
    status.innerHTML = `<span id="scoreDisplay">자동변속기 정비 1회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동변속기 정비 1회차 총점: ${score}/${questions.length}</h2>`;
  }
  
  // -----------------------------
  // 타이머
  let totalSeconds = 60 * 60;
  function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    document.getElementById(
      "timer"
    ).textContent = `남은 시간: ${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    if (totalSeconds <= 0) {
      submitQuiz();
    } else {
      totalSeconds--;
    }
  }
  let timerInterval = setInterval(updateTimer, 1000);
  
  // -----------------------------
  // 초기화
  document.getElementById("submitBtn").addEventListener("click", submitQuiz);
  renderQuiz();

        // 문제 번호 옆에 ⭕/❌/❓ 아이콘 삽입
        const questionStrong = questionDiv.querySelector('strong');
        if (questionStrong) {
             questionStrong.innerHTML = `${i + 1}. ${q.question}${resultIcon}`;
        }
        
        // 해설 표시
        if (explainDiv) {
            explainDiv.innerHTML = `
                <hr style="border-top: 1px dashed #ccc;">
                <p style="font-weight: bold; color: #1a73e8;">✅ 정답: ${q.options[correctAnswerIndex]}</p>
                <p>💡 해설: ${q.explain || "해설 내용 없음."}</p>
            `;
        }
        
        // 제출 후 보기 선택 불가
        radios.forEach((r) => (r.disabled = true));
    });

    // 5. 최종 결과 표시
    const status = document.getElementById("status");
    const submitBtn = document.getElementById("submitBtn");
    const resultDiv = document.getElementById("result");

    if (status) {
        status.classList.add("center");
        status.innerHTML = `<span id="scoreDisplay">자동변속기 정비 통합 랜덤 총점: ${score}/${questions.length}</span>`;
    }

    if (submitBtn) {
        submitBtn.style.display = "none";
    }

    if (resultDiv) {
        resultDiv.innerHTML = `<h2>자동변속기 정비 통합 랜덤 총점: ${score}/${questions.length}</h2>`;
    }
}

// -----------------------------
// 타이머
let totalSeconds = 60 * 60; // 60분 (1시간)
function updateTimer() {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    
    const timerDiv = document.getElementById("timer");
    if (timerDiv) {
        timerDiv.textContent = `남은 시간: ${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
    
    if (totalSeconds <= 0) {
        submitQuiz(); 
    } else {
        totalSeconds--;
    }
}
// 타이머는 여기서 시작됩니다.
timerInterval = setInterval(updateTimer, 1000); 

// -----------------------------
// 초기화
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", submitQuiz);
}
renderQuiz();*/