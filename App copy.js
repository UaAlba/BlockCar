import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import CustomButton from './CustomButton';


type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={{fontSize:30,paddingBottom:20,fontWeight: "bold"}}>매매시스템</Text>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize:20,paddingBottom:20}}>성능점검 및 평가정보 입력 및 조회</Text>
          <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
        </View>
        <ScrollView style={styles.content}>
        <CustomButton
            buttonColor={'#444'}
            title={'검색'}
            onPress={() => alert('차량번호를 입력해주세요')}/>
          <CustomButton
          buttonColor={'#023e73'}
          title={'등록'}
          onPress={() => alert('등록')}/>
          <Text style={{fontSize:20, color:'#2e75b6',paddingBottom:10,fontWeight: "bold"}}>차량등록정보</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10 }}>
            <Text style={{fontSize:15 }}>모델</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
        
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>결과코드</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>결과메세지</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>제조사</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>형식년도</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>세부모델</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>등급명</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>세부등급명</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>승차인원</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:13}}>연료</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:13}}>등록년원</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>배기량</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>신차출고가격</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>적재용량</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:15}}>옵션정보</Text>
            <TextInput type="password"  secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
        
        </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
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
});