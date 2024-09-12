document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = 0;
  let score = 19;

  const numberDisplay = document.getElementById("numberDisplay");
  const startButton = document.getElementById("startButton");
  const inputArea = document.getElementById("inputArea");
  const userInput = document.getElementById("userInput");
  const submitButton = document.getElementById("submitButton");
  const message = document.getElementById("message");
  const scoreDisplay = document.getElementById("score");

  // 1000~9000 범위의 자연수를 만들어내야함
  // random으로 0~1사이에 숫자 아무거나 하나 생성하고,
  // floor로 소수를 내림처리하기.
  startButton.addEventListener("click", function () {
    if (score < 6) {
      randomNumber = Math.floor(1000 + Math.random() * 9000);
    } else if (score < 11) {
      randomNumber = Math.floor(10000 + Math.random() * 90000);
    } else if (score < 16) {
      randomNumber = Math.floor(100000 + Math.random() * 900000);
    } else {
      randomNumber = Math.floor(100000000 + Math.random() * 9000000);
    }
    numberDisplay.textContent = randomNumber;
    inputArea.style.display = "none";
    message.textContent = "";
    startButton.style.display = "none";

    //단계별로 점점 어려워지게 만들고 싶음(자리수 하나씩 늘리기)
    // 점수 획득한 것을 기준으로 5단계씩 만들어봄.

    //점수가 0일때는 기존 조건처럼 3초
    // 각 단계마다 점수가 하나씩 올라갈때마다 조금 더 빠르게 진행하고 싶음.
    // 점수 나누기 5의 나머지를 기준으로 숫자 자리수가 하나씩 늘기전까지는 조금씩 더 빠르게 만들었음
    let remainder = score % 5;
    if (score == 0 || remainder == 1) {
      setTimeout(function () {
        numberDisplay.textContent = "";
        inputArea.style.display = "block";
      }, 3000);
    } else if (remainder == 0) {
      setTimeout(function () {
        numberDisplay.textContent = "";
        inputArea.style.display = "block";
      }, 3000 * (1 / 5));
    } else if (remainder == 2) {
      setTimeout(function () {
        numberDisplay.textContent = "";
        inputArea.style.display = "block";
      }, 3000 * (1 / 2));
    } else if (remainder == 3) {
      setTimeout(function () {
        numberDisplay.textContent = "";
        inputArea.style.display = "block";
      }, 3000 * (1 / 3));
    } else if (remainder == 4) {
      setTimeout(function () {
        numberDisplay.textContent = "";
        inputArea.style.display = "block";
      }, 3000 * (1 / 4));
    }
  });

  // 각 단계마다 메세지 넣고 싶음.

  submitButton.addEventListener("click", function () {
    const Guess = userInput.value;
    // 뭔가... 다양한 리액션을 제공하고 싶음.
    let option = Math.floor(1 + Math.random() * 5); //1~5사이 숫자
    if (Guess == randomNumber) {
      if (score == 19) {
        scoreDisplay.innerHTML = `✨✨우와! 😎마지막 문제😎까지 풀어내다니!!🎉 🤩🎈🎉축하합니다!!🎈🎉🤩 
        <br>(다시 게임을 진행하고 싶으시면 새로고침을 눌러주세요!)`;
        userInput.value = "";
        inputArea.style.display = "none";
      } else {
        switch (option) {
          case 1:
            message.textContent = "정답입니다!!! 당신은 천재입니까?";
            break;
          case 2:
            message.textContent = "정답입니다!!! 점수 획득!!!";
            break;
          case 3:
            message.textContent = "정답입니다!!! 축하축하 ><";
            break;
          case 4:
            message.textContent = "정답입니다!!! 당신의 IQ는 200인거죠?";
            break;
          case 5:
            message.textContent = "정답입니다!!! 정말 대단해요 !!!!";
            break;
        }
        score++;

        startButton.style.display = "block";
        scoreDisplay.textContent = `점수: ${score}`;
        userInput.value = "";
        inputArea.style.display = "none";
      }
    } else {
      message.textContent = `오답입니다 ㅠㅠ. 정답은 ${randomNumber}입니다.`;
      // 틀렸을떄는, 정중하게 말하기 ㅎㅎ
      startButton.style.display = "block";
      scoreDisplay.textContent = `점수: ${score}`;
      userInput.value = "";
      inputArea.style.display = "none";
    }
  });
});
