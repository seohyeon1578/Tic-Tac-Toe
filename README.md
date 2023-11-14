# Tic-Tac-Toe
![첫페이지](https://github.com/Team-Newfangled/flock-front/assets/84362569/09e4fb24-8469-4494-b9fe-13ff37d1c133)

<br>

## 프로젝트 소개

- Tic-Tac-Toe게임을 할 수 있는 웹입니다.
- AI와 대결을 해볼 수 있습니다.
- 친구와 대결을 진행할 수 있습니다.

<br>

## 개발 환경

- Front: React.js, Typescript, styled-components, Socket.io
- Back: Expree.js, Typescript, Nodemon, Socket.io, 
- [디자인](https://www.figma.com/file/rMc9bYxeQXepnN6lH8RwKW/%ED%94%84%EC%8B%A4?type=design&node-id=3-28&mode=design&t=ay2Rehwjpr8SHI7o-0)

<br>

## 프로젝트 설계
- 메뉴 구조도
  
  ![Untitled (5)](https://github.com/seohyeon1578/Baekjoon/assets/84362569/dc1779d7-2fa9-4885-9787-7fb6fd5ff95d)
- ERD

  ![Untitled (6)](https://github.com/seohyeon1578/Baekjoon/assets/84362569/dc2ec240-7dc4-4ff6-b6c1-9933cc29d7ae)
- 유스케이스 다이어그램

  ![Untitled (7)](https://github.com/seohyeon1578/Baekjoon/assets/84362569/6df53135-d2a9-407c-838b-9eff8ae18d1f)

<br>

## 페이지별 기능

### [초기화면]
- 서비스 접속 초기화면으로 시작하기 버튼을 누르면 다음페이지가 나타납니다.

| 초기화면 |
|----------|
|![splash](https://github.com/Team-Newfangled/flock-front/assets/84362569/09e4fb24-8469-4494-b9fe-13ff37d1c133)|

### [선택 페이지]
- 온라인 플에이 또는 컴퓨터와 플레이 중에서 원하는 서비스를 선택할 수 있습니다.

| 선택 페이지 |
|----------|
|![select](https://github.com/Team-Newfangled/flock-front/assets/84362569/e60057ba-2b3e-495d-9b5c-09939b80c562)|

### [온라인 리스트 화면]
- 현재 생성된 방의 리스트를 볼 수 있으며 이름으로 검색을 할 수 있습니다.

| 온라인 리스트 화면 |
|----------|
|![list](https://github.com/seohyeon1578/Baekjoon/assets/84362569/5e0c5472-3c47-43c0-85ab-f40aafb92f8f)|

### [온라인 플레이]
- 상대와 1번씩 돌아가면서 플레이를 할 수 있습니다.

| 온라인 플레이 |
|----------|
|![online](https://github.com/seohyeon1578/Baekjoon/assets/84362569/7a5e31e2-841a-4353-8023-585ecf85d194)|

### [컴퓨터와 플레이]
- ai와 플레이 할 수 있습니다.

| 컴퓨터와 플레이 |
|----------|
|![AI](https://github.com/seohyeon1578/Baekjoon/assets/84362569/9e5bc291-5347-4e1c-8167-95d6729dc4b3)|

### [대기 화면]
- 상대방의 입장을 대기하거나 게임이 끝나 결과를 집계할 때 대기를 하게 됩니다.

| 대기 화면 |
|----------|
|![Wait](https://github.com/seohyeon1578/Baekjoon/assets/84362569/10ab7b1b-9a06-44ff-aa24-76ee59592c64)|

<br>

## 주요 기능

### 게임 룸 생성
- 온라인 플레이에서 방이름을 입력하여 게임 룸을 생성하는 기능 

### 게임 룸 입장	
- 온라인 플레이에서 방에 입장하는 기능 (방의 인원이 2명이면 입장 불가능)

### 게임 룸 리스트 조회	
- 온라인 플레이에서 생성된 게임 룸의 전체 리스트를 조회해주는 기능

### 이름 입력	
- 이름 입력 후 방에 입장하면 이름이 해당하는 방과 소켓에 저장시켜주는 기능(로그인 대신)

### 총 스코어 확인
- 게임이 끝날 때 마다 소켓을 통해 업데이트시켜 총 스코어를 보여주는 기능

### 다시 시작	
- 게임이 끝난 후 Board를 클릭하면 다시 시작해주는 기능 (온라인 플레이에서는 상대방도 다시시작을 클릭하여야만 다시 시작된다.)

### 게임 룸 나가기	
- 게임 룸에 해당 소켓을 leave 시켜주는 기능

### 게임 소리 키기/끄기	
- 게임 플레이중 나는 소리를 키고 끌 수 있는 기능

### AI 플레이	
- Minimax 알고리즘을 활용한 컴퓨터와 플레이하는 기능

## 보완 사항
우선 Minimax알고리즘을 **`Alpha–beta pruning`** 알고리즘으로 변경하여 조금 더 효율적인 알고리즘을 사용할 것이며,  AI를 `초급 중급 고급`으로 나누기 위해 `최대 깊이 값을 정하여` 항상 승리 패턴을 찾을 수 없도록 할 것이다.

또한, TIc-Tac-Toe는 조금만 알아도 `무조건 무승부`가 나오기 때문에 `체스나 바둑 같은 2인용 게임을 더 추가`하거나 Tic-Tac-Toe의 Board의 사이즈를 키워 게임을 한층 더 어렵게 만들 것이다.

