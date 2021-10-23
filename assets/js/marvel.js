let avengers = `[{
    "name": "Наташа Романоф",
    "pseudonym": "Чёрная Вдова",
    "what_does": "Супер шпионка",
    "more_details": "Русский агент, шпионка, мастер боевых искусств и снайпер, позже стала агентом Щ.И.Т., оснащённая арсеналом высокотехнологичного оружия. Одна из лучших шпионов и профессиональных убийц в мире, двойной агент элитной категории. Во время вторжения читаури присоединилась к Мстителям и помогла защитить Нью-Йорк.",
    "picture": "./assets/images/blackWidow.jpeg"
}, {
    "name": "Стивен Роджерс",
    "pseudonym": "Капитан Америка",
    "what_does": "Супер солдат",
    "more_details": "Первый в мире супергерой. В результате сверхсекретной программы, Роджерсу была введена Сыворотка Супер-солдата. Затем Стивен подвергся облучению вита-лучами, различных волн, предназначенных для ускорения и стабилизации эффекта сыворотки в его крови. В результате, тело Роджерса было улучшено до пика человеческих возможностей",
    "picture": "./assets/images/captanAmerika.jpeg"
}, {
    "name": "Кэрол Сьюзан Джейн Денверс",
    "pseudonym": "Капитен Марвел",
    "what_does": "Возможно, самый могущественный Мститель",
    "more_details": "Обладает сверхчеловеческой силой и выносливостью, она умеет летать со скоростью, равной половине скорости звука, а также стрелять из рук энергетическими зарядами",
    "picture": "./assets/images/captanMarvel.jpeg"
}, {
    "name": "Клинт Бартон",
    "pseudonym": "Соколиный глаз",
    "what_does": "Спецагент Щ.И.Т.а",
    "more_details": "Клинт Бартон не обладает сверхъественными способностями. Он -  великолепный стрелок. Он использует разные виды луков, арбалеты, стрелы с различными эффектами и характеристиками. Он способен вести прицельный огонь по мишени сразу несколькими стрелами за считанные секунды, поражая даже малоразмерные цели на дальних расстояниях. ",
    "picture": "./assets/images/hawkeye.png"
}, {
    "name": "Энтони Эдвард «Тони» Старк ",
    "pseudonym": "Железный человек",
    "what_does": "Эксцентричный гений, миллиардер,плейбой и филантроп. Изобретатель и механик.",
    "more_details": "Консультант миротворческого разведывательного агентства - Щ.И.Т. Позже Старк присоединяется к Мстителям и помогает победить читаури во время Битвы за Нью-Йорк. Один из основателей команды супергероев Мстителей",
    "picture": "./assets/images/ironMan.jpeg"
}, {
    "name": "Тор, Одина сын",
    "pseudonym": "Тор",
    "what_does": "Бог грома и молний",
    "more_details": "Тор присоединился к команде Мстителей на Хеликэрриере. Они попытались понять, каковы намерения Локи. Участник битвы против читаури, помог защитить Нью-Йорк. После этого стал полноправным членом команды Мстителей, иногда покидал землю для наведения порядка в родном мире - Асгарде",
    "picture": "./assets/images/thor.jpeg"
}]`;


document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(avengers);
    console.log(heroes);

    let heroesContent = "";
    let i = 0;
    let grade = "";

    for (let hero of heroes) {
        grade = localStorage.getItem(hero.name);
        console.log("ls" + i + " : " + grade);

        if (grade == null) {

            heroesContent += `<div class='hero'>
            <h2 class ='text' id="heroName${i}"> ${hero.name} </h2>
            <div class='title'> Псевдоним: <div class ='subtitle'> ${hero.pseudonym} </div></div>
            <div class='title'> Род занятий: <div div class='subtitle'> ${hero.what_does} </div></div>
            <div class='title'> Подробности: <div class='subtitle'> ${hero.more_details} </div></div>
            <div class = "picture"> <img class ='pic' src = "${hero.picture}"> </div>
            <div> Оценка персонажа <input type="text" id="gradeInput${i}"></div>
            <button class="btn" onClick="save(${i})"> Save </button>
            </div>`;
        } else {
            heroesContent += `<div class='hero'>
            <h2 class ='text' id="heroName${i}"> ${hero.name} </h2>
            <div class='title'> Псевдоним: <div class ='subtitle'> ${hero.pseudonym} </div></div>
            <div class='title'> Род занятий: <div div class='subtitle'> ${hero.what_does} </div></div>
            <div class='title'> Подробности: <div class='subtitle'> ${hero.more_details} </div></div>
            <div class = "picture"> <img class ='pic' src = "${hero.picture}"> </div>
            <div> Оценка персонажа <input type="text" id="gradeInput${i}" value ="${grade}"></div>
            <button class="btn" onClick="save(${i})"> Save </button>
            </div>`;
            console.log("adada");
        }

        i++;


    }

    document.getElementById("marvel").innerHTML = heroesContent;
});

function save(i) {

    let strGr = "gradeInput" + i;
    let strN = "heroName" + i;
    let grade = document.getElementById(strGr).value;
    let name = document.getElementById(strN).textContent;

    localStorage.setItem(name, grade);
    alert("save");
}