import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import ResponsiveContainer from './responsive-container';
import MortgageCalculator from 'mortgage-calculator-react';

class MortgageCalculatorPage extends React.Component {
    render() {
        return(
            <ResponsiveContainer>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <MortgageCalculator/>
                </Segment>
            </ResponsiveContainer>
        );
    }
}

export default MortgageCalculatorPage;