(function () {
  // Full data.json embedded directly so it works even on file:// without a local server
  const DEFAULT_DATA = {
    easy: [
      {
        id: "easy-1",
        text: "The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day. It was going to be a warm and sunny morning."
      },
      {
        id: "easy-2",
        text: "She walked to the store to buy some bread and milk. The shop was busy but she found what she needed quickly. On her way home, she saw a friend and waved."
      },
      {
        id: "easy-3",
        text: "The dog ran across the park chasing a ball. He was fast and loved to play. After a while, he got tired and lay down in the cool shade of a big oak tree."
      },
      {
        id: "easy-4",
        text: "I like to read books before I go to sleep. It helps me relax after a long day. My favorite stories are about adventure and travel to far away places."
      },
      {
        id: "easy-5",
        text: "The kitchen smelled of fresh coffee and toast. Mom was making breakfast while dad read the news. It was a normal morning in their small but cozy home."
      },
      {
        id: "easy-6",
        text: "We went to the beach last summer. The water was blue and the sand was warm. We built a big sand castle and looked for shells along the shore."
      },
      {
        id: "easy-7",
        text: "The cat sat on the window sill watching the rain. Drops fell down the glass one by one. She seemed happy to be inside where it was dry and warm."
      },
      {
        id: "easy-8",
        text: "My best friend lives next door to me. We play games together after school. Sometimes we ride our bikes around the block or sit and talk for hours."
      },
      {
        id: "easy-9",
        text: "Spring is my favorite time of year. Flowers start to bloom and the days get longer. I love to see the trees turn green again after the cold winter months."
      },
      {
        id: "easy-10",
        text: "The music played softly in the room. She closed her eyes and let the sounds wash over her. It was a simple song but it made her feel at peace."
      }
    ],
    medium: [
      {
        id: "medium-1",
        text: "Learning a new skill takes patience and consistent practice. Whether you're studying a language, picking up an instrument, or mastering a sport, the key is to show up every day. Small improvements compound over time, and before you know it, you'll have made remarkable progress."
      },
      {
        id: "medium-2",
        text: "The old lighthouse had stood on the cliff for over a century, guiding sailors safely through treacherous waters. Its beam cut through the fog each night, a reassuring presence for those navigating the rocky coastline. Many storms had tested its structure, but it remained steadfast."
      },
      {
        id: "medium-3",
        text: "Coffee culture has evolved dramatically in recent decades. What was once a simple morning ritual has become an art form, with baristas crafting intricate latte designs and roasters sourcing beans from remote mountain villages. The humble cup of coffee now tells a global story."
      },
      {
        id: "medium-4",
        text: "Urban gardens are transforming city landscapes around the world. Residents are converting rooftops, balconies, and abandoned lots into thriving green spaces. These initiatives not only provide fresh produce but also create communities, reduce stress, and help combat the urban heat island effect."
      },
      {
        id: "medium-5",
        text: "The documentary explored how technology shapes our daily habits. From the moment we wake to an alarm on our phones to the podcasts we fall asleep to, digital tools have woven themselves into the fabric of modern life. The question is: are we in control?"
      },
      {
        id: "medium-6",
        text: "Traveling by train offers a unique perspective on the countryside. Unlike flying, which reduces landscapes to abstract patterns, rail journeys let you witness the gradual transitions between regions. You see farms give way to forests, and small towns emerge from rolling hills."
      },
      {
        id: "medium-7",
        text: "The chef believed that great cooking starts with quality ingredients. She visited local farmers each week, selecting vegetables at their peak ripeness. Her menu changed with the seasons, reflecting what the land offered. Diners appreciated the freshness they could taste in every bite."
      },
      {
        id: "medium-8",
        text: "Libraries have reinvented themselves for the digital age. Beyond lending books, they now offer coworking spaces, 3D printers, recording studios, and coding workshops. These community hubs have become places where people of all ages come to learn, create, and connect with others."
      },
      {
        id: "medium-9",
        text: "The architect designed buildings that worked with nature rather than against it. Large windows captured natural light, reducing the need for electricity. Green roofs absorbed rainwater and provided insulation. Her philosophy was simple: sustainable design should be beautiful, functional, and accessible to everyone."
      },
      {
        id: "medium-10",
        text: "Night markets come alive after sunset in cities across Asia. Vendors set up stalls selling everything from grilled skewers to handmade crafts. The air fills with enticing aromas and the buzz of conversation. Locals and tourists alike wander through, sampling street food and hunting for bargains."
      }
    ],
    hard: [
      {
        id: "hard-1",
        text: "The philosopher's argument hinged on a seemingly paradoxical assertion: that absolute freedom, pursued without constraint, inevitably undermines itself. \"Consider,\" she wrote, \"how the libertarian ideal—when taken to its logical extreme—produces conditions in which the powerful dominate the weak, thereby eliminating freedom for the majority.\" Her critics dismissed this as sophistry; her supporters hailed it as profound."
      },
      {
        id: "hard-2",
        text: "Quantum entanglement—Einstein's \"spooky action at a distance\"—continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), yet it challenges our intuitions about locality, causality, and the nature of reality itself."
      },
      {
        id: "hard-3",
        text: "The Renaissance polymath's correspondence reveals a mind of extraordinary breadth: in a single week's letters, he discussed astronomical observations, critiqued a colleague's architectural drawings, proposed improvements to the city's sewage system, and composed a sonnet for a patron's daughter. \"Specialization,\" he remarked wryly, \"is for insects.\" His contemporaries found him exhausting; posterity finds him inspirational."
      },
      {
        id: "hard-4",
        text: "Algorithmic trading has fundamentally restructured financial markets. High-frequency systems execute thousands of transactions per second, exploiting minute price discrepancies across exchanges. Critics argue this creates systemic fragility—the 2010 \"Flash Crash\" saw the Dow Jones plummet 1,000 points in minutes before recovering. Proponents counter that algorithms provide liquidity and reduce spreads, ultimately benefiting retail investors."
      },
      {
        id: "hard-5",
        text: "The biographer faced an ethical dilemma: her subject's private journals—recently discovered in an attic—contained revelations that would overturn his carefully cultivated public image. Should she publish them? \"Biography,\" she mused, \"exists in tension between truth-telling and respect for the dead.\" After months of deliberation, she chose disclosure, reasoning that sanitized history serves no one."
      },
      {
        id: "hard-6",
        text: "Microplastics have infiltrated virtually every ecosystem on Earth, from the Mariana Trench to Arctic ice cores. These polymer fragments—smaller than 5mm in diameter—originate from degrading consumer products, synthetic textiles, and industrial processes. Researchers have detected them in human blood, placental tissue, and breast milk; their long-term health implications remain disturbingly unclear. The ubiquity of plastic pollution represents an unprecedented experiment on planetary biology."
      },
      {
        id: "hard-7",
        text: "The conductor's interpretation of Mahler's Ninth Symphony emphasized its prophetic qualities—the premonition of catastrophe, the aching nostalgia for a world about to vanish. \"Mahler composed this knowing he was dying,\" she explained in the program notes, \"but he also intuited, somehow, that European civilization itself stood at the precipice.\" The orchestra's performance—hushed, trembling, transcendent—left the audience in stunned silence."
      },
      {
        id: "hard-8",
        text: "Constitutional scholars continue debating the \"counter-majoritarian difficulty\": how can judicial review—whereby unelected judges overturn legislation passed by democratic representatives—be reconciled with popular sovereignty? Some argue courts protect minority rights against tyrannical majorities; others contend this reasoning masks ideological preferences in neutral-sounding jurisprudence. The tension, perhaps, is irresolvable; democratic systems must balance competing values rather than optimize for any single principle."
      },
      {
        id: "hard-9",
        text: "The novelist's prose style—elliptical, fragmented, punctuated by abrupt temporal shifts—reflected her thematic preoccupations: memory's unreliability, identity's fluidity, the impossibility of objective narration. \"Every story,\" she declared in an interview, \"is simultaneously true and false; it reveals by concealing, illuminates by casting shadows.\" Critics accused her of obscurantism; she responded that clarity itself can be a form of deception."
      },
      {
        id: "hard-10",
        text: "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.\""
      }
    ]
  };

  const STORAGE_KEY = "fm_typing_personal_best_wpm";

  let passagesData = DEFAULT_DATA;
  let currentDifficulty = "hard";
  let currentMode = "timed"; // "timed" or "passage"
  let currentPassage = "";
  let currentIndex = 0;

  let isStarted = false;
  let isFinished = false;
  let timerInterval = null;
  let timeRemaining = 60;
  let elapsedSeconds = 0;

  let totalKeystrokesTyped = 0;
  let totalErrorsMade = 0;
  let lastResultOutcome = null;

  // Guard flag to prevent desktop keystrokes from firing twice (keydown + input)
  let handledByKeydown = false;

  function initApp() {
    let personalBest = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    if (isNaN(personalBest)) {
      personalBest = null;
    }

    const pbValueEl = document.getElementById("pbValue");
    const wpmStatEl = document.getElementById("wpmStat");
    const accuracyStatEl = document.getElementById("accuracyStat");
    const timeStatEl = document.getElementById("timeStat");
    const passageContainerEl = document.getElementById("passageContainer");
    const startOverlayEl = document.getElementById("startOverlay");
    const startTestBtnEl = document.getElementById("startTestBtn");
    const restartFooterEl = document.getElementById("restartFooter");
    const restartTestBtnEl = document.getElementById("restartTestBtn");
    const hiddenInputEl = document.getElementById("hiddenTypingInput");

    const testViewEl = document.getElementById("testView");
    const resultsViewEl = document.getElementById("resultsView");
    const confettiContainerEl = document.getElementById("confettiContainer");
    const confettiFallbackEl = document.getElementById("confettiFallback");

    const mobileDiffToggleEl = document.getElementById("mobileDiffToggle");
    const mobileDiffMenuEl = document.getElementById("mobileDiffMenu");
    const mobileDiffLabelEl = document.getElementById("mobileDiffLabel");
    const mobileModeToggleEl = document.getElementById("mobileModeToggle");
    const mobileModeMenuEl = document.getElementById("mobileModeMenu");
    const mobileModeLabelEl = document.getElementById("mobileModeLabel");

    const playAgainBtnEl = document.getElementById("playAgainBtn");
    const playAgainBtnTextEl = document.getElementById("playAgainBtnText");

    function updatePersonalBestUI() {
      pbValueEl.textContent = personalBest !== null ? `${personalBest} WPM` : "0 WPM";
    }

    // Load ./data.json if running on a local server
    fetch("./data.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Fallback to embedded data");
        return res.json();
      })
      .then(function (data) {
        if (data && data.easy && data.medium && data.hard) {
          passagesData = data;
        }
      })
      .catch(function () {
        // Uses embedded DEFAULT_DATA seamlessly when opened via file://
      });

    function getRandomPassage(difficulty) {
      const list = passagesData[difficulty] || DEFAULT_DATA.hard;
      if (!list || list.length === 0) return DEFAULT_DATA.hard[9].text;
      if (list.length === 1) return list[0].text;

      let candidate = list[Math.floor(Math.random() * list.length)].text;
      if (candidate === currentPassage) {
        const idx = list.findIndex(function (item) {
          return item.text === candidate;
        });
        candidate = list[(idx + 1) % list.length].text;
      }
      return candidate;
    }

    function formatTime(sec) {
      if (currentMode === "timed" && sec === 60) {
        return "0:60";
      }
      const mins = Math.floor(sec / 60);
      const rem = sec % 60;
      return `${mins}:${rem < 10 ? "0" + rem : rem}`;
    }

    function renderPassage(text) {
      passageContainerEl.innerHTML = "";
      passageContainerEl.scrollTop = 0;

      const fragment = document.createDocumentFragment();
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = text[i];
        fragment.appendChild(span);
      }
      passageContainerEl.appendChild(fragment);
    }

    function keepCursorVisible() {
      const currentSpan = passageContainerEl.querySelector(".char.current");
      if (!currentSpan) return;

      const charTop = currentSpan.offsetTop;
      const charHeight = currentSpan.offsetHeight;
      const visibleHeight = passageContainerEl.clientHeight;

      if (charTop + charHeight * 2 > passageContainerEl.scrollTop + visibleHeight) {
        passageContainerEl.scrollTop = charTop - charHeight * 2;
      } else if (charTop < passageContainerEl.scrollTop) {
        passageContainerEl.scrollTop = Math.max(0, charTop - charHeight);
      }
    }

    function initTest(keepBlurred) {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      isStarted = false;
      isFinished = false;
      lastResultOutcome = null;
      currentIndex = 0;
      totalKeystrokesTyped = 0;
      totalErrorsMade = 0;
      timeRemaining = 60;
      elapsedSeconds = 0;

      currentPassage = getRandomPassage(currentDifficulty);
      renderPassage(currentPassage);

      wpmStatEl.textContent = "0";
      accuracyStatEl.textContent = "100%";
      accuracyStatEl.classList.remove("text-red", "text-green");

      timeStatEl.textContent = currentMode === "timed" ? "0:60" : "0:00";
      timeStatEl.classList.remove("text-yellow");

      resultsViewEl.classList.add("is-hidden");
      confettiContainerEl.classList.add("is-hidden");
      if (confettiFallbackEl) confettiFallbackEl.innerHTML = "";
      testViewEl.classList.remove("is-hidden");
      hiddenInputEl.value = "";

      if (keepBlurred) {
        passageContainerEl.classList.add("blurred");
        startOverlayEl.classList.remove("is-hidden");
        restartFooterEl.classList.add("is-hidden");
      } else {
        startTypingSession();
      }
    }

    function startTypingSession() {
      if (isStarted) return;
      isStarted = true;
      isFinished = false;

      passageContainerEl.classList.remove("blurred");
      startOverlayEl.classList.add("is-hidden");
      restartFooterEl.classList.remove("is-hidden");

      const chars = passageContainerEl.querySelectorAll(".char");
      chars.forEach(function (c) {
        c.classList.remove("current");
      });
      if (chars.length > 0) {
        chars[0].classList.add("current");
      }

      timeStatEl.classList.add("text-yellow");
      hiddenInputEl.focus();

      timerInterval = setInterval(function () {
        elapsedSeconds++;

        if (currentMode === "timed") {
          timeRemaining--;
          timeStatEl.textContent = formatTime(Math.max(0, timeRemaining));
          updateLiveMetrics();

          if (timeRemaining <= 0) {
            finishTest();
          }
        } else {
          timeStatEl.textContent = formatTime(elapsedSeconds);
          updateLiveMetrics();
        }
      }, 1000);
    }

    function calculateStats() {
      const chars = passageContainerEl.querySelectorAll(".char");
      let correctCount = 0;
      let incorrectCount = 0;

      for (let i = 0; i < currentIndex; i++) {
        if (chars[i].classList.contains("correct")) {
          correctCount++;
        } else if (chars[i].classList.contains("incorrect")) {
          incorrectCount++;
        }
      }

      const activeSeconds = Math.max(1, elapsedSeconds);
      const minutes = activeSeconds / 60;
      const wpm = Math.round(correctCount / 5 / minutes);

      let accuracy = 100;
      if (totalKeystrokesTyped > 0) {
        accuracy = Math.max(
          0,
          Math.round(((totalKeystrokesTyped - totalErrorsMade) / totalKeystrokesTyped) * 100)
        );
      }

      return {
        wpm: wpm,
        accuracy: accuracy,
        correctCount: correctCount,
        incorrectCount: incorrectCount
      };
    }

    function updateLiveMetrics() {
      const stats = calculateStats();
      wpmStatEl.textContent = stats.wpm;
      accuracyStatEl.textContent = `${stats.accuracy}%`;

      if (stats.accuracy < 100) {
        accuracyStatEl.classList.add("text-red");
      } else {
        accuracyStatEl.classList.remove("text-red");
      }
    }

    function isCharMatch(expected, typed) {
      if (expected === typed) return true;
      if ((expected === "’" || expected === "‘") && typed === "'") return true;
      if ((expected === "“" || expected === "”") && typed === '"') return true;
      if ((expected === "—" || expected === "–") && typed === "-") return true;
      return false;
    }

    function processCharacterKey(charTyped) {
      if (isFinished) return;
      if (!isStarted) {
        startTypingSession();
      }

      const chars = passageContainerEl.querySelectorAll(".char");
      if (currentIndex >= currentPassage.length) return;

      const expectedChar = currentPassage[currentIndex];
      const currentSpan = chars[currentIndex];

      totalKeystrokesTyped++;

      if (isCharMatch(expectedChar, charTyped)) {
        currentSpan.classList.remove("incorrect", "current");
        currentSpan.classList.add("correct");
      } else {
        totalErrorsMade++;
        currentSpan.classList.remove("correct", "current");
        currentSpan.classList.add("incorrect");
      }

      currentIndex++;

      if (currentIndex < currentPassage.length) {
        chars[currentIndex].classList.add("current");
        keepCursorVisible();
      }

      updateLiveMetrics();

      if (currentIndex >= currentPassage.length) {
        finishTest();
      }
    }

    function processBackspace() {
      if (!isStarted || isFinished || currentIndex <= 0) return;

      const chars = passageContainerEl.querySelectorAll(".char");
      if (currentIndex < chars.length) {
        chars[currentIndex].classList.remove("current");
      }

      currentIndex--;
      chars[currentIndex].classList.remove("correct", "incorrect");
      chars[currentIndex].classList.add("current");
      keepCursorVisible();

      updateLiveMetrics();
    }

    function updateResultButtonLabel() {
      if (lastResultOutcome === "first") {
        playAgainBtnTextEl.textContent = "Beat This Score";
      } else if (lastResultOutcome === "new-pb") {
        const isMobile = window.innerWidth < 768;
        playAgainBtnTextEl.textContent = isMobile ? "Go Again" : "Beat This Score";
      } else {
        playAgainBtnTextEl.textContent = "Go Again";
      }
    }

    window.addEventListener("resize", function () {
      if (isFinished) {
        updateResultButtonLabel();
      }
    });

    function finishTest() {
      if (isFinished) return;
      isFinished = true;
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      const stats = calculateStats();

      document.getElementById("resWpm").textContent = stats.wpm;
      const resAccuracyEl = document.getElementById("resAccuracy");
      resAccuracyEl.textContent = `${stats.accuracy}%`;
      resAccuracyEl.classList.remove("text-red", "text-green");
      resAccuracyEl.classList.add(stats.accuracy === 100 ? "text-green" : "text-red");

      document.getElementById("resCorrectChars").textContent = stats.correctCount;
      document.getElementById("resIncorrectChars").textContent = stats.incorrectCount;

      const isFirstTest = personalBest === null;
      const isNewPersonalBest = !isFirstTest && stats.wpm > personalBest;

      const resultIconCheckEl = document.getElementById("resultIconCheck");
      const resultIconPartyEl = document.getElementById("resultIconParty");
      const decorativeStarsEl = document.getElementById("decorativeStars");
      const resultTitleEl = document.getElementById("resultTitle");
      const resultSubtitleEl = document.getElementById("resultSubtitle");

      if (isFirstTest) {
        lastResultOutcome = "first";
        personalBest = stats.wpm;
        localStorage.setItem(STORAGE_KEY, personalBest);
        updatePersonalBestUI();

        resultIconCheckEl.classList.remove("is-hidden");
        resultIconPartyEl.classList.add("is-hidden");
        decorativeStarsEl.classList.remove("is-hidden");
        confettiContainerEl.classList.add("is-hidden");

        resultTitleEl.textContent = "Baseline Established!";
        resultSubtitleEl.textContent =
          "You’ve set the bar. Now the real challenge begins—time to beat it.";
      } else if (isNewPersonalBest) {
        lastResultOutcome = "new-pb";
        personalBest = stats.wpm;
        localStorage.setItem(STORAGE_KEY, personalBest);
        
        updatePersonalBestUI();

        resultIconCheckEl.classList.add("is-hidden");
        resultIconPartyEl.classList.remove("is-hidden");
        decorativeStarsEl.classList.add("is-hidden");

        resultTitleEl.textContent = "High Score Smashed!";
        resultSubtitleEl.textContent =
          "You’re getting faster. That was incredible typing.";

        spawnConfetti();
      } else {
        lastResultOutcome = "complete";
        resultIconCheckEl.classList.remove("is-hidden");
        resultIconPartyEl.classList.add("is-hidden");
        decorativeStarsEl.classList.remove("is-hidden");
        confettiContainerEl.classList.add("is-hidden");

        resultTitleEl.textContent = "Test Complete!";
        resultSubtitleEl.textContent =
          "Solid run. Keep pushing to beat your high score.";
      }

      updateResultButtonLabel();

      testViewEl.classList.add("is-hidden");
      resultsViewEl.classList.remove("is-hidden");
    }

    function spawnConfetti() {
      confettiContainerEl.classList.remove("is-hidden");
      if (!confettiFallbackEl) return;
      confettiFallbackEl.innerHTML = "";

      const colors = [
        "hsl(214, 100%, 55%)",
        "hsl(140, 63%, 57%)",
        "hsl(354, 63%, 57%)",
        "hsl(49, 85%, 70%)"
      ];

      for (let i = 0; i < 85; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.bottom = `${Math.random() * 92}%`;
        piece.style.width = `${7 + Math.random() * 8}px`;
        piece.style.height = `${4 + Math.random() * 5}px`;
        piece.style.backgroundColor = colors[i % colors.length];
        piece.style.animationDelay = `${(Math.random() * 0.35).toFixed(2)}s`;
        piece.style.setProperty("--rot", `${Math.floor(Math.random() * 360) - 180}deg`);
        confettiFallbackEl.appendChild(piece);
      }
    }

    function setDifficulty(diff) {
      currentDifficulty = diff;

      document.querySelectorAll(".difficulty-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-difficulty") === diff);
      });

      document.querySelectorAll(".difficulty-option").forEach(function (opt) {
        opt.classList.toggle("active", opt.getAttribute("data-difficulty") === diff);
      });

      const labelMap = { easy: "Easy", medium: "Medium", hard: "Hard" };
      if (mobileDiffLabelEl) {
        mobileDiffLabelEl.textContent = labelMap[diff] || "Hard";
      }

      initTest(!isStarted);
    }

    function setMode(mode) {
      currentMode = mode;

      document.querySelectorAll(".mode-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-mode") === mode);
      });

      document.querySelectorAll(".mode-option").forEach(function (opt) {
        opt.classList.toggle("active", opt.getAttribute("data-mode") === mode);
      });

      const labelMap = { timed: "Timed (60s)", passage: "Passage" };
      if (mobileModeLabelEl) {
        mobileModeLabelEl.textContent = labelMap[mode] || "Timed (60s)";
      }

      initTest(!isStarted);
    }

    // ==================== EVENT LISTENERS ====================

    // Start Button & Overlay Click
    [startTestBtnEl, startOverlayEl, passageContainerEl].forEach(function (el) {
      if (!el) return;
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!isStarted && !isFinished) {
          startTypingSession();
        } else if (isStarted && !isFinished) {
          hiddenInputEl.focus();
        }
      });
    });

    // Desktop Difficulty Buttons
    document.querySelectorAll(".difficulty-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const diff = this.getAttribute("data-difficulty");
        setDifficulty(diff);
        this.blur();
      });
    });

    // Desktop Mode Buttons
    document.querySelectorAll(".mode-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const mode = this.getAttribute("data-mode");
        setMode(mode);
        this.blur();
      });
    });

    // Mobile Dropdown Toggles
    if (mobileDiffToggleEl) {
      mobileDiffToggleEl.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileModeMenuEl.classList.add("is-hidden");
        mobileDiffMenuEl.classList.toggle("is-hidden");
      });
    }

    if (mobileModeToggleEl) {
      mobileModeToggleEl.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileDiffMenuEl.classList.add("is-hidden");
        mobileModeMenuEl.classList.toggle("is-hidden");
      });
    }

    // Mobile Difficulty Options
    document.querySelectorAll(".difficulty-option").forEach(function (opt) {
      opt.addEventListener("click", function (e) {
        e.stopPropagation();
        const diff = this.getAttribute("data-difficulty");
        setDifficulty(diff);
        mobileDiffMenuEl.classList.add("is-hidden");
      });
    });

    // Mobile Mode Options
    document.querySelectorAll(".mode-option").forEach(function (opt) {
      opt.addEventListener("click", function (e) {
        e.stopPropagation();
        const mode = this.getAttribute("data-mode");
        setMode(mode);
        mobileModeMenuEl.classList.add("is-hidden");
      });
    });

    // Close mobile dropdowns when clicking outside
    document.addEventListener("click", function () {
      if (mobileDiffMenuEl) mobileDiffMenuEl.classList.add("is-hidden");
      if (mobileModeMenuEl) mobileModeMenuEl.classList.add("is-hidden");
    });

    // Keyboard Typing Listener (Desktop & Physical Keyboards)
    document.addEventListener("keydown", function (e) {
      handledByKeydown = false;

      if (isFinished) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      if (mobileDiffMenuEl) mobileDiffMenuEl.classList.add("is-hidden");
      if (mobileModeMenuEl) mobileModeMenuEl.classList.add("is-hidden");

      if (e.key === "Backspace") {
        e.preventDefault();
        handledByKeydown = true;
        processBackspace();
        return;
      }

      if (e.key.length === 1) {
        // Prevent character from also entering hiddenTypingInput and firing 'input' a second time
        e.preventDefault();
        handledByKeydown = true;
        processCharacterKey(e.key);
      }
    });

    // Mobile Virtual Keyboard Support (only runs when keydown didn't already handle the key)
    if (hiddenInputEl) {
      hiddenInputEl.addEventListener("beforeinput", function (e) {
        if (handledByKeydown) return;
        if (e.inputType === "deleteContentBackward") {
          e.preventDefault();
          processBackspace();
        }
      });

      hiddenInputEl.addEventListener("input", function () {
        if (handledByKeydown) {
          handledByKeydown = false;
          this.value = "";
          return;
        }
        const val = this.value;
        if (val && val.length > 0) {
          const lastChar = val[val.length - 1];
          processCharacterKey(lastChar);
        }
        this.value = "";
      });
    }

    // Restart Button (during active test)
    if (restartTestBtnEl) {
      restartTestBtnEl.addEventListener("click", function () {
        this.blur();
        initTest(false);
      });
    }

    // Play Again / Beat This Score Button (on Results screen)
    if (playAgainBtnEl) {
      playAgainBtnEl.addEventListener("click", function () {
        this.blur();
        initTest(true);
      });
    }

    // Initialize UI immediately
    updatePersonalBestUI();
    initTest(true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();