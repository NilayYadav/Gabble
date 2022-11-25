//import liraries
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import RoundImage from '../../Components/RoundImage';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import colors from '../../styles/colors';

// create a component
const Message = ({ route, navigation }) => {

    const [messages, setMessages] = useState([]);

    console.log("route", route)
    const { data } = route.params

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])



    const renderActions = useCallback(() => {
        return (
            <TouchableOpacity style={{ marginLeft: moderateScale(8), marginBottom: moderateScaleVertical(8) }}>
                <Image source={imagePath.icPlus} />
            </TouchableOpacity>
        )
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={styles.flexView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <Image source={imagePath.icBack} />
                        </TouchableOpacity>
                        <View style={styles.nameView}>
                            <RoundImage
                                size={40}
                                image={data?.profileImage}
                            />
                            <Text style={styles.nameTextStyle}>{data?.name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image source={imagePath.icVideo} />



                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: moderateScale(12) }}>


                            <Image source={imagePath.icCalls} />


                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>


            <ImageBackground source={imagePath.icBigLight} style={{ flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    textInputStyle={{
                        backgroundColor: colors.white,
                        borderRadius: moderateScale(20),
                        paddingHorizontal: moderateScale(12),
                        marignTop: moderateScaleVertical(6),
                        borderWidth: 0.8,
                        borderColor: colors.grey,
                        paddingTop: moderateScaleVertical(8),
                        color: '#808080'
                    }}
                    renderInputToolbar={props => {
                        return (
                            <InputToolbar
                                containerStyle={{ 
                                    backgroundColor: '#f6f6f6',
                                 }}

                                {...props}
                            />
                        )
                    }}
                    renderActions={renderActions}
                />
            </ImageBackground>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScaleVertical(8),
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(8),
        color: '#808080'
    },
    nameTextStyle: {
        fontFamily: fontFamily.regular,
        fontSize: textScale(16),
        marginLeft: moderateScale(8),
        color: '#808080'
    }
});

//make this component available to the app
export default Message;
