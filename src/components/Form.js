import React, {Component, Children} from 'react';
import {View, Text} from 'react-native';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: true,
    };
  }
  waitFor = ms => new Promise(r => setTimeout(r, ms));

  functionWithPromise = item => {
    //a function that returns a promise
    return Promise.resolve('ok');
  };

  anAsyncFunction = async item => {
    return await this.functionWithPromise(item);
  };

  validate = async () => {
    let valid = true;
    let {children} = this.props;
    if (!Array.isArray(children)) {
      children = [children];
    }
    const requests = await children.map(async (_, i) => {
      return new Promise(async (resolve, reject) => {
        const childName = 'child' + i;
        const refrence = this.refs[childName];
        if ('validator' in refrence) {
          const validator = await refrence.validator();
          if (validator.errors.length) {
            valid = false;
            resolve(false);
          } else {
            resolve(true);
          }
        }
        resolve(true);
      });
    });
    return Promise.all(requests).then(() =>
      valid ? Promise.resolve() : Promise.reject(),
    );
  };

  render() {
    const children = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        ref: `child${index}`,
        errors: this.props.errors,
        onChangeText: this.props.onChangeText,
      }),
    );

    return <View style={[{width: '100%'}, this.props.style]}>{children}</View>;
  }
}
