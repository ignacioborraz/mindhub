require('dotenv').config()
require('./config/database')
const Event = require('./models/Event')

let events = [
    {
        name: "School's book fair",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook1.jpg?alt=media&token=a6349643-ceb2-4603-af56-06ce9dd040ea",
        date: "2022-06-01",
        description: "Bring your unused school book and take the one you need.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        assistance: 38429,
        price: 2,
    },{
        name: "Fantasy books",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook2.jpg?alt=media&token=5e236c43-40d8-4fd0-aed8-fe6cf59c3ef4",
        date: "2022-07-23",
        description: "The best literary works of a captivating genre full of mythical characters.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        assistance: 44029,
        price: 4,
    },{
        name: "Just for your kitchen",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook4.jpg?alt=media&token=d771f7c5-b63a-467b-8a06-4e2f52555dc0",
        date: "2022-09-14",
        description: "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        assistance: 29985,
        price: 2,
    },{
        name: "University textBooks",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook1.jpg?alt=media&token=a6349643-ceb2-4603-af56-06ce9dd040ea",
        date: "2022-11-09",
        description: "Bring your unused textbooks and take one that you need.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        price: 2,
    },{
        name: "BestSeller",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook5.jpg?alt=media&token=3b2fe8d4-8e08-4418-943d-f523a7145f41",
        date: "2023-01-06",
        description: "Get to know the best works of literature and take the one that catches you the most.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        price: 5,
    },{
        name: "Just Harry",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fbook6.jpg?alt=media&token=e21ab0b3-bcc0-4f20-b19f-64a0081e4051",
        date: "2023-02-26",
        description: "If you're a Potterhead you'll love this unique convention held in the city.",
        category: "Books",
        place: "Multi Space",
        capacity: 50000,
        price: 5,
    },{
        name: "Aladdin",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema1.jpg?alt=media&token=65cd3e27-b2d1-4d20-9816-4111137972e7",
        date: "2019-05-24",
        description: "We invite you watch Disney's classic character in new adventures.",
        category: "Cinema",
        place: "Showcase",
        capacity: 2500,
        assistance: 1875,
        price: 4
    },{
        name: "The new mutants",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema2.jpg?alt=media&token=39d167d8-d07a-401e-a9a7-ad658b6f9b59",
        date: "2020-08-28",
        description: "Five young mutants discover their abilities while being held in a secret facility against their will, struggling to escape their past sins and save themselves.",
        category: "Cinema",
        place: "Showcase",
        capacity: 1500,
        assistance: 759,
        price: 5
    },{
        name: "SpiderMan No Way Home",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema3.jpg?alt=media&token=abae4739-5c14-47c8-a747-b83777d13fd4",
        date: "2021-12-17",
        description: "The hero's life goes crazy after everyone knows their identity.",
        category: "Cinema",
        place: "Showcase",
        capacity: 1500,
        assistance: 1480,
        price: 5
    },{
        name: "The Batman",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema4.jpg?alt=media&token=f8353a3f-7ce9-46a9-99b3-69827a26a7d7",
        date: "2022-03-04",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Showcase",
        capacity: 3000,
        assistance: 2498,
        price: 5
    },{
        name: "Dr Strange 2",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema5.jpg?alt=media&token=e1773303-9fdf-40e9-946e-e8350440b441",
        date: "2022-05-05",
        description: "Dr. Stephen Strange opens a portal to the multiverse by using a forbidden spell. Now his team must face a threat that could destroy everything.",
        category: "Cinema",
        place: "Showcase",
        capacity: 3000,
        assistance: 2989,
        price: 6
    },{
        name: "Wakanda Forever",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema6.jpg?alt=media&token=536c3fb8-261c-4b55-a00e-c97132239e89",
        date: "2022-11-10",
        description: "Invading forces from around the world target Wakanda's vibranium",
        category: "Cinema",
        place: "Showcase",
        capacity: 2000,
        price: 6
    },{
        name: "Guardians of the Galaxy 3",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcinema7.jpg?alt=media&token=57e3e867-259c-4df9-bfe5-7a3ef72c4c85",
        date: "2023-05-05",
        description: "Peter Quill, still shaken by the loss of Gamora, must rally the Guardians of the Galaxy on a mission to defend the universe and protect one of their own.",
        category: "Cinema",
        place: "Showcase",
        capacity: 3000,
        price: 7
    },{
        name: "10K 4 life",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton7.jpg?alt=media&token=bf354ec0-e307-422e-80d6-bcc80f883c9d",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Football field",
        capacity: 200000,
        assistance: 198900,
        price: 2
    },{
        name: "15K NY",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton6.jpg?alt=media&token=c0fcb7f7-0a57-40e4-bc34-5990fb3f6bba",
        date: "2022-08-21",
        description: "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 1000000,
        assistance: 926981,
        price: 5
    },{
        name: "Buenos Aires 2022",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton5.jpg?alt=media&token=4b5e604a-22fc-4d13-b519-11ff3300d136",
        date: "2022-09-07",
        description: "Come join us in this marathon's 3ed edition.",
        category: "Race",
        place: "Buenos Aires",
        capacity: 500000,
        assistance: 492688,
        price: 3
    },{
        name: "New York 2022",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton4.jpg?alt=media&token=11b89ece-7927-44f0-957e-0ef57fb53cfd",
        date: "2022-11-12",
        description: "We'll be expecting you in the 6th edition across the Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 1000000,
        price: 5
    },{
        name: "For Life 2nd Edition",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton3.jpg?alt=media&token=c81b9dc9-3c93-4bd4-9ebb-078c789c1d8c",
        date: "2023-01-05",
        description: "If you enjoyed las year's edition you'll love this one.",
        category: "Race",
        place: "Cordoba",
        capacity: 300000,
        price: 2
    },{
        name: "Cancer Marathon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton2.jpg?alt=media&token=1c60a4db-36d9-46a2-be5d-9440c18a57bd",
        date: "2023-03-18",
        description: "We'll be raising funds for the cancer patients.",
        category: "Race",
        place: "Mar del Plata",
        capacity: 300000,
        price: 2
    },{
        name: "15K Buenos Aires",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmaraton1.jpg?alt=media&token=5aca46fc-e7b4-48d5-be67-95c42ec73c93",
        date: "2023-05-30",
        description: "Join us for a healthier life and a cleaner city.",
        category: "Race",
        place: "Buenos Aires",
        capacity: 500000,
        price: 3
    },{
        name: "Collectivities Party",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol1.jpg?alt=media&token=6ffc67e1-0d21-49da-b850-f1bf6884d65b",
        date: "2021-12-12",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Korean style",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol2.jpg?alt=media&token=3fee6747-5273-4b70-b3d6-88847354afbf",
        date: "2022-01-10",
        description: "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 48516,
        price: 10,
    },{
        name: "Japanese style",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol3.jpg?alt=media&token=7f1df5af-1f90-4016-a692-286f464f71cf",
        date: "2022-02-25",
        description: "Enjoy the best Japanese dishes, with international chefs and awesome events.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 49618,
        price: 10,
    },{
        name: "Straight from Middle East",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol4.jpg?alt=media&token=a9bacbc3-0e98-4870-b170-b15c1a9f35b6",
        date: "2022-04-08",
        description: "We gather Middle East's collectivities in a unique event to enjoy in family.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Take away",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol5.jpg?alt=media&token=b8524a35-c1c6-4f06-b0fc-577a048b9ed8",
        date: "2022-06-27",
        description: "Are you a fast food lover? We have the event for you, were we gather the best fast food chains.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Italian style",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol6.jpg?alt=media&token=c3267b6c-aa3e-4ac0-a439-aa93f2a3a099",
        date: "2022-08-12",
        description: "Enjoy the best dishes in this awesome culinary event.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Arabic holidays",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fcol7.jpg?alt=media&token=1139c7d7-9ea6-4a4b-b897-1c6eee2044fd",
        date: "2022-10-12",
        description: "An invitation to enjoy Middle East's flavours.",
        category: "Food",
        place: "Multi Space",
        capacity: 50000,
        assistance: 42756,
        price: 10,
    },{
        name: "Jurassic Park",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus1.jpg?alt=media&token=cd8f447a-5b7d-4aec-ab8e-4e7a07364e33",
        date: "2022-07-05",
        description: "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 10000,
        assistance: 6589,
        price: 3
    },{
        name: "Parisian Museum",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus2.jpg?alt=media&token=44fb39af-14db-4992-a76a-6e05e4665d0c",
        date: "2022-08-21",
        description: "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 5200,
        assistance: 3506,
        price: 10
    },{
        name: "Abstract Art",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus3.jpg?alt=media&token=6fc0a852-6a3f-405e-aa61-f8b39b7b8ce4",
        date: "2022-10-10",
        description: "An exhibition of selected artists explores the diverse approaches to abstraction developed since 1950.",
        category: "Museum",
        place: "Buenos Aires",
        capacity: 1000,
        assistance: 876,
        price: 2
    },{
        name: "Buenos Aires' Museum",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus4.jpg?alt=media&token=4f1b391b-a0a1-4eca-a611-ba4b9a5912fb",
        date: "2022-12-02",
        description: "Unique works by international and national artists are waiting for you in this year's exhibition.",
        category: "Museum",
        place: "Buenos Aires",
        capacity: 1000,
        price: 2
    },{
        name: "Acropolis",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus5.jpg?alt=media&token=0f209d91-fc39-4181-acf8-eec31a339a62",
        date: "2023-02-19",
        description: "One of the most important museums in the world, houses the findings of only one archaeological site, the Athenian Acropolis.",
        category: "Museum",
        place: "Athens",
        capacity: 1600,
        price: 10
    },{
        name: "British Museum",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fmus6.jpg?alt=media&token=b40d0801-1b9d-4852-94d3-a8277a2d4b85",
        date: "2023-05-02",
        description: "Culture and history combined in this unique space.",
        category: "Museum",
        place: "England",
        capacity: 1200,
        price: 8
    },{
        name: "Horror Night",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi1.jpg?alt=media&token=3ffb8756-f04d-4053-8f60-8d5f6105e054",
        date: "2022-07-09",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        assistance: 42006,
        price: 6
    },{
        name: "Comicon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi2.jpg?alt=media&token=93127ee0-9840-4429-ba34-d1fe6f706af8",
        date: "2022-08-12",
        description: "For comic lovers, all your favourite characters gathered in one place.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        assistance: 45781,
        price: 10
    },{
        name: "Spring Day",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi3.jpg?alt=media&token=888af589-59d2-4d91-8b9f-dc225c95ee5b",
        date: "2022-10-21",
        description: "Come celebrate spring dressed as your favourite character.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 10
    },{
        name: "Cultures",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi4.jpg?alt=media&token=3102c9c5-19ef-4a83-aaf9-079b6241accb",
        date: "2022-12-21",
        description: "A unique cultural event awaits you.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 2
    },{
        name: "For the little ones",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi5.jpg?alt=media&token=9e8693c9-a3d4-4c31-bafd-4f70950e96e2",
        date: "2023-02-23",
        description: "Bring your kid with his favourite costume.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 1
    },{
        name: "Epic party",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi6.jpg?alt=media&token=e8ef17d7-26b6-4fda-b9dd-57a53be79da8",
        date: "2023-05-23",
        description: "Come dressed as a pirate, firefighter, or a nurse, and we'll see who wins the big prize.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 2
    },{
        name: "Comicon",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi7.jpg?alt=media&token=b59309fc-fe06-4ae0-ac6f-1bd04142d3b2",
        date: "2023-08-12",
        description: "If you enjoyed last year's, you'll love this one's.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 10
    },{
        name: "Halloween",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Ffi8.jpeg?alt=media&token=42ea1cec-e63e-4f05-ac97-5b030834c19a",
        date: "2023-10-31",
        description: "Trick or treat? Come along with your scariest costume.",
        category: "Party",
        place: "Monumental Theater",
        capacity: 50000,
        price: 6
    },{
        name: "Metallica in concert",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer1.jpg?alt=media&token=7a859f41-b268-4d06-8c42-c5961f9f25e9",
        date: "2022-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        assistance: 497981,
        price: 20
    },{
        name: "Electronic Fest",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer2.jpg?alt=media&token=05776b38-2a54-4af7-a1c4-d7c38f5a3a79",
        date: "2021-01-22",
        description: "The best national and international DJs gathered in one place.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        assistance: 488005,
        price: 20
    },{
        name: "Popular Music",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer3.jpg?alt=media&token=52ece478-2937-4780-b5cd-d6a48306e25f",
        date: "2021-05-22",
        description: "The best popular hits gathered in a unique event for the hole family to enjoy.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        assistance: 464780,
        price: 20
    },{
        name: "Classics",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer4.jpg?alt=media&token=16515495-5388-4e68-81fe-a9ecf3d29bab",
        date: "2021-05-22",
        description: "Come enjoy the best classics.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        assistance: 421988,
        price: 20
    },{
        name: "Reggaeton 2022",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer6.jpg?alt=media&token=540b742f-602c-4907-8507-5de0d609fd9a",
        date: "2023-01-23",
        description: "Get ready to dance to the rhythm of the best bands.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        price: 20
    },{
        name: "Opera",
        image: "https://firebasestorage.googleapis.com/v0/b/amazing-events-364201.appspot.com/o/events%2Fconcer5.jpg?alt=media&token=196d8d90-9b97-4a6c-b41b-1731a8aa2f1f",
        date: "2023-05-02",
        description: "We gathered the best opera singers just for you.",
        category: "Concert",
        place: "Stadium",
        capacity: 500000,
        price: 20
    },
]

events.forEach(event => {
    event.assistance ?
        Event.create({
            name: event.name,
            image: event.image,
            date: event.date,
            description: event.description,
            category: event.category,
            place: event.place,
            capacity: event.capacity,
            assistance:  event.assistance,
            price: event.price,
            permition: false
        }) :
        Event.create({
            name: event.name,
            image: event.image,
            date: event.date,
            description: event.description,
            category: event.category,
            place: event.place,
            capacity: event.capacity,
            estimate:  event.capacity,
            price: event.price,
            permition: false
        })
})