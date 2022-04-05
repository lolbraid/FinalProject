// document.onreadystatechange = function showContent() {
//   if (this.readyState !=='complete') {
//     document.getElementById("loader").style.display = "block";
//     document.getElementById("main").style.display = "none";
//   } else {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("main").style.display = "block";
//   }
// }
function animateOnScrool() {
  var workers = document.querySelectorAll(".worker-card");
  var SCards = document.querySelectorAll(".s-card");
  var windowHeight = window.innerHeight;
  var elementVisible = 150;
  for (let i = 0; i < workers.length; i++) {
    var card = workers[i];
    var elementTop = card.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      card.classList.add("active");
      card.getElementsByClassName("card-top")[0].classList.add("animate");
      card.getElementsByClassName("avatar-holder")[0].classList.add("animate");
      card.getElementsByClassName("name-holder")[0].classList.add("animate");
      card.getElementsByClassName("follow-button")[0].classList.add("animate");
      card.getElementsByClassName("works")[0].classList.add("animate");
      card.getElementsByClassName("projects")[0].classList.add("animate");
      card.getElementsByClassName("posts")[0].classList.add("animate");
      card.getElementsByClassName("card-skills")[0].classList.add("animate");
      card.querySelector(".bar p").classList.add("animate");
      card.getElementsByClassName("bar-html")[0].classList.add("animate");
      card.getElementsByClassName("bar-css")[0].classList.add("animate");
      card.getElementsByClassName("bar-js")[0].classList.add("animate");
    } else {
      card.classList.remove("active");
      card.getElementsByClassName("card-top")[0].classList.remove("animate");
      card
        .getElementsByClassName("avatar-holder")[0]
        .classList.remove("animate");
      card.getElementsByClassName("name-holder")[0].classList.remove("animate");
      card
        .getElementsByClassName("follow-button")[0]
        .classList.remove("animate");
      card.getElementsByClassName("works")[0].classList.remove("animate");
      card.getElementsByClassName("projects")[0].classList.remove("animate");
      card.getElementsByClassName("posts")[0].classList.remove("animate");
      card.getElementsByClassName("card-skills")[0].classList.remove("animate");
      card.querySelector(".bar p").classList.remove("animate");
      card.getElementsByClassName("bar-html")[0].classList.remove("animate");
      card.getElementsByClassName("bar-css")[0].classList.remove("animate");
      card.getElementsByClassName("bar-js")[0].classList.remove("animate");
    }
  }
  for (let i = 0; i < SCards.length; i++) {
    var element = SCards[i];
    var elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  }
}
window.addEventListener("scroll", animateOnScrool);

function loaderTime() {
  setTimeout(showContent, 1000);
}
function showContent() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function search() {
  let input, ul, results, filter, li, a, text, r, a2;
  input = document.getElementById("search-input");
  filter = input.value;
  results = document.getElementById("results");
  ul = results.getElementsByTagName("ul")[0];
  a = Array(ul.getElementsByTagName("a"));
  a2 = Array();
  r = 0;

  for (let i = 0; i < a[0].length; i++) {
    li = a[0][i].getElementsByTagName("li")[0];
    a2.push(li);
    text = li.innerText || li.textContent;
    if (text.toUpperCase().indexOf(filter) > -1) {
      li.style.visibility = "visible";
      r += 1;
    } else {
      li.style.visibility = "hidden";
    }
  }
  if (r <= 0) {
    document.getElementById("no-results").style.display = "block";
  } else if (input.value == "") {
    // الحل لكل مشاكلي😥
    a2.forEach((i) => {
      li = i.style.visibility = "hidden";
    });
    results.style.visibility = "hidden";
  } else {
    results.style.visibility = "visible";
    document.getElementById("no-results").style.display = "none";
  }

  r = 0;
}

function follow(element) {
  let currentFollowers = 0;
  const target = {
    // بدل by class name
    btn: element.querySelector("a.btn"),
    fw: element.querySelector("span.followers"),
  };
  currentFollowers = parseInt(target.fw.textContent);
  if (target.btn.innerText == "متابعة") {
    target.btn.innerHTML = '<i class="fas fa-user-times"></i>تمت المتابعة';
    currentFollowers += 1;
  } else {
    currentFollowers -= 1;
    target.btn.innerHTML = '<i class="fas fa-user-plus"></i>متابعة';
  }

  target.fw.textContent = currentFollowers;
  target.btn.classList.toggle("following");
}

// MODALS
var chatOrProfileModal = document.getElementById("chat-or-profile");
// COP = chat or profile
var _COPbtns = Array(document.getElementsByClassName("name"));
var COPbtns = Array();
for (const i in _COPbtns[0]) {
  COPbtns.push(_COPbtns[0][i]);
}
var COPspan = document.getElementsByClassName("close")[0];
COPbtns.forEach((i) => {
  i.onclick = function () {
    chatOrProfileModal.style.display = "block";
  };
});
COPspan.onclick = function () {
  chatOrProfileModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == chatOrProfileModal) {
    chatOrProfileModal.style.display = "none";
  }
};
// -------------------------------
var signInSignUpModal = document.getElementById("signin-sign-up");
// SIU = sign in / up
var _SIUbtns = Array(document.getElementsByClassName("signIU"));
var SIUbtns = Array();
for (const i in _SIUbtns[0]) {
  SIUbtns.push(_SIUbtns[0][i]);
}
var _SIUspan = Array(document.getElementsByClassName("SIUclose"));
var SIUspan = Array();

for (const i in _SIUspan[0]) {
  SIUspan.push(_SIUspan[0][i]);
}

let signin = [
  signInSignUpModal.querySelector("#signin-body"),
  signInSignUpModal.querySelector(".signin-head"),
];
let signup = [
  signInSignUpModal.querySelector("#signup-body"),
  signInSignUpModal.querySelector(".signup-head"),
];
SIUbtns.forEach((i) => {
  i.onclick = function () {
    signInSignUpModal.style.display = "block";

    if (i.classList.contains("in")) {
      signin.forEach((i) => {
        i.style.display = "";
      });
    } else {
      signup.forEach((i) => {
        i.style.display = "";
      });
    }
  };
});

SIUspan.forEach((i) => {
  i.onclick = function () {
    signInSignUpModal.style.display = "none";
    signin.forEach((i) => {
      i.style.display = "none";
    });
    signup.forEach((i) => {
      i.style.display = "none";
    });
  };
});

window.onclick = function (event) {
  if (event.target == signInSignUpModal) {
    signInSignUpModal.style.display = "none";
    signin.forEach((i) => {
      i.style.display = "none";
    });
    signup.forEach((i) => {
      i.style.display = "none";
    });
  }
};
try {
  // -------------------------------
  var profileSendEmailModal = document.getElementById("profile-send-email");
  // PSE = Profile send E-mail
  var PSEbtn = document.getElementById("profile-mail");

  var PSEspan = document.getElementsByClassName("PSEclose")[0];

  PSEbtn.onclick = function () {
    profileSendEmailModal.style.display = "block";
  };

  PSEspan.onclick = function () {
    profileSendEmailModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == profileSendEmailModal) {
      profileSendEmailModal.style.display = "none";
    }
  };
} catch (error) {}
try {
  // load more button
  let loadmore = document.querySelector("#loadMore");
  let currentItems = 8;

  loadmore.onclick = (e) => {
    let elementList = document.querySelectorAll(".card");
    for (let i = currentItems; i < currentItems + 2; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
      }
    }
    currentItems += 2;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
      event.target.style.display = "none";
    }
  };
} catch (error) {}
function fromInToUp() {
  if (
    document.querySelector(".signup-head").style.display != "none" ||
    document.querySelector("#signup-body").style.display != "none"
  ) {
    document.querySelector(".signin-head").style.display = "block";
    document.querySelector("#signin-body").style.display = "block";
    document.querySelector(".signup-head").style.display = "none";
    document.querySelector("#signup-body").style.display = "none";
    document.querySelector(".modal-content p").innerHTML =
      'ليس لديك حساب؟<button onclick="fromInToUp()"> انشئ حسابا</button>';
  } else {
    document.querySelector(".signin-head").style.display = "none";
    document.querySelector("#signin-body").style.display = "none";
    document.querySelector(".signup-head").style.display = "block";
    document.querySelector("#signup-body").style.display = "block";
    document.querySelector(".modal-content p").innerHTML =
      'لديك حساب؟<button onclick="fromInToUp()">سجل الدخول</button>';
  }
}
function signUp(event) {
  if (
    document.querySelector("#pass").value !=
    document.querySelector("#re-pass").value
  ) {
    alert("تأكد من كلمة السر");
    event.preventDefault();
    returnToPreviousPage();
    return false;
  } else {
    return true;
  }
}

function chat(user) {
  let user1Chat,
    user2Chat,
    user3Chat,
    user4Chat,
    user5Chat,
    globalChat,
    chatName;
  chatName = document.getElementsByClassName("chat-name")[0];
  user1Chat = document.getElementById("user1-chat");
  user2Chat = document.getElementById("user2-chat");
  user3Chat = document.getElementById("user3-chat");
  user4Chat = document.getElementById("user4-chat");
  user5Chat = document.getElementById("user5-chat");
  globalChat = document.getElementById("global-chat");

  user1Chat.style.maxHeight=window.innerHeight
  console.log(window.innerHeight)

  if (user === "user1") {
    user1Chat.classList.remove("hide");
    user2Chat.classList.add("hide");
    user3Chat.classList.add("hide");
    user4Chat.classList.add("hide");
    user5Chat.classList.add("hide");
    globalChat.classList.add("hide");
    chatName.innerHTML =
      '<div style="margin: 5px;" class="profile-avatar-holder"><img src="./assets/images/profile.png" alt="" /></div> عبد العزيز ياسر';
  } else if (user === "user2") {
    user1Chat.classList.add("hide");
    user2Chat.classList.remove("hide");
    user3Chat.classList.add("hide");
    user4Chat.classList.add("hide");
    user5Chat.classList.add("hide");
    globalChat.classList.add("hide");
    chatName.innerHTML =
      '<div style="margin: 5px;" class="profile-avatar-holder"><img src="./assets/images/profile.png" alt="" /></div> عبد العزيز ياسر';
  } else if (user === "user3") {
    user1Chat.classList.add("hide");
    user2Chat.classList.add("hide");
    user3Chat.classList.remove("hide");
    user4Chat.classList.add("hide");
    user5Chat.classList.add("hide");
    globalChat.classList.add("hide");
    chatName.innerHTML =
      '<div style="margin: 5px;" class="profile-avatar-holder"><img src="./assets/images/profile.png" alt="" /></div> عبد العزيز ياسر';
  } else if (user === "user4") {
    user1Chat.classList.add("hide");
    user2Chat.classList.add("hide");
    user3Chat.classList.add("hide");
    user4Chat.classList.remove("hide");
    user5Chat.classList.add("hide");
    globalChat.classList.add("hide");
    chatName.innerHTML =
      '<div style="margin: 5px;" class="profile-avatar-holder"><img src="./assets/images/profile.png" alt="" /></div> عبد العزيز ياسر';
  } else if (user === "user5") {
    user1Chat.classList.add("hide");
    user2Chat.classList.add("hide");
    user3Chat.classList.add("hide");
    user4Chat.classList.add("hide");
    user5Chat.classList.remove("hide");
    globalChat.classList.add("hide");
    chatName.innerHTML =
      '<div style="margin: 5px;" class="profile-avatar-holder"><img src="./assets/images/profile.png" alt="" /></div> عبد العزيز ياسر';
  } else if (user === "global") {
    user1Chat.classList.add("hide");
    user2Chat.classList.add("hide");
    user3Chat.classList.add("hide");
    user4Chat.classList.add("hide");
    user5Chat.classList.add("hide");
    globalChat.classList.remove("hide");
    chatName.innerHTML =
      '<i style="font-size: 20px; padding-left:5px;" class="bi bi-globe"></i> محادثة عالمية';
  }
}

function userMenu() {
  let users = document.querySelector(".user-list");
  let chatContainer = document.getElementById("chat-container");
  if (users.style.display == "flex") {
    users.style.display = "none";
    chatContainer.style.gridTemplateAreas =
      '"user-menu  chat-name chat-name"\
       "user-menu chat  chat"\
        "user-menu chat-box  chat-box"';
  } else {
    users.style.display = "flex";
    chatContainer.style.gridTemplateAreas =
      '"user-menu  user-list chat-name"\
      "user-menu user-list  chat"\
      "user-menu user-list  chat-box"';
  }
}
function send(msgBox, chat) {
  chat = chat.querySelector("div.chat:not(.hide)");
  msg = msgBox.value;
  if (!msg) {
    return;
  } else {
    chat.innerHTML += `<div class="from-me">${msg}</div>`;
    msgBox.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
}

