// -----------------------------
// 문제 배열
export const maintenance2Questions = [
    {
        question: "야간에 자동차 승차 시 문이 닫히자마자 실내가 천천히 어두워지도록 하는 것은?",
        options: ["테일 램프", "감광식 룸램프", "클러스터 램프", "도어 램프"],
        answer: 1,
        explain: "-테일 램프 : 미등 램프\n-클러스터 램프 : 계기판 램프"
    },
    {
        question: "지시마력이 50PS이고, 제동마력이 40PS일 때 기계효율(%)은?",
        options: ["75", "80", "85", "90"],
        answer: 1,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223470902947&categoryNo=12&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "타이어에서 호칭치수가 225-55R-16에서 '55'가 나타내는 것은?",
        options: ["단면 폭", "편평비", "최대속도표시", "단면 높이"],
        answer: 1,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223470879487&categoryNo=12&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "흡기 다기관 교환 시 함께 교환하는 부품으로 옳은 것은?",
        options: ["흡기 다기관 고정 볼트", "흡기 다기관 개스킷", "에어클리너", "엔진오일"],
        answer: 1,
        explain: "누설을 방지(기밀)하는 개스킷(gasket)·실(seal)은 정비·교환 시 신품으로 교체한다."
    },
    {
        question: "점화장치 구성부품의 단품 점검 사항으로 틀린 것은?",
        options: ["점화플러그는 간극게이지를 활용하여 중심전극과 접지전극 사이의 간극 을 측정한다.", "고압케이블은 멀티테스터를 활용하여 양 단자간의 저항을 측정한다.", "폐자로 점화코일의 1차코일은 멀티테스터로 점화코일 (+)와 (-)단자간의 저항을 측정한다.", "폐자로 점화코일의 2차코일은 멀티테스터로 점화코일 중심단자와 (+) 전극 사이의 저항을 측정한다."],
        answer: 3,
        explain: "- 점화플러그 간극 게이지를 이용하여 측정(약 1mm)\n- 1차 코일 저항: 점화코일 +, - 단자 사이\n- 2차 코일 저항 : 점화코일의 중심 단자와 점화코일의 - 단자 사이"
    },
    {
        question: "[보기]의 조건에서 밸브 오버랩 각도는?",
        imagePath: "./CodeQuestion/maintenance2_over.jpg",
        options: ["8°", "28°", "44°", "64°"],
        answer: 1,
        explain: "밸브 오버랩은 TDC(상사점)을 기준으로 흡기 밸브의 열림 각도(BTDC)과 배기밸브의 닫힘 각도(ATDC)를 합한각도를 말한다.\n= 18 + 10 = 28°\n※ 즉, 오버랩은 TDC 전·후(Before After)의 각도를 더한 값이다."
    },
    {
        question: "수냉식 냉각장치의 특징이 아닌 것은?",
        options: ["실린더 주위를 균일하게 냉각시켜 공랭식보다 냉각효과가 좋다.", "공랭식보다 보수·취급이 복잡하다.", "실린더 주위를 저온으로 유지시키므로 공랭식보다 체적효율이 좋다.", "공랭식보다 소음이 크다."],
        answer: 3,
        explain: "실린더 주변의 워터재킷이 방음효과가 있어 소음이 적다."
    },
    {
        question: "부동액 교환 작업에 대한 설명으로 옳은 것은?",
        options: ["보조탱크의 FULL까지 부동액 보충", "여름철 온도를 기준으로 물과 원액을 혼합하여 부동액을 희석", "냉각계통 냉각수를 완전히 배출시키고 세척제로 냉각장치 세척", "부동액이 완전히 채워지기 전에 엔진을 구동하여 냉각팬이 가동되는지 확인"],
        answer: 2,
        explain: "- 보조 탱크에도 'FULL-LOW' 사이까지 보충한다.\n- 반드시 겨울철 온도를 기준으로 물과 원액을 혼합하여 부동액을 희석시켜 주어야 한다.\n- 부동액을 완전하게 채워진 후 엔진을 구동하여 냉각 팬이 가동되는지 확인하여야 한"
    },
    {
        question: "윤활유의 구비조건으로 틀린 것은?",
        options: ["인화점과 발화점이 높을 것", "점도가 적당할 것", "열과 산에 대해 안정성이 있을 것", "응고점이 높을 것"],
        answer: 3,
        explain: "응고점이 높으면 높은 온도에서도 쉽게 응고된다는 의미 이므로 응고점이 낮아야 한다."
    },
    {
        question: "클러치 페달 유격 및 디스크에 대한 설명으로 틀린 것은?",
        options: ["페달 유격이 작으면 클러치가 미끄러진다.", "페달의 리턴 스프링이 약하면 동력차단이 불량하게 된다.", "클러치 판에 오일이 묻으면 미끄럼의 원인이 된다.", "페달 유격이 크면 클러치 끊김이 나빠진다."],
        answer: 1,
        explain: "페달의 리턴 스프링은 페달을 놓았을 때 신속하게 원위치 로 복귀시키며, 장력이 약하면 복귀가 잘 되지 않으므로 클러치의 동력전달이 불량해진다."
    },
    {
        question: "가속할 때 일시적인 가속 지연 현상을 나타내는 용어는?",
        options: ["스톨링 (stalling)", "스텀블(stumble)", "서징(sursing)", "헤지테이션(hesitation)"],
        answer: 1,
        explain: "• 스텀블 : 가감속 시에 엔진의 순간적인 출력저하와 회전상태가 고르지 못한 현상\n• 스톨링 : 주행 중 엔진이 멈추는 현상\n• 헤지테이션 : '망설임, 머뭇거림'의 의미로, 스로틀 밸브의 개도를 높여도 순간적으로 가속이 지연되는 현상"
    },
    {
        question: "점화스위치에서 점화코일, 계기판, 컨트롤 릴레이 등의 시동과 관련된 전원을 공급하는 단자는?",
        options: ["ST", "IG1", "IG2", "ACC"],
        answer: 1,
        explain: "•IGN1 : 시동에 필요한 점화코일, 계기판, 컴퓨터, 컨트롤 릴레이 등에 전원 공급\n•IGN 2: 시동에 필요한 와이퍼, 에어컨, 히터, 열선, 블로어모터 등 (ST에서 기동전동기가 작동할 동안 전원이 차단됨)"
    },
    {
        question: "엔진오일 유압이 낮아지는 원인과 거리가 먼 것은?",
        options: ["베어링의 오일간극이 크다.", "유압조절밸브의 스프링 장력이 크다.", "오일팬 내의 윤활유 양이 작다.", "윤활유 공급 라인에 공기가 유입되었다."],
        answer: 1,
        explain: "- 베어링의 오일간극이 크면 쉽게 누설되므로 유압이 낮아진다.\n- 윤활유 양은 유압에 비례한다.\n- 공기가 유입되면 기포로 인해 유압이 낮아진다."
    },
    {
        question: "버튼 엔진 시동 시스템 전체의 마스터 역할을 수행하는 스마트 키 유닛의 기능이 아닌 것은?",
        options: ["이모빌라이저 통신", "스마트 키의 인증 실패 시 트랜스폰더와 통신하여 키 정보 확인", "인증 기능(트랜스폰더 효력 및 FOB 인증)", "시스템 진단"],
        answer: 1,
        explain: "(정답)은 FOB 키 홀더에 대한 설명이다. FOB 키의 배터리 방전 등으로 인증이 어려울 경우 FOB키를 홀더에 삽입 하여 홀더 내 코일 안테나에 의해 FOB 키의 트랜스폰더에 전원을 공급(무선 충전 원리)하여 키 정보를 확인 할 수 있다.\n참고) 최근에는 FOB키 홀더가 없고 대신 시동버튼 내부에 코일 안테나가 있어 그 역할을 대신함"
    },
    {
        question: "자동차의 주행속도를 감지하는 센서는?",
        options: ["TDC 센서", "크랭크각 센서", "차속센서", "흡기량 센서"],
        answer: 2,
        explain: "차속센서(VSS, Vehicle Speed Sensor)는 자동차의 속도를 검출하여 엔진제어장치나 변속기제어장치, 전자현가장치, 전자제동장치 등의 제어 입력요소로 이용한다."
    },
    {
        question: "엔진오일 팬의 장착에 대한 설명으로 틀린 것은?",
        options: ["엔진오일 팬을 재사용하는 경우 조립 전 실런트와 이물질, 그리고 엔진오일 등을 깨끗하게 제거한다.", "교환할 신품 엔진오일 팬과 구품 엔진오일 팬이 동일한 제품인지 확인한 후 신품 엔진 오일 팬을 조립한다.", "오일 팬을 장착하고 오일 팬 장착 볼트는 여러 차례에 걸쳐 균일하게 체결한다.", "오일 팬에 실런트를 4.0~5.0mm 도포하여 실런트가 충분히 경화된 후 조립한다."],
        answer: 3,
        explain: "오일 팬에 실런트를 4.0~5.0mm 도포한 후 굳기 전 5분 이내에 조립한다.\n※ 실런트 : 액상상태의 접착제로 기밀(밀봉)을 요하는 부위에 사용한다."
    },
    {
        question: "연삭작업 시 안전사항이 아닌 것은?",
        options: ["숫돌과 받침대 간격을 가급적 멀리 유지한다.", "보안경을 착용해야 한다.", "연삭하기 전에 공전상태를 확인 후 작업해야 한다.", "숫돌 차의 회전속도는 규정 이상을 넘어서는 안 된다."],
        answer: 0,
        explain: "연삭작업 시 숫돌과 연삭대의 간격이 3mm 이하가 되도록 한다."
    },
    {
        question: "가솔린 차량의 배출가스 중 NOx의 배출을 감소시키기 위한 방법으로 적당한 것은?",
        options: ["EGR 장치 채택", "캐니스터 설치", "간접연료 분사방식 채택", "DPF 시스템 채택"],
        answer: 0,
        explain: "-EGR : NOx 감소\n- 캐니스터 : 증발가스(HC) 감소\n- 간접연료분사방식 : 인젝터의 위치가 연소실 밖 흡기다기관에 위치\n- DPF : PM 감소"
    },
    {
        question: "브레이크 드럼의 지름이 600mm, 브레이크 드럼에 작용하는 힘이 180kgf인 경우 드럼에 작용하는 토크(kgf.cm)는? (단, 마찰계수는 0.15이다.)",
        options: ["405", "810", "4050", "8100"],
        answer: 1,
        explain: "제동 토크 = (마찰계수) × 힘 × 반지름\n= 0.15 × 30cm × 180kgf = 810 kgf.cm"
    },
    {
        question: "다음 파형 분석에 대한 설명으로 틀린 것은?",
        imagePath: "./CodeQuestion/maintenance1_NOX.jpg",
        options: ["4", "1", "3","2"],
        answer: 0,
        explain: "혼합비와 배기가스 배출 특성 이해하기 (암기: 일.질.탄)\n-이론공연비 부근에서 가장 발생하는 것은 NOX 이다\n-CO(일산화탄소)는 공기가 희박할 때(농후혼합비) 발생한다.\n-HC(탄화수소) 는 과농후하거나 희박혼합비에서 실화(미연소)로 인해 발생한다.\n상식적 접근) 연탄가스 사망사고, 겨울철 캠핑장 텐트에서의 사망사고는 일산화탄소 중독에 의한 것으로 주로 산소가 부족해 발생된다. 즉, 혼합비가 농후할 때 배출량이 많다."
    },
    {
        question: "화상으로 수포가 발생했을 때 응급조치로 가장 적절한 것은?",
        options: ["수포를 터뜨리지 않고, 소독가제로 덮어준 후 의사에게 진료한다.", "화상 연고를 바르고 수포를 터뜨려 치료한다.", "수포를 터뜨린 후 병원으로 후송한다.", "응급조치로 찬물에 식혀준 후 수포를 터뜨린다."],
        answer: 0,
        explain: "수포를 터뜨리면 2차 감염으로 인한 염증 및 흉터의 원인이 될 수 있다."
    },
    {
        question: "자동차검사기준 및 방법에서 등화장치 검사기준에 대한 설명으로 틀린 것 은?",
        options: ["변환빔의 진폭은 10미터 위치에서 기준치 이내일 것", "변환빔의 광도는 3천 칸델라 이상일 것", "컷오프선의 꺽임각이 있을 경우 꺽임각의 연장선은 우측 하향일 것", "어린이운송용 승합자동차에 설치된 표시등이 안전기준에 적합할 것"],
        answer: 2,
        explain: "-변환빔의 진폭은 10미터 위치에서 기준치 이내일 것\n-변환빔 : 3천 칸델라이상 4만 5천 칸델라 이하일 것\n-컷오프선의 꺽임각이 있을 경우 꺽임각의 연장선은 우측으로 15° 상향일 것"
    },
    {
        question: "다이오드 중 빛을 받으면 전기가 흐를 수 있는 것은?",
        options: ["발광 다이오드", "제너 다이오드", "포토 다이오드", "실리콘 다이오드"],
        answer: 2,
        explain: "• 발광 다이오드 : 순방향으로 전류를 흐르게 하였을 때 빛이 발생되는 다이오드\n• 포토 다이오드 : 빛을 받으면 빛에 의해 전자가 궤도에서 이탈하여 자유전자가 되어 역방향으로 전류가 흐름\n• 제너 다이오드 : 어떤 기준 전압(브레이크 다운 전압) 이상이 되면 역방향으로 전류가 흐르게 하며 정전압 회로 및 과충전 방지에 사용"
    },
    {
        question: "리머 가공을 설명한 것으로 옳은 것은?",
        options: ["드릴 구멍보다 먼저 작업한다.", "드릴 가공보다 더 정밀도를 높은 가공면을 얻기 위한 가공법이다.", "드릴 구멍보다 더 작게 하는데 사용한다.", "축의 바깥지름을 가공할 때 사용한다."],
        answer: 1,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223470885169&categoryNo=12&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3099' target='_blank'>문제 해설</a>"
    },
    {
        question: "축전지를 과방전 상태로 오래 두면 사용할 수 없는 이유는?",
        options: ["황산이 증류수가 되기 때문이다.", "극판이 산화납이 되기 때문이다.", "극판에 수소가 형성된다.", "극판이 영구 황산납이 되기 때문이다."],
        answer: 3,
        explain: "축전지를 과방전 상태로 오래 두면 축전지의 극판이 영구 황산납으로 변한다. - 셜페이션"
    },
    {
        question: "12V의 전압에 20옴의 저항을 연결하였을 때 몇 A의 전류가 흐르는가?",
        options: ["5A", "0.6A", "10A", "1A"],
        answer: 1,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223470883979&categoryNo=12&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "축전지의 용량을 시험할 때 안전 및 주의사항으로 틀린 것은?",
        options: ["기름이 묻은 손으로 시험기를 조작하지 않는다.", "부하시험에서 부하전류는 축전지 용량에 관계없이 일정하게 한다.", "부하시험에서 부하시간을 15초 이상 실시하지 않는다.", "축전지 전해액이 옷에 묻지 않도록 주의한다."],
        answer: 1,
        explain: "축전지의 용량시험 시 부하전류는 배터리 용량의 3배 이하, 부하시간은 15초 미만으로 한다."
    },
    {
        question: "와이퍼 장치에서 간헐적으로 작동되지 않는 요인으로 거리가 먼 것은?",
        options: ["와이퍼 릴레이의 고장", "와이어 블레이드 마모", "와이퍼 스위치 고장", "와이퍼 모터 배선 불량"],
        answer: 1,
        explain: "-"
    },
    {
        question: "조향핸들이 1회전할 때 피트먼 암은 36° 움직인다면 조향 기어비는?",
        options: ["1:1", "5:1", "10:1", "36: 1"],
        answer: 2,
        explain: "<a href='https://blog.naver.com/PostView.naver?blogId=ddsp0201&Redirect=View&logNo=223470881286&categoryNo=12&isAfterWrite=true&isMrblogPost=false&isHappyBeanLeverage=true&contentLength=3096' target='_blank'>문제 해설</a>"
    },
    {
        question: "하이드로 플레이닝 현상의 방지법이 아닌 것은?",
        options: ["트레드의 마모가 적은 타이어를 사용한다.", "카프형을 셰이빙 가공한 것을 사용한다.", "타이어의 공기압을 높인다.", "러그 패턴의 타이어를 사용한다."],
        answer: 3,
        explain: "하이드로플레이닝(수막) 현상을 방지하기 위해 1~3 외에 리브 패턴의 타이어를 사용하며, 저속운전을 한다."
    },
    {
        question: "퓨즈에 대한 설명으로 맞은 것은?",
        options: ["퓨즈는 정격전류가 흐르면 회로를 차단하는 역할을 한다.", "퓨즈는 과대전류가 흐르면 회로를 차단하는 역할을 한다.", "퓨즈는 용량이 클수록 정격전류가 낮아진다.", "용량이 작은 퓨즈는 용량을 조정하여 사용한다."],
        answer: 1,
        explain: "퓨즈는 과전류가 흐르면 회로를 차단시켜 회로 또는 부품을 보호하는 역할을 한다.\n※ 정격 전류: 전장이 정상적으로 작동하고 있을 때 흐르는 전류량"
    },
    {
        question: "흡기 다기관의 검사 항목으로 옳은 것은?",
        options: ["흡기 다기관의 변형과 균열 여부를 검사한다.", "엔진 시동 후 흡기 다기관 주위에 엔진오일을 분사하여 엔진 rpm의 변화여부를 확인한다.", "흡기 다기관의 압축상태를 점검한다.", "흡기 다기관과 밀착되는 헤드의 배기구 면을 확인한다."],
        answer: 0,
        explain: "흡기 다기관은 주로 변형, 균열, 진공누설을 검사한다."
    },
    {
        question: "전기장치의 배선 커넥터 분리 및 연결 시 잘못된 작업은?",
        options: ["배선을 분리할 때는 잠금장치를 누른 상태에서 커넥터를 분리한다.", "배선 커넥터 접속은 커넥터 부위를 잡고 커넥터를 끼운다.", "배선 커넥터는 '딸깍' 소리가 날 때까지는 확실히 접속시킨다.", "커넥터가 잘 빠지지 않으면 배선을 이용하여 흔들며 잡아당긴다."],
        answer: 3,
        explain: "배선을 당기면 배선이 커넥터와 분리될 수 있으므로 커넥터를 당겨야 한다."
    },
    {
        question: "기관부품을 점검 시 작업 방법으로 가장 적합한 것은?",
        options: ["기관을 가동과 동시에 부품의 이상 유무를 빠르게 판단한다.", "부품을 정비할 때 점화스위치를 ON상태에서 축전지 케이블을 탈거한다.", "산소센서의 내부저항을 측정하지 않는다.", "출력전압은 쇼트 시킨 후 점검한다."],
        answer: 2,
        explain: "산소센서 측정 시 주의사항\n•출력전압 측정 시 일반 아날로그 테스터로 측정하지 말 것\n•산소센서 내부저항을 절대 측정하지 말 것\n•전압 측정 시 오실로스코프나 전용 스캐너를 사용한다.\n•무연 가솔린을 사용한다.\n•출력전압을 단락시켜서는 안된다."
    },
    {
        question: "점화장치의 점화회로 점검사항으로 틀린 것은?",
        options: ["메인 및 서브 퓨저블링크의 단선 유무", "점화순서 및 고압 케이블의 접속 상태", "점화코일 쿨러의 냉각상태 점검", "배터리 충전상태 및 단자 케이블 접속 상태"],
        answer: 2,
        explain: "점화코일에는 쿨러가 필요없다."
    },
    {
        question: "사이드 슬립 시험기 사용 시 주의할 사항으로 틀린 것은?",
        options: ["공차상태에서 운전자 1인이 탑승해야 한다.", "시험기의 답판 및 타이어에 부착된 기름, 수분, 흙 등을 제거한다.", "시험기에 대해 직각방향으로 진입한다.", "답판 위에서 차속이 빠르면 브레이크를 사용하여 차속을 맞춘다."],
        answer: 3,
        explain: "사이드슬립 시험기 답판 위에 진입할 경우 약 5km/h의 서행 조건이어야 한다."
    },
    {
        question: "타이로드의 길이를 조정하여 수정하는 바퀴정렬은?",
        options: ["토우", "캠버", "킹핀 경사각", "캐스터"],
        answer: 0,
        explain: "타이로드의 길이 조정은 토우(toe)을 조정한다."
    },
    {
        question: "LPG 자동차 관리에 대한 주의사항으로 틀린 것은?",
        options: ["LPG는 고압이고, 누설이 쉬우며 공기보다 무겁다.", "LPG는 온도상승에 의한 압력상승이 있기 때문에 용기는 직사광선 등을 피하는 곳에 설치하고 과열되지 않아야 한다.", "가스 충전 시 100% 충전시킨다.", "엔진룸이나 트렁크 내부 등을 점검할 때 라이터 등을 사용하지 않는다."],
        answer: 2,
        explain: "법규상 가스 충전은 봄베(고압탱크)의 약 85%로 제한한다."
    }
];

// 문제/보기 랜덤 섞기
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  // ✅ 문제 순서 랜덤 + 60문제 제한
  let questions = shuffleArray([...maintenance2Questions]).slice(0, 60);
  
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
    status.innerHTML = `<span id="scoreDisplay">총점: ${score}/${questions.length}</span>`;
  
    // 제출 버튼 제거
    document.getElementById("submitBtn").style.display = "none";
  
    // 결과창 표시
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>총점: ${score}/${questions.length}</h2>`;
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