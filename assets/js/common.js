// 카백과(CAR BAEKGWA) 글로벌 공통 레이아웃 엔진
document.addEventListener("DOMContentLoaded", function() {
    // 1. 헤더 영역 동적 주입 (브랜드명 & 슬로건 & 검색 UI)
    const headerHTML = `
        <div class="header-container">
            <div class="brand-zone">
                <div class="logo"><a href="/car-baekgwa/">CAR<span>BAEKGWA</span></a></div>
                <div class="slogan">자동차의 모든 정보, 한곳에서.</div>
            </div>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="렌트, 리스, 신차 비교, 정비 팁 검색...">
            </div>
        </div>
    `;
    const headerEl = document.querySelector("header");
    if (headerEl) headerEl.innerHTML = headerHTML;

    // 2. GNB 내비게이션 영역 동적 주입 (3단계 계층 구조의 1단계 대분류)
    const navHTML = `
        <div class="nav-container">
            <a href="/car-baekgwa/" class="nav-item" id="nav-home">종합 홈</a>
            <a href="/car-baekgwa/purchase/rent-lease/장기렌트-리스-결정적-차이.html" class="nav-item" id="nav-purchase">자동차 구매 & 금융</a>
            <a href="#" class="nav-item" id="nav-compare">차량 비교 & 가이드</a>
            <a href="#" class="nav-item" id="nav-management">유지관리 & 상식</a>
        </div>
    `;
    const navEl = document.querySelector("nav");
    if (navEl) navEl.innerHTML = navHTML;

    // 3. 하단 푸터 영역 동적 주입
    const footerHTML = `
        <div class="footer-logo">카백과</div>
        <div>자동차의 모든 정보, 한곳에서.</div>
        <div class="footer-info">
            © 2026 CAR BAEKGWA. All Rights Reserved.<br>
            본 플랫폼은 신차, 중고차, 장기렌트 및 리스, 차량 유지관리와 금융 정보까지<br>
            운전자에게 필요한 국내외 유용한 자동차 종합 정보를 쉽고 정확하게 알려주는 전문 정보 사이트입니다.
        </div>
    `;
    const footerEl = document.querySelector("footer");
    if (footerEl) footerEl.innerHTML = footerHTML;
    
    // 현재 페이지 위치에 따라 메뉴 활성화(Active) 표시 자동 부여
    const path = window.location.pathname;
    if (path.includes("/purchase/")) document.getElementById("nav-purchase")?.classList.add("active");
    else if (path.includes("/compare/")) document.getElementById("nav-compare")?.classList.add("active");
    else if (path.includes("/management/")) document.getElementById("nav-management")?.classList.add("active");
    else document.getElementById("nav-home")?.classList.add("active");
});
