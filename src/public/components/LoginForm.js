import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button, Card, CardSection } from '../../components'

class LoginForm extends Component{
    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
