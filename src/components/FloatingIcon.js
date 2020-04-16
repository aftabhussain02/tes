import React from "react";
import { Icon } from "react-native-elements";
import { colors } from "../constant";

export const FloatingIcon = props => (
  <Icon
    reverse
    containerStyle={styles.container}
    color={colors.secondary}
    {...props}
    size={30}
  />
);

const styles = {
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
    overflow: "hidden",
    zIndex: 1000
  }
};
