import * as Data1 from './심화1회차/심화1회차.js';
import * as Data2 from './심화2회차/심화2회차.js';
import * as Data3 from './심화3회차/심화3회차.js';
import * as Data4 from './심화4회차/심화4회차.js';
import * as Data5 from './심화5회차/심화5회차.js';
import * as Data6 from './심화6회차/심화6회차.js';

const allSets = [Data1, Data2, Data3, Data4, Data5, Data6];
let questions = [];
let answers = [];
let totalSeconds = 60 * 60;
let timerInterval = null;
let isWrongMode = false;

/* ===========================
    1. 오답 세트 관리 및 삭제
=========================== */

function saveToWrongNote() {
    let wrongPool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");
    let wrongSets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    
    const currentWrongQs = questions.filter((q, i) => answers[i] !== q.answer);
    
    currentWrongQs.forEach(q => {
        const qKey = q.question;
        if (wrongPool[qKey]) {
            wrongPool[qKey].wrongCount++;
        } else {
            wrongPool[qKey] = { ...q, wrongCount: 1 };
            let placed = false;
            for (let set of wrongSets) {
                if (set.questions.length < 60) {
                    set.questions.push(qKey);
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                wrongSets.push({
                    id: Date.now(), // 고유 ID로 변경 (삭제 시 식별 용이)
                    date: new Date().toLocaleDateString(),
                    questions: [qKey]
                });
            }
        }
    });
    
    localStorage.setItem('wrong_pool', JSON.stringify(wrongPool));
    localStorage.setItem('wrong_sets', JSON.stringify(wrongSets));
}

// 특정 세트 삭제 함수
window.deleteWrongSet = (setId, event) => {
    event.stopPropagation(); // 버튼 클릭 시 세트 시작 방지
    if (confirm("이 오답 세트를 삭제하시겠습니까?")) {
        let sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
        sets = sets.filter(s => s.id !== setId);
        localStorage.setItem('wrong_sets', JSON.stringify(sets));
        startWrongNote(); // 모달 갱신
    }
};

window.resetWrongData = () => {
    if (confirm("모든 오답 세트와 누적 기록이 영구적으로 삭제됩니다. 계속하시겠습니까?")) {
        localStorage.removeItem('wrong_pool');
        localStorage.removeItem('wrong_sets');
        alert("오답 기록이 모두 초기화되었습니다.");
        closeModal();
    }
};

window.startWrongNote = () => {
    const sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    if (sets.length === 0) return alert("저장된 오답이 없습니다.");

    let html = `<h2 class="modal-title">📝 오답 세트 선택</h2>`;
    sets.forEach((set, i) => {
        html += `
            <div class="set-row">
                <button class="set-select-btn" onclick="loadWrongSet(${i})">
                    <div class="set-info">
                        <span class="set-name">세트 ${i + 1}</span>
                        <span class="set-date">${set.date}</span>
                    </div>
                    <span class="set-count">${set.questions.length}문항</span>
                </button>
                <button class="set-delete-btn" onclick="deleteWrongSet(${set.id}, event)">삭제</button>
            </div>`;
    });

    html += `
        <div style="margin-top: 25px; border-top: 1px dashed #ccc; padding-top: 15px;">
            <button onclick="resetWrongData()" class="reset-data-btn">🔥 전체 기록 초기화</button>
        </div>`;
    
    openModal(html);
};

window.loadWrongSet = (index) => {
    const sets = JSON.parse(localStorage.getItem('wrong_sets') || "[]");
    const pool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");
    const selectedSet = sets[index];
    
    if (confirm(`해당 세트를 푸시겠습니까?`)) {
        isWrongMode = true;
        closeModal();
        const setQuestions = selectedSet.questions.map(key => pool[key]);
        questions = prepareQuestions(setQuestions);
        startNewQuiz();
    }
};

/* ===========================
    2. 핵심 로직 (OMR, 퀴즈)
=========================== */
function shuffleArray(array) { return [...array].sort(() => Math.random() - 0.5); }

function prepareQuestions(sourceArray) {
    const shuffled = shuffleArray(JSON.parse(JSON.stringify(sourceArray)));
    shuffled.forEach(q => {
        if (!q.originalCorrectOptionText) q.originalCorrectOptionText = q.options[q.answer];
        q.options = shuffleArray(q.options);
        q.answer = q.options.indexOf(q.originalCorrectOptionText);
    });
    return shuffled;
}

function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    const pool = JSON.parse(localStorage.getItem('wrong_pool') || "{}");

    questions.forEach((q, i) => {
        const wrongData = pool[q.question];
        const countBadge = (wrongData && wrongData.wrongCount > 1) 
            ? `<span class="wrong-badge">누적 오답 ${wrongData.wrongCount}회</span>` 
            : '';

        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <div class="q-header">
                <span class="round-tag">${q.roundInfo || '오답노트'}</span>
                ${countBadge}
                <span id="q-status-${i}" class="q-status"></span>
            </div>
            <strong class="q-title">${i + 1}. ${q.question}</strong>
            ${q.imagePath ? `<img src="${q.imagePath}" class="q-image">` : ''}
            <div class="options"></div>
            <div class="explain"></div>
        `;
        const optsDiv = div.querySelector(".options");
        q.options.forEach((opt, j) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
            label.querySelector("input").onchange = () => {
                answers[i] = j;
                updateRemaining();
                optsDiv.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
                label.classList.add('selected');
                if (i < questions.length - 1) setTimeout(() => scrollToQuestion(i + 1), 500);
            };
            optsDiv.appendChild(label);
        });
        quizDiv.appendChild(div);
    });
}

function renderOMR() {
    const omrListDiv = document.getElementById("omr-list");
    omrListDiv.innerHTML = "";
    questions.forEach((_, i) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "omr-item";
        itemDiv.innerHTML = `
            <span class="omr-q-num" onclick="scrollToQuestion(${i})">${i + 1}</span>
            <div class="omr-options-wrapper">
                ${[0, 1, 2, 3].map(v => `<span class="omr-option" onclick="selectFromOMR(${i}, ${v})">${v + 1}</span>`).join('')}
            </div>
        `;
        omrListDiv.appendChild(itemDiv);
    });
    renderGlobalBtns();
}

function renderGlobalBtns() {
    const header = document.querySelector(".omr-header");
    let wrap = header.querySelector(".global-select-wrapper") || document.createElement("div");
    wrap.className = "global-select-wrapper";
    wrap.innerHTML = [0,1,2,3].map(i => `<button class="omr-global-select-btn" onclick="globalSelect(${i})">${i+1}</button>`).join('');
    header.insertBefore(wrap, document.getElementById("quickSubmitBtn"));
}

window.scrollToQuestion = (i) => {
    const q = document.getElementsByClassName("question")[i];
    if (q) {
        const offset = 110; // 상단바 높이 고려
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = q.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
};

window.selectFromOMR = (qIdx, vIdx) => {
    const radio = document.querySelector(`input[name="q${qIdx}"][value="${vIdx}"]`);
    if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change')); }
};

window.globalSelect = (vIdx) => {
    questions.forEach((_, i) => selectFromOMR(i, vIdx));
};

function updateRemaining() {
    const count = answers.filter(a => a >= 0).length;
    document.getElementById("remaining").textContent = `남은 문제: ${questions.length - count}/${questions.length}`;
    document.querySelectorAll('.omr-item').forEach((item, i) => {
        item.classList.toggle('answered', answers[i] >= 0);
        item.querySelectorAll('.omr-option').forEach((opt, j) => {
            opt.classList.toggle('selected', answers[i] === j);
        });
    });
}

function submitQuiz(isQuick = false) {
    if (!isQuick && answers.includes(-1)) {
        alert("미풀이 문제가 있습니다.");
        scrollToQuestion(answers.indexOf(-1));
        return;
    }
    disableExitPrevention();
    clearInterval(timerInterval);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let score = 0;
    questions.forEach((q, i) => {
        const qDiv = document.getElementsByClassName("question")[i];
        const status = document.getElementById(`q-status-${i}`);
        const omrItem = document.querySelectorAll('.omr-item')[i];
        const omrOpts = omrItem.querySelectorAll('.omr-option');
        
        qDiv.querySelectorAll('label')[q.answer].style.backgroundColor = "#b6fcb6";
        if (answers[i] === q.answer) {
            score++; status.innerHTML = '⭕';
            omrItem.classList.add('correct');
        } else {
            if (answers[i] >= 0) {
                qDiv.querySelectorAll('label')[answers[i]].style.backgroundColor = "#fcb6b6";
                omrOpts[answers[i]].classList.add('wrong');
            }
            status.innerHTML = '❌';
            omrItem.classList.add('wrong');
        }
        status.style.cssText = 'font-size: 2rem; font-weight: 700; position: absolute; left:-0px; top: 40px;';
        omrOpts[q.answer].classList.add('correct');
        qDiv.querySelector(".explain").style.display = "block";
        qDiv.querySelector(".explain").innerHTML = `<strong>정답: ${q.originalCorrectOptionText}</strong><br>${q.explain || '해설이 없습니다.'}`;
        qDiv.querySelectorAll('input').forEach(r => r.disabled = true);
    });

    saveQuizResult(score, questions.length);
    saveToWrongNote();
    
    document.getElementById("status").innerHTML = `<span id="scoreDisplay">결과: ${score}/${questions.length}</span><button id="retryBtn" onclick="location.reload()">다시 풀기</button>`;
    document.getElementById("submitBtn").style.display = "none";
}

/* ===========================
    3. 초기화 및 유틸리티
=========================== */
function updateTimer() {
    let m = Math.floor(totalSeconds / 60), s = totalSeconds % 60;
    document.getElementById("timer").textContent = `남은 시간: ${m}:${s < 10 ? '0'+s : s}`;
    if (totalSeconds-- <= 0) submitQuiz(true);
}

function startNewQuiz() {
    answers = Array(questions.length).fill(-1);
    renderQuiz();
    renderOMR();
    updateRemaining();
    if(timerInterval) clearInterval(timerInterval);
    totalSeconds = 60 * 60;
    timerInterval = setInterval(updateTimer, 1000);
}

function initApp() {
    if (localStorage.getItem('dark-mode') === 'true') document.body.classList.add('dark-mode');
    let rawPool = [];
    allSets.forEach((mod, idx) => {
        if (mod.repairData) {
            const picked = shuffleArray(mod.repairData).slice(0, 10).map(q => ({...q, roundInfo: `${idx+1}회차`}));
            rawPool = rawPool.concat(picked);
        }
    });
    questions = prepareQuestions(rawPool);
    startNewQuiz();
}

function saveQuizResult(score, total) {
    const history = JSON.parse(localStorage.getItem('quiz_history') || "[]");
    history.push({ date: new Date().toLocaleDateString(), score, total, percent: Math.round((score/total)*100) });
    localStorage.setItem('quiz_history', JSON.stringify(history.slice(-10)));
}

window.showStats = () => {
    const history = JSON.parse(localStorage.getItem('quiz_history') || "[]");
    const isDark = document.body.classList.contains('dark-mode'); // 다크모드 체크
    
    let html = `<h2 class="modal-title" style="margin-bottom: 20px;">📊 성적 기록 (정밀 통계)</h2>`;
    
    if (!history.length) {
        html += "<p style='text-align:center; padding:20px;'>기록이 없습니다.</p>";
    } else {
        const reversedHistory = [...history].reverse();
        const recentCount = 5;

        html += `<div id="stats-scroll-container" style="max-height: 60vh; overflow-y: auto; padding-right: 10px; margin-bottom: 10px;">`;

        reversedHistory.forEach((h, i) => {
            const precisePercent = ((h.score / h.total) * 100).toFixed(2);
            const isHidden = i >= recentCount ? 'display: none;' : '';
            const hiddenClass = i >= recentCount ? 'class="hidden-stats"' : '';
            
            // 다크 모드일 때와 아닐 때의 색상 변수 설정
            const scoreColor = isDark ? '#8ab4f8' : '#1f3b73'; // 다크모드에선 밝은 하늘색
            const dateColor = isDark ? '#bbbbbb' : '#666666';  // 다크모드에선 연한 회색

            html += `
                <div ${hiddenClass} style="margin-bottom: 15px; border-bottom: 1px solid ${isDark ? '#333' : 'rgba(0,0,0,0.1)'}; padding-bottom: 10px; ${isHidden}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <span style="font-size: 0.9rem; color: ${dateColor};">📅 ${h.date}</span>
                        <strong style="font-size: 1.1rem; color: ${scoreColor};">${precisePercent}점</strong>
                    </div>
                    <div style="font-size: 0.75rem; margin-bottom: 5px; text-align: right; color: ${dateColor}; opacity: 0.8;">
                        정답 수: ${h.score} / ${h.total}
                    </div>
                    <div class="stat-bar" style="background: ${isDark ? '#333' : '#eee'}; height: 8px; border-radius: 4px; overflow: hidden;">
                        <div class="stat-fill" style="width: ${precisePercent}%; background: ${isDark ? '#4caf50' : '#238636'}; height: 100%;"></div>
                    </div>
                </div>`;
        });

        if (reversedHistory.length > recentCount) {
            html += `
                <button id="show-more-stats" onclick="toggleMoreStats()" style="width:100%; padding:10px; background:${isDark ? '#2a2a2a' : '#f8f9fa'}; border:1px solid ${isDark ? '#444' : '#ddd'}; border-radius:6px; cursor:pointer; color:${isDark ? '#ccc' : '#555'}; font-size:0.85rem; margin-top:5px; margin-bottom:10px;">
                    ▼ 이전 점수 더보기 (${reversedHistory.length - recentCount}개)
                </button>`;
        }

        html += `</div>`; 
    }
    
    window.toggleMoreStats = () => {
        const hiddenItems = document.querySelectorAll('.hidden-stats');
        const btn = document.getElementById('show-more-stats');
        hiddenItems.forEach(item => item.style.display = 'block');
        btn.style.display = 'none';
        
        setTimeout(() => {
            const container = document.getElementById('stats-scroll-container');
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }, 50);
    };

    openModal(html);
};

window.toggleDarkMode = () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDark);
};

function handleBeforeUnload(e) { e.preventDefault(); e.returnValue = ''; return ''; }
function handlePageHide() { localStorage.setItem('temp_answers', JSON.stringify(answers)); }
function disableExitPrevention() { window.removeEventListener('beforeunload', handleBeforeUnload); window.removeEventListener('pagehide', handlePageHide); }
function enableExitPrevention() { window.addEventListener('beforeunload', handleBeforeUnload); window.addEventListener('pagehide', handlePageHide); }

function openModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.remove('hidden');
}
window.closeModal = () => document.getElementById('modal-overlay').classList.add('hidden');

// 실행부
document.getElementById("submitBtn").onclick = () => submitQuiz(false);
document.getElementById("omrSubmitBtn").onclick = () => submitQuiz(false);
document.getElementById("quickSubmitBtn").onclick = () => submitQuiz(true);
enableExitPrevention();
initApp();