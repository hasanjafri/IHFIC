import React from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import ResponsiveContainer from './responsive-container';

const Home = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Header as='h3' style={{ fontSize: '2em' }}>Welcome</Header>
                <p style={{ fontSize: '1.33em' }}>
                IHFIC is a full lending and business consulting services that can work with any individual, family or business in need of mortgage financing including residential, commercial, construction and private lending. We offer a flexible, solutions-based mortgage process to help our clients get the money they need at the best possible rate.
                <br/><br/> Our team of highly qualified mortgage experts is exceedingly efficient in providing multi financial services in one place. IHFIC provides Residential, Commercial, Corporate Mortgages, Real Estate and Insurance Services. We work efficiently to give you the lowest interest rate and best mortgage product as we collaborate with 40-lenders across Canada.
                <br/><br/> We work with you and offer an unbiased service.
                <br/><br/> We know how to negotiate with lenders and package your information to help you get approved. Our team puts the client's needs over anything else.
                <br/><br/> Regardless of your financial situation, call us for best rates & solid advice on a refinance, new mortgage, pre approval, or line of credit - we can help.
                </p>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Apply</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
        </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default Home;