import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as appActions from '../../../redux/actions'
import RegularLayout from '../../layouts/RegularLayout/RegularLayout'
import MyText from '../../atoms/MyText/MyText'
import Card from '../../atoms/Card/Card'
import HomeScreenStyle from './HomeScreen.styles'
import TabBarIcon from '../../TabBarIcon'

const data = [
  {
    id: 1,
    image: 'http://www.ekapija.com/thumbs/njiva_traktor_131216_tw630.jpg',
    name: 'Njiva 1',
  },
  {
    id: 2,
    image: 'http://www.politika.rs/upload/Article/Image/2017_08/njive.jpg',
    name: 'Njiva 2 prejaka bre',
  },
  {
    id: 3,
    image:
      'http://seebiz.eu:8080/upload/seebiz_eu/upload/sc_autogenerated_PART_3/article/ar_188163/poljoprivreda_soja_1468_0_0_468X10000.jpg',
    name: 'Najjaca njiva ikada',
  },
]

@connect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
export default class HomeScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Lands',
  })

  renderAddMore = () => {
    const { actions } = this.props
    const style = HomeScreenStyle

    return (
      <TouchableOpacity
        style={style.addMore}
        onPress={() => {
          actions.navigateTo('AddLands')
        }}
      >
        <TabBarIcon focused name={'ios-add'} />
        <MyText type="H5" margin={'0 0 0 5'}>
          Add lands
        </MyText>
      </TouchableOpacity>
    )
  }

  renderLandsList = () =>
    data.map(land => (
      <Card
      key={land.id}
        padding="0 0 0 0"
        onPress={() => {
          this.props.actions.navigateTo('Lands', { id: land.id })
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, height: 100 }}
              resizeMode="cover"
              source={{ uri: land.image }}
            />
          </View>
          <View style={{ flex: 1, padding: 12 }}>
            <MyText type="H3" margin={'0 0 0 5'}>
              {land.name}
            </MyText>
            <MyText type="H5" margin={'0 0 0 5'}>
              Add lands
            </MyText>
          </View>
        </View>
      </Card>
    ))

  render() {
    const AddMore = this.renderAddMore
    const LandList = this.renderLandsList

    return (
      <RegularLayout>
        <AddMore />
        <LandList />
      </RegularLayout>
    )
  }
}