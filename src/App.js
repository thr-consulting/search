import React, { Component } from 'react';
// import {} from '../dist';
import {Grid, Header, Form, Segment} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
    	<Grid container>
		    <Grid.Row>
			    <Grid.Column>
				    <Header as="h1">Search Demo</Header>
			    </Grid.Column>
		    </Grid.Row>
		    <Grid.Row>
			    <Grid.Column>
				    <Segment>

				    </Segment>
			    </Grid.Column>
		    </Grid.Row>
	    </Grid>
    );
  }
}

export default App;
