// https://phys.org/rss-feed/space-news/
// https://news.google.com/rss/search?q=Космос&hl=ru-RU&gl=RU&ceid=RU:ru
// https%3A//news.google.com/rss/search%3Fq%3D%u041A%u043E%u0441%u043C%u043E%u0441%26hl%3Dru-RU%26gl%3DRU%26ceid%3DRU%3Aru


// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOk-HxR6GUGQzlmmZA1fxED32XqTiarQs",
    authDomain: "bigastra-22c18.firebaseapp.com",
    projectId: "bigastra-22c18",
    storageBucket: "bigastra-22c18.appspot.com",
    messagingSenderId: "873504731038",
    appId: "1:873504731038:web:73a3ce5a5639904717308f",
    measurementId: "G-ZLHPY6BXYN"
};

const PROXY_CORS = 'https://api.allorigins.win/get?url='
let x2js = new X2JS();

$(document).ready(async function() {
    main()
    turn_firebase()
    exlusive()
    generate_news()
    worldwide()
    youtube()
})

function turn_firebase() {
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const analytics = firebase.analytics();

}

async function generate_news() {
    let html_data = null
    let html_data_2 = null
    await $.get(PROXY_CORS + "https://nplus1.ru/rubric/astronomy", function (data, error) {
        html_data = data.contents
    })
    await $.get(PROXY_CORS + "https://nplus1.ru/rubric/physics", function (data, error) {
        html_data_2 = data.contents
    })
    $.get(PROXY_CORS + "https://nplus1.ru/rss", function (data, error) {
        let json_data = x2js.xml_str2json(data.contents)
        let json_cards = json_data.rss.channel.item
        for (let data of json_cards) {
            if (html_data.includes(data.title) || html_data_2.includes(data.title)) {
                let html_card = `
                <form action="${data.link}">
                    <div class="news-card">
                        <div>
                            <img class="news-card-image" src="${data.content._url}" alt="${data.content.__prefix}">
                            <h2>${data.title}</h2>
                            <h3>${data.description.__cdata}</h3>
                        </div>
                        <div>
                            <a href="${data.link}" class="read-article-button">Читать статью</a>
                        </div>
                    </div>
                </form>
                `
                $(".news-in-div").append(html_card)
            }

        }

    })
}

function main() {
    let exclusive_button = document.getElementById("exclusive_button")
    let news_button = document.getElementById("news_button")
    let worldwide_button = document.getElementById("worldwide_button")
    let youtube_button = document.getElementById("youtube_button")
    let telescope_button = document.getElementById("telescope_button")
    let marked_button = document.getElementById("marked_button")
    let account_button = document.getElementById("account_button")

    let exclusive_card = document.getElementById("exclusive")
    let news_card = document.getElementById("news")
    let worldwide_card = document.getElementById("worldwide")
    let youtube_card = document.getElementById("youtube")
    let telescope_card = document.getElementById("telescope")
    let marked_card = document.getElementById("marked")
    let account_card = document.getElementById("account")

    // make default page exclusive:
    exclusive_card.style.display = "block"
    exclusive_button.classList.add("choosed-img")


    exclusive_button.onclick = function () {
        exclusive_card.style.display = "block"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"
        youtube_card.style.display = "none"

        exclusive_button.classList.add("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.remove("choosed-img")

    }
    news_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "block"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"
        youtube_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.add("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.remove("choosed-img")
    }
    worldwide_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "block"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"
        youtube_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.add("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.remove("choosed-img")
    }
    telescope_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "block"
        marked_card.style.display = "none"
        account_card.style.display = "none"
        youtube_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.add("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.remove("choosed-img")
    }
    marked_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "block"
        account_card.style.display = "none"
        youtube_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.add("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.remove("choosed-img")
    }
    account_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "block"
        youtube_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.add("choosed-img")
        youtube_button.classList.remove("choosed-img")
    }
    youtube_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"
        youtube_card.style.display = "block"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
        youtube_button.classList.add("choosed-img")
    }
}

function worldwide() {
    $.get(PROXY_CORS + "https://news.google.com/rss/search?q=Space", function (data, error) {
        let json_data = x2js.xml_str2json(data.contents)
        let json_cards = json_data.rss.channel.item
        for (data of json_cards) {
            // console.log(data.title)
            // console.log(data.link)
            // console.log(data)
            // let hostname = new URL(data.link)
            let html_card = `
                <form action="${data.link}">
                    <div class="news-card">
                        <div>
                            <h2 style="font-size: 18px;">${data.title}</h2>
                            <div style="display: inline-flex; align-items: center; gap: 10px">
                                <img style="height: 16px; width: 16px;"
                                src="https://s2.googleusercontent.com/s2/favicons?domain=${data.link}">
                                <h3>${data.source.__text}</h3>
                            </div>
                        </div>
                        <div>
                            <a href="${data.link}" class="read-article-button">Читать статью</a>
                        </div>
                    </div>
                </form>
                `
            $(".worldwide-news-in-div").append(html_card)
        }
    })
}

function exlusive() {
    $.get("./docs/exclusive.json", function (data, error) {
        let json_cards = data.files
        for (data of json_cards) {
            let html_card = `
                <form action="${data.link}">
                    <div class="news-card">
                        <div>
                            <h2 style="font-size: 18px; margin-top: 0;">${data.title}</h2>
                        </div>
                        <div>
                            <a href="${data.link}" class="read-article-button">Читать статью</a>
                        </div>
                    </div>
                </form>
                `
            $(".exclusive-in-div").append(html_card)
        }
    })
}

function youtube() {
    let channels = [
        "UCHnyfMqiRRG1u-2MsSQLbXA",
        "UCY6zVRa3Km52bsBmpyQnk6A",
        "UCTpmmkp1E4nmZqWPS-dl5bg",
        "UCQdPrDypfQeY5euAPbdc11g",
        "UCsXVk37bltHxD1rDPwtNM8Q",
        "UC5_Y-BKzq1uW_2rexWkUzlA",
        "UC1xNraQytCPsaoO5N7_YABw",
        "UConJDkGk921yT9hISzFqpzw",
        "UCzWQYUVCpZqtN93H8RR44Qw",
        "UChfeK9NHpgHrO-4384Q9NjQ",
        "UCLXo7UDZvByw2ixzpQCufnA"
    ]

    for (let channel_id of channels) {
        $.get(PROXY_CORS + "https://www.youtube.com/feeds/videos.xml?channel_id=" + channel_id, function (data, error) {
            let json_data = x2js.xml_str2json(data.contents).feed.entry
            console.log(json_data)
            for (let data of json_data) {
                let height = parseInt(data.group.thumbnail._height)/parseInt(data.group.thumbnail._width)*100/3*2
                let html_card = `
                <form action="${data.link._href}">
                    <div class="news-card">
                        <div>
                            <img style="width: 100%; height: ${height}%; display: block; object-fit: cover;"
                                src="${data.group.thumbnail._url}"
                                alt="Youtube video image">
                            <!-- <div style="width: -webkit-fill-available;
                            height: calc(${data.group.thumbnail._height}/${data.group.thumbnail._width}*100%);
                            background-image: url('${data.group.thumbnail._url}');
                            background-position: center center;
                            background-size: cover;"></div> -->
                            <h2>${data.title}</h2>
                            <h3>${data.author.name}</h3>
                        </div>
                        <div>
                            <a href="${data.link._href}" class="read-article-button">Смотреть видео</a>
                        </div>
                    </div>
                </form>
                `
                $(".youtube-in-div").append(html_card)
            }
        })
    }
}