import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor() {
    super();
  }

  render() {
    let { title, description, url, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              url
                ? url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFD0GI1-BLAM-B9f8B5N6PohqrYzBfRgwbGQ&s"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p title={description} className="card-text">
              {description}
            </p>
            <a
              title={newsUrl}
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
