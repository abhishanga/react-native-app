import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
    render() {

        const images = {

            "1": require('../assets/visa-logo.png'),
            "2": require('../assets/visa-logo.png'),
            "3": require('../assets/visa-logo.png')
        }

        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Tyler
                            </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
                 <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon type="FontAwesome" name="facebook-official" style={{ color: '#3B5998'}}/>
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome" name="instagram" style={{color: '#e4405f'}} />
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome" name="pinterest" style={{ color: '#bd081c'}}/>
                        </Button>


                    </Left>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});