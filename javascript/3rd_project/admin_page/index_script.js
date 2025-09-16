// 로드이벤트
document,addEventListener("DOMContentLoaded",init);

// 제품 데이터
const original_product_data = [
    { "category": "상의", "brand": "Stussy", "product": "스투시 기본 로고 반팔티", "price": "89,000" },
    { "category": "하의", "brand": "Levi's", "product": "리바이스 501 오리지널 핏", "price": "129,000" },
    { "category": "신발", "brand": "adidas", "product": "아디다스 슈퍼스타", "price": "109,000" },
    { "category": "패션잡화", "brand": "Gentle Monster", "product": "젠틀몬스터 선글라스", "price": "320,000" },
    { "category": "상의", "brand": "Louis Vuitton", "product": "루이비통 모노그램 맨투맨", "price": "1,500,000" },
    { "category": "하의", "brand": "ZARA", "product": "자라 슬림핏 데님", "price": "59,000" },
    { "category": "신발", "brand": "Converse", "product": "컨버스 척 70", "price": "92,000" },
    { "category": "패션잡화", "brand": "Apple", "product": "애플워치 밴드", "price": "69,000" },
    { "category": "상의", "brand": "Nike", "product": "나이키 드라이핏 후드집업", "price": "95,000" },
    { "category": "하의", "brand": "Patagonia", "product": "파타고니아 조거 팬츠", "price": "110,000" },
    { "category": "신발", "brand": "Jordan", "product": "조던 1 레트로 하이", "price": "220,000" },
    { "category": "패션잡화", "brand": "Chanel", "product": "샤넬 코코핸들 백", "price": "7,000,000" },
    { "category": "상의", "brand": "The North Face", "product": "노스페이스 눕시 다운 자켓", "price": "350,000" },
    { "category": "하의", "brand": "Uniqlo", "product": "유니클로 울트라 라이트 다운", "price": "89,000" },
    { "category": "신발", "brand": "Vans", "product": "반스 올드스쿨", "price": "75,000" },
    { "category": "패션잡화", "brand": "Cartier", "product": "까르띠에 러브 링", "price": "2,000,000" },
    { "category": "상의", "brand": "Balenciaga", "product": "발렌시아가 로고 티셔츠", "price": "750,000" },
    { "category": "하의", "brand": "Fear of God", "product": "피어 오브 갓 에센셜 트랙 팬츠", "price": "400,000" },
    { "category": "신발", "brand": "New Balance", "product": "뉴발란스 992", "price": "260,000" },
    { "category": "패션잡화", "brand": "Ray-Ban", "product": "레이밴 클래식 보잉 선글라스", "price": "180,000" },
    { "category": "상의", "brand": "Moncler", "product": "몽클레르 패딩", "price": "2,500,000" },
    { "category": "하의", "brand": "Columbia", "product": "컬럼비아 아웃도어 팬츠", "price": "90,000" },
    { "category": "신발", "brand": "Dr. Martens", "product": "닥터마틴 1460 부츠", "price": "190,000" },
    { "category": "패션잡화", "brand": "Gucci", "product": "구찌 마몬트 벨트", "price": "650,000" },
    { "category": "상의", "brand": "Burberry", "product": "버버리 체크 셔츠", "price": "850,000" },
    { "category": "하의", "brand": "Gap", "product": "갭 스트레이트 데님", "price": "75,000" },
    { "category": "신발", "brand": "Timberland", "product": "팀버랜드 워커 부츠", "price": "210,000" },
    { "category": "패션잡화", "brand": "Rolex", "product": "롤렉스 서브마리너", "price": "15,000,000" },
    { "category": "상의", "brand": "Givenchy", "product": "지방시 링클 로고 티셔츠", "price": "600,000" },
    { "category": "하의", "brand": "Dickies", "product": "디키즈 워크 팬츠", "price": "65,000" },
    { "category": "신발", "brand": "ASICS", "product": "아식스 젤카야노", "price": "150,000" },
    { "category": "패션잡화", "brand": "Prada", "product": "프라다 리나일론 버킷햇", "price": "700,000" },
    { "category": "상의", "brand": "Kenzo", "product": "겐조 타이거 맨투맨", "price": "380,000" },
    { "category": "하의", "brand": "Lululemon", "product": "룰루레몬 얼라인 팬츠", "price": "120,000" },
    { "category": "신발", "brand": "Onitsuka Tiger", "product": "오니츠카타이거 멕시코 66", "price": "135,000" },
    { "category": "패션잡화", "brand": "Hermès", "product": "에르메스 H 로고 벨트", "price": "1,200,000" },
    { "category": "상의", "brand": "Y-3", "product": "Y-3 로고 후드티", "price": "420,000" },
    { "category": "하의", "brand": "Stone Island", "product": "스톤아일랜드 카고 팬츠", "price": "550,000" },
    { "category": "신발", "brand": "Maison Margiela", "product": "메종 마르지엘라 타비 슈즈", "price": "900,000" },
    { "category": "패션잡화", "brand": "Fendi", "product": "펜디 FF 로고 스카프", "price": "580,000" },
    { "category": "상의", "brand": "Ami Paris", "product": "아미 빅하트 로고 스웨터", "price": "450,000" },
    { "category": "하의", "brand": "Carhartt", "product": "칼하트 더블니 팬츠", "price": "115,000" },
    { "category": "신발", "brand": "Common Projects", "product": "커먼프로젝트 아킬레스 로우", "price": "480,000" },
    { "category": "패션잡화", "brand": "Saint Laurent", "product": "생로랑 사첼백", "price": "2,800,000" },
    { "category": "상의", "brand": "Palm Angels", "product": "팜엔젤스 트랙 자켓", "price": "600,000" },
    { "category": "하의", "brand": "Acne Studios", "product": "아크네 스튜디오 데님", "price": "300,000" },
    { "category": "신발", "brand": "Golden Goose", "product": "골든구스 슈퍼스타", "price": "520,000" },
    { "category": "패션잡화", "brand": "Thom Browne", "product": "톰 브라운 카드홀더", "price": "550,000" },
    { "category": "상의", "brand": "Vetements", "product": "베트멍 오버사이즈 후드티", "price": "1,200,000" },
    { "category": "하의", "brand": "Off-White", "product": "오프화이트 카고 팬츠", "price": "900,000" },
    { "category": "신발", "brand": "Balenciaga", "product": "발렌시아가 트리플S", "price": "1,300,000" },
    { "category": "패션잡화", "brand": "Coach", "product": "코치 시그니처 백", "price": "450,000" },
    { "category": "상의", "brand": "MSGM", "product": "MSGM 로고 스웨트셔츠", "price": "280,000" },
    { "category": "하의", "brand": "Ralph Lauren", "product": "랄프로렌 치노 팬츠", "price": "140,000" },
    { "category": "신발", "brand": "Salomon", "product": "살로몬 XT-6", "price": "180,000" },
    { "category": "패션잡화", "brand": "Tory Burch", "product": "토리버치 엘라 미니 토트", "price": "320,000" },
    { "category": "가전제품", "brand": "Samsung", "product": "갤럭시 S25", "price": "1,350,000" },
    { "category": "도서", "brand": "민음사", "product": "데미안", "price": "9,800" },
    { "category": "가구", "brand": "IKEA", "product": "칼릭스 책장", "price": "129,000" },
    { "category": "스포츠용품", "brand": "Nike", "product": "에어로 스위프트 쇼츠", "price": "65,000" },
    { "category": "식품", "brand": "오뚜기", "product": "진라면 매운맛", "price": "5,500" },
    { "category": "화장품", "brand": "Laneige", "product": "워터 슬리핑 마스크", "price": "28,000" },
    { "category": "음악", "brand": "BTS", "product": "Dynamite LP", "price": "49,000" },
    { "category": "주얼리", "brand": "Tiffany & Co.", "product": "티파니 T 스마일 목걸이", "price": "2,500,000" },
    { "category": "자동차용품", "brand": "불스원", "product": "에어컨 필터", "price": "18,000" },
    { "category": "반려동물용품", "brand": "하림", "product": "더 리얼 한우 져키", "price": "15,000" },
    { "category": "취미용품", "brand": "LEGO", "product": "레고 테크닉 부가티", "price": "550,000" },
    { "category": "가전제품", "brand": "Dyson", "product": "다이슨 에어랩 멀티 스타일러", "price": "699,000" },
    { "category": "도서", "brand": "출판사김영사", "product": "아몬드", "price": "12,000" },
    { "category": "가구", "brand": "Herman Miller", "product": "에어론 체어", "price": "2,200,000" },
    { "category": "스포츠용품", "brand": "adidas", "product": "울트라부스트 22", "price": "219,000" },
    { "category": "식품", "brand": "CJ제일제당", "product": "햇반", "price": "2,000" },
    { "category": "화장품", "brand": "Innisfree", "product": "그린티 씨드 세럼", "price": "24,000" },
    { "category": "음악", "brand": "Blackpink", "product": "THE ALBUM", "price": "35,000" },
    { "category": "주얼리", "brand": "Swarovski", "product": "스와로브스키 목걸이", "price": "150,000" },
    { "category": "자동차용품", "brand": "미쉐린", "product": "파일럿 스포츠 5 타이어", "price": "280,000" },
    { "category": "반려동물용품", "brand": "로얄캐닌", "product": "강아지 사료", "price": "60,000" },
    { "category": "취미용품", "brand": "Bandai", "product": "HGUC RX-78-2 건담", "price": "25,000" },
    { "category": "가전제품", "brand": "Apple", "product": "맥북 에어 M3", "price": "1,590,000" },
    { "category": "도서", "brand": "웅진씽크빅", "product": "빨간 머리 앤", "price": "14,500" },
    { "category": "가구", "brand": "리바트", "product": "모던 소파", "price": "890,000" },
    { "category": "스포츠용품", "brand": "Puma", "product": "푸마 축구공", "price": "32,000" },
    { "category": "식품", "brand": "농심", "product": "새우깡", "price": "1,500" },
    { "category": "화장품", "brand": "Sulwhasoo", "product": "윤조 에센스", "price": "160,000" },
    { "category": "음악", "brand": "IU", "product": "Love Poem LP", "price": "45,000" },
    { "category": "주얼리", "brand": "Pandora", "product": "판도라 탄생석 반지", "price": "78,000" },
    { "category": "자동차용품", "brand": "3M", "product": "유리막 코팅제", "price": "45,000" },
    { "category": "반려동물용품", "brand": "시저", "product": "강아지 습식 사료", "price": "1,200" },
    { "category": "취미용품", "brand": "Tamia", "product": "타미야 미니카", "price": "18,000" }
];

// 클릭이벤트-다크모드 toggleButton
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  // body 태그에 dark-mode 클래스를 토글합니다.
    document.body.classList.toggle('dark-mode');
});

// 화면 요소정의 목록
const product_data_Table = document.getElementById('product_data_Table');
const paginationContainer = document.getElementById('pagination');
const categorySelect = document.getElementById('inlineFormSelectPref');
const searchInput = document.getElementById('search'); // 검색 입력창 요소
const searchButton = document.getElementById('subject'); // 조회 버튼 요소

// 페이징 처리용 변수
let rowCount = original_product_data.length;
const countPerPage = 10;
const showPageCnt = 5;
let filteredData = original_product_data;
let currentPage = 1;  //현재페이지

// "조회" 버튼에 클릭 이벤트 리스너 추가
searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지
    applyFilters();
    // 페이징함수
    rowCount = filteredData.length
    renderTable(currentPage);
    renderPagination(rowCount, currentPage);
});

/* (미사용)제품 테이블에 데이터 추가
original_product_data.forEach(item => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
});
*/

/*==================================================================== */
/*==========================function================================== */


function init() {
    // 1초(1000밀리초)마다 updateClock 함수를 실행
    updateClock();
    setInterval(updateClock, 1000);

    // 페이징함수
    renderTable(currentPage);
    renderPagination(rowCount, currentPage);
}

// 오늘 날짜와 현재시간 
function updateClock() {
  const today = new Date(); // 현재 날짜와 시간 객체 생성
  const year = today.getFullYear(); // 연도
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월 (0부터 시작하므로 +1, 두 자리로 패딩)
  const day = today.getDate().toString().padStart(2, '0'); // 일
  const hours = today.getHours().toString().padStart(2, '0'); // 시간
  const minutes = today.getMinutes().toString().padStart(2, '0'); // 분
  const seconds = today.getSeconds().toString().padStart(2, '0'); // 초

  // 원하는 형식으로 조합 (예: YYYY-MM-DD HH:MM:SS)
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // HTML 요소에 시간을 표시하는 예 (예: <div id="clock"></div>)
  document.getElementById('clock').textContent = formattedDateTime;
}

// 테이블 가격 정렬
function table_price() {
    const table_rows = product_data_Table.querySelectorAll('tr')
    table_rows.forEach(row => {
        const cell = row.children[3];
        if (cell) {
            cell.style.textAlign = 'right';
        }
    });
}

// 테이블 초기화 및 페이징
function renderTable(page) {
  product_data_Table.innerHTML = ''; // 테이블 내용 초기화

  const start = (page - 1) * countPerPage;
  const end = start + countPerPage;
  const paginatedData = filteredData.slice(start, end);

  paginatedData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.category}</td>
      <td>${item.brand}</td>
      <td>${item.product}</td>
      <td>${item.price}</td>
    `;
    product_data_Table.appendChild(row);
    table_price();
  });
}

// 버튼 이벤트
function renderPagination(totalItems, page) {
  paginationContainer.innerHTML = ''; // 페이징 버튼 초기화

  const totalPages = Math.ceil(totalItems / countPerPage);
  const currentBlock = Math.ceil(page / showPageCnt);
  const startButton = (currentBlock - 1) * showPageCnt + 1;
  const endButton = Math.min(startButton + showPageCnt - 1, totalPages);

  // '이전' 버튼
  if (currentBlock > 1) {
    const prevButton = createPaginationButton('«', startButton - 1);
    paginationContainer.appendChild(prevButton);
  }

  // 페이지 번호 버튼
  for (let i = startButton; i <= endButton; i++) {
    const button = createPaginationButton(i, i);
    if (i === page) {
      button.classList.add('active');
    }
    paginationContainer.appendChild(button);
  }

  // '다음' 버튼
  if (currentBlock * showPageCnt < totalPages) {
    const nextButton = createPaginationButton('»', endButton + 1);
    paginationContainer.appendChild(nextButton);
  }
}

//a 버튼요소 생성
function createPaginationButton(text, page) {
  const button = document.createElement('a');
  button.href = "#";
  button.classList.add('button');
  button.textContent = text;
  button.dataset.page = page;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = parseInt(e.target.dataset.page);
    init();
  });
  return button;
}

// 필터링 함수
function applyFilters() {
    const selectedCategory = categorySelect.options[categorySelect.selectedIndex].label;
    const searchTerm = searchInput.value.toLowerCase(); // 입력값을 소문자로 변환

    // 1. 카테고리 필터링
    let tempFilteredData = original_product_data;
    if (selectedCategory !== "카테고리") {
        tempFilteredData = tempFilteredData.filter(item => item.category === selectedCategory);
    } else if (selectedCategory == "카테고리") {
        tempFilteredData = original_product_data;
    }

    // 2. 검색어 필터링
    if (searchTerm) {
        tempFilteredData = tempFilteredData.filter(item => 
            item.product.toLowerCase().includes(searchTerm)
        );
    }

    filteredData = tempFilteredData;
    currentPage = 1; // 필터링 시 첫 페이지로 이동
    init(); // 필터링된 데이터로 화면 다시 그리기
}