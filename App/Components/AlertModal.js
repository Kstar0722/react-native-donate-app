import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/AlertMessageStyles'

export default class AlertModal extends Component {
    static defaultProps = { show: true }

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
        style: PropTypes.object,
        show: PropTypes.bool,
        modal : PropTypes.func
    }

    render() {
        let messageComponent = null
        if (this.props.show) {
            const { title, modal } = this.props
            return (
                <View style={styles.mainViewClone}>
                    <View style={styles.modalCover}>
                        <View style={styles.modalBody}>
                            <Text style={styles.smallText}>{title}</Text>
                            <TouchableOpacity style={styles.gotItBtn} onPress={() => { modal(false) }}>
                                <Text style={styles.gotItBtnTxt}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }

        return messageComponent
    }
}
