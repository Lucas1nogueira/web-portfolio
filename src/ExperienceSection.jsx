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
        padding: "30px 57px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaBook size={30} style={{ paddingRight: "5px" }} />
          <h1 style={{ fontSize: "35px" }}>Education</h1>
        </div>
        <p style={{ margin: 0, fontSize: "18px" }}>
          Currently in the 6th semester of a Technologist Degree in Systems
          Analysis and Development at{" "}
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
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <ProjectCard
            title="MyTasks"
            description="A task manager with basic operations (creation, editing, and deletion)
        for notes/tasks, using React Native."
            link="https://github.com/Lucas1nogueira/mytasks"
          />
          <ProjectCard
            title="Gym Backend"
            description="Contribution to the development of the back-end project using Laravel for gym management, carried out during the internship."
            link="https://github.com/kaiofs122/academybackend"
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
            title="SAD"
            description="Contribution to the development of the professor evaluation system at IFBA Irecê Campus."
            link="https://github.com/Kennedyss01/modulo-rh"
          />
          <ProjectCard
            title="Animainfo"
            description="Web project on endangered species, created as a required task at IFBA."
            link="https://github.com/Lucas1nogueira/projeto-web"
          />
          <ProjectCard
            title="Módulo RH"
            description="Contribution to the development of a human resources module, carried out as a course evaluation at IFBA."
            link="https://github.com/Kennedyss01/modulo-rh"
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
