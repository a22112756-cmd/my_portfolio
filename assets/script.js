document.addEventListener("DOMContentLoaded", function () {
  // 1. 다크 모드 전환 (classList.toggle)
  var body = document.body;
  var darkModeBtn = document.getElementById("darkModeBtn");

  if (darkModeBtn != null) {
    darkModeBtn.onclick = function () {
      body.classList.toggle("dark-mode");

      // 현재 body에 dark-mode 클래스가 붙어있는지 확인해서 버튼 글자 바꾸기
      if (body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "라이트 모드";
      } else {
        darkModeBtn.innerHTML = "다크 모드";
      }
    };
  }

  // 2. 맨 위로 이동 버튼 (scroll, scrollTo)
  var topButton = document.getElementById("toTop"); // 맨 위 버튼 가져오기

  if (topButton != null) {
    // 버튼이 있으면
    window.onscroll = function () {
      // 스크롤할 때 실행

      if (window.scrollY > 250) {
        // 250px 이상 내려가면
        topButton.classList.add("show"); // 버튼 보이기
      } else {
        // 위쪽이면
        topButton.classList.remove("show"); // 버튼 숨기기
      }
    };

    topButton.onclick = function () {
      // 버튼 클릭 시 실행
      // 맨 위로 이동
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", //부드럽게 올라가는 효과
      });
    };
  }

  // 3. 카드 클릭 강조 (classList.toggle)
  var cards = document.getElementsByClassName("card"); // 카드 요소 가져오기

  for (var i = 0; i < cards.length; i++) {
    // 카드 개수만큼 반복
    cards[i].onclick = function () {
      // 카드 클릭 시 실행
      this.classList.add("active-card"); // 선택 효과 추가
    };
  }

  // 4. 연락처 폼 검증
  var form = document.querySelector("form"); // form 태그 가져오기

  if (form != null) {
    // form이 있으면

    form.onsubmit = function () {
      // 폼 제출 시 실행

      var name = document.getElementById("name").value; // 이름 값

      var email = document.getElementById("email").value; // 이메일 값

      var message = document.getElementById("message").value; // 메시지 값

      var result = document.getElementById("formResult"); // 결과 출력 위치

      if (result == null) {
        // 결과 출력 위치가 없으면

        result = document.createElement("p"); // p 태그 생성

        result.id = "formResult"; // id 지정

        form.appendChild(result); // form 안에 추가
      }

      if (name == "") {
        // 이름이 비어 있으면

        result.innerHTML = "이름을 입력하세요."; // 오류 메시지

        result.classList.remove("success"); // 성공 클래스 제거

        result.classList.add("error"); // 오류 클래스 추가

        return false; // 제출 중지
      }

      if (email == "") {
        // 이메일이 비어 있으면

        result.innerHTML = "이메일을 입력하세요."; // 오류 메시지

        result.classList.remove("success"); // 성공 클래스 제거

        result.classList.add("error"); // 오류 클래스 추가

        return false; // 제출 중지
      }

      if (message == "") {
        // 메시지가 비어 있으면

        result.innerHTML = "메시지를 입력하세요."; // 오류 메시지

        result.classList.remove("success"); // 성공 클래스 제거

        result.classList.add("error"); // 오류 클래스 추가

        return false; // 제출 중지
      }

      result.innerHTML = name + "님, 문의 내용이 확인되었습니다."; // 성공 메시지

      result.classList.remove("error"); // 오류 클래스 제거

      result.classList.add("success"); // 성공 클래스 추가

      form.reset(); // 입력값 초기화

      return false; // 실제 전송 막기
    };
  }
});
