# Swimmer's Routine 🏊🏻
![UI](https://user-images.githubusercontent.com/83155239/139199114-350e7313-ade1-4107-8e9f-fa0ffe1cb756.gif)
### Keep calm and Swim on! Record your daily swim routine!
---
## ⚒ 주요 기술 스택 
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>   <img alt="ReactJS" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>   <img alt="ReactRouter" src ="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=React Router&logoColor=white"/>   <img alt="styled-components" src ="https://img.shields.io/badge/styled-components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white"/>   <img alt="JSON" src ="https://img.shields.io/badge/JSON-000000.svg?&style=for-the-badge&logo=JSON&logoColor=white"/>

## 기타 
- custom Hook, React router, react-router-dom 
- json-server, config.js로 API 관리

---
# 서비스 소개
## 수영을 즐기고, 사랑하는 사람들을 위한 나의 수영 루틴 기록 서비스
- 수영 목표 기록을 리스트로 저장해두고, 체크해가며 수영 루틴을 관리할 수 있습니다.
- 일자(DAY)를 추가해 수영 한 날들을 한 눈에 볼 수 있습니다. 
## ✔️ 항목별 체크리스트 저장 및 삭제  
- 일자별 수영 기록 항목을 리스트로 간편하게 저장합니다. 
- 거리, 왕복 횟수를 입력하면 총 거리를 계산합니다.
- 달성한 리스트는 체크하고, 삭제 할 수 있습니다. 
## 📆 운동한 날들을 한 눈에 볼 수 있는 인터페이스 
- 간편하게 일자(DAY)를 추가하고, 하나의 인터페이스에서 수영을 한 날들을 쉽게 파악할 수 있습니다.
# 주요 구현 사항
## 📌 수영 루틴 추가

![addroutine](https://user-images.githubusercontent.com/83155239/139196567-f7d2578c-ff66-423c-9dd6-07112eac54b1.gif)
- `useRef()`, `Fetch API`, `REST API`로 루틴 추가 페이지를 만들었습니다.
- 수영 영법(자유형, 배영, 평영, 접영), 거리(25m, 50m), 왕복 횟수(1~10)의 항목을 저장, 해당 일자에 리스트가 추가됩니다.
## 📌 루틴 리스트 관리

![list](https://user-images.githubusercontent.com/83155239/139194398-96730482-6fc8-422e-9986-6e7d9190845b.gif)
- `useState()`, `Fetch API`, `REST API`로 리스트 페이지를 만들었습니다.
- 왼쪽의 체크박스 클릭 시, 해당 리스트 스타일링이 변하도록 `onChage` event handler를 사용했습니다. 
- `toggle`버튼으로 '기록 보기' 버튼 클릭 시 '거리 x 왕복 횟수' 계산해 총 거리를 확인할 수 있습니다.
- `method: "DELETE"`로 삭제 버튼 클릭시 리스트가 삭제됩니다. 

## 📌 일자(Day) 추가

![Addday](https://user-images.githubusercontent.com/83155239/139198154-e5f6b8e6-812f-49fe-95b2-6b37815285d2.gif)
- `useHistory()`, `Fetch API`, `REST API`로 데이 추가 페이지를 만들었습니다.
- 생성된 일자는 `useHistory`로 메인 화면에 추가됩니다.

## 📌 기타
- 접근이 어려운 경우 화면에 Empty page 추가, 메인 페이지 `<Link>` 연결

# ⚙️ 구동 방법
1. git repository clone 및 npm install <br />

`git clone https://github.com/Kayoungkimjs/Swimmers_Routine.git` <br />
`npm install`

2. json-server 열기 <br />
`(npx) json-server --watch ./src/data/data.json --port :3000`
* 오픈이 안 될 경우 `npm install -g json-server` 후 다시 오픈

3. React App 열기 <br />
`npm start` 
