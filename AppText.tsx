import * as React from 'react';
import {Text, TextProps} from 'react-native';

export type AppTextProps = TextProps & {
  text?: string;
  children: React.ReactNode;
};
const AppText = ({children, text}: AppTextProps) => {
  return (
    <>
      <Text>{text}</Text>
      <Text>{children}</Text>
    </>
  );
};

export default AppText;
