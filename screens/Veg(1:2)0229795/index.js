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
      <View style={styles.View_14_5}>
        <View style={styles.View_9_19}>
          <Text style={styles.Text_9_19}>Roti ki Tokri</Text>
        </View>
        <View style={styles.View_6_8}>
          <Text style={styles.Text_6_8}>Breakfast/Snacks</Text>
        </View>
        <View style={styles.View_6_33}>
          <View style={styles.View_6_7}>
            <Text style={styles.Text_6_7}>Pohe</Text>
          </View>
          <View style={styles.View_6_10}>
            <Text style={styles.Text_6_10}>Upma</Text>
          </View>
          <View style={styles.View_6_11}>
            <Text style={styles.Text_6_11}>Idli chutney sambhar</Text>
          </View>
          <View style={styles.View_12_1}>
            <Text style={styles.Text_12_1}>Stuff Idli</Text>
          </View>
          <View style={styles.View_12_2}>
            <Text style={styles.Text_12_2}>Buttter Masala Idli</Text>
          </View>
          <View style={styles.View_6_13}>
            <Text style={styles.Text_6_13}>Vada pav</Text>
          </View>
          <View style={styles.View_6_14}>
            <Text style={styles.Text_6_14}>Medu vada sambhar</Text>
          </View>
          <View style={styles.View_6_20}>
            <Text style={styles.Text_6_20}>Dahi vada</Text>
          </View>
          <View style={styles.View_6_16}>
            <Text style={styles.Text_6_16}>Sabudana khichdi</Text>
          </View>
          <View style={styles.View_6_19}>
            <Text style={styles.Text_6_19}>Sabudana vada</Text>
          </View>
          <View style={styles.View_6_17}>
            <Text style={styles.Text_6_17}>Bread pakoda</Text>
          </View>
          <View style={styles.View_6_15}>
            <Text style={styles.Text_6_15}>Dahi ke sholey</Text>
          </View>
          <View style={styles.View_6_18}>
            <Text style={styles.Text_6_18}>Bread roll</Text>
          </View>
          <View style={styles.View_6_27}>
            <Text style={styles.Text_6_27}>Cutlet</Text>
          </View>
          <View style={styles.View_14_3}>
            <Text style={styles.Text_14_3}>Ragda Pattice</Text>
          </View>
          <View style={styles.View_14_1}>
            <Text style={styles.Text_14_1}>Tikki Chat</Text>
          </View>
          <View style={styles.View_14_2}>
            <Text style={styles.Text_14_2}>Samosa Chat</Text>
          </View>
          <View style={styles.View_6_28}>
            <Text style={styles.Text_6_28}>Misal pav</Text>
          </View>
          <View style={styles.View_12_3}>
            <Text style={styles.Text_12_3}>Pav Bhaji</Text>
          </View>
          <View style={styles.View_6_30}>
            <Text style={styles.Text_6_30}>Masala dosa</Text>
          </View>
          <View style={styles.View_6_31}>
            <Text style={styles.Text_6_31}>Uttapa</Text>
          </View>
          <View style={styles.View_6_58}>
            <Text style={styles.Text_6_58}>Pyaaz Pakoda</Text>
          </View>
          <View style={styles.View_6_59}>
            <Text style={styles.Text_6_59}>Aaloo Pakoda</Text>
          </View>
          <View style={styles.View_6_60}>
            <Text style={styles.Text_6_60}>Moong Pakoda</Text>
          </View>
          <View style={styles.View_6_61}>
            <Text style={styles.Text_6_61}>Paneer Pakoda</Text>
          </View>
          <View style={styles.View_12_4}>
            <Text style={styles.Text_12_4}>Paneer Tikka</Text>
          </View>
          <View style={styles.View_12_5}>
            <Text style={styles.Text_12_5}>Paneer Hariyali Tikka</Text>
          </View>
          <View style={styles.View_12_6}>
            <Text style={styles.Text_12_6}>Paneer Aachari Tikka</Text>
          </View>
        </View>
        <View style={styles.View_9_3}>
          <View style={styles.View_9_4}>
            <Text style={styles.Text_9_4}>Shahi Panner</Text>
          </View>
          <View style={styles.View_9_5}>
            <Text style={styles.Text_9_5}>Mix Veg</Text>
          </View>
          <View style={styles.View_9_6}>
            <Text style={styles.Text_9_6}>Bhendi Masala</Text>
          </View>
          <View style={styles.View_9_7}>
            <Text style={styles.Text_9_7}>Stuff Capsicum</Text>
          </View>
          <View style={styles.View_9_8}>
            <Text style={styles.Text_9_8}>Mushroom Masala</Text>
          </View>
          <View style={styles.View_9_9}>
            <Text style={styles.Text_9_9}>Masale Bhat</Text>
          </View>
          <View style={styles.View_9_10}>
            <Text style={styles.Text_9_10}>Veg Biriyani</Text>
          </View>
          <View style={styles.View_9_11}>
            <Text style={styles.Text_9_11}>Chole Bhatture</Text>
          </View>
          <View style={styles.View_9_12}>
            <Text style={styles.Text_9_12}>Mutter Panner</Text>
          </View>
        </View>
        <View style={styles.View_9_13}>
          <Text style={styles.Text_9_13}>Veg Main Course</Text>
        </View>
        <View style={styles.View_9_14}>
          <View style={styles.View_9_15}>
            <Text style={styles.Text_9_15}>Chapaati</Text>
          </View>
          <View style={styles.View_9_16}>
            <Text style={styles.Text_9_16}>Bhakri(Bajra/Rice)</Text>
          </View>
          <View style={styles.View_9_17}>
            <Text style={styles.Text_9_17}>Neer Dosa</Text>
          </View>
          <View style={styles.View_9_18}>
            <Text style={styles.Text_9_18}>Amboli</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c47/b9bf/132ea85c9eceb9f0d8c3b269bbdc58a2"
        }}
        style={styles.ImageBackground_12_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f5/4674/788d024d3510e049c325130d00956b39"
        }}
        style={styles.ImageBackground_11_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6684/ac36/6b2bb64ef66c2b4daf972f9ef729d790"
        }}
        style={styles.ImageBackground_14_0}
      />
      <View style={styles.View_14_4}>
        <Text style={styles.Text_14_4}>9730550521/9730550707</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_14_5: {
    width: wp("86.125%"),
    minWidth: wp("86.125%"),
    height: hp("196.7589664980362%"),
    minHeight: hp("196.7589664980362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.75%"),
    top: hp("114.34426229508196%")
  },
  View_9_19: {
    width: wp("25.624999999999996%"),
    minWidth: wp("25.624999999999996%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("76.36612021857923%")
  },
  Text_9_19: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_8: {
    width: wp("39.25%"),
    minWidth: wp("39.25%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_8: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_33: {
    width: wp("39.875%"),
    minWidth: wp("39.875%"),
    height: hp("187.87918507727116%"),
    minHeight: hp("187.87918507727116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.75%"),
    top: hp("8.879781420765028%")
  },
  View_6_7: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_10: {
    width: wp("11.5%"),
    minWidth: wp("11.5%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%")
  },
  Text_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_11: {
    width: wp("39.875%"),
    minWidth: wp("39.875%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792376%")
  },
  Text_6_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_1: {
    width: wp("14.75%"),
    minWidth: wp("14.75%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.491803278688536%")
  },
  Text_12_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_2: {
    width: wp("33.625%"),
    minWidth: wp("33.625%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584696%")
  },
  Text_12_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_13: {
    width: wp("18.375%"),
    minWidth: wp("18.375%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.153005464480884%")
  },
  Text_6_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_14: {
    width: wp("39.5%"),
    minWidth: wp("39.5%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.983606557377044%")
  },
  Text_6_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_20: {
    width: wp("19.25%"),
    minWidth: wp("19.25%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.96721311475409%")
  },
  Text_6_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_16: {
    width: wp("34.125%"),
    minWidth: wp("34.125%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.30601092896177%")
  },
  Text_6_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_19: {
    width: wp("30.375000000000004%"),
    minWidth: wp("30.375000000000004%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.13661202185793%")
  },
  Text_6_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_17: {
    width: wp("26.625%"),
    minWidth: wp("26.625%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.47540983606558%")
  },
  Text_6_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_15: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.81420765027323%")
  },
  Text_6_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_18: {
    width: wp("17.75%"),
    minWidth: wp("17.75%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316942%")
  },
  Text_6_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_27: {
    width: wp("11.375%"),
    minWidth: wp("11.375%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.7978142076503%")
  },
  Text_6_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_3: {
    width: wp("26.5%"),
    minWidth: wp("26.5%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.62841530054644%")
  },
  Text_14_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("102.45901639344262%")
  },
  Text_14_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_2: {
    width: wp("25.75%"),
    minWidth: wp("25.75%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.9344262295082%")
  },
  Text_14_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_28: {
    width: wp("17.75%"),
    minWidth: wp("17.75%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.19672131147539%")
  },
  Text_6_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_3: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("119.672131147541%")
  },
  Text_12_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_30: {
    width: wp("24.25%"),
    minWidth: wp("24.25%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("126.50273224043715%")
  },
  Text_6_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_31: {
    width: wp("12.875%"),
    minWidth: wp("12.875%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133.33333333333334%")
  },
  Text_6_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_58: {
    width: wp("26.25%"),
    minWidth: wp("26.25%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("140.16393442622947%")
  },
  Text_6_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_59: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("146.99453551912566%")
  },
  Text_6_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_60: {
    width: wp("28.125%"),
    minWidth: wp("28.125%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("153.8251366120219%")
  },
  Text_6_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_61: {
    width: wp("28.375%"),
    minWidth: wp("28.375%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160.65573770491804%")
  },
  Text_6_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_4: {
    width: wp("28.375%"),
    minWidth: wp("28.375%"),
    minHeight: hp("7.264308199856451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("167.48633879781423%")
  },
  Text_12_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_5: {
    width: wp("38.5%"),
    minWidth: wp("38.5%"),
    minHeight: hp("7.004868137380464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("174.31693989071036%")
  },
  Text_12_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_6: {
    width: wp("39.125%"),
    minWidth: wp("39.125%"),
    minHeight: hp("7.004868137380464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("180.8743169398907%")
  },
  Text_12_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_3: {
    width: wp("34.875%"),
    minWidth: wp("34.875%"),
    height: hp("60.79234972677595%"),
    minHeight: hp("60.79234972677595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.25%"),
    top: hp("8.879781420765028%")
  },
  View_9_4: {
    width: wp("24.75%"),
    minWidth: wp("24.75%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.153005464480884%")
  },
  Text_9_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_6: {
    width: wp("27.625%"),
    minWidth: wp("27.625%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792376%")
  },
  Text_9_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7: {
    width: wp("28.875%"),
    minWidth: wp("28.875%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.491803278688536%")
  },
  Text_9_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8: {
    width: wp("34.875%"),
    minWidth: wp("34.875%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.322404371584696%")
  },
  Text_9_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_9: {
    width: wp("23.125%"),
    minWidth: wp("23.125%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.64480874316942%")
  },
  Text_9_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_10: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.81420765027323%")
  },
  Text_9_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_11: {
    width: wp("28.125%"),
    minWidth: wp("28.125%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.983606557377044%")
  },
  Text_9_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_12: {
    width: wp("26.375%"),
    minWidth: wp("26.375%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%")
  },
  Text_9_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_13: {
    width: wp("37.125%"),
    minWidth: wp("37.125%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%")
  },
  Text_9_13: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_14: {
    width: wp("34.25%"),
    minWidth: wp("34.25%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.37500000000001%"),
    top: hp("84.8360655737705%")
  },
  View_9_15: {
    width: wp("17.75%"),
    minWidth: wp("17.75%"),
    minHeight: hp("5.6227506835603975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_9_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_16: {
    width: wp("34.25%"),
    minWidth: wp("34.25%"),
    minHeight: hp("5.6227506835603975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.37165540684768%")
  },
  Text_9_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_17: {
    width: wp("19.25%"),
    minWidth: wp("19.25%"),
    minHeight: hp("5.6227506835603975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.74331081369536%")
  },
  Text_9_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_18: {
    width: wp("13.25%"),
    minWidth: wp("13.25%"),
    minHeight: hp("5.6227506835603975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.114949544270814%")
  },
  Text_9_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_0: {
    width: wp("74.75%"),
    minWidth: wp("74.75%"),
    height: hp("84.42622950819673%"),
    minHeight: hp("84.42622950819673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.125%"),
    top: hp("17.48633879781421%"),
    resizeMode: "cover"
  },
  ImageBackground_11_1: {
    width: wp("40.625%"),
    minWidth: wp("40.625%"),
    height: hp("44.12568306010929%"),
    minHeight: hp("44.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5%"),
    top: hp("318.9890710382514%"),
    resizeMode: "cover"
  },
  ImageBackground_14_0: {
    width: wp("41.125%"),
    minWidth: wp("41.125%"),
    height: hp("44.12568306010929%"),
    minHeight: hp("44.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.50000000000001%"),
    top: hp("318.9890710382514%"),
    resizeMode: "cover"
  },
  View_14_4: {
    width: wp("59.25%"),
    minWidth: wp("59.25%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.375%"),
    top: hp("89.75409836065575%")
  },
  Text_14_4: {
    color: "rgba(237, 24, 24, 1)",
    fontSize: 32,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 2815 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
