import React from 'react';
import { View, Image, Text} from 'react-native';
import PropTypes from 'prop-types'

const UserStory = props => {
    return (
        <View>
            <View>
                <Image source={require('../../assets/images/default_profile.png')}/>
            </View>
            <Text>
                {props.firstName}
            </Text>
        </View>
    );
}
UserStory.propTypes = {
    firstName: PropTypes.string.isRequired
}

export default UserStory;