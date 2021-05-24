import React from "react";
// import "./style.css";

function Projects(props) {
  const deployed_link = props.deployed_link;
  const respository = props.respository;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-5 mx-auto" key={props.id}>
      <div className="card mx-auto mb-auto bg-light">
        <a
          href={deployed_link ? deployed_link : respository}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card-img-top img-screenshot"
            src={process.env.PUBLIC_URL + props.image}
            alt={props.name}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush collapse-list">
          <li className="list-group-item">{props.tech}</li>
          <li className="list-group-item">{props.grade}</li>
        </ul>
        <div className="btn-group bg-light" role="group">
          {deployed_link ? (
            <a
              href={deployed_link}
              target="_blank"
              className="btn btn-custom btn-sm"
              rel="noreferrer"
            >
              Deployed App
            </a>
          ) : (
            ""
          )}
          {deployed_link && respository ? `\u00A0` : ""}
          {respository ? (
            <a
              href={respository}
              target="_blank"
              className="btn btn-custom btn-sm"
              rel="noreferrer"
            >
              Repository
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
