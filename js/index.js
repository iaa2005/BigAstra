
const PROXY_CORS = 'https://api.allorigins.win/get?url='
let x2js = new X2JS();

$(document).ready(async function() {
    main()
    generate_news()
    worldwide()
})

// https://phys.org/rss-feed/space-news/


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
    let telescope_button = document.getElementById("telescope_button")
    let marked_button = document.getElementById("marked_button")
    let account_button = document.getElementById("account_button")

    let exclusive_card = document.getElementById("exclusive")
    let news_card = document.getElementById("news")
    let worldwide_card = document.getElementById("worldwide")
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

        exclusive_button.classList.add("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")

    }
    news_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "block"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.add("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
    }
    worldwide_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "block"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.add("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
    }
    telescope_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "block"
        marked_card.style.display = "none"
        account_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.add("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.remove("choosed-img")
    }
    marked_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "block"
        account_card.style.display = "none"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.add("choosed-img")
        account_button.classList.remove("choosed-img")
    }
    account_button.onclick = function () {
        exclusive_card.style.display = "none"
        news_card.style.display = "none"
        worldwide_card.style.display = "none"
        telescope_card.style.display = "none"
        marked_card.style.display = "none"
        account_card.style.display = "block"

        exclusive_button.classList.remove("choosed-img")
        news_button.classList.remove("choosed-img")
        worldwide_button.classList.remove("choosed-img")
        telescope_button.classList.remove("choosed-img")
        marked_button.classList.remove("choosed-img")
        account_button.classList.add("choosed-img")
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


    // https://news.google.com/rss/search?q=Космос&hl=ru-RU&gl=RU&ceid=RU:ru
    // https%3A//news.google.com/rss/search%3Fq%3D%u041A%u043E%u0441%u043C%u043E%u0441%26hl%3Dru-RU%26gl%3DRU%26ceid%3DRU%3Aru
}