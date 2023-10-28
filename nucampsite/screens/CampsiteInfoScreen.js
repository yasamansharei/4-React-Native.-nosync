import RenderCampsite from '../features/campsites/RenderCampsite';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { COMMENTS } from 'm../shared/comments'

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const [comments, setComments] = useState(COMMENTS);
    return (

        
    )
};

export default CampsiteInfoScreen;