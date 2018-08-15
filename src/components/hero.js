import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import './styles/hero.css';

const Hero = ({ mobile }) => (
    <Container text>
        <Header as='h1' content='International Housing Finance & Investment Corporation' inverted style={{fontSize: mobile ? '2em' : '4em', fontWeight: 'normal', marginBottom: 0, marginTop: mobile ? '1.5em' : '1.5em', background: 'rgba(0, 0, 0, 0.3)', fontFamily: 'Sawarabi Mincho, sans-serif'}}/>
        <Header as='h2' content='Full Lending & Professional Business Consulting Services ' inverted style={{fontSize: mobile ? '1.5em' : '2em', fontWeight: 'normal', marginTop: mobile ? '0.5em' : '1.5em', background: 'rgba(0, 0, 0, 0.3)', fontFamily: 'Sawarabi Mincho, sans-serif'}}/>
        <Button className='applyButton' size='huge'>
          Apply Online
          <Icon name='right arrow' />
        </Button>
    </Container>
)
  
Hero.propTypes = {
    mobile: PropTypes.bool,
}

export default Hero;