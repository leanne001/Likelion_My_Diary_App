import React from "react"
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native"
import {AntDesign} from "@expo/vector-icons"

const {width, height} = Dimensions.get('window');

const TodoItem= () => (
    <View style={styles.todoContainer}>
        <View>
            <TouchableOpacity>
                <AntDesign name="checkcircle" size={20}/>
            </TouchableOpacity>
            <Text style={styles.todos}>할 일 1</Text>
            <TouchableOpacity>
                <AntDesign name="close" size={20}/>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomwidth: 1,
        width: width-40
    },
    todos: {
        fontSize: 20
    },
    objContainer: {
        flexDirection: 'row'
    }
})

export default TodoItem;