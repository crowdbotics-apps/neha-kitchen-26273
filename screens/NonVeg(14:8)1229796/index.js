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
      <View style={styles.View_15_33}>
        <View style={styles.View_14_61}>
          <View style={styles.View_14_62}>
            <Text style={styles.Text_14_62}>Chicken Tikka</Text>
          </View>
          <View style={styles.View_14_63}>
            <Text style={styles.Text_14_63}>Chicken Achari Kabab</Text>
          </View>
          <View style={styles.View_14_64}>
            <Text style={styles.Text_14_64}>Chicken Pahadi Kabab</Text>
          </View>
          <View style={styles.View_14_65}>
            <Text style={styles.Text_14_65}>Chicken Kalimiri Kabab</Text>
          </View>
          <View style={styles.View_14_66}>
            <Text style={styles.Text_14_66}>Chicken Suka</Text>
          </View>
          <View style={styles.View_14_67}>
            <Text style={styles.Text_14_67}>Mutton Suka</Text>
          </View>
          <View style={styles.View_14_68}>
            <Text style={styles.Text_14_68}>Kheema Pattice</Text>
          </View>
          <View style={styles.View_14_69}>
            <Text style={styles.Text_14_69}>Kheema Batawa</Text>
          </View>
          <View style={styles.View_14_75}>
            <Text style={styles.Text_14_75}>Kheema Pocket</Text>
          </View>
          <View style={styles.View_14_70}>
            <Text style={styles.Text_14_70}>Kaleji Fry</Text>
          </View>
          <View style={styles.View_14_71}>
            <Text style={styles.Text_14_71}>Kheema Pav</Text>
          </View>
          <View style={styles.View_14_72}>
            <Text style={styles.Text_14_72}>Chicken Kin Pin</Text>
          </View>
          <View style={styles.View_14_73}>
            <Text style={styles.Text_14_73}>Chicken Chesse Cutlet</Text>
          </View>
        </View>
        <View style={styles.View_14_74}>
          <Text style={styles.Text_14_74}>Non-Veg Starters</Text>
        </View>
        <View style={styles.View_15_2}>
          <View style={styles.View_15_3}>
            <Text style={styles.Text_15_3}>Rassa</Text>
          </View>
          <View style={styles.View_15_4}>
            <Text style={styles.Text_15_4}>Masala</Text>
          </View>
          <View style={styles.View_15_5}>
            <Text style={styles.Text_15_5}>Fry</Text>
          </View>
        </View>
        <View style={styles.View_15_6}>
          <Text style={styles.Text_15_6}>(As per availability)</Text>
        </View>
        <View style={styles.View_15_7}>
          <Text style={styles.Text_15_7}>Sea Food</Text>
        </View>
        <View style={styles.View_15_8}>
          <View style={styles.View_15_9}>
            <Text style={styles.Text_15_9}>Chiken Aachar</Text>
          </View>
          <View style={styles.View_15_10}>
            <Text style={styles.Text_15_10}>Prawns Aachar</Text>
          </View>
        </View>
        <View style={styles.View_16_2}>
          <View style={styles.View_16_3}>
            <Text style={styles.Text_16_3}>Chiken Biriyani</Text>
          </View>
          <View style={styles.View_16_4}>
            <Text style={styles.Text_16_4}>Mutton Biriyani</Text>
          </View>
          <View style={styles.View_16_6}>
            <Text style={styles.Text_16_6}>Prawns Biriyani</Text>
          </View>
        </View>
        <View style={styles.View_15_13}>
          <Text style={styles.Text_15_13}>Our Speciality</Text>
        </View>
        <View style={styles.View_16_5}>
          <Text style={styles.Text_16_5}>Biriyani</Text>
        </View>
      </View>
      <View style={styles.View_15_22}>
        <View style={styles.View_15_14}>
          <Text style={styles.Text_15_14}>We accept daily tiffin orders. </Text>
        </View>
        <View style={styles.View_15_15}>
          <Text style={styles.Text_15_15}>
            Our motto is providing best quality and hygenic food
          </Text>
        </View>
        <View style={styles.View_15_16}>
          <Text style={styles.Text_15_16}>
            Kindly place your orders prior one day
          </Text>
        </View>
        <View style={styles.View_15_17}>
          <Text style={styles.Text_15_17}>
            We accept orders for small parties(max 25-30 people)
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de2/95e4/50d85cc4891333e74e1583f8bd96449f"
          }}
          style={styles.ImageBackground_15_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de2/95e4/50d85cc4891333e74e1583f8bd96449f"
          }}
          style={styles.ImageBackground_15_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de2/95e4/50d85cc4891333e74e1583f8bd96449f"
          }}
          style={styles.ImageBackground_15_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de2/95e4/50d85cc4891333e74e1583f8bd96449f"
          }}
          style={styles.ImageBackground_15_21}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd7d/88c4/401fe54927fa2ef064b6fde8ebce2a42"
        }}
        style={styles.ImageBackground_6_150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719e/6933/07a94d91c65f5af3c5458cd468c8663c"
        }}
        style={styles.ImageBackground_15_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/190c/fce8/bd6c1a54890f2b812a1d52d0c14d7688"
        }}
        style={styles.ImageBackground_15_32}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_15_33: {
    width: wp("84.25%"),
    minWidth: wp("84.25%"),
    height: hp("91.39344262295081%"),
    minHeight: hp("91.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.375%"),
    top: hp("68.5792349726776%")
  },
  View_14_61: {
    width: wp("44.75%"),
    minWidth: wp("44.75%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("6.147540983606561%")
  },
  View_14_62: {
    width: wp("25.5%"),
    minWidth: wp("25.5%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_63: {
    width: wp("41.625%"),
    minWidth: wp("41.625%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.83060109289616%")
  },
  Text_14_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_64: {
    width: wp("42.75%"),
    minWidth: wp("42.75%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("12.704918032786878%")
  },
  Text_14_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_65: {
    width: wp("44.375%"),
    minWidth: wp("44.375%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("19.535519125683066%")
  },
  Text_14_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_66: {
    width: wp("25.25%"),
    minWidth: wp("25.25%"),
    minHeight: hp("7.132939302204737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("52.73224043715845%")
  },
  Text_14_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_67: {
    width: wp("23.25%"),
    minWidth: wp("23.25%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("59.562841530054655%")
  },
  Text_14_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_68: {
    width: wp("29.75%"),
    minWidth: wp("29.75%"),
    minHeight: hp("7.132939302204737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("25.40983606557377%")
  },
  Text_14_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_69: {
    width: wp("31.125000000000004%"),
    minWidth: wp("31.125000000000004%"),
    minHeight: hp("7.132939302204737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("39.07103825136612%")
  },
  Text_14_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_75: {
    width: wp("31.125000000000004%"),
    minWidth: wp("31.125000000000004%"),
    minHeight: hp("7.132939302204737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("45.90163934426228%")
  },
  Text_14_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_70: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("65.7103825136612%")
  },
  Text_14_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_71: {
    width: wp("23.5%"),
    minWidth: wp("23.5%"),
    minHeight: hp("7.132939302204737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.240437158469945%")
  },
  Text_14_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_72: {
    width: wp("28.249999999999996%"),
    minWidth: wp("28.249999999999996%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.375%"),
    top: hp("72.26775956284153%")
  },
  Text_14_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_73: {
    width: wp("42.375%"),
    minWidth: wp("42.375%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.0983606557377%")
  },
  Text_14_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_74: {
    width: wp("32.625%"),
    minWidth: wp("32.625%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_74: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_2: {
    width: wp("13.750000000000002%"),
    minWidth: wp("13.750000000000002%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.875%"),
    top: hp("12.15846994535518%")
  },
  View_15_3: {
    width: wp("11.375%"),
    minWidth: wp("11.375%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_4: {
    width: wp("13.750000000000002%"),
    minWidth: wp("13.750000000000002%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%")
  },
  Text_15_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_5: {
    width: wp("5.5%"),
    minWidth: wp("5.5%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360663%")
  },
  Text_15_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_6: {
    width: wp("30.5%"),
    minWidth: wp("30.5%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.75%"),
    top: hp("6.147540983606561%")
  },
  Text_15_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_7: {
    width: wp("17.625%"),
    minWidth: wp("17.625%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.75%"),
    top: hp("0%")
  },
  Text_15_7: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_8: {
    width: wp("28.249999999999996%"),
    minWidth: wp("28.249999999999996%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.50000000000001%"),
    top: hp("41.393442622950815%")
  },
  View_15_9: {
    width: wp("27.625%"),
    minWidth: wp("27.625%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_10: {
    width: wp("28.249999999999996%"),
    minWidth: wp("28.249999999999996%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%")
  },
  Text_15_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_2: {
    width: wp("28.249999999999996%"),
    minWidth: wp("28.249999999999996%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.75%"),
    top: hp("63.66120218579235%")
  },
  View_16_3: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_4: {
    width: wp("27.750000000000004%"),
    minWidth: wp("27.750000000000004%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606575%")
  },
  Text_16_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_6: {
    width: wp("28.125%"),
    minWidth: wp("28.125%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.125%"),
    top: hp("12.295081967213122%")
  },
  Text_16_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_13: {
    width: wp("26.125%"),
    minWidth: wp("26.125%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.75%"),
    top: hp("34.28961748633881%")
  },
  Text_15_13: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_5: {
    width: wp("14.124999999999998%"),
    minWidth: wp("14.124999999999998%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("56.55737704918033%")
  },
  Text_16_5: {
    color: "rgba(13, 17, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_22: {
    width: wp("92.75%"),
    minWidth: wp("92.75%"),
    height: hp("66.25925699869791%"),
    minHeight: hp("66.25925699869791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("176.775956284153%")
  },
  View_15_14: {
    width: wp("67.15191650390625%"),
    minWidth: wp("67.15191650390625%"),
    minHeight: hp("8.880993577300526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.509902954101561%"),
    top: hp("0%")
  },
  Text_15_14: {
    color: "rgba(255, 41, 41, 1)",
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_15: {
    width: wp("79.09003448486328%"),
    minWidth: wp("79.09003448486328%"),
    minHeight: hp("17.76198715460105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.509902954101561%"),
    top: hp("10.245901639344254%")
  },
  Text_15_15: {
    color: "rgba(255, 41, 41, 1)",
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_16: {
    width: wp("73.00618743896484%"),
    minWidth: wp("73.00618743896484%"),
    minHeight: hp("17.76198715460105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.509902954101561%"),
    top: hp("29.371584699453564%")
  },
  Text_15_16: {
    color: "rgba(255, 41, 41, 1)",
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_17: {
    width: wp("87.24009704589844%"),
    minWidth: wp("87.24009704589844%"),
    minHeight: hp("17.76198715460105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.509902954101561%"),
    top: hp("48.497267759562845%")
  },
  Text_15_17: {
    color: "rgba(255, 41, 41, 1)",
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_18: {
    width: wp("2.2957921028137207%"),
    minWidth: wp("2.2957921028137207%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7759562841529828%")
  },
  ImageBackground_15_19: {
    width: wp("2.2957921028137207%"),
    minWidth: wp("2.2957921028137207%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.158469945355193%")
  },
  ImageBackground_15_20: {
    width: wp("2.2957921028137207%"),
    minWidth: wp("2.2957921028137207%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.284153005464475%")
  },
  ImageBackground_15_21: {
    width: wp("2.2957921028137207%"),
    minWidth: wp("2.2957921028137207%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.40983606557376%")
  },
  ImageBackground_6_150: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.75%"),
    top: hp("245.21857923497268%")
  },
  ImageBackground_15_29: {
    width: wp("38.25%"),
    minWidth: wp("38.25%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.125%"),
    top: hp("17.89617486338798%")
  },
  ImageBackground_15_32: {
    width: wp("39.5%"),
    minWidth: wp("39.5%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.875%"),
    top: hp("17.89617486338798%"),
    resizeMode: "cover"
  },
  View_2: { height: 2289 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
