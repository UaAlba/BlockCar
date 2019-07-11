import React, { Component } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity,Button,ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
const callResult = require('./callResult.json');

/* set styles */
const styles = StyleSheet.create({
    title: {
        width:'100%',
        height:'18%',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
      },
      header: {
        width:'100%',
        height:'5%',
        //backgroundColor: '#ff9a9a',
      },
      content: {
        flex: 1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      },
      footer: {
        width:'100%',
        height:'20%',
        //backgroundColor: '#1ad657',
      },
      Button: {
        backgroundColor: '#444',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 5,
        padding: 15,
        color: '#fff',
      },
      Button2: {
        backgroundColor: '#023e73',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 5,
        padding: 15,
        color: '#fff',
      },
});

/* class is begin */ 
class Home extends Component {

    /* props initial data type */
    static propTypes = {
        carName: PropTypes.string,
        makeYear: PropTypes.string,
        vehicleType: PropTypes.string,
        carColor: PropTypes.string,
        vehicleRegistration: PropTypes.string,   
        vinNumber: PropTypes.string,
        firstRegistrationDate: PropTypes.string,
        distanceDriven: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        lastRegisteredDate: PropTypes.string,
        mortGage: PropTypes.string,
        userName: PropTypes.string,
        seizures: PropTypes.string,
    }

    /* props initial value setting. */
    constructor(props) {
        super(props);
        this.state = {
            carName: "",
            makeYear: "",
            vehicleType: "",
            carColor: "",
            vehicleRegistration: "",   
            vinNumber: "",
            firstRegistrationDate: "",
            distanceDriven: "",
            startDate: "",
            endDate: "",
            lastRegisteredDate: "",
            mortGage: "",
            userName: "",
            seizures: "",
        };
    }

    /* function start. */
    handleClick = () => {
        this.setState(callResult);
    }

    handleNextPage = () => {
        Actions.about();
    } 

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.header} >
            <Text style={{fontSize:30,paddingBottom:20,fontWeight: "bold"}}>매매시스템</Text>
            </View>
            <View style={styles.title}>
              
            <Text style={{fontSize:20,paddingBottom:20}}>원부 정보 입력 및 조회</Text>
              <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
            </View>
            <ScrollView style={styles.content}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>차량번호</Text>
                <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
              </View>
            
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>차량명</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.carName}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>연식</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.makeYear}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>차량종류명</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.vehicleType}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>색상명</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.carColor}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>등록증</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.vehicleRegistration}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>차대번호</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.vinNumber}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>최초등록일자</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.firstRegistrationDate}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>주행거리</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.distanceDriven}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:13}}>정기검사 시작일자</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.startDate}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:13}}>정기검사 종료일자</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.endDate}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>최종등록일자</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.lastRegisteredDate}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>저량건수</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.mortGage}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>신청자명</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.userName}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                <Text style={{fontSize:15}}>압류건수</Text>
                <Text style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}>{this.state.seizures}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableHighlight style={styles.Button} onPressIn={this.handleClick}>
                        <Text style={{color: '#fff',fontWeight: "bold"}}>검색</Text>
                    </TouchableHighlight>
                <TouchableHighlight style={styles.Button2} onPressIn={this.handleNextPage}>
                        <Text style={{color: '#fff',fontWeight: "bold"}}>매입요청</Text>
                        </TouchableHighlight>
              </View>
            </ScrollView>
          
          </View>
            // <View>
            //     <View style={styles.title}>
            //         <Text style={{fontSize:25, paddingBottom:20}}>◎ 매매시스템-원부 정보 입력 및 조회</Text>
            //     </View>
            //     <View>
            //         <Text>차량번호</Text>
            //         <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}} />
            //         <TouchableHighlight onPressIn={this.handleClick}>
            //             <Text>검색</Text>
            //         </TouchableHighlight>
            //         <TouchableHighlight onPressIn={this.handleNextPage}>
            //             <Text>매입요청</Text>
            //         </TouchableHighlight>
            //         <Text>차량번호 : {this.state.id}</Text>
            //         <Text>차량명 : {this.state.carName}</Text>
            //         <Text>연식 : {this.state.makeYear}</Text>
            //         <Text>차량종류명 : {this.state.kind}</Text>
            //     </View>
            // </View>
        );
    }
}
export default Home

