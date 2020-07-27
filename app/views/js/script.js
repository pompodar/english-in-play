function resume() {

    var aa = $("ul.secondPlay li.active");

    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active");

    beginning = 0;

    question;

    answer;

    cancel = 0;

    pic_arr = ["./img/dog.png", "./img/cat.png", "./img/lion.png"];

    pic_col = ["red", "aqua", "orange"];

    pic_arr1 = ["./img/dog.png", "./img/cat.png", "./img/lion.png"];

    pic_col1 = ["red", "aqua", "orange"];

    div1.style.top = "0vh";
    div2.style.top = "0vh";
    div3.style.top = "0vh";

    let rand = Math.floor(Math.random() * 3);

    let rand1 = Math.floor(Math.random() * 3);


    info1.src = pic_arr[rand];
    div4.style.background = pic_col[rand];

    pic_arr.splice(rand, 1);
    pic_col.splice(rand, 1);


    pic1.src = pic_arr1[rand1];
    div1.style.background = pic_col1[rand1];

    pic_arr1.splice(rand1, 1);
    pic_col1.splice(rand1, 1);


    rand = Math.floor(Math.random() * 2);

    rand1 = Math.floor(Math.random() * 2);


    pic2.src = pic_arr1[rand1];
    div2.style.background = pic_col1[rand1];


    pic_arr1.splice(rand1, 1);
    pic_col1.splice(rand1, 1);

    info2.src = pic_arr[rand];
    div5.style.background = pic_col[rand];


    pic_arr.splice(rand, 1);
    pic_col.splice(rand, 1);


    info3.src = pic_arr[0];
    div6.style.background = pic_col[0];


    pic3.src = pic_arr1[0];
    div3.style.background = pic_col1[0];

    document.getElementById("start").style.display = "block";

    document.getElementById("result").style.display = "none";

}

    let beginning = 0;

    let question;

    let answer;

    let cancel = 0;

    function play(id) {

        if (beginning == 1) {
            var child = document.getElementById(id).childNodes;
            let cut_path = child[0].src.substring(68, (child[0].src).length - 4);
            let audio = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/' + cut_path + '--_gb_1.mp3');
            audio.play();
        }
}

let end_count;

let number_of_passed_questions = 0;

function check(id) {

    clearInterval(end_count);


        if (beginning == 1) {
            var child = document.getElementById(id).childNodes;

            let cut_path = child[0].src.substring(31, (child[0].src).length - 4);

            answer = cut_path;

            let audio = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/' + cut_path + '--_gb_1.mp3');
            audio.play();

            stop_clock();
            clock.pause();


            document.getElementById("result").style.display = "block";
            document.getElementById("result").style.width = "10vw";
            document.getElementById("result").style.height = "10vw";

            if (question == answer) {
                document.getElementById(id).classList.add("animation_on_result");
                let joy = new Audio('./audio/Ovation.mp3');
                joy.play();

                // Progress

                number_of_passed_questions = number_of_passed_questions + 20;

                jQuery(document).ready(function ($) {
                    
                    $('.progress-bar').css('width', number_of_passed_questions + "%");

                    // create an observer instance
                    var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            if (mutation.type == 'attributes' && mutation.attributeName == 'style') {
                                var el = mutation.target;
                                var width = el.style.width; // Can't use jQuery here, as we need the value back in percent
                                var $parentEl = $(el).parent('.progress');
                                $parentEl.attr('data-width', width); // Why doesn't this work?? $parentEl.data('width',width)
                            }
                        });
                    });

                    // configuration of the observer
                    var config = {
                        attributes: true,
                        attributeFilter: ['style'],
                        childList: false,
                        characterData: false
                    };

                    $('.progress-bar').each(function (e) {
                        // pass in the target node, as well as the observer options
                        observer.observe(this, config);
                    })

                    $('.test').eq(4).trigger('click');

                });


            } else {
                document.getElementById(id).classList.add("animation_on_negative_result");
                let failure = new Audio('./audio/Sad_Trombone-Joe_Lamb.mp3');
                failure.play();
            }

            cancel = 1;
        }
    }

    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");

    let info1 = document.getElementById("info1");
    let info2 = document.getElementById("info2");
    let info3 = document.getElementById("info3");

    pic_arr = ["./img/dog.png", "./img/cat.png", "./img/lion.png"];

    pic_col = ["red", "aqua", "orange"];

    pic_arr1 = ["./img/dog.png", "./img/cat.png", "./img/lion.png"];

    pic_col1 = ["red", "aqua", "orange"];



    let rand = Math.floor(Math.random() * 3);

    let rand1 = Math.floor(Math.random() * 3);


    info1.src = pic_arr[rand];
    div4.style.background = pic_col[rand];

    pic_arr.splice(rand, 1);
    pic_col.splice(rand, 1);


    pic1.src = pic_arr1[rand1];
    div1.style.background = pic_col1[rand1];

    pic_arr1.splice(rand1, 1);
    pic_col1.splice(rand1, 1);


    rand = Math.floor(Math.random() * 2);

    rand1 = Math.floor(Math.random() * 2);


    pic2.src = pic_arr1[rand1];
    div2.style.background = pic_col1[rand1];


    pic_arr1.splice(rand1, 1);
    pic_col1.splice(rand1, 1);

    info2.src = pic_arr[rand];
    div5.style.background = pic_col[rand];


    pic_arr.splice(rand, 1);
    pic_col.splice(rand, 1);


    info3.src = pic_arr[0];
    div6.style.background = pic_col[0];


    pic3.src = pic_arr1[0];
    div3.style.background = pic_col1[0];

let clock;


async function start() {

    clock = new Audio('./audio/clock.mp3');
    clock.play();
    
    let end = 0;

    end_count = setInterval(function () {
        end++;
        if (end == 9) {
            stop_clock();
            clock.pause();

            let failure = new Audio('../audio/Sad_Trombone-Joe_Lamb.mp3');
            failure.play();


            document.getElementById("result").style.display = "block";
            document.getElementById("result").style.width = "10vw";
            document.getElementById("result").style.height = "10vw";

            cancel = 1;
        }

    }, 1000);

        beginning = 1;

        let solutions_arr = ["cat", "dog", "lion"];
        let rand = Math.floor(Math.random() * 3);
        let solution = solutions_arr[rand];

        question = solution;

        let audio = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/' + solution + '--_gb_1.mp3');
        audio.play();

        start_clock();


        document.getElementById("start").style.display = "none";
        for (let i = 8; i < 60; i += 0.1) {

            if (cancel == 0) {
                await new Promise(resolve => setTimeout(resolve, 50))
                div1.style.top = i + "vh";
                div2.style.top = i + "vh";
                div3.style.top = i + "vh";
            } else {
                div1.style.top = div1.style.top;
                div2.style.top = div2.style.top;
                div3.style.top = div3.style.top;
            }
        }
        
    };

// Clock

let minutes;
let seconds;

function start_clock() {


    seconds = setInterval(function () {
        secondPlay()
    }, 1000);
}

function stop_clock() {
    clearInterval(minutes);
    clearInterval(seconds);
}



function secondPlay() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlay li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlay li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}