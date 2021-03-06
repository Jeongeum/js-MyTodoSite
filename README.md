# js-MyTodoSite

[1인 프로젝트] what to do today? 의 업그레이드 버전입니다! (투두리스트)

노마드 코더의 크롬 앱 만들기와 그림판 만들기 강의를 수강한 후 두 강의를 조합하여 [What todo today?](https://jeongeum.github.io/What-to-do-Today-/) 라는 솔로 프로젝트를 진행하였습니다.

그 후, 바닐라js 챌린지를 2주간 참여하며 비슷하지만 새로운 디자인으로 졸업 프로젝트를 진행하고자 하였고 챌린지 기간동안 과제로 진행한 d-day 계산기를 추가하여 이번 MyTodoSite 프로젝트를 완성하였습니다.

----

### 📅 기간

2022.05.20~2022.05.23

### ⚙ 기능

- 사용자 이름 입력 시 localStorage에 저장이 된다.
- 프로필 사진을 추가할 수 있고 새로 고침 시 유지할 수 있다.
- 원하는 d-day 기념일 계산을 할 수 있다.
- 현재 시간과 날짜를 확인할 수 있다.
- 현재 나의 위치 정보를 받아와 날씨를 확인할 수 있다.
- Todo List를 작성하고 삭제할 수 있다.
- 그림판에 그림을 그리고 삭제, 저장할 수 있다.
- 새로고침 시 배경화면과 명언을 랜덤으로 확인할 수 있다.
- 로그아웃을 할 수 있다.

### 진행 과정

1. 레이아웃 잡기

![레이아웃잡기](https://user-images.githubusercontent.com/77143425/170937338-31ffd3f0-9888-4e23-8aeb-1d90f1925b14.png)

 - 초기 레이아웃은 위와 같았고, 안에 들어갈 기능들을 대략적으로 적어두었다.
   - 랜덤 명언
   - 프로필 사진 / 사용자 이름
   - 현재 시간, 날짜
   - 위치정보와 실시간 날씨
   - 투두리스트
   - 뮤직 플레이어
   - 메뉴바

<br>
레이아웃을 잡는데에서 시간이 조금 걸렸다. 

grid , flex 에 대한 개념이 부족하다는 생각이 여기서 굉장히 많이 들었다.

물론 각 기능을 구현하면서도 개념을 다시 다잡아야겠다고 매 순간 생각했다. 

어렵지만 차근차근 완벽하게 잡아두어야 할 중요한 개념인 것 같다.

<br>
2. 레이아웃 및 기능 수정

내용을 넣다보니 바닐라 JS 챌린지에서 과제로 했던 디데이 계산기 만들기 기능을 넣고 싶어졌고 레이아웃을 조금 변경하였다.
  
![레이아웃잡기2](https://user-images.githubusercontent.com/77143425/170938567-2b7cbfcd-ffe3-4955-904d-b668a0c1b74e.png)

잡아놓은 레이아웃 안에 내용들을 넣고 크기를 정하고 하면서 크기가 변형된 경험이 있어 (아마 CSS가 부족해서 그랬던 것 같다)

이번에는 각 구역마다 테두리를 설정해두고 만들었다. 테두리를 설정하니까 훨씬 편했다. 

기능이 다 만들어지면 테두리를 없애주고 입체적인 효과를 위해 그림자를 넣었다.

### ✨ 결과물

1. 정보 입력 ⌨

- 사용자 이름을 입력하고 프로필 사진 설정, d-day/todolist 작성 및 삭제

![졸작_인트로](https://user-images.githubusercontent.com/77143425/169758007-7988f2b1-bdb8-4bf9-98e2-fb5c7f88e68b.gif)

2. 정보 변경 🔄

- d-day , 사용자 이름 , 프로필 사진 변경

![졸작_디데이이름사진변경](https://user-images.githubusercontent.com/77143425/169758191-27182e21-8368-4f38-8500-c5db96c568ad.gif)

3. 그림판 🎨

- 우측 메뉴에서 붓 아이콘 클릭 시 todolist가 그림판으로 변경
- 펜의 굵기 조절 가능 , 캔버스 전체 색칠 가능 , 저장 가능
- 랜덤 색상 선택 가능
- 팔레트에서 색상 선택 시 우측 메뉴의 붓 아이콘이 현재 선택한 색상으로 변경

![졸작_그림판](https://user-images.githubusercontent.com/77143425/169758198-9088db69-1447-46a9-bc58-dbd9f5cb5263.gif)

![졸작_그림판2](https://user-images.githubusercontent.com/77143425/169760211-05f0a89f-3b24-470d-aaca-b3990d0c67f4.gif)

4. 랜덤 배경화면 / 명언 📜

- 새로 고침 시 배경화면과 하단의 명언이 랜덤으로 표시된다.

![졸작_랜덤이미지명언](https://user-images.githubusercontent.com/77143425/169758180-710ef844-4d5d-45a7-aba4-55ad3c0aff0f.gif)

### 배운 점 / 아쉬운 점

- what to do today 프로젝트 진행 시 해내지 못했던 이슈 사항을 이번 프로젝트에서 해결하였다.
  - <b>_이슈사항_</b>
    : 프로필 사진 설정 후 새로고침을 하면 프로필 사진이 기본 이미지로 돌아옴. 그러나 localStorage 에는 제대로 저장되어있음.
- d-day 설정 후 새로고침을 한 번 해줘야 hour/minute/second 가 작동한다.
- 우측 메뉴바에서 북마크 아이콘 hover 시 메뉴가 아래로 애니메이션 적용되도록 하고 싶었는데 못했다. css 공부가 필요한 것 같다.
- js 파일과 css 사용을 위한 id/class 네이밍 , 변수 네이밍 실력이 부족했다.

### 참고

💻 [MyTodoSite](https://jeongeum.github.io/js-MyTodoSite/)
