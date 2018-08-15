import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { Segment, Container, Header } from 'semantic-ui-react';
import ResponsiveContainer from './responsive-container';

const MyMapComponent = compose(withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvyYuU9tLRgTn4LJlLSsfqGG2MKDsrjWY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}), withScriptjs, withGoogleMap)((props) => <GoogleMap defaultZoom={12} defaultCenter={{lat: 43.594552, lng: -79.638977}}><Marker position={{lat: 43.594552, lng: -79.638977}}/></GoogleMap>);

const ContactUs = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline'}}>Our Location</Header>
                <MyMapComponent/>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline' }}>Contact Information</Header>
                <p style={{ fontSize: '1.33em' }}>
                <h3>Address</h3> <a href="https://www.google.ca/maps/place/33+City+Centre+Dr,+Mississauga,+ON+L5B+2N5/@43.594552,-79.638977,14z/data=!4m5!3m4!1s0x882b472f8715e98d:0xd469bfaac9cd7479!8m2!3d43.5949731!4d-79.6391348?hl=en">550 - 33 City Centre Drive, Mississauga ON, L5B 2N5</a>
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