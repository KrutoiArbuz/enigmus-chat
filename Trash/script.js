window.addEventListener("load", () => {
    sendMessage("","");
});


function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function fillMessages(jsonMessages) {
    let a = document.querySelector(".messages");
    a.innerHTML = "";
    let b="";
    for (let i in jsonMessages) {

        if (jsonMessages[i][1] == 1) {
            b =
                '<div class="messages__message-content message-content"><div class="message-content__message-text message-text"><div class="message-text__text">' +
                jsonMessages[i][0] +
                "</div></div></div>";
        } else {
            b =
                '<div class="messages__message-content message-content"><div class="message-content__image"></div><div class="message-content__message-text message-text"><div class="message-text__text">' +
                jsonMessages[i][0] +
                "</div></div></div>";
        }

        a.innerHTML += b;
    }
}


async function getId() {
    const e = await fetch("/id", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    if (!0 === e.ok) {
        const t = await e.json();
        console.log(t),
            (document.cookie =
                encodeURIComponent("id") + "=" + encodeURIComponent(t));
    } else console.log("Mistake :(");
}
async function sendMessage(e, t) {
    const o = await fetch("/ms", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: e, settings: t, id: getCookie("id") }),
    });
    if (!0 === o.ok) {
        const e = await o.json();
        fillMessages(e);
    } else {
        console.log("You won't hack me :)");
    }
}
(alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    (rotors = ["I", "II", "III", "IV", "V"]),
    (rotork = 5),
    $(document).ready(function () {

        function e() {
            return $("body").toggleClass("modal"), !1;
        }
        null != getCookie("id")
            ? ((document.querySelector(".open-block").style.display = "none"),
              $("body").toggleClass("modal"))
            : (document.querySelector(".open-block").showModal(),
              $(".button-join").click(function (e) {
                  document.querySelector(".open-block").close(),
                      document
                          .querySelector(".tutorial-block-wrap")
                          .showModal();
              })),
            $(".tutorial-button").click(function (e) {
                $("body").toggleClass("modal"),
                    document.querySelector(".tutorial-block-wrap").showModal();
            }),
            $(".tutorial-block__apply-button").click(function (t) {
                document.querySelector(".tutorial-block-wrap").close(),
                    setTimeout(e, 60);
            });
        let t = 0,
            o = 0,
            n = 0;
        $(".rotor-change__button-left").click(function (e) {
            let l = $(this).parent();
            switch (l.attr("id")) {
                case "Rotor1":
                    t--,
                        (t -= rotork * Math.floor(t / rotork)),
                        $(".rotor-change__selected", l).text(rotors[t]);
                    break;
                case "Rotor2":
                    o--,
                        (o -= rotork * Math.floor(o / rotork)),
                        $(".rotor-change__selected", l).text(rotors[o]);
                    break;
                case "Rotor3":
                    n--,
                        (n -= rotork * Math.floor(n / rotork)),
                        $(".rotor-change__selected", l).text(rotors[n]);
                    break;
                default:
                    console.log("You won't hack me :)");
            }
        }),
            $(".rotor-change__button-right").click(function (e) {
                let l = $(this).parent();
                switch (l.attr("id")) {
                    case "Rotor1":
                        t++,
                            (t -= rotork * Math.floor(t / rotork)),
                            $(".rotor-change__selected", l).text(rotors[t]);
                        break;
                    case "Rotor2":
                        o++,
                            (o -= rotork * Math.floor(o / rotork)),
                            $(".rotor-change__selected", l).text(rotors[o]);
                        break;
                    case "Rotor3":
                        n++,
                            (n -= rotork * Math.floor(n / rotork)),
                            $(".rotor-change__selected", l).text(rotors[n]);
                        break;
                    default:
                        console.log("You won't hack me :)");
                }
            });
        let l = 0,
            c = 0,
            s = 0;
        $(".position-change__button-down").click(function (e) {
            let t = $(this).parent();
            switch (t.attr("id")) {
                case "Position1":
                    l++,
                        (l -= 26 * Math.floor(l / 26)),
                        $(".position-change__selected", t).text(alphabet[l]);
                    break;
                case "Position2":
                    c++,
                        (c -= 26 * Math.floor(c / 26)),
                        $(".position-change__selected", t).text(alphabet[c]);
                    break;
                case "Position3":
                    s++,
                        (s -= 26 * Math.floor(s / 26)),
                        $(".position-change__selected", t).text(alphabet[s]);
                    break;
                default:
                    console.log("You won't hack me :)");
            }
        }),
            $(".position-change__button-up").click(function (e) {
                let t = $(this).parent();
                switch (t.attr("id")) {
                    case "Position1":
                        l--,
                            (l -= 26 * Math.floor(l / 26)),
                            $(".position-change__selected", t).text(
                                alphabet[l]
                            );
                        break;
                    case "Position2":
                        c--,
                            (c -= 26 * Math.floor(c / 26)),
                            $(".position-change__selected", t).text(
                                alphabet[c]
                            );
                        break;
                    case "Position3":
                        s--,
                            (s -= 26 * Math.floor(s / 26)),
                            $(".position-change__selected", t).text(
                                alphabet[s]
                            );
                        break;
                    default:
                        console.log("You won't hack me :)");
                }
            });
        let a = 0,
            i = $("#UKWB"),
            r = $("#UKWC");
        $(".reflector-change").click(function (e) {
            $(this).attr("id") != i.attr("id") ||
                $(this).hasClass("reflector-change__selected") ||
                ($(this).toggleClass("reflector-change__selected"),
                r.toggleClass("reflector-change__selected"),
                (a = 0)),
                $(this).attr("id") != r.attr("id") ||
                    $(this).hasClass("reflector-change__selected") ||
                    ($(this).toggleClass("reflector-change__selected"),
                    i.toggleClass("reflector-change__selected"),
                    (a = 1));
        }),
            $(".left-block__apply-button").click(function (e) {
                $("body").width() <= 1200
                    ? ($(".left-block").css("display", "none"),
                      $(".right-block").css("display", "flex"))
                    : ($(".left-block").css("display", "flex"),
                      $(".right-block").css("display", "flex"));
            }),
            $(".right-block__return-button").click(function (e) {
                $(".left-block").css("display", "flex"),
                    $(".right-block").css("display", "none");
            }),
            $(window).on("resize", function () {
                $(window).width() > 1200 &&
                    ($(".left-block").css("display", "flex"),
                    $(".right-block").css("display", "flex")),
                    $(window).width() <= 1200 &&
                        ($(".left-block").css("display", "flex"),
                        $(".right-block").css("display", "none"));
            });
    }),
    null == getCookie("id") && getId(),
    document
        .getElementById("send-message")
        .addEventListener("click", async () => {
            (message = document.getElementById("MesInput").value),
                (settings =
                    document.getElementById("Rotor1_label").textContent +
                    "~" +
                    document.getElementById("Rotor2_label").textContent +
                    "~" +
                    document.getElementById("Rotor3_label").textContent +
                    "~"),
                (settings +=
                    document.getElementById("Position1_label").textContent +
                    "~" +
                    document.getElementById("Position2_label").textContent +
                    "~" +
                    document.getElementById("Position3_label").textContent +
                    "~"),
                (settings += document
                    .querySelector(".reflector-change__selected")
                    .getAttribute("id")),
                sendMessage(message, settings),
                (document.getElementById("MesInput").value = "");
        });