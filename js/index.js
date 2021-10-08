// varaibles
let result = [];
let search1 = document.getElementById("search-1");
let search2 = document.getElementById("search-2");
console.log(search2);
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passInput = document.getElementById("passInput");
let submit = document.getElementById("submit");
let inputs = document.getElementById("Contact");
console.log(inputs);
// jquery-part
$(document).ready(function () {
  let x = $("#navo-1").width();
  $("#spiner-item").fadeOut(1000, () => {
    $("body").css("overflow-y", "auto");
  });
  $(document).ready(() => {
    $(".navo").animate({ left: `-${x}` });
    $("#links li").eq(0).animate({ paddingTop: "1000px", opacity: "0" }, 1000);
    $("#links li").eq(1).animate({ paddingTop: "1000px", opacity: "0" }, 1100);
    $("#links li").eq(2).animate({ paddingTop: "1000px", opacity: "0" }, 1200);
    $("#links li").eq(3).animate({ paddingTop: "1000px", opacity: "0" }, 1300);
    $("#links li").eq(4).animate({ paddingTop: "1000px", opacity: "0" }, 1400);
    $("#links li").eq(5).animate({ paddingTop: "1000px", opacity: "0" }, 1500);
    $(".social i").eq(0).animate({ paddingRight: "50px", opacity: "0" }, 700);
    $(".social i").eq(2).animate({ paddingLeft: "50px", opacity: "0" }, 700);
  });
});

$("#menu").click(function () {
  let x = $("#navo-1").width();
  if ($(".navo").css("left") == "0px") {
    $(".navo").animate({ left: `-${x}` });
    $("#menu").toggleClass("fa-bars fa-times");
    $("#links li").eq(0).animate({ paddingTop: "1000px", opacity: "0" }, 1000);
    $("#links li").eq(1).animate({ paddingTop: "1000px", opacity: "0" }, 1100);
    $("#links li").eq(2).animate({ paddingTop: "1000px", opacity: "0" }, 1200);
    $("#links li").eq(3).animate({ paddingTop: "1000px", opacity: "0" }, 1300);
    $("#links li").eq(4).animate({ paddingTop: "1000px", opacity: "0" }, 1400);
    $("#links li").eq(5).animate({ paddingTop: "1000px", opacity: "0" }, 1500);
    $(".social i").eq(0).animate({ paddingRight: "50px", opacity: "0" }, 700);
    $(".social i").eq(2).animate({ paddingLeft: "50px", opacity: "0" }, 700);
  } else if ($(".navo").css("left") < "0px") {
    $(".navo").animate({ left: "0px" });
    $("#menu").toggleClass("fa-bars fa-times");
    $("#links li").eq(0).animate({ opacity: "1", paddingTop: "25px" }, 1000);
    $("#links li").eq(1).animate({ paddingTop: "25px", opacity: "1" }, 1100);
    $("#links li").eq(2).animate({ paddingTop: "25px", opacity: "1" }, 1200);
    $("#links li").eq(3).animate({ paddingTop: "25px", opacity: "1" }, 1300);
    $("#links li").eq(4).animate({ paddingTop: "25px", opacity: "1" }, 1400);
    $("#links li").eq(5).animate({ paddingTop: "25px", opacity: "1" }, 1500);
    $(".social i").eq(0).animate({ paddingRight: "0px", opacity: "1" }, 700);
    $(".social i").eq(2).animate({ paddingLeft: "0px", opacity: "1" }, 700);
  }
});

// fetch Url
async function fetchUrl() {
  let myHttp = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k"
  );
  response = await myHttp.json();
  result = await response.results;
  await showMovie();
}
fetchUrl();

async function showMovie() {
  let cartoona = "";
  for (let i = 0; i < result.length; i++) {
    cartoona += `
    <div class="col-md-3 imagess position-relative mx-auto  p-0">
            <img
              class="w-100 "
              src="https://image.tmdb.org/t/p/original/${result[i].poster_path}"
              alt=""
              srcset=""
            />
            <div>
            <div class="para text-center">
            <h2>${result[i].title}</h2>
              <p>
                ${result[i].overview}
              </p>
              <p>${result[i].release_date}</p>
              <p>Rate : ${result[i].vote_average}</p>
            </div>
            </div>
          </div>`;
  }
  document.getElementById("movies").innerHTML = cartoona;
}

search2.addEventListener("keyup", async function (e) {
  await fetchUrl();
  await searchOne(e.target.value);
});
async function searchOne(char) {
  let cartoona = "";
  for (let i = 0; i < result.length; i++) {
    if (result[i].title.toLowerCase().includes(char.toLowerCase()) == true) {
      cartoona += `<div class="col-md-3 imagess position-relative mx-auto  p-0">
      <img
        class="w-100 "
        src="https://image.tmdb.org/t/p/original/${result[i].poster_path}"
        alt=""
        srcset=""
      />
      <div>
      <div class="para text-center">
      <h2>${result[i].title}</h2>
        <p>
          ${result[i].overview}
        </p>
        <p>${result[i].release_date}</p>
        <p>Rate : ${result[i].vote_average}</p>
      </div>
      </div>
    </div>`;
    }
  }
  document.getElementById("movies").innerHTML = cartoona;
}

// serch all movies
async function allmovies(x) {
  let Http = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${x}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`
  );
  let response = await Http.json();
  result = response.results;
  await showMovie();
}

search1.addEventListener("keyup", async function (e) {
  await allmovies(e.target.value);
});

// now playing
let nowPlaying = document.getElementById("nowPlaying");
async function nowPlay() {
  let Http = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  let response = await Http.json();
  result = response.results;
  console.log("bhbk");

  await showMovie();
}
nowPlaying.addEventListener("click", () => {
  nowPlay();
});
// popular
let pop = document.getElementById("pop");
console.log(pop);
async function popular() {
  let Http = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
  );
  let response = await Http.json();
  result = response.results;
  console.log("bhbk");

  await showMovie();
}
pop.addEventListener("click", () => {
  popular();
});
// top Rated
let tOp = document.getElementById("tOp");
console.log(tOp);
async function topRated() {
  let Http = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
  );
  let response = await Http.json();
  result = response.results;
  await showMovie();
}
tOp.addEventListener("click", () => {
  topRated();
});
// trending
let Trend = document.getElementById("Trend");
async function trending() {
  let Http = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
  );
  let response = await Http.json();
  result = response.results;
  await showMovie();
}
Trend.addEventListener("click", () => {
  trending();
});

// upComing
let Upc = document.getElementById("Upc");
async function upComing() {
  let Http = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
  );
  let response = await Http.json();
  result = response.results;
  await showMovie();
}
Upc.addEventListener("click", () => {
  upComing();
});

// regex

function invalidName() {
  let regex = /^[A-Z][a-z]{2,16}$/;
  if (regex.test(nameInput.value) == true) {
    $("#namee").css("display", "none");
    return true;
  } else {
    $("#namee").css("display", "block");
    return false;
  }
}
nameInput.addEventListener("keyup", invalidName);

function invalidEmail() {
  let regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  if (regex.test(emailInput.value) == true) {
    $("#Email").css("display", "none");
    return true;
  } else {
    $("#Email").css("display", "block");
    return false;
  }
}
emailInput.addEventListener("keyup", invalidEmail);

function invalidNumber() {
  let regex = /^(012||015||010||011)[0-9]{11}$/;
  if (regex.test(phoneInput.value) == true) {
    $("#phoneNum").css("display", "none");
    return true;
  } else {
    $("#phoneNum").css("display", "block");
    return false;
  }
}
phoneInput.addEventListener("keyup", invalidNumber);

function invalidAge() {
  let regex = /^(80||[0-9][0-9]||[0-9])$/;
  if (regex.test(ageInput.value) == true) {
    $("#ageNum").css("display", "none");
    return true;
  } else {
    $("#ageNum").css("display", "block");
    return false;
  }
}
ageInput.addEventListener("keyup", invalidAge);

function invalidPass() {
  let regex = /^([A-Z]||[a-z]||[0-9]){2,16}$/;
  if (regex.test(passInput.value) == true) {
    $("#Pass").css("display", "none");
    return true;
  } else {
    $("#Pass").css("display", "block");
    return false;
  }
}
passInput.addEventListener("keyup", invalidPass);

inputs.addEventListener("click", () => {
  if (
    invalidName() == true &&
    invalidEmail() == true &&
    invalidNumber() == true &&
    invalidAge() == true &&
    invalidPass() == true
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
