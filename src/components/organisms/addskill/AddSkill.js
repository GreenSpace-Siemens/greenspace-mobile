import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles/index';
import Header from '../../molecules/toolbar/ToolBar';

function AddSkill({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.background}></View>
            <View style={styles.form}>
                <Header
                    navigation={navigation}
                    title="Add New Skill"
                    leftButton="back"
                    rightButton="check"
                />
                <View style={styles.formBody}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.86,
        backgroundColor: Colors.GRAY_DARK,
    },
    form: {
        height: '100%',
        top: '59%',
        borderRadius: 20,
        backgroundColor: Colors.WHITE,
        padding: 20,
    },
    formBody: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'transparent',
    },
});

export default AddSkill;