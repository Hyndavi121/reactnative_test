import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './ListItem';

export default class Item extends Component {

    state = {
        productName: '',
        products: [],

    }

    productSubmitHandler = () => {
        if (this.state.productName.trim() === '') {
            return;
        }
        this.setState(prevState => {
            return {
                products: prevState.products.concat({
                    key: Math.random(),
                    value: prevState.productName
                })
            }
        });
        this.setState({
            productName: ''
        });
    }




    productNameChangeHandler = (value) => {
        this.setState({
            productName: value
        });
    }



    productsOutput = () => {
        return (
            <FlatList style={styles.listContainer}
                data={this.state.products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => (
                    <ListItem
                        productName={info.item.value}
                        // on pressing on the product name we can delete it.
                        onItemPressed={() => this.onItemDeleted(info.item.key)}
                    />
                )}
            />
        )
    }



    onItemDeleted = (key) => {
        this.setState(prevState => {
            return {
                products: prevState.products.filter(product => {
                    return product.key !== key;
                }),


            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Add Products"
                        style={styles.placeInput}
                        value={this.state.productName}
                        onChangeText={this.productNameChangeHandler}
                    ></TextInput>
                    <Button title='Add'
                        style={styles.placeButton}
                        onPress={this.productSubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>
                    {this.productsOutput()}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
});