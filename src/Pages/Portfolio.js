import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../utils/projects.json";
import Projects from "../Components/Projects";

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects,
  };

  render() {
    return (
      <section className="container ">
        <div className="row">
          <div className="col-sm-12 mt-5 mb-5">
            <div className="card w-100 border border-dark">
              <div className="card-body">
                <h2 className="main-header text-center text-md-left">
                  Portfolio
                </h2>
                <hr className="main-hr" />
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="row mb-5 mx-auto">
                    {this.state.projects.map((project) => (
                      <Projects
                        id={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        tech={project.tech}
                        respository={project.respository}
                        deployed_link={project.deployed_link}
                        grade={project.grade}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
