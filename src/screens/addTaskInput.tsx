import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Button } from 'exoflex';
import {addTask} from '../reduxActions/actions';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


function addTaskInput(props: any){

    const [desc, setDesc] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const navigation = useNavigation();

    const completeTask = (desc: string, time: string) => {
        props.addTask(desc, time)
        navigation.navigate('Home')
    }

    return(
        <View>
            <Text style={styles.header}>Add Task</Text>
            <Text style={styles.subHeader}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="description"
                onChangeText={(desc: string) => setDesc(desc)}
            />
            <Text style={styles.subHeader}>Time</Text>
            <TextInput
                style={styles.input}
                placeholder="time"
                onChangeText={(time: string) => setTime(time)}
            />
            <Button style={styles.addTaskButton} color="black" onPress={() => completeTask(desc, time)}>Add</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 24,
        paddingBottom: 50,
        textDecorationLine: 'underline'
    },
    subHeader: {
        fontSize: 24,
        alignSelf: 'center',
        paddingBottom: 10

    },
    input: {
        fontSize: 24,
        alignSelf: 'center',
        paddingBottom: 20
    },
    addTaskButton: {
        textAlign: 'center'
    }
})


export default connect(null, {addTask})(addTaskInput);