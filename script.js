const playBtn = document.getElementById("playBtn");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const flagImg = document.getElementById("flag");
const guessInput = document.getElementById("guess");
const timerEl = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");
const replayBtn = document.getElementById("replayBtn");
const progressEl = document.getElementById("progress");

let countries = [
    { name: ["Afghanistan"], code: "af" },
    { name: ["Albania"], code: "al" },
    { name: ["Algeria"], code: "dz" },
    { name: ["Andorra"], code: "ad" },
    { name: ["Angola"], code: "ao" },
    { name: ["Antigua and Barbuda"], code: "ag" },
    { name: ["Argentina"], code: "ar" },
    { name: ["Armenia"], code: "am" },
    { name: ["Australia"], code: "au" },
    { name: ["Austria"], code: "at" },
    { name: ["Azerbaijan"], code: "az" },
    { name: ["Bahamas"], code: "bs" },
    { name: ["Bahrain"], code: "bh" },
    { name: ["Bangladesh"], code: "bd" },
    { name: ["Barbados"], code: "bb" },
    { name: ["Belarus"], code: "by" },
    { name: ["Belgium"], code: "be" },
    { name: ["Belize"], code: "bz" },
    { name: ["Benin"], code: "bj" },
    { name: ["Bhutan"], code: "bt" },
    { name: ["Bolivia"], code: "bo" },
    { name: ["Bosnia and Herzegovina"], code: "ba" },
    { name: ["Botswana"], code: "bw" },
    { name: ["Brazil"], code: "br" },
    { name: ["Brunei"], code: "bn" },
    { name: ["Bulgaria"], code: "bg" },
    { name: ["Burkina Faso"], code: "bf" },
    { name: ["Burundi"], code: "bi" },
    { name: ["Cabo Verde", "Cape Verde"], code: "cv" },
    { name: ["Cambodia"], code: "kh" },
    { name: ["Cameroon"], code: "cm" },
    { name: ["Canada"], code: "ca" },
    { name: ["Central African Republic", "car"], code: "cf" },
    { name: ["Chad"], code: "td" },
    { name: ["Chile"], code: "cl" },
    { name: ["China", "People's Republic of China", "PRC"], code: "cn" },
    { name: ["Colombia"], code: "co" },
    { name: ["Comoros"], code: "km" },
    { name: ["Congo", "Republic of the Congo", "Republic of Congo"], code: "cg" },
    { name: ["Congo (Democratic Republic)", "DRC", "Democratic Republic of the Congo", "Democratic Republic of Congo"], code: "cd" },
    { name: ["Costa Rica"], code: "cr" },
    { name: ["Croatia"], code: "hr" },
    { name: ["Cuba"], code: "cu" },
    { name: ["Cyprus"], code: "cy" },
    { name: ["Czech Republic", "Czechia"], code: "cz" },
    { name: ["Denmark"], code: "dk" },
    { name: ["Djibouti"], code: "dj" },
    { name: ["Dominica"], code: "dm" },
    { name: ["Dominican Republic"], code: "do" },
    { name: ["Ecuador"], code: "ec" },
    { name: ["Egypt"], code: "eg" },
    { name: ["El Salvador"], code: "sv" },
    { name: ["Equatorial Guinea"], code: "gq" },
    { name: ["Eritrea"], code: "er" },
    { name: ["Estonia"], code: "ee" },
    { name: ["Eswatini", "Swaziland"], code: "sz" },
    { name: ["Ethiopia"], code: "et" },
    { name: ["Fiji"], code: "fj" },
    { name: ["Finland"], code: "fi" },
    { name: ["France"], code: "fr" },
    { name: ["Gabon"], code: "ga" },
    { name: ["Gambia", "The Gambia"], code: "gm" },
    { name: ["Georgia"], code: "ge" },
    { name: ["Germany"], code: "de" },
    { name: ["Ghana"], code: "gh" },
    { name: ["Greece"], code: "gr" },
    { name: ["Grenada"], code: "gd" },
    { name: ["Guatemala"], code: "gt" },
    { name: ["Guinea"], code: "gn" },
    { name: ["Guinea-Bissau"], code: "gw" },
    { name: ["Guyana"], code: "gy" },
    { name: ["Haiti"], code: "ht" },
    { name: ["Honduras"], code: "hn" },
    { name: ["Hungary"], code: "hu" },
    { name: ["Iceland"], code: "is" },
    { name: ["India"], code: "in" },
    { name: ["Indonesia"], code: "id" },
    { name: ["Iran"], code: "ir" },
    { name: ["Iraq"], code: "iq" },
    { name: ["Ireland"], code: "ie" },
    { name: ["Israel"], code: "il" },
    { name: ["Italy"], code: "it" },
    { name: ["Ivory Coast", "Cote d'Ivoire"], code: "ci"},
    { name: ["Jamaica"], code: "jm" },
    { name: ["Japan"], code: "jp" },
    { name: ["Jordan"], code: "jo" },
    { name: ["Kazakhstan"], code: "kz" },
    { name: ["Kenya"], code: "ke" },
    { name: ["Kiribati"], code: "ki" },
    { name: ["Korea, North", "North Korea", "DPRK"], code: "kp" },
    { name: ["Korea, South", "South Korea", "Republic of Korea"], code: "kr" },
    { name: ["Kosovo"], code: "xk" },    
    { name: ["Kuwait"], code: "kw" },
    { name: ["Kyrgyzstan"], code: "kg" },
    { name: ["Laos"], code: "la" },
    { name: ["Latvia"], code: "lv" },
    { name: ["Lebanon"], code: "lb" },
    { name: ["Lesotho"], code: "ls" },
    { name: ["Liberia"], code: "lr" },
    { name: ["Libya"], code: "ly" },
    { name: ["Liechtenstein"], code: "li" },
    { name: ["Lithuania"], code: "lt" },
    { name: ["Luxembourg"], code: "lu" },
    { name: ["Madagascar"], code: "mg" },
    { name: ["Malawi"], code: "mw" },
    { name: ["Malaysia"], code: "my" },
    { name: ["Maldives"], code: "mv" },
    { name: ["Mali"], code: "ml" },
    { name: ["Malta"], code: "mt" },
    { name: ["Marshall Islands"], code: "mh" },
    { name: ["Mauritania"], code: "mr" },
    { name: ["Mauritius"], code: "mu" },
    { name: ["Mexico"], code: "mx" },
    { name: ["Micronesia"], code: "fm" },
    { name: ["Moldova"], code: "md" },
    { name: ["Monaco"], code: "mc" },
    { name: ["Mongolia"], code: "mn" },
    { name: ["Montenegro"], code: "me" },
    { name: ["Morocco"], code: "ma" },
    { name: ["Mozambique"], code: "mz" },
    { name: ["Myanmar", "Burma"], code: "mm" },
    { name: ["Namibia"], code: "na" },
    { name: ["Nauru"], code: "nr" },
    { name: ["Nepal"], code: "np" },
    { name: ["Netherlands"], code: "nl" },
    { name: ["New Zealand"], code: "nz" },
    { name: ["Nicaragua"], code: "ni" },
    { name: ["Niger"], code: "ne" },
    { name: ["Nigeria"], code: "ng" },
    { name: ["North Macedonia", "Macedonia"], code: "mk" },
    { name: ["Norway"], code: "no" },
    { name: ["Oman"], code: "om" },
    { name: ["Pakistan"], code: "pk" },
    { name: ["Palau"], code: "pw" },
    { name: ["Palestine"], code: "ps" },
    { name: ["Panama"], code: "pa" },
    { name: ["Papua New Guinea"], code: "pg" },
    { name: ["Paraguay"], code: "py" },
    { name: ["Peru"], code: "pe" },
    { name: ["Philippines"], code: "ph" },
    { name: ["Poland"], code: "pl" },
    { name: ["Portugal"], code: "pt" },
    { name: ["Qatar"], code: "qa" },
    { name: ["Romania"], code: "ro" },
    { name: ["Russia", "Russian Federation"], code: "ru" },
    { name: ["Rwanda"], code: "rw" },
    { name: ["Saint Kitts and Nevis"], code: "kn" },
    { name: ["Saint Lucia"], code: "lc" },
    { name: ["Saint Vincent and the Grenadines","Saint Vincent"], code: "vc" },
    { name: ["Samoa"], code: "ws" },
    { name: ["San Marino"], code: "sm" },
    { name: ["Sao Tome and Principe"], code: "st" },
    { name: ["Saudi Arabia"], code: "sa" },
    { name: ["Senegal"], code: "sn" },
    { name: ["Serbia"], code: "rs" },
    { name: ["Seychelles"], code: "sc" },
    { name: ["Sierra Leone"], code: "sl" },
    { name: ["Singapore"], code: "sg" },
    { name: ["Slovakia"], code: "sk" },
    { name: ["Slovenia"], code: "si" },
    { name: ["Solomon Islands"], code: "sb" },
    { name: ["Somalia"], code: "so" },
    { name: ["South Africa"], code: "za" },
    { name: ["South Sudan"], code: "ss" },
    { name: ["Spain"], code: "es" },
    { name: ["Sri Lanka"], code: "lk" },
    { name: ["Sudan"], code: "sd" },
    { name: ["Suriname"], code: "sr" },
    { name: ["Sweden"], code: "se" },
    { name: ["Switzerland"], code: "ch" },
    { name: ["Syria"], code: "sy" },
    { name: ["Taiwan"], code: "tw" },
    { name: ["Tajikistan"], code: "tj" },
    { name: ["Tanzania"], code: "tz" },
    { name: ["Thailand"], code: "th" },
    { name: ["Timor-Leste", "East Timor"], code: "tl" },
    { name: ["Togo"], code: "tg" },
    { name: ["Tonga"], code: "to" },
    { name: ["Trinidad and Tobago"], code: "tt" },
    { name: ["Tunisia"], code: "tn" },
    { name: ["Turkey", "Türkiye"], code: "tr" },
    { name: ["Turkmenistan"], code: "tm" },
    { name: ["Tuvalu"], code: "tv" },
    { name: ["Uganda"], code: "ug" },
    { name: ["Ukraine"], code: "ua" },
    { name: ["United Arab Emirates", "UAE"], code: "ae" },
    { name: ["United Kingdom", "UK", "Britain", "Great Britain", "England"], code: "gb" },
    { name: ["United States", "USA", "America"], code: "us" },
    { name: ["Uruguay"], code: "uy" },
    { name: ["Uzbekistan"], code: "uz" },
    { name: ["Vanuatu"], code: "vu" },
    { name: ["Vatican City", "Vatican", "Holy See"], code: "va" },
    { name: ["Venezuela"], code: "ve" },
    { name: ["Vietnam"], code: "vn" },
    { name: ["Yemen"], code: "ye" },
    { name: ["Zambia"], code: "zm" },
    { name: ["Zimbabwe"], code: "zw" },
  ];
  

  let remaining = [...countries];
  let current;
  let guessedCount = 0;
  let timer, seconds = 0;
  let isPaused = false;
  let history = [];

function startTimer() {
    clearInterval(timer); // prevent multiple timers
    timer = setInterval(() => {
      if (!isPaused) {
        seconds++;
        const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        timerEl.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }
  
  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z]/g, "");
  }
  
  function showNextFlag() {
    if (remaining.length === 0) {
      alert(`You finished! Time: ${timerEl.textContent}`);
      clearInterval(timer);
      return;
    }
    const index = Math.floor(Math.random() * remaining.length);
    current = remaining[index];
    flagImg.src = `https://flagcdn.com/w320/${current.code}.png`;
    guessInput.value = "";
  }
  
  function updateProgress() {
    progressEl.textContent = `${guessedCount} / ${countries.length}`;
  }
  
  // Guess check
  guessInput.addEventListener("input", () => {
    if (isPaused) {
      isPaused = false;
      pauseBtn.textContent = "⏸️";
      guessInput.disabled = false;
      guessInput.style.opacity = "1";
    }
  
    const input = normalize(guessInput.value);
    if (current.name.some(n => normalize(n) === input)) {
      guessedCount++;
      remaining = remaining.filter(c => c !== current);
      updateProgress();
      showNextFlag();
    }
  });
  
  // Play button
  playBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
    game.classList.remove("hidden");
    seconds = 0;
    timerEl.textContent = "00:00";
    guessedCount = 0;
    remaining = [...countries];
    updateProgress();
    startTimer();
    showNextFlag();
  });
  
  // Skip (Next)
  nextBtn.addEventListener("click", () => {
    if (current) history.push(current);
    showNextFlag();
  });
  
  // Back (with wrap-around)
  backBtn.addEventListener("click", () => {
    if (history.length === 0) {
      if (!current) return;
      history = [...countries.filter(c => !remaining.includes(c)), current];
      current = history.pop();
    } else {
      remaining.push(current);
      current = history.pop();
    }
    flagImg.src = `https://flagcdn.com/w320/${current.code}.png`;
    guessInput.value = "";
  });
  
  // Pause button
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "▶️" : "⏸️";
    guessInput.disabled = isPaused; // block input while paused
    guessInput.style.opacity = isPaused ? "0.99" : "1"; // visual cue
  });
  
  // Replay button
  replayBtn.addEventListener("click", () => {
    clearInterval(timer);
    seconds = 0;
    guessedCount = 0;
    remaining = [...countries];
    history = [];
    updateProgress();
    timerEl.textContent = "00:00";
    isPaused = false;
    pauseBtn.textContent = "⏸️";
    startTimer();
    showNextFlag();
  });



  const giveUpBtn = document.getElementById("giveUpBtn");
  const results = document.getElementById("results");
  const missedFlags = document.getElementById("missedFlags");
  const returnMenuBtn = document.getElementById("returnMenuBtn");
  const resultStats = document.getElementById("resultStats");
  
  giveUpBtn.addEventListener("click", () => {
    clearInterval(timer);
    isPaused = true;
  
    // Hide game and show results
    game.classList.add("hidden");
    results.classList.remove("hidden");
  
    // Display score + time
    const total = countries.length;
    resultStats.innerHTML = `You guessed ${guessedCount} out of ${total} correctly in ${timerEl.textContent}.<br>The ones you missed:`;
  
    // Show all missed flags
    missedFlags.innerHTML = "";
    remaining.forEach(c => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="https://flagcdn.com/w320/${c.code}.png" alt="${c.name[0]}">
        <p>${c.name[0]}</p>
      `;
      missedFlags.appendChild(div);
    });
  });
  
  returnMenuBtn.addEventListener("click", () => {
    results.classList.add("hidden");
    menu.classList.remove("hidden");
  });
  
  