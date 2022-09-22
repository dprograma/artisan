import React from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux'


const Dashboard = (props)=> {
    console.log("PROPS: ", props)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Dashboard</Text>
        </View>
    );
}

const mapStateToProps = (state) => ({
    user: state.userState
})

export default connect(mapStateToProps, null)(Dashboard);