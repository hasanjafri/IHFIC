import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Segment, Menu, Container } from 'semantic-ui-react';
import Hero from './hero';
import HeroVid from '../assets/British_Pounds_Slow_RotateVidevo.mov';
import history from './history';

export default class DesktopMenubar extends Component {
    render() {
      const { children } = this.props
  
      return (
        <Responsive {...Responsive.onlyComputer}>
            <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundSize: "cover", backgroundColor: 'rgba(139, 204, 79, 0.3)', backgroundBlendMode: 'multiply' }} vertical>
              <Menu style={{backgroundColor: 'rgba(172, 180, 193, 0.3)'}}  size='large'>
                <Container>
                  <Menu.Item onClick={() => history.push('/')}>Home</Menu.Item>
                  <Menu.Item onClick={() => history.push('/about')}>About Us</Menu.Item>
                  <Menu.Item onClick={() => history.push('/mortgages')}>Mortgages</Menu.Item>
                  <Menu.Item onClick={() => history.push('/contactus')}>Contact Us</Menu.Item>
                </Container>
              </Menu>
              <Hero />
              <div style={{width: '100%', maxHeight: '700px', overflow: 'hidden', position: 'absolute', top: '0', right: '0', zIndex: '-100'}}>
                <video autoPlay loop muted playsInline style={{position: 'relative', right: '0', bottom: '0', minWidth: '100%', width: 'auto', height: 'auto', zIndex: '-100'}}>
                    <source src={HeroVid} type="video/mp4"/>
                </video>
              </div>
            </Segment>  
          {children}
        </Responsive>
      )
    }
}
  
DesktopMenubar.propTypes = {
    children: PropTypes.node,
}