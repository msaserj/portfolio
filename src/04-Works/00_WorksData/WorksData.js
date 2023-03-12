const works = {
    work1: {
        workImg: "https://msaserj.ru/portfolio/SocialNetwork/socialNetwork-tumb.jpg",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/SocialNetwork/soc-main.png",
            header: "Social Network",
            description: "Social network project. It works with a real backend server.",
            gitHubLink: "https://github.com/msaserj/inc-socialnetwork",
            demoLink: "https://msaserj.github.io/inc-socialnetwork",
            storyBookLink: "https://socialnetwork-storybook.vercel.app"
        },
        techDescription: {
            technologies: [
                "React",
                "Redux",
                "Redux-Thunk",
                "Formik",
                "Thunk",
                "Axios",
                "Web-Sockets"
            ],
            design: [
                "Registration flow. Forms of registration, authorization, password recovery.",
                "Viewing and searching for users, some sorting points, as well as subscribing to users.",
                "Viewing the user's profile, a form for editing your profile, the ability to change the profile photo.",
                "Implemented a small general chat for all users on web sockets.",
                "As for the layout, I used grid-layout and flex for better responsibility, and preproc SCSS.",
                "Video and audio players implemented.",
            ],
        },
        resume: "Social network project. The interface was developed on the React library using the Formik library" +
            " for working with forms, Redux was used as a state manager and Axios was used to interact with RestAPI. " +
            "In the social network, you can interact with users, subscribe to them, communicate using a dialogue " +
            "with private messages or with all users in a common chat on websockets. Newly added audio player " +
            "and small library of audio tracks and streaming radio.",
        gallery: [
            "https://msaserj.ru/portfolio/SocialNetwork/soc-profile.png",
            "https://msaserj.ru/portfolio/SocialNetwork/soc-users.png",
            "https://msaserj.ru/portfolio/SocialNetwork/soc-chat.png",
            "https://msaserj.ru/portfolio/SocialNetwork/soc-commonChat.png",
            "https://msaserj.ru/portfolio/SocialNetwork/soc-video.png",
            "https://msaserj.ru/portfolio/SocialNetwork/soc-music.png"
        ],
        addDescription: "Future scope: add test and storybook"
    },
    work2: {
        workImg: "https://msaserj.ru/portfolio/ToDoList/toDo-tumb.jpg",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/ToDoList/todolist.png",
            header: "Todo List with MUI",
            description: "ToDo List project. It works with a real backend server.",
            gitHubLink: "https://github.com/msaserj/inc-todolist",
            demoLink: "https://msaserj.github.io/inc-todolist",
            storyBookLink: "https://todolist-storybook.vercel.app"
        },
        techDescription: {
            technologies: [
                "React",
                "Redux",
                "Redux-thunk",
                "Redux-toolkit",
                "Formik",
                "Axios",
                "Storybook",
            ],
            design: [
                "Authorization.",
                "CRUD operations with lists and todos.",
                "Material UI layout.",
                "Error processing.",
            ],
        },
        resume: "This project is written on the React library using the auxiliary libraries Redux as a data manager, " +
            "Formik for working with forms, Axios for interacting with RestAPI and MaterialUI. Implemented testing" +
            " of UI components using the Storybook library, as well as written unit tests for reducers.",
        gallery: [
            "https://msaserj.ru/portfolio/ToDoList/todolist.png",
            "https://msaserj.ru/portfolio/ToDoList/toDo-login.png",
        ],
        addDescription: "Future scope: Add registration flow, Rewrite all reducers to redux-toolkit, May be add drug and drop."
    },
    work3: {
        workImg: "https://msaserj.ru/portfolio/LearnCards/learning-tumb.jpg",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/LearnCards/cardList.png",
            header: "Learning By Cards",
            description: "Learning By Cards team project. It works with a real backend server.",
            gitHubLink: "https://github.com/msaserj/inc-fridayproj",
            demoLink: "https://msaserj.github.io/inc-fridayproj",
            storyBookLink: ""
        },
        techDescription: {
            technologies: [
                "React",
                "Redux",
                "Redux-Thunk",
                "Formik",
                "Thunk",
                "Axios"
            ],
            design: [
                "Registration flow. Forms of registration, authorization, password recovery.",
                "Viewing, searching, sorting decks and user cards by the number of cards in the deck using range slider and debounce.",
                "CRUD operations for user cards and decks.",
                "Viewing the user's profile, a form for editing your profile, the ability to change the profile photo.",
                "The project has a library of generic components used in the project."
            ],
        },
        resume: "This is a team project to develop an interface for learning and remembering information using flashcards." +
            " You can learn, for example, foreign languages or questions and answers on the topic of your " +
            "programming language using the cards of other users. You can also create your own cards and decks.",
        gallery: [
            "https://msaserj.ru/portfolio/LearnCards/cardList.png",
            "https://msaserj.ru/portfolio/LearnCards/learning-packs.png",
            "https://msaserj.ru/portfolio/LearnCards/learning-card.png",
            "https://msaserj.ru/portfolio/LearnCards/learning-registr.png",
            "https://msaserj.ru/portfolio/LearnCards/learning-components.png",
        ],
        addDescription: "Future Scope: Add documentation for components such as StoryBook, " +
            "get rid of some materialUI components, " +
            "get rid of business logic errors, add unit test for reducers, add some options for users."
    },
    work4: {
        workImg: "https://msaserj.ru/portfolio/OnlineShop/onlineShop-tumb.jpg",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/OnlineShop/onlineShop-tumb.jpg",
            header: "OnLine Shop (in progress...)",
            description: "Simple onlineShop",
            gitHubLink: "https://github.com/msaserj/glider-shop",
            demoLink: "", //"https://msaserj.github.io/glider-shop",
            storyBookLink: ""
        },
        techDescription: {
            technologies: ["React", "Redux", "Formik", "Thunk", "Axios"],
            design: [],
        },
        resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        gallery: [
            "https://msaserj.ru/portfolio/OnlineShop/onlineShop-tumb.jpg",
            "https://msaserj.ru/portfolio/OnlineShop/onlineShop-tumb.jpg",
            "https://msaserj.ru/portfolio/OnlineShop/onlineShop-tumb.jpg",
        ],
        addDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    work5: {
        workImg: "https://msaserj.ru/portfolio/Dndcalc/dnd-calc.png",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/Dndcalc/dnd-calc.png",
            header: "Dnd calc (in progress...)",
            description: "Drag and drop calculator",
            gitHubLink: "https://github.com/msaserj/dnd-calc",
            demoLink: "https://msaserj.github.io/dnd-calc",
            storyBookLink: ""
        },
        techDescription: {
            technologies: ["React", "Redux", "Redux-toolkit"],
            design: [],
        },
        resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        gallery: [
            "https://msaserj.ru/portfolio/Dndcalc/dnd-calc2.png",

        ],
        addDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    work6: {
        workImg: "https://msaserj.ru/portfolio/GitHub/github.webp",
        headerBlock: {
            thumbImg: "https://msaserj.ru/portfolio/GitHub/github.webp",
            header: "All projects on github",
            description: "You can see all project on my git hub",
            gitHubLink: "https://github.com/msaserj",
            demoLink: "",
            storyBookLink: ""
        },
        techDescription: {
            technologies: [],
            design: [],
        },
        resume: "",
        gallery: [

        ],
        addDescription: ""
    },
}


export default works;