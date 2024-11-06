import project1 from "../assets/portfolio.webp";
import project2 from "../assets/sports.jpg";
import project3 from "../assets/project.jpg";

export const EXPERIENCE = [
    {
        year : "11/2023 - Present",
        role : "FrontEnd Developer",
        company : "Cynefian Pvt ltd Mysore",
        description : "Designed and Developed user interfaces for web application using ReactJs. Worked Closely with Backend developers to integrate frontend components with SpringBoot APIs. Implemented responsive designs and optimized frontend performance.",
        technologies : ["Reactjs", "HTML", "CSS", "Bootstrap", "MySQL"],
    } ,
    {
        year : "10/2022 - 4/2023",
        role : "Full Stack Development Course",
        company : "Jspider Mysore",
        description : "This comprehensive course covers the fundamentals of full-stack development, how to design, develop, and deploy dynamic web applications from scratch. And learn both front-end and back-end development skills, using industry-leading technologies and frameworks.",
        technologies : ["HTML", "CSS", "JavaScript", "CoreJava", "SQL", "J2EE"],
    },
];

export const PROJECTS = [
    {
        title : "Portfolio Website",
        image : project1,
        description : "A Personal portfolio website showcasing projects, skills and contact information.",
        technologies : ["ReactJs", "HTML", "Tailwind css"],
    },
    {
        title : "Grounds N Sports Website",
        image : project2,
        description : "A fully functional GroundsNSports website with sports fetures like Cricket, Basketball, Football, Scatting... ",
        technologies : ["ReactJs", "HTML", "CSS"],
    },
    {
        title : "Energy Now",
        image : project3,
        description : " Energy Now is a robust cloud-based ERP system for the management of all aspects of LPG distribution from supplier and management to delivery routing and customer relations. providing real-time data and improved decision-making for LPG distributer. Features are Real-time stock views, Transaction Management, Load Management, Attendance Management and Premium Support.",
        technologies : ["ReactJs", "HTML", "CSS", "BootStrap", "SpringBoot", "SQL"],
    },
];

export const CONTACT = {
    address : "133/A 1st main 6th cross B M Shree Nagar Metagalli Mysore-570016",
    phoneNo : "+91 9731752492",
    email : "ranjitharanju0705@gmail.com"
}