import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Box, ScrollView } from 'native-base';
import FrontCover from '../../atoms/frontcover/FrontCover';
import PageCardBody from '../../molecules/pagecardbody/PageCardBody';

function PageCard({ header, subheader, imgsrc, location, description }) {
    const [height, setHeight] = React.useState(0);

    return (
        <ScrollView
            contentContainerStyle={styles.card}
            onLayout={event => {
                setHeight(event.nativeEvent.layout.height);
            }}>
            <FrontCover
                header={header}
                subheader={subheader}
                imgsrc={imgsrc}
                height={height}
                location={location}
            />
            <PageCardBody description={description} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: { flexGrow: 1, borderRadius: 20 },
});

export default PageCard;
