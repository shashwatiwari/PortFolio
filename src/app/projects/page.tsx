import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "MeetMee - Video and Chat App",
      description:
        "MeetMe is a video calling app made with modern tech stacks. User can connect to a random user and have meaningfull conversation with both video and text. ",
      tags: ["Socket.io", "MaterialUI", "NodeJs", "ReactJs"],
      link: "https://github.com/shashwatiwari/chat-app-client/",
    },
    {
      title: "My Hotel- Hotel Booking Website",
      description:
        "A responsive frontend interface for hotel booking, showcasing available rooms and user-friendly navigation for reservation management.",
      tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
      link: "https://github.com/shashwatiwari/Hotel-Booking",
    },
    {
      title: "My Restaurant- An Online Food Ordering App",
      description:
        "A full-featured restaurant app for browsing menus, placing orders, and tracking deliveries with integrated payment options.",
      tags: ["ReactJs", "Tailwind", "NodeJs", "MongoDB"],
      link: "https://github.com/shashwatiwari/Ecommerce_Restaurant_App",
    },
    {
      title: "Hostel Management System",
      description:
        "A comprehensive hostel management system for managing student records, room assignments, and fee payments.",
      tags: ["ReactJs", "NodeJs", "MySql", "Library"],
      link: "https://github.com/shashwatiwari/Hostel_Management_System",
    },
    {
      title: "Daily Quotes- Random Quote Generator",
      description:
        "A simple web app that generates random quotes on a daily basis, with a clean and minimalist design.",
      tags: ["ReactJS", "Javascript", "API Integration"],
      link: "https://github.com/shashwatiwari/Daily-Quotes",
    },

    {
      title: "Dynamic Weather App",
      description:
        "A dynamic weather app that displays real-time weather data for any location, with a user-friendly interface.",
      tags: ["ReactJs", "Javascript", "API Integration"],
      link: "https://github.com/shashwatiwari/Real-Time-Weather-App",
    },
    {
      title: "To Do List App",
      description:
        "A simple to-do list app that allows users to create, edit, and delete tasks with ease, using React and local storage.",
      tags: ["Reactjs", "Javascript"],
      link: "https://github.com/shashwatiwari/To_do_app",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
