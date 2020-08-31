import React from "react";
import { Icon } from "react-icons-kit";
import { buttonClose } from "react-icons-kit/metrize/buttonClose";
import { happyOutline } from "react-icons-kit/ionicons/happyOutline";
import { androidSad } from "react-icons-kit/ionicons/androidSad";
export const OutlinedClose = () => <Icon icon={buttonClose} size={56} />;

export const Happy = ({ style }) => (
  <Icon style={style} icon={happyOutline} size={47} />
);

export const Sad = ({ style }) => (
  <Icon style={style} icon={androidSad} size={47} />
);
