import React from 'react';
import { Grid, Segment, Header, Divider, Button } from 'semantic-ui-react';
import ResponsiveContainer from './responsive-container';

const Mortgages = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline' }}>Residential Mortgages</Header>
                <p style={{ fontSize: '1.33em' }}>
                Our mortgage brokers will work with you to find you the best mortgage rate, answer your questions throughout the borrowing process and take the confusion out of financing your home.
                <br/><br/> We have relationships with over 50 major lening institutions and private lenders across Canada and we will find you the best mortgage rate and negotiate with the lender on you behalf.
                <Header>We specialize in:</Header>
                <ul>
                    <li>First-time home purchases</li>
                    <li>Mortgage renewals/transfers</li>
                    <li>Debt consolidation</li>
                    <li>Second mortgages</li>
                    <li>Bridge financing</li>
                    <li>High Ration / Insured mortgages</li>
                    <li>Conventional mortgages</li>
                    <li>Interim financing</li>
                </ul>
                </p>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Apply Online</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
            <Divider as='h4' className='header' horizontal style={{ margin: '3em 0em', textTransform: 'uppercase' }}>AND</Divider>
            <Grid.Row>
                <Header as='h3' style={{ fontSize: '2em', textDecoration: 'underline' }}>Commercial Mortgages</Header>
                <p style={{ fontSize: '1.33em' }}>
                In toady's credit climate, it is critical to work with a partner who truly understands commercial real estate financing and knows how to access the capital you need. We will work with you to find you the money you need for your commerical project at the best possible rate.
                <br/><br/> Commercial lending situations are always unique and require a knowledge mortgage broker to take you through the complicated lending process, negotiating on your behalf and choosing the right lender for your situation.
                <br/><br/> We will put together an underwriting package or loan proposal on your behalf to give you the best chances for approval of your loan at the best possible rate.
                <Header>Some commercial mortgages fund:</Header>
                <ul>
                    <li>Refinancing for renovations, franchising, expansion, company purchases or better terms and conditions</li>
                    <li>Income properties</li>
                    <li>Multi-residential properties</li>
                    <li>Bridge financing</li>
                </ul>
                </p>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Apply Online</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
        </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default Mortgages;