import React, { useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { fillRedux, completeTask, deleteTask } from '../reduxActions/actions';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../types';

function Home(props: any) {
    let today = new Date();
    let date = today.getDate() + "-"+ (parseInt(today.getMonth())+1) +"-"+today.getFullYear();
    const navigation = useNavigation();
    
    useEffect(() => {
        async function getTasks(){
            const data = await fetch('http://localhost:3000/get_tasks');
            const response = await data.json();
            props.fillRedux(response);

        }
        getTasks();  
    }, [])

    return (
        props.tasks ?
        <ScrollView>
            <View style={styles.page}>
                <Text style={styles.subHeader}>{date}</Text>
                <Text style={styles.subHeader}>{props.tasks.length} Tasks</Text>
                <View>
                    <Icon color="blue" size={50} style={styles.icon} name="plus-circle" onPress={() => navigation.navigate('AddTask')}/>
                    {props.tasks.map((task: Task)  => (
                        <View style={styles.task} key={task.desc}>
                            <Icon size={17} style={styles.checkMark} onPress={() => props.completeTask(task)} name={task.completed ? "check-square" : "square"}/>
                            <Text style={task.completed ? styles.strikeText : styles.text}>{task.desc}</Text>
                            <Icon size={20} style={styles.deleteMark} onPress={() => props.deleteTask(task)} name="backspace"/>
                        </View>
                    ))}
                </View>
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
    icon: {
        marginRight: 10,
        left: 280,
        bottom: 80,
        padding: 10,
        borderRadius: 50
    },
    subHeader: {
        fontSize: 26,
        marginBottom: 10,
        fontWeight: "500",
    },
    page: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        left: 60
    },
    task: {
        flexDirection: "row"
    },
    checkMark: {
        paddingRight: 10
    },
    text: {
        fontSize: 26,
        bottom: 8,
        marginBottom: 10,
        fontWeight: "500",
    },
    strikeText: {
        fontSize: 26,
        bottom: 8,
        marginBottom: 10,
        fontWeight: "500",
        textDecorationLine: 'line-through'
    },
    deleteMark: {
        paddingLeft: 10
    }
})

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, {fillRedux, completeTask, deleteTask})(Home);