import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'exoflex';
import { fillRedux } from '../reduxActions/actions';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
type Task = {
    desc: string;
}

function Home(props: any) {

    const navigation = useNavigation();
    
    useEffect(() => {
        async function getTasks(){
            const data = await fetch('http://localhost:8000/tasks');
            const response = await data.json();
            props.fillRedux(response);
        }
        getTasks();  
    }, [])


    return (
        props.tasks ?
        <ScrollView>
        {console.log(props.tasks.length)}
            <View style={styles.form}>
            <Icon name="plus" onPress={() => navigation.navigate('AddTask')}/>
            {props.tasks.map((task: Task)  => (
                <>
                <View key={task.desc}>
                    <Text style={{fontSize: 30}}>{task.desc}</Text>
                </View>
                </>
            ))}
            </View>
        </ScrollView>
        :
        <View>
            <Text>
                Loading Tasks...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, {fillRedux})(Home);