// © Microsoft Corporation. All rights reserved.
import React from 'react';
import { Stack, PrimaryButton, Icon, Image, IImageStyles } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import image2SVG from '../assets/image2.svg';
import imageSVG from '../assets/image.svg'
import {
  imgStyle,
  imgStyle1,
  containerTokens,
  listStyle,
  iconStyle,
  headerStyle,
  upperStackTokens,
  videoCameraIconStyle,
  buttonStyle,
  nestedStackTokens,
  upperStackStyle,
  listItemStyle
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
  startCallHandler(): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '90%',
    width: '90%'
  },
  root: {}
};

const imageStyleProps1: IImageStyles = {
  image: {
    height: '90%',
    width: '90%'
  },
  root: {}
};


export default (props: HomeScreenProps): JSX.Element => {
  const iconName = 'SkypeCircleCheck';
  const imageProps = { src: imageSVG.toString() };
  const imageProps1 = { src: image2SVG.toString() };
  const headerTitle = 'Teams Clone';
  const startCallButtonText = 'Start a call';
  const listItems = [
    'Simple Group Video Calling',
    'Connect with users with seamless collaboration across web',
    'High quality, low latency capabilities for an uninterrupted calling experience'
  ];
  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
      <Stack className={upperStackStyle} tokens={upperStackTokens}>
        <div className={headerStyle}>{headerTitle}</div>
        <Stack tokens={nestedStackTokens}>
          <ul className={listStyle}>
            <li className={listItemStyle}>
              <Icon className={iconStyle} iconName={iconName} /> {listItems[0]}
            </li>
            <li className={listItemStyle}>
              <Icon className={iconStyle} iconName={iconName} /> {listItems[1]}
            </li>
            <li className={listItemStyle}>
              <Icon className={iconStyle} iconName={iconName} /> {listItems[2]}
            </li>
            <li className={listItemStyle}>
              <Icon className={iconStyle} /> {listItems[3]}
            </li>
          </ul>
        </Stack>
        <PrimaryButton className={buttonStyle} onClick={props.startCallHandler}>
          <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
          {startCallButtonText}
        </PrimaryButton>
      </Stack>
      <Stack tokens={nestedStackTokens}>
        <Image
          alt="Welcome to the Azure Communication Services Calling sample app"
          className={imgStyle}
          styles={imageStyleProps}
          {...imageProps}
        />
        <Image
          className={imgStyle1}
          styles={imageStyleProps1}
          {...imageProps1}
        />
      </Stack>
    </Stack>
  );
};
