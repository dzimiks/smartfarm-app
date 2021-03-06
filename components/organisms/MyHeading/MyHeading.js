import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, SafeAreaView, StatusBar } from 'react-native'

import MyHeadingStyle from './MyHeading.styles'
import * as appActions from '../../../redux/actions'
import { getPadding } from '../../../utils/styles-util'
import MyButton from '../../atoms/MyButton/MyButton'
import MyText from '../../atoms/MyText/MyText'
import { bindActionCreators } from 'redux'

@connect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class MyHeading extends Component {
  getLeftContent = sceneProps => {
    const { hideBack, customBack } = sceneProps
    const { actions, scenes } = this.props
    if (customBack) {
      return (
        <MyButton
          basic
          onPress={() => {
            actions.navigateTo(customBack)
          }}
        >
          Back
        </MyButton>
      )
    }

    const backScreenName = scenes[this.props.index - 1]
      ? scenes[this.props.index - 1].route.routeName
      : ''

    // By default if scene prop hideBack is true or it's first screen in the stack, hide back arrow
    return this.props.scene.index === 0 || hideBack === true ? null : (
      <MyButton
        basic
        onPress={() => {
          actions.navigateBack(backScreenName)
        }}
      >
        Back
      </MyButton>
    )
  }

  getRightContent = sceneProps => {
    const { right } = sceneProps
    const rightType = right

    return {
      signup: (
        <MyButton
          basic
          onPress={() => {
            this.props.actions.navigateTo('SignUp')
          }}
        >
          Sign up
        </MyButton>
      ),
      login: (
        <MyButton
          basic
          onPress={() => {
            this.props.actions.navigateTo('SignIn')
          }}
        >
          Log in
        </MyButton>
      ),
      logout: (
        <MyButton basic onPress={() => this.props.actions.navigateTo('SignIn')}>
          Logout
        </MyButton>
      )
    }[rightType]
  }

  getCenterContent = sceneProps => {
    const { title, customCenterComponent } = sceneProps
    const style = MyHeadingStyle

    return (
      <View style={style.center}>
        {customCenterComponent ? (
          <Fragment>{customCenterComponent}</Fragment>
        ) : (
          <MyText style={style.headerTitle} align='center' type='H3'>
            {title || ''}
          </MyText>
        )}
      </View>
    )
  }

  getContent = () => {
    const scene = this.props.scene.descriptor

    const style = MyHeadingStyle
    const paddings = getPadding('15 20 15 20')

    return (
      <View style={[style.content, paddings]}>
        <View style={style.left}>{this.getLeftContent(scene.options)}</View>
        {this.getCenterContent(scene.options)}
        <View style={style.right}>{this.getRightContent(scene.options)}</View>
      </View>
    )
  }

  render () {
    let containerStyle
    const scene = this.props.scene.descriptor
    const { headerSameColor, transparent } = scene.options
    const style = MyHeadingStyle

    if (headerSameColor) {
      containerStyle = style.sameBackground
    } else if (transparent) {
      containerStyle = style.transparentBackground
    } else {
      containerStyle = style.headingBackground
    }

    const Content = this.getContent

    return (
      <SafeAreaView style={containerStyle}>
        <StatusBar barStyle={'dark-content'} />
        <Content />
      </SafeAreaView>
    )
  }
}

export default MyHeading
