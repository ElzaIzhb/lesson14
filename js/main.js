    //находим коробку под карточки (под данные шаблона)
    let main = document.querySelector('main');

    //получем данные шаблона каталога
    let templateCatalog = document.getElementById('tmpl-catalog').innerHTML;
    
    //получем данные шаблона карточки
    let templateCard = document.getElementById('tmpl-card').innerHTML;

    //вызываем функцию при закрузке страницы
    renderCatalog();
    
    //функция отрисовки каталога
    function renderCatalog() {
        //очищаем страницу
        clearPage();

        let json = sendRequestGET("https://kitsu.io/api/edge/anime/");

        //раскодируем данные
        let data = JSON.parse(json);    

        //рисуем данные на экран
        for (let i = 0; i < data['data'].length; i++) {
            //выводим данные шаблона
            main.innerHTML += templateCatalog.replace('${title}', data['data'][i]["attributes"]["titles"]["en_jp"])
                                             .replace('${id}', data['data'][i]['id'])
                                             .replace('${photo}', data['data'][i]["attributes"]["posterImage"]["small"]);
        
        document.querySelector('main').classList.add('flex-box');
        document.querySelector('main').classList.remove('main-card');
        document.querySelector('main').classList.remove('center-main');
        }
    }

    //функция отрисовки карточки
    function renderCard(id) {
        //очищаем страницу
        clearPage();

        let json = sendRequestGET("https://kitsu.io/api/edge/anime/" + id);

        //раскодируем данные
        let data = JSON.parse(json);

        main.innerHTML += templateCard.replace('${title}', data['data']["attributes"]["titles"]["en_jp"])
                                      .replace('${photo}', data['data']["attributes"]["posterImage"]["small"])
                                      .replace('${Текст}', data['data']["attributes"]["description"])
                                      .replace('${Rating}', data['data']["attributes"]["averageRating"])
                                      .replace('${episodeCount}', data['data']["attributes"]["episodeCount"])
                                      .replace('${episodeLength}', data['data']["attributes"]["episodeLength"])
                                      .replace('${ageRatingGuide}', data['data']["attributes"]["ageRatingGuide"])
                                      .replace('${status}', data['data']["attributes"]["status"]);
        
        //удалим класс, чтобы было в одну строчку
        document.querySelector('main').classList.remove('flex-box');
        document.querySelector('main').classList.add('main-card');
        document.querySelector('main').classList.remove('center-main');
    }

    //функция очистки страницы
    function clearPage() {
        main.innerHTML = '';
    }

    //функция для отправки запросов
    function sendRequestGET(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        //отдает данные(результат)
        return xhr.responseText;
    }

    //создаем массив "о сайте"
    let arr1 = {
        "datawe":[
            {"id":"1",
                "attributes1":{
                    "aboutus": "Этот сайт показывает данные из открытого API и наши навыки их преобразования",
                    "spons": "Nordic IT School (https://inordic.ru)",
                    "destiny": "Эта страница предназначена для тренировки в создании SPA приложений (веб-приложения или веб-сайты, которые состоят из одной HTML-страницы) и навыков JS"
             }
            }
        ]
    }

    //создаем функцию для выведения данных о сайте
    function renderSait() {
        //очищаем страницу
        clearPage();

        document.querySelector('main').innerHTML += document.getElementById('aboutus').innerHTML.replace('${Us}', arr1['datawe'][0]["attributes1"]["aboutus"])
                                                                                                .replace('${Spons}', arr1['datawe'][0]["attributes1"]["spons"])
                                                                                                .replace('${Desstiny}', arr1['datawe'][0]["attributes1"]["destiny"]);

        //удалим класс, чтобы было в одну строчку
        document.querySelector('main').classList.remove('flex-box');
        document.querySelector('main').classList.add('main-card');
        document.querySelector('main').classList.add('center-main');
    }

    //создаем массив "контакты"
    let arr2 = {
        "datacon":[
            {"id":"1",
                "attributes2":{
                    "tel": "899999999",
                    "email": "aez7@ya.ru",
                    "telegram": "@Elza_Izh"
            }
            }
        ]
    }

    //создаем функцию для выведения данных контакты
    function renderCont() {
        //очищаем страницу
        clearPage();

        document.querySelector('main').innerHTML += document.getElementById('contacts').innerHTML.replace('${Tel}', arr2['datacon'][0]["attributes2"]["tel"])
                                                                                                 .replace('${Emaill}', arr2['datacon'][0]["attributes2"]["email"])
                                                                                                 .replace('${Teleg}', arr2['datacon'][0]["attributes2"]["telegram"]);
        
        //удалим класс, чтобы было в одну строчку
        document.querySelector('main').classList.remove('flex-box');
        document.querySelector('main').classList.add('main-card');
        document.querySelector('main').classList.add('center-main');
    }