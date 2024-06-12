/* eslint-disable no-unused-vars */
import { projectData } from "../../../data";
import styles from "./Project.module.css";
import ProjectCard from "../Project-card/ProjectCard";
import Button from "../../layouts/button/Button";
const Project = () => {
  console.log(projectData);
  return (
    <section className={styles.project_container}>
      <div className={styles.project_content}>
        <h2>Projects</h2>
        <Button text="Contact Us" />
      </div>
      <div className={styles.project_card}>
        {projectData.map((item) => {
          return (
            <ProjectCard
              img={item.img}
              tagOne={item.tagOne}
              tagTwo={item.tagTwo}
              tagThree={item.tagThree}
              title={item.title}
              key={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
