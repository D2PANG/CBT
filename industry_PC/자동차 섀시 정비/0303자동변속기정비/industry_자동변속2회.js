// -----------------------------
// 문제 배열
export const industry030302 = [
{
        question: "냉매 순환 시스템에서 액체 냉매 내에 포함된 수분을 흡수하여 시스템의 부식을 방지하고, 이물질을 걸러주는 역할을 하는 부품은 무엇입니까?",
        options: ["팽창 밸브(Expansion Valve)", "응축기(Condenser)", "수액기(Receiver Drier)", "압축기(Compressor)"],
        answer: 2,
        explain: "수액기(리시버 드라이어)는 냉매 속 수분을 흡수하는 건조제와 이물질을 거르는 필터를 포함하여 시스템을 건조하고 청정하게 유지합니다."
    },
    {
        question: "A/C 시스템 정비 중 냉매 충전 전에 반드시 진공 작업을 실시해야 하는 가장 중요한 목적은 무엇입니까?",
        options: ["시스템 내부 냉매의 누설 부위를 정확하게 찾기 위함", "시스템 내부의 압력을 높여 응축 효율을 증대시키기 위함", "시스템 내부의 냉동 오일을 규정량만큼 보충하기 위함", "시스템 내부의 수분 및 비응축성 가스(공기)를 제거하기 위함"],
        answer: 3,
        explain: "진공 작업은 시스템 내부의 공기와 수분을 제거하여 냉매 순환 방해와 부식 방지, 냉매 시스템의 성능 저하를 막기 위한 필수 절차입니다."
    },
    {
        question: "신냉매인 R-1234yf를 사용하는 차량을 정비할 때 R-134a 시스템보다 더욱 엄격하게 주의해야 할 안전 사항은 무엇입니까?",
        options: ["냉매의 독성 때문에 항상 방독 마스크를 착용해야 한다.", "냉매의 온도가 매우 낮으므로 동상에 특히 주의해야 한다.", "냉매가 인화성(약한 가연성)이 있어 화기 및 스파크를 피해야 한다.", "냉매가 고압이므로 진공 작업을 평소보다 더 오래 해야 한다."],
        answer: 2,
        explain: "R-1234yf는 약한 가연성을 가지고 있어, 정비 시 스파크나 고열이 발생할 수 있는 장소에서의 작업은 엄격하게 금지됩니다."
    },
    {
        question: "A/C 시스템의 압축기 작동을 제어하는 압력 스위치 중, 냉매 누설 등으로 인해 저압이 지나치게 낮아졌을 때 압축기 작동을 정지시켜 압축기를 보호하는 스위치는 무엇입니까?",
        options: ["고압 압력 스위치(High Pressure Switch)", "저압 압력 스위치(Low Pressure Switch)", "에어 믹스 스위치(Air Mix Switch)", "안전 컷 스위치(Safety Cut Switch)"],
        answer: 1,
        explain: "저압 압력 스위치는 냉매 부족 등으로 흡입 압력이 규정값 이하로 내려가면 압축기 손상 방지를 위해 작동을 중단시킵니다."
    },
    {
        question: "에어컨 작동 시 저압 측 압력이 규정 압력보다 매우 낮고(거의 진공 상태), 고압 측 압력도 규정 압력보다 낮은 경우에 의심할 수 있는 가장 적절한 고장 원인은 무엇입니까?",
        options: ["냉매량이 과도하게 많은 경우", "팽창 밸브(TXV)가 완전히 막힌 경우", "압축기 토출 밸브가 파손된 경우", "응축기 냉각 팬이 고장 난 경우"],
        answer: 1,
        explain: "팽창 밸브가 막히면 냉매 순환이 거의 일어나지 않아 압축기 흡입 측(저압)이 진공에 가깝게 되며, 고압 측도 낮게 측정됩니다."
    },
    {
        question: "팽창 밸브(TXV, Thermal Expansion Valve) 대신 오리피스 튜브(Orifice Tube)를 사용하는 시스템에서 액체 냉매를 기화시키는 장소와 그 역할을 가장 바르게 설명한 것은 무엇입니까?",
        options: ["응축기 내부에서 냉매의 압력을 낮춰 기화시킨다.", "수액기 내부에서 냉매의 압력을 낮춰 기화시킨다.", "증발기 입구에서 냉매의 압력을 낮춰 증발기 내부에서 기화시킨다.", "압축기 내부에서 냉매의 압력을 높여 기화시킨다."],
        answer: 2,
        explain: "오리피스 튜브는 냉매의 압력을 급격히 낮추는 역할을 하며, 이로 인해 증발기 내부로 들어간 저압 냉매가 흡열 작용(기화)을 합니다."
    },
    {
        question: "난방 장치 작동 시 실내에 달콤한 냄새가 나거나, 앞 유리창에 기름때가 끼고, 냉각수 레벨이 지속적으로 감소하는 경우, 가장 먼저 의심해야 할 부품의 고장은 무엇입니까?",
        options: ["블로워 모터의 고장", "에어 믹스 댐퍼의 작동 불량", "히터 코어(Heater Core)의 누설", "엔진 냉각수 온도 센서의 불량"],
        answer: 2,
        explain: "히터 코어 누설 시 냉각수가 증발하여 실내로 유입되며, 부동액 때문에 달콤한 냄새가 나거나 유리창에 유막이 형성될 수 있습니다."
    }    
    
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...industry030302]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">자동변속기 정비 2회차 총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>자동변속기 정비 2회차 총점: ${score}/${questions.length}</h2>`;
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