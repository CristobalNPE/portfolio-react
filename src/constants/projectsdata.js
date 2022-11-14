import * as myAssets from '../assets/index.js'

const projects = [
    {
        img: myAssets.project1_1,
        title: "Simple Task Manager",
        description: "One of my first fullstack projects, its main purpose was to learn how to implement a basic REST service and connect it to a front-end client.",
        fullDescription: "To-do lists are a very familiar and simple app, so this project was a perfect opportunity to use the technologies I have been learning. As Java/Spring are my main focus right now, I used them to create a RESTFUL back end, that provides various endpoints for creating routines, and each routines can have its own tasks. I also provided some basic security using Spring Security, and for the time being I used HttpBasic to authenticate the connections, until I get a good grasp of how Oauth, Oidc and JWT work." +
            "\n" +
            "The front-end of the application was made using ReactJS, a framework that I’m still barely dipping into right now. I used this project mainly to learn React, and to learn how to communicate between a React Client and a Spring BackEnd.",
        stack: ["SpringBoot", "React", "PostgreSql"],
        fullStack: ["SpringBoot", "React", "PostgreSql", "Java", "JavaScript"],
        captures: [myAssets.project1_1, myAssets.project1_2, myAssets.project1_3, myAssets.project1_4],
        objectives: "The absolute focus of this project was to get my hands on creating something “complete”, that uses both a front end and a backend, but also to try and solve many questions I had (and still have) regarding the communication between client and server.",
        difficulties: "At the beginning, I realized how shallow my knowledge was regarding Spring and Spring Boot, so I had to start from zero, learning about the Spring framework and its context, and trying to understand how things really work, outside of just copying code. Reading Spring Start Here by Laurentius Splica helped a lot here, I would recommend that book to anyone just starting with Spring that need to get a good idea of how the framework really works.\n" +
            "\n" +
            "I also hit a wall when dealing with the database, so I had to learn how JPA works. Taking a look of how JPA works outside of Spring Data made many aspects of it more clear to me. I had to learn how to define my entities properly, and later how to deal properly with DTOs, for which I used MapStruct and had to learn about its quirks.\n" +
            "\n" +
            "My last bump in the back-end part, was security. I was not aware of how deep Spring Security is. I had recently learned in my bootcamp about the now deprecated WebSecurityConfigurerAdapter ‘way’ of doing things. But I wanted to have at least a basic idea of how security is implemented in the latest version of the framework. Since most books and tutorials on the web are outdated, I ended up once again with material provided from Laurentius Spilca. This time his youtube channel was a big help, and I’m currently studying his series on Spring Security.\n" +
            "\n" +
            "Finally, the front-end was my biggest hardship, since I was discovering React along with making this project, which made me also have to re-learn how little I knew of JavaScript. I reckon my front-end code is not clean at all, but hopefully it will be in the future.\n",

    },
    {
        img: myAssets.project2_1,
        title: "Sales System",
        description: "One of my first fullstack projects, its main purpose was to learn how to implement a basic REST " +
            "APIOne of my first fullstack projects, its main purpose was to learn how to implement a basic REST APIOne " +
            "of my first fullstack projects, its main purpose was to learn how to implement a basic REST API",
        fullDescription: "One of my first fullstack projects, its main purpose was to learn how to implement a basic REST " +
            "APIOne of my first fullstack projects, its main purpose was to learn how to implement a basic REST APIOne" +
            " of my first fullstack projects, its main purpose was to learn how to implement a basic REST " +
            "first fullstack projects, its main purpose was to learn how to implement a basic REST APIOne" +
            " of my first fullstack projects, its main purpose was to learn how to implement a basic REST API",
        stack: ["SpringBoot", "React", "PostgreSql"],
        fullStack: ["SpringBoot", "React", "PostgreSql", "Java", "JavaScript"],
        captures: [myAssets.project2_1],
        objectives: "Terminar el Sales System",
        difficulties: "Complicadoo el Sales System",

    }

]

export default projects;