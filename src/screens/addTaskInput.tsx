import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Button } from 'exoflex';
import {addTask} from '../reduxActions/actions';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


function addTaskInput(props: any){

    const [desc, setDesc] = useState<string>('');
    const navigation = useNavigation();

    return(
        <View>
            <Text style={styles.header}>Add Task</Text>
            <Text style={styles.subHeader}>Task Description</Text>
            <TextInput
                style={styles.input}
                placeholder="description"
                onChangeText={(desc: any) => setDesc(desc)}
            />
            <Button style={styles.addTaskButton} color="black" onPress={() => props.addTask(desc)}>Add</Button>
            <Button color="black" onPress={() => navigation.navigate('Home')}>Back To Tasks</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontSize: 24,
        paddingBottom: 50
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
        paddingBottom: 30
    }
})


export default connect(null, {addTask})(addTaskInput);