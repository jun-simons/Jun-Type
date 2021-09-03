const t = document.getElementById("word-box");

//load correct theme when page is loaded
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    if (currentTheme === "t1") document.body.className = '';
    else if (currentTheme === "t2") document.body.className = 'theme2';
    else if (currentTheme === "t3") document.body.className = 'theme3';
}
const currentMode = localStorage.getItem("mode");
if (currentMode) {
    if (currentMode === "quote") {
        mode = "quote";
        document.getElementById("mode").innerText = "Quote Mode";
    }
    else if (currentMode === "rand30") {
        mode = "rand30";
        document.getElementById("mode").innerText = "Random Words - 30";
    }
} else {
    mode = "quote"
    document.getElementById("mode").innerText = "Quote Mode";
}

//dissapear on scroll
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 75);
  });
  //slower fade on scroll
$(window).scroll(function(){
    $(".top2").css("opacity", (1 - $(window).scrollTop() / 200) + .5);
});
//fade in on scroll
$(window).scroll(function(){
    $(".fadein").css("opacity", $(window).scrollTop() / 300);
  });

//scroll cue stick to cursor
// var $cue = $('.scrollcue')
// function moveCircle(e) {
// 	TweenLite.to($cue, 0, {
//     css: {
//       left: e.pageX-23,
//       top: e.pageY-23
//     }
//   });
// }
// $(window).on('mousemove', moveCircle);



// SETTINGS AND MODE FUNCTIONS ----------

function openSettings() {
	document.getElementById("settings").style.width="20%";
	document.getElementById("settings-button").style.visibility = "hidden";
}
function closeSettings() {
	document.getElementById("settings").style.width="0";
	document.getElementById("settings-button").style.visibility = "visible";
}

const switchMode = () => {
    if (mode === "quote") {
        mode = "rand30";
        document.getElementById("mode").innerText = "Random Words - 30";
        localStorage.setItem("mode","rand30")
    } else if (mode === "rand30") {
        mode = "quote";
        document.getElementById("mode").innerText = "Quote Mode";
        localStorage.setItem("mode","quote")
    }
};

//THEME FUNCTIONS

function theme1() {
    document.body.className='';
    localStorage.setItem("theme","t1")
}
function theme2() {
    document.body.className='theme2';
    localStorage.setItem("theme","t2")
}
function theme3() {
    document.body.className='theme3';
    localStorage.setItem("theme","t3")
}

// TYPING TEST FUNCTIONS --------------------------------------

const startTest = () => {
    if (mode==="quote") {
        quoteTest();
    } else if (mode==="rand30") {
        randTest();
    }
};
const updateTimer = (time) => {
    document.getElementById("wpm").innerText=time;
    //use wpm-disp div for timer
}

const runTimer = () => {
    let time = 0;
    setInterval(function() {
        console.log(time++);
        updateTimer(time); 
    },1000)
    console.log("test over");
    return true;
}

const randTest = () => {
    document.getElementById("startButton1").style.display="none";
    document.getElementById("startButton2").style.display="none";
    t.innerText = ""
    document.getElementById('status').innerText = ``;
    document.getElementById('wpm').innerText = ``;
    let text = "";
    for (let i=0;i<30;i++) {
        text=text+(english1kwords[Math.round(Math.random()*(english1kwords.length-1))])+" ";
    }
    console.log(text)
    
    const chars = text.split('').map((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        t.appendChild(span);
        return span;
    });

    let errors = 0;
    let numberOfWords = 0;
    let timer = false;
    let cursorIndex = 0;
    let cursor = chars[0]
    cursor.classList.add("active");

    const keydown = ({key}) => {
        //runTimer();
        console.log(cursorIndex)
        console.log(chars.length)
        if (cursorIndex > chars.length-2) {
            cursor.classList.remove("active");
            cursor.classList.add("done");
            const wpm = numberOfWords;
            //display final results
            document.getElementById('status').innerText = `Text Completed`;
            document.getElementById('wpm').innerText = `WPM: ${wpm}\nErrors: ${errors}`;

            document.removeEventListener('keydown', keydown);
            document.getElementById("startButton2").style.display="block";
            document.getElementById("startButton2").innerText = "New Test"
            console.log("test complete");
            return;
        }
        if (key === cursor.innerText) {
            cursor.classList.remove("active");
            cursor.classList.remove("error");
            cursor.classList.add("done");
            cursor = chars[++cursorIndex];
            cursor.classList.add("active");
            if (key === " ") {
                numberOfWords++;
            }
        } else {
            if (key === "Shift") { //shift keys dont count as errors
                console.log("shift");
            } else {
                cursor.classList.remove("active");
                cursor.classList.add("error")
                errors++;
            }
        }
    };
    document.addEventListener("keydown", keydown);
}

const quoteTest = () => {
    document.getElementById("startButton1").style.display="none";
    
    document.getElementById("startButton2").style.display="none";
    t.innerText = ""
    document.getElementById('status').innerText = ``;
    document.getElementById('wpm').innerText = ``;
    let startTime = null;

    const textIndex = parseInt(Math.random()*quotes.length)
    const text = quotes[textIndex].text;

    const chars = text.split('').map((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        t.appendChild(span);
        return span;
    });

    let errors = 0;

    let cursorIndex = 0;
    let cursor = chars[0];
    cursor.classList.add("active");

    document.getElementById("quote-info").innerText = quotes[textIndex].source;

    const keydown = ({key}) => {
        if (!startTime) { startTime = new Date(); }
        if (cursorIndex > chars.length-2) {
            cursor.classList.remove("active");
            cursor.classList.add("done");
            const endTime = new Date();
            const time = (endTime - startTime)/1000;
            const numberOfWords = text.split(" ").length; //
            const wps = numberOfWords/time;
            const wpm = parseInt(wps*60);
            //display final results
            document.getElementById('status').innerText = `Text Completed`;
            document.getElementById('wpm').innerText = `WPM: ${wpm}\nErrors: ${errors}`;

            document.removeEventListener('keydown', keydown);
            document.getElementById("startButton2").style.display="block";
            document.getElementById("startButton2").innerText = "New Test"
            console.log("test complete");
            return;
        }
        if (key === cursor.innerText) {
            cursor.classList.remove("error");
            cursor.classList.remove("active");
            cursor.classList.add("done");
            cursor = chars[++cursorIndex];
            cursor.classList.add("active");
        } else {
            if (key === "Shift") {
                console.log("shift");
            } else {
                cursor.classList.remove("active");
                cursor.classList.add("error")
                errors++;
            }
        }
    };
    document.addEventListener("keydown", keydown);
};