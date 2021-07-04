import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet,
    FlatList,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Header } from '../components/Header';
import { ProgressBar } from '../components/ProgressBar';
import { Card } from '../components/Card';
import { ITaskResponse } from '../services/responses/systemResponses';
import { getTasks } from '../services/tasks';
import { useAuth } from '../contexts/auth';

export function Welcome() {
    const navigation = useNavigation();

    const [tasks, setTasks] = useState<ITaskResponse[] | undefined>();
    
    const { user } = useAuth();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    let icon="book";

    useEffect(() => {
        async function returnTasks() {
            const responseTasks = await getTasks(user?.classId as string);
            if(responseTasks) {
                setTasks(responseTasks);
            }
        }

        returnTasks();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Header />

            <ProgressBar />

            

            <View style={styles.tasks}>
                <FlatList 
                    data={tasks}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <Card 
                            color={colors.red}
                            icon={icon}
                            sendedTask={false}
                            avaliatedTask={false}
                            titleCard={item.discipline + " - " + item.title}
                            description="04 Abril | Pet 08 | Termina em 07 de Abril"
                            key={item.id}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />

                
                {/* {
                    tasks?.map((task) => {
                    
                        switch(task.discipline ) {
                            case 'Português':
                                icon="book"
                                break;
                            case 'Matemática':
                                icon="calculator"
                                break;
                            case 'Geografia':
                                icon="globe"
                                break;
                        }

                        return <Card 
                            color={colors.red}
                            icon={icon}
                            sendedTask={false}
                            avaliatedTask={false}
                            titleCard={task.discipline + " - " + task.title}
                            description="04 Abril | Pet 08 | Termina em 07 de Abril"
                            key={task.id}
                        />
                    })
                } */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapper: {
        
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    tasks: {
        flex: 1,
        marginTop: 20,
        height: 550,
        paddingHorizontal: 20,
    }
})