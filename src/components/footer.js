import React, { Component } from 'react';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return(
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Header as='h4' style={{textAlign: 'center'}} inverted>International Housing Finance & Investment Corp © 2018</Header>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Footer;