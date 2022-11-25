import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: moderateScale(16),
        alignItems: 'center'
    },
    logoStyle: {
        width: width/1,
        height: height/2,
        alignSelf:'center'

    },
    headingStyle: {
        fontSize: textScale(32),
        fontFamily: fontFamily.bold,
        alignSelf:'center',
        color: colors.white,
    },
    descStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        marginTop: moderateScaleVertical(16),
        color: colors.white,
    },
    agreeStyle: {
        fontSize: textScale(23),
        fontFamily: fontFamily.bold,
        marginTop: moderateScaleVertical(24),
        color: colors.lightBlue,
        alignSelf:'center'
    }
})

export default styles