import React from 'react'
import {Modal, View} from 'react-native'

export default class MyDialog extends React.PureComponent {

    render() {
        return (
            <Modal 
                animationType="fade"
                transparent={true}
                onRequestClose={() => {
                    this.setDialogVisible(!this.state.dialogVisible);
                    }}
                visible={this.props.visible}
                >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius:5}}>
                        {this.props.children}
                    </View>
            </Modal>
        );
    }
}