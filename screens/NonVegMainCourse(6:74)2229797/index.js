import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_6_87}>
        <View style={styles.View_6_88}>
          <Text style={styles.Text_6_88}>Chicken Rassa</Text>
        </View>
        <View style={styles.View_6_99}>
          <Text style={styles.Text_6_99}>Mutton Rassa</Text>
        </View>
        <View style={styles.View_6_89}>
          <Text style={styles.Text_6_89}>Chicken Masala</Text>
        </View>
        <View style={styles.View_6_101}>
          <Text style={styles.Text_6_101}>Kheema Masala</Text>
        </View>
        <View style={styles.View_6_103}>
          <Text style={styles.Text_6_103}>Hariyali Kaleji</Text>
        </View>
        <View style={styles.View_6_98}>
          <Text style={styles.Text_6_98}>Mutton Masala</Text>
        </View>
      </View>
      <View style={styles.View_6_92}>
        <Text style={styles.Text_6_92}>Non Veg main course</Text>
      </View>
      <View style={styles.View_6_144}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df6/cd07/d934e4ab3ca83fa3781be11aed10629e"
          }}
          style={styles.ImageBackground_6_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd1c/fa49/56141403ec7196ab3332056c1f8d0087"
          }}
          style={styles.ImageBackground_6_146}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_87: {
    width: wp("62.086513994910945%"),
    minWidth: wp("62.086513994910945%"),
    height: hp("45.76502732240437%"),
    minHeight: hp("45.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.249363867684478%"),
    top: hp("132.76575640902493%")
  },
  View_6_88: {
    width: wp("55.97964376590331%"),
    minWidth: wp("55.97964376590331%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_99: {
    width: wp("51.908396946564885%"),
    minWidth: wp("51.908396946564885%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.770491803278702%")
  },
  Text_6_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_89: {
    width: wp("60.81424936386769%"),
    minWidth: wp("60.81424936386769%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%")
  },
  Text_6_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_101: {
    width: wp("62.086513994910945%"),
    minWidth: wp("62.086513994910945%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%")
  },
  Text_6_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_103: {
    width: wp("50.63613231552163%"),
    minWidth: wp("50.63613231552163%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.61748633879782%")
  },
  Text_6_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_98: {
    width: wp("56.74300254452926%"),
    minWidth: wp("56.74300254452926%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.846994535519116%")
  },
  Text_6_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_92: {
    width: wp("81.93384223918575%"),
    minWidth: wp("81.93384223918575%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.870229007633588%"),
    top: hp("125.79854329427083%")
  },
  Text_6_92: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_144: {
    width: wp("75.68586897910703%"),
    minWidth: wp("75.68586897910703%"),
    height: hp("41.00965072548455%"),
    minHeight: hp("41.00965072548455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.411522319298664%"),
    top: hp("8.469945355191257%")
  },
  ImageBackground_6_145: {
    width: wp("75.68586897910703%"),
    minWidth: wp("75.68586897910703%"),
    height: hp("41.00965072548455%"),
    minHeight: hp("41.00965072548455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_146: {
    width: wp("75.68586897910703%"),
    minWidth: wp("75.68586897910703%"),
    height: hp("41.00965072548455%"),
    minHeight: hp("41.00965072548455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2: { height: 1680 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
