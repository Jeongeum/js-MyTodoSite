const loginSection = document.querySelector(".login");
const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".login input");
const user = document.querySelector(".userName");
const usernameInput = document.querySelector(".userName_input");

const logout = document.querySelector(".logout");

const profileBtn = document.querySelector(".profileImg_btn");
const profileInput = document.querySelector(".profile_img");
const profileIcon = document.querySelector(".fa-user-plus");
const img = document.querySelector(".profileImg_btn img");
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

const NAME_KEY = "Name";
const PROFILE_IMG = "userImg";

/* 이름 변경 */
function handleUserNameInput() {
  user.classList.add(HIDE);
  usernameInput.classList.add(SHOW);
  changeName();
}

function changeName() {
  usernameInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      user.classList.remove(HIDE);
      usernameInput.classList.remove(SHOW);
      const newname = usernameInput.value;
      user.innerText = newname;
      usernameInput.value = "";
      localStorage.removeItem(NAME_KEY);
      localStorage.setItem(NAME_KEY, newname);
    }
  });
}

/* 프로필 사진 변경 */
profileBtn.addEventListener("click", () => {
  profileInput.click();
});

function handleProfileImg() {
  const currentFiles = profileInput.files;

  if (currentFiles.length === 0) {
    alert("No files currently selected for upload");
  } else {
    // for of 는 배열
    for (const file of currentFiles) {
      if (validFileType(file)) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          localStorage.setItem(PROFILE_IMG, reader.result);
          img.src = reader.result;
        });
        reader.readAsDataURL(file);
      } else {
        alert("Not a valid file type. Update your selection.");
      }
    }
  }
}

function validFileType(file) {
  return fileTypes.includes(file.type);
}

profileInput.addEventListener("change", handleProfileImg);
user.addEventListener("click", handleUserNameInput);

// 처음 로그인 할 때
function onLoginSubmit(event) {
  event.preventDefault();
  loginSection.classList.add(HIDE);
  const username = loginInput.value;
  localStorage.setItem(NAME_KEY, username);
  paint(username);
}

// 입력한 이름 표시
function paint(username) {
  user.innerText = `${username}`;
  user.classList.remove(HIDE);
}

const savedImg = localStorage.getItem(PROFILE_IMG);
const savedName = localStorage.getItem(NAME_KEY);

// 저장된 사진이 없으면 기본이미지 나옴
if (savedImg !== null) {
  img.src = savedImg;
}

// 저장된 이름이 없으면 로그인 화면 나옴
if (savedName === null) {
  loginSection.classList.remove(HIDE);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginSection.classList.add(HIDE);
  paint(savedName);
}

// 로그아웃
function handleLogout() {
  localStorage.removeItem(NAME_KEY);
  localStorage.removeItem("D_dayName");
  localStorage.removeItem("TODOLIST_up");
  localStorage.removeItem(PROFILE_IMG);
  document.location.href = "index.html";
}

logout.addEventListener("click", handleLogout);
