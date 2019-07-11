import React, { Component } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
const callResult = require('./callResult.json');

/* set styles */
const styles = StyleSheet.create({
    title: {
        width:'100%',
        height:'18%',
        justifyContent: 'center',
      }
});

/* class is begin */ 
class Page01 extends Component {

    /* props initial data type */
    static propTypes = {
        id: PropTypes.string,
        carName: PropTypes.string,
        makeYear: PropTypes.string,
        kind: PropTypes.string
    }

    /* props initial value setting. */
    constructor(props) {
        super(props);
        this.state = {
            id: "11",
            carName: "22",
            makeYear: "2019",
            kind: "series"
        };
    }

    /* function start. */
    handleClick = () => {
        this.setState(callResult);
    }

    handleNextPage = () => {
        Actions.page02();
    } 

    render() {
        return (
            <View>
                <View style={styles.title}>
                    <Text style={{fontSize:25, paddingBottom:20}}>◎ 매매시스템-원부 정보 입력 및 조회</Text>
                </View>
                <View>
                    <Text>차량번호</Text>
                    <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}} />
                    <TouchableHighlight onPressIn={this.handleClick}>
                        <Text>검색</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPressIn={this.handleNextPage}>
                        <Text>매입요청</Text>
                    </TouchableHighlight>
                    <Text>차량번호 : {this.state.id}</Text>
                    <Text>차량명 : {this.state.carName}</Text>
                    <Text>연식 : {this.state.makeYear}</Text>
                    <Text>차량종류명 : {this.state.kind}</Text>
                </View>
            </View>
        );
    }
}

export default Page01