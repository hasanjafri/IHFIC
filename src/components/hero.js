import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import './styles/hero.css';

const Hero = ({ mobile }) => (
    <Container text>
        <Header as='h1' content='IHFIC' inverted style={{fontSize: mobile ? '2em' : '4em', fontWeight: 'normal', marginBottom: 0, marginTop: mobile ? '1.5em' : '3em'}}/>
        <Header as='h2' content='Full Lending & Professional Business Consulting Services ' inverted style={{fontSize: mobile ? '1.5em' : '1.7em', fontWeight: 'normal', marginTop: mobile ? '0.5em' : '1.5em'}}/>
        <Button primary size='huge'>
          Apply Online
          <Icon name='right arrow' />
        </Button>
    </Container>
)
  
Hero.propTypes = {
    mobile: PropTypes.bool,
}

export default Hero;