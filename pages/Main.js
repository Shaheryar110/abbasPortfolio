import React from "react";
import Navbar from "./Components/navbar";
import Introduction from "./Components/Introduction";
import Filter from "./Components/Filter";
import Services from "./Components/Services";
import AboutMe from "./Components/aboutMe";
import Projects from "./Components/Projects";
import Footer from "./Components/footer";

function Main() {
  const Service = [
    {
      name: "Frontend Development",
      description:
        "As a Frontend Development expert, I specialize in designing complex and visually stunning user interfaces with a focus on Next.js and React.js. I create high-performance, server-side rendered applications and craft interactive, responsive web designs. Lets collaborate to build a remarkable online presence with top-notch frontend architecture.",
    },
    {
      name: "Backend Development",
      description:
        "As a Backend Development specialist, I excel at converting business logics into real-time backend code using Node.js. With a focus on speed and efficiency, I build robust databases and backend systems that power seamless applications. Leveraging the versatility of Node.js, I ensure rapid development and reliable performance. Lets collaborate to transform your ideas into scalable and dynamic backend solutions, driving your business forward.",
    },
    {
      name: "Full Stack Development",
      description:
        "As a Full Stack Software Engineer, I offer end-to-end expertise in building dynamic applications. From crafting captivating user interfaces with React and Next.js to developing efficient backend systems using Node.js, I deliver a seamless user experience. With a strong focus on database design and server-side logic, I ensure scalable and high-performing solutions. Collaborative by nature, I thrive in cohesive teams, fostering shared knowledge and innovation. Lets work together to create comprehensive and cutting-edge full stack applications that elevate your business to new heights.",
    },
    {
      name: "Bug Fixing",
      description:
        "As a meticulous Bug Fixing specialist, I have a keen eye for identifying and resolving issues in software applications. Leveraging my in-depth understanding of programming languages and debugging tools, I effectively troubleshoot and fix complex bugs. I am dedicated to delivering reliable solutions by thoroughly testing and verifying the code changes. With a proactive approach, I swiftly address bugs to ensure smooth and uninterrupted functionality. Lets collaborate to optimize your software and provide users with a seamless experience free from glitches and errors.",
    },
  ];
  const Experience = [
    {
      name: "Invinci",
      fromTo : "July 2023 / Present",
      heading: "Front End Developer",
      description:
        "As a Frontend Developer, my core responsibility revolves around crafting complex, pixel-perfect designs that captivate users. Leveraging React, HTML, CSS, and JavaScript, I bring these designs to life, ensuring seamless and captivating user interfaces. My meticulous attention to detail ensures every element aligns harmoniously, delivering visually stunning experiences. I prioritize responsiveness and cross-browser compatibility, striving to provide flawless designs on all devices. My expertise in creativity and technical proficiency enables me to breathe life into cutting-edge web applications, ultimately enhancing the user journey and driving client satisfaction.",
    },
    {
      name: "4Slash",
      fromTo : "March 2023 / June 2023",
      heading: "Full Stack Developer",
      description:
        "As a former Full Stack Developer, I was responsible for creating captivating frontend designs while developing complex backend solutions, utilizing the potent MERN stack. I brought stunning user interfaces to life using React, HTML, CSS, and JavaScript. Concurrently, I constructed robust backend systems with MongoDB, Express.js, React, and Node.js, driving seamless functionality. My expertise in both frontend and backend development allowed me to create end-to-end solutions that delivered a superior user experience and achieved clients objectives.",
    },
    {
      name: "Freelancing",
      fromTo : "Oct 2022 / Present",
      heading: "Full Stack Developer",
      description:
        "As a freelancer, I delivered projects utilizing the MERN stack, working proficiently on both frontend and backend development, and efficiently managing databases. My expertise in React, HTML, CSS, and JavaScript enabled me to craft captivating user interfaces. Meanwhile, I skillfully utilized MongoDB, Express.js, React, and Node.js to develop robust backend systems, ensuring seamless functionality. My ability to handle all aspects of the development process allowed me to deliver end-to-end solutions, resulting in successful project completions and satisfied clients.",
    },
    
  ];

  return (
    <div>
    
    <Navbar/>
    <Introduction/>
    <Filter/>
    <Services experience={false} Service = {Service}/>
    <AboutMe/>
    <Projects/>
    <Services experience={true} Service = {Experience}/> 
    <Footer/>
    </div>
  );
}

export default Main;
