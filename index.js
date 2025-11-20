document.addEventListener('DOMContentLoaded', (event) => {
    const pageContent = document.getElementById('pageContent'); 
    
    // 배너 요소 가져오기
    const pcBanner = document.getElementById('pcBanner');
    const mobileBanner = document.getElementById('mobileBanner');



    // 버전 선택 배너 이벤트 리스너 (인증 후 이동)
    pcBanner.addEventListener('click', () => {
        window.location.href = 'index_pc.html';
    });
    mobileBanner.addEventListener('click', () => {
        window.location.href = 'index_mobile.html';
    });
    
});