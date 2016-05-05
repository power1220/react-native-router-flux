import React, {
  PropTypes,
} from 'react';
import {
  View,
} from 'react-native';
import DefaultRenderer from './DefaultRenderer';

const propTypes = {
  navigationState: PropTypes.shape({
    children: PropTypes.array,
  }),
};

export default function Modal(props: Object) {
  const children = props.navigationState.children;
  const state = children[0];

  return (
    <View style={{ flex: 1 }}>
      <DefaultRenderer navigationState={state} key={state.key} {...state} />
      {children.length > 1 && children.map((el, i) => {
        if (i > 0 && el.component) {
          const Component = el.component;
          return <Component key={el.key} {...el} />;
        }

        return null;
      })}
    </View>
  );
}

Modal.propTypes = propTypes;
