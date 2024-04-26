import { React, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

function TaskManager() {
    const [tasks, setTasks] = useState([])
    const [taskId, setTaskId] = useState(1)

    const addTask = () => {
        setTasks([...tasks, {
            id: taskId,
            title: 'New Task',
            completed: false,
        }])
        setTaskId(taskId + 1)
    }

    const clearTasks = () => {
        setTasks([])
    }

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(task => {
            // if the task ID exists, change the 'completed' variable
            if (task.id === id){
                return {
                    ...task,
                    completed : !task.completed
                }
            }
            return task
        })
        // update the tasks array with the mapped out version
        setTasks(updatedTasks)
      }

      return (
        <View style={styles.container}>
          <Button
            title="Add Task"
            onPress={addTask}
            color="#007bff" // You can customize the color as per your preference
          />
          <Button
            title="Clear Tasks"
            onPress={clearTasks}
            color="#007bff" // You can customize the color as per your preference
          />
          <View style={styles.taskContainer}>
            {tasks.map((task) => (
              <View style={styles.taskItem} key={task.id}>
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Button
                    title={task.completed ? '-' : '+'}
                    onPress={() => toggleTaskCompletion(task.id)}
                    color={task.completed ? '#28a745' : '#dc3545'} // Red for completed, green for not completed
                  />
                </View>
                <Text style={styles.taskStatus}>
                  {task.completed ? 'Completed' : 'Not Completed'}
                </Text>
              </View>
            ))}
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      taskContainer: {
        marginTop: 20,
      },
      taskItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
      },
      taskContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
      },
      taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
      },
      taskStatus: {
        fontStyle: 'italic',
        color: '#6c757d',
      },
      button: {
        margin: 10
      }
    });

    
    export default TaskManager;