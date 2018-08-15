import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { Segment, Container, Header } from 'semantic-ui-react';
import ResponsiveContainer from './responsive-container';

const MyMapComponent = compose(withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvyYuU9tLRgTn4LJlLSsfqGG2MKDsrjWY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}), withStateHandlers(() => ({ isOpen: false, }), {onToggleOpen: ({ isOpen }) => () => ({ isOpen: !isOpen, })}), withScriptjs, withGoogleMap)((props) => <GoogleMap defaultZoom={12} defaultCenter={{lat: 43.595028, lng: -79.639432}}><Marker position={{lat: 43.595028, lng: -79.639432}} onclick={props.onToggleOpen}>{props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>Get</InfoWindow>}</Marker></GoogleMap>);

const ContactUs = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline'}}>Our Location</Header>
                <MyMapComponent/>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline' }}>Contact Information</Header>
                <p style={{ fontSize: '1.33em' }}>
                <h3>Address</h3> <a href="https://www.google.ca/maps/dir//550+City+Centre+Dr,+Mississauga,+ON/@43.5865988,-79.6479083,17z/data=!4m17!1m7!3m6!1s0x882b46d5c23935e5:0xccb295d35012dc2f!2s550+City+Centre+Dr,+Mississauga,+ON!3b1!8m2!3d43.5865988!4d-79.6457196!4m8!1m0!1m5!1m1!1s0x882b46d5c23935e5:0xccb295d35012dc2f!2m2!1d-79.6457196!2d43.5865988!3e3">550 - 33 City Centre Drive, Mississauga ON, L5B 2N5</a>
                <h3>Cell Number</h3> 416-427-8655
                <h3>Office Number</h3> 905-270-9500
                <h3>Fax Number</h3> 905-290-4040
                <h3>Email</h3> <a href="mailto:asifraza@ihfic.com"> asifraza@ihfic.com </a>
                <h3>Website</h3> <a href="http://www.ihfic.com"> www.ihfic.com </a>
                </p>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default ContactUs;