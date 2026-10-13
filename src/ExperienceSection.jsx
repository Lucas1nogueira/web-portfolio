import { FaBook, FaDev, FaCode } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

export default function ExperienceSection() {
  return (
    <div
      className="matte-surface-inset"
      style={{
        maxWidth: "100%",
        background:
          "radial-gradient(circle at center, #8D8258 30%, #5b522e 100%)",
        color: "white",
        padding: "30px 0 30px 57px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "57px",
          }}
        >
          <FaBook size={30} style={{ paddingRight: "5px" }} />
          <h1 style={{ fontSize: "35px" }}>Education</h1>
        </div>
        <p style={{ margin: 0, fontSize: "18px" }}>
          Soon to graduate with a Technologist Degree in Systems Analysis
          and Development from{" "}
          <a
            href="https://ifba.edu.br"
            style={{
              color: "white",
              fontStyle: "italic",
            }}
          >
            IFBA
          </a>
          .
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "57px",
          }}
        >
          <FaDev size={30} style={{ paddingRight: "5px" }} />
          <h1 style={{ fontSize: "35px" }}>Experience</h1>
        </div>
        <p style={{ margin: 0, fontSize: "18px" }}>
          Currently working as a fullstack and mobile developer at Tude
          Diniz Tecnologia, helping build{" "}
          <a
            href="https://altaaprovacao.com.br"
            style={{
              color: "white",
              fontStyle: "italic",
            }}
          >
            Alta Aprovação
          </a>
          , an online educational platform.
        </p>
        <p style={{ margin: "10px 0 0", fontSize: "18px" }}>
          Previously, worked as a backend development intern at the{" "}
          <a
            href="https://www.linkedin.com/company/7259729/"
            style={{
              color: "white",
              fontStyle: "italic",
            }}
          >
            Softcom Tecnologia
          </a>{" "}
          branch in Irecê, Bahia, Brazil.
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaCode size={30} style={{ paddingRight: "5px" }} />
          <h1 style={{ fontSize: "35px" }}>Projects</h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <ProjectCard
            title="Library System"
            description="A simple library management simulation written in C, storing data in a text file."
            link="https://github.com/Lucas1nogueira/biblioteca"
          />
          <ProjectCard
            title="Professor Evaluation System"
            description="Contributed to the development of a professor evaluation system for the IFBA Irecê campus."
            link="https://github.com/jonatasfbastos/sad"
          />
          <ProjectCard
            title="Animainfo"
            description="A web project about endangered species, built as a class assignment at IFBA."
            link="https://github.com/Lucas1nogueira/projeto-web"
          />
          <ProjectCard
            title="SGIF (Backend)"
            description="Contributed to the backend of a management system built for IFBA, using Java."
            link="https://github.com/jonatasfbastos/sgif_backend"
          />
          <ProjectCard
            title="SGIF (Frontend)"
            description="Frontend contribution (HTML, CSS and JavaScript) to a management system built for IFBA."
            link="https://github.com/jonatasfbastos/sgif_backend"
          />
          <ProjectCard
            title="Human Resources Module"
            description="Contributed to a human resources module built as a course assignment at IFBA."
            link="https://github.com/Kennedyss01/modulo-rh"
          />
          <ProjectCard
            title="User View"
            description="A simple user management project built with Node.js, Express and Mongoose."
            link="https://github.com/Lucas1nogueira/user-view"
          />
          <ProjectCard
            title="Marketplace"
            description="A learning project built during an internship, using PHP and the Laravel framework."
            link="https://github.com/Lucas1nogueira/treinamento-laravel-estagio"
          />
          <ProjectCard
            title="Gym Backend"
            description="Contributed to a gym management backend built with Laravel during an internship."
            link="https://github.com/kaiofs122/academybackend"
          />
          <ProjectCard
            title="Simple Banking System"
            description="A banking system simulation built in Python, using classes and annotations."
            link="https://github.com/Lucas1nogueira/sistema-bancario"
          />
          <ProjectCard
            title="Workout API"
            description="An API for managing athletes, categories and training centers, built with Python, FastAPI and Docker."
            link="https://github.com/Lucas1nogueira/workout-api"
          />
          <ProjectCard
            title="Store API"
            description="An API for product management, built with Python, FastAPI and Docker."
            link="https://github.com/Lucas1nogueira/store-api"
          />
          <ProjectCard
            title="Accounts"
            description="A bank account management simulation built with Node.js, storing data with the file system and using Inquirer and Chalk for a nicer CLI output."
            link="https://github.com/Lucas1nogueira/accounts"
          />
          <ProjectCard
            title="Simple Products"
            description="A simple product listing app built with Node.js, Express and Handlebars."
            link="https://github.com/Lucas1nogueira/simple-products"
          />
          <ProjectCard
            title="Sapiens (Backend)"
            description="Collaborated on a system for municipal education departments, aimed at automating and streamlining educational processes."
            link="https://github.com/Lucas1nogueira/sapiens-backend"
          />
          <ProjectCard
            title="Posts (Backend)"
            description="A Node.js backend that simulates a server for storing posts, including automatic image description generation using the Google Gemini API."
            link="https://github.com/Lucas1nogueira/posts-backend"
          />
          <ProjectCard
            title="Nearby"
            description="A mobile app that displays nearby establishments on a map and scans QR codes to redeem coupons."
            link="https://github.com/Lucas1nogueira/nearby"
          />
          <ProjectCard
            title="Gentask"
            description="A mobile app for task management with AI-powered features."
            link="https://github.com/Lucas1nogueira/gentask"
          />
          <ProjectCard
            title="Jumping Lizard"
            description="A web game with a Northeastern Brazilian theme, built with the Construct 3 platform."
            type="game"
            link="https://jumpinglizard-ouro.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}
