import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typist from "react-typist";
import TypistCycle from './TypistCycle';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img
      src="https://i.ibb.co/RPyVgz1/Icon-2.png"
      alt="avatar"
      style={{height: "250px", padding: "4% 3% 1% 3%"}}
      />
      <div className="banner-text">
      <h1>
      <TypistCycle
      content={[
        'Computer Science Student ',
        'Graduating May 2021 ',
        'Machine Learning Enthusiast '
      ]}
      numberOfCycles={-1} // loop indefinitely
      segmentDelay={0.1} // stop for 0.8s at end line
      />

      </h1>

      <hr />
      <h4>Gayatri Sawant</h4>

      <div className="social-links">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/gayatri-sawant-92b901102/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="https://github.com/GaiSawant/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-github-square" aria-hidden="true" />
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/gayatri.sawant.16" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-facebook-square" aria-hidden="true" />
      </a>

      {/* Twitter */}
      <a href="https://twitter.com/Gaea_Storm" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-twitter-square" aria-hidden="true" />
      </a>
      </div>
      </div>
      </Cell>
      </Grid>
      </div>
    );
  }
}

export default Landing;
