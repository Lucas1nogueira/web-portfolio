import { FaBook, FaDev, FaCode } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

export default function ExperienceSection() {
  return (
    <div
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
          Almost finishing a Technologist Degree in Systems Analysis and
          Development at{" "}
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
          Worked as a backend development intern at the{" "}
          <a
            href="https://www.linkedin.com/company/7259729/"
            style={{
              color: "white",
              fontStyle: "italic",
            }}
          >
            Softcom Tecnologia
          </a>{" "}
          branch in Irecê, Bahia.
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
            description="Simple C library simulation project, with data recording in text file."
            link="https://github.com/Lucas1nogueira/biblioteca"
          />
          <ProjectCard
            title="Professor Evaluation System"
            description="Contribution to the development of the professor evaluation system at IFBA Irecê Campus."
            link="https://github.com/jonatasfbastos/sad"
          />
          <ProjectCard
            title="Animainfo"
            description="Web project on endangered species, created as a required task at IFBA."
            link="https://github.com/Lucas1nogueira/projeto-web"
          />
          <ProjectCard
            title="SGIF (Backend)"
            description="Contribution to the development (with Java) of a management system project for at IFBA."
            link="https://github.com/jonatasfbastos/sgif_backend"
          />
          <ProjectCard
            title="SGIF (Frontend)"
            description="Web development (HTML, CSS and JavaScript) contribution at IFBA."
            link="https://github.com/jonatasfbastos/sgif_backend"
          />
          <ProjectCard
            title="Human Resources Module"
            description="Contribution to the development of a human resources module, carried out as a course evaluation at IFBA."
            link="https://github.com/Kennedyss01/modulo-rh"
          />
          <ProjectCard
            title="User View"
            description="Simple project using Node.js for user management, using Express and Mongoose."
            link="https://github.com/Lucas1nogueira/user-view"
          />
          <ProjectCard
            title="Marketplace"
            description="Project developed during an internship for learning, using PHP and the Laravel framework."
            link="https://github.com/Lucas1nogueira/treinamento-laravel-estagio"
          />
          <ProjectCard
            title="Gym Backend"
            description="Contribution to the development of the back-end project using Laravel for gym management, carried out during the internship."
            link="https://github.com/kaiofs122/academybackend"
          />
          <ProjectCard
            title="Simple Banking System"
            description="Banking system simulation project using classes and annotations in Python."
            link="https://github.com/Lucas1nogueira/sistema-bancario"
          />
          <ProjectCard
            title="Workout API"
            description="API built for managing athletes, categories and training centers, using technologies such as Python, FastAPI and Docker."
            link="https://github.com/Lucas1nogueira/workout-api"
          />
          <ProjectCard
            title="Store API"
            description="API for product management, built with Python and FastAPI, using Docker."
            link="https://github.com/Lucas1nogueira/store-api"
          />
          <ProjectCard
            title="Accounts"
            description="Simulation of bank account management with Node.js, recording data with FileSystem and customized output with Inquirer and Chalk."
            link="https://github.com/Lucas1nogueira/accounts"
          />
          <ProjectCard
            title="Simple Products"
            description="Simple product visualization using Node.js, Express and Handlebars."
            link="https://github.com/Lucas1nogueira/simple-products"
          />
          <ProjectCard
            title="Sapiens (Backend)"
            description="Collaboration in a system designed for municipal education departments with the aim of automating and optimizing educational processes."
            link="https://github.com/Lucas1nogueira/sapiens-backend"
          />
          <ProjectCard
            title="Posts (Backend)"
            description="Backend project with Node.js to simulate a server storing posts, including generating image descriptions using the Google Gemini API."
            link="https://github.com/Lucas1nogueira/posts-backend"
          />
          <ProjectCard
            title="Nearby"
            description="Mobile app simulating the display of nearby establishments on the map and scanning QR Codes to obtain coupons."
            link="https://github.com/Lucas1nogueira/nearby"
          />
          <ProjectCard
            title="Gentask"
            description="Mobile app for task management with AI functionalities."
            link="https://github.com/Lucas1nogueira/gentask"
          />
          <ProjectCard
            title="Jumping Lizard"
            description="Web game with a Northeastern Brazilian theme made using the Construct 3 platform."
            type="game"
            link="https://jumpinglizard-ouro.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}
