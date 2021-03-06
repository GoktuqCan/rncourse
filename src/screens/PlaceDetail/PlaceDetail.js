import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {

    placeDeletedHandler = () => {
        this.props.deletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return <View style={styles.container}>
            <View>
                <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName} >{this.props.selectedPlace.name}</Text>
            </View>
            <View style={styles.deleteButton}>
                <TouchableOpacity onPress={this.placeDeletedHandler} >
                    <View>
                        <Icon size={30} name={Platform.OS == 'android' ? 'md-trash' : "ios-trash"} color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
})

const mapDispatchToProps = {
    deletePlace
}

export default connect(null, mapDispatchToProps)(PlaceDetail);