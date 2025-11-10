document.addEventListener('DOMContentLoaded', (event) => {
    // 1. 설정
    const CORRECT_PASSWORD = '0936'; 
    const LOGIN_KEY = 'cbt_is_logged_in';

    // 2. HTML 요소 가져오기
    const modal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');
    const pageContent = document.getElementById('pageContent'); 
    
    // 배너 요소 가져오기
    const pcBanner = document.getElementById('pcBanner');
    const mobileBanner = document.getElementById('mobileBanner');

    // 3. 콘텐츠 표시 로직 (비밀번호가 맞았을 때 실행)
    function showContent() {
        modal.style.display = 'none';
        pageContent.classList.remove('blur'); // 블러 효과 제거
        errorMessage.style.display = 'none';
    }

    // 4. 초기 실행: 로그인 상태 확인 및 블러 적용
    if (sessionStorage.getItem(LOGIN_KEY) === 'true') {
        showContent();
    } else {
        // 로그인 기록이 없다면: 모달을 띄우고 본문에 블러 적용
        modal.style.display = 'block'; 
        pageContent.classList.add('blur'); 
    }
    
    // 5. 비밀번호 확인 함수
    function checkPassword() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === CORRECT_PASSWORD) {
            sessionStorage.setItem(LOGIN_KEY, 'true'); 
            showContent();
        } else {
            errorMessage.style.display = 'block'; 
            passwordInput.value = ''; 
            passwordInput.focus();
        }
    }

    // 6. 이벤트 리스너 연결 (비밀번호 입력)
    submitButton.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // 7. 버전 선택 배너 이벤트 리스너 (인증 후 이동)
    pcBanner.addEventListener('click', () => {
        window.location.href = 'index_pc.html';
    });
    mobileBanner.addEventListener('click', () => {
        window.location.href = 'index_mobile.html';
    });
    
    // 8. 뒤로가기/앞으로가기 시 깜빡임 방지 로직
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) { 
            if (sessionStorage.getItem(LOGIN_KEY) === 'true') {
                showContent();
            } else {
                modal.style.display = 'block';
                pageContent.classList.add('blur'); 
            }
        }
    });
});