import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, GlobalStyles } from '../styles'
import RoundedButton from './RoundedButton'

const ModalContent = (props) => {
  const {
    visibility,
    loading,
    success,
    message,
    positiveButtonTitle,
    negativeButtonTitle,
    positiveAction,
    negativeAction,
    type = 'info' // 'info' or 'error'
  } = props

  const iconName = type === 'info' ? 'info-circle' : 'exclamation-circle'
  const iconColor = type === 'info' ? Colors.darkBg : Colors.danger

  const renderLoading = () => {
    return (
      <View style={(GlobalStyles.modalCenter, GlobalStyles.modalLoading)}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
        <Text style={GlobalStyles.regularBoldText}>Loading</Text>
      </View>
    )
  }

  const renderContent = () => {
    return (
      <View style={GlobalStyles.modalCenter}>
        <View style={GlobalStyles.modalMessageContent}>
          <Icon name={iconName} size={36} color={iconColor} />
          <View style={{ paddingLeft: 16 }}>
            <Text style={GlobalStyles.regularBoldText}>{message}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {negativeButtonTitle && negativeAction && (
            <RoundedButton
              title={negativeButtonTitle}
              type="flat"
              onPressHandler={negativeAction}
              widthButton="50%"
            />
          )}
          {positiveButtonTitle && positiveAction && (
            <RoundedButton
              title={positiveButtonTitle}
              type="flat"
              onPressHandler={positiveAction}
              widthButton="50%"
            />
          )}
        </View>
      </View>
    )
  }

  return (
    <Modal isVisible={visibility} backdropOpacity={0.5} transparent={true}>
      <View style={GlobalStyles.modalLoadingContainer}>
        {loading ? renderLoading() : !success ? renderContent() : null}
      </View>
    </Modal>
  )
}

export default ModalContent
