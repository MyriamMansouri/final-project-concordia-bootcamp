import React from "react";
import { Icon } from "react-icons-kit";
import { buttonClose } from "react-icons-kit/metrize/buttonClose";
import { chevronUp } from "react-icons-kit/feather/chevronUp";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import {happyOutline} from 'react-icons-kit/ionicons/happyOutline'
import {androidSad} from 'react-icons-kit/ionicons/androidSad'
export const OutlinedClose = () => <Icon icon={buttonClose} size={56} />;

export const ChevronUp = ({ style }) => (
  <Icon style={style} icon={happyOutline} size={47} />
);

export const ChevronDown = ({ style }) => (
  <Icon style={style} icon={androidSad} size={47} />
);
