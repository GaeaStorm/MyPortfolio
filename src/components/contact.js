import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Gayatri Sawant</h2>
      <img
      src="https://i.ibb.co/RPyVgz1/Icon-2.png"
      alt="avatar"
      style={{height: '250px'}}
      />
      <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
      First-year MBA student at Yale School of Management targeting a career in product management and strategy.
      </p>

      </Cell>
      <Cell col={6}>
      <h2>Contact Me</h2>
      <hr/>

      <div className="contact-list">
      <List>
      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-phone-square" aria-hidden="true"/>
      (346)-777-4542
      </ListItemContent>
      </ListItem>

      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-envelope" aria-hidden="true"/>
      gtrswnt@gmail.com
      </ListItemContent>
      </ListItem>

      <ListItem>
      <ListItemContent style={{fontSize: '30px'}}>
      <i className="fa fa-envelope" aria-hidden="true"/>
      gai.sawant@yale.edu
      </ListItemContent>
      </ListItem>


      </List>
      </div>
      </Cell>
      </Grid>
      </div>

    )
  }
}

export default Contact;
