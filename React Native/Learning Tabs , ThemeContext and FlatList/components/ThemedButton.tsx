import { TouchableOpacity, type TouchableOpacityProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  txt? : string,
  bgColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  txtColor? : string,  
  bdcolor? :string,
};

export function ThemedButtonProps({
  style,
  bgColor,
  type = 'default',
  txt,
  txtColor, 
  bdcolor,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button, // Base button style
      bgColor && {backgroundColor : bgColor },
      bdcolor && {borderColor : "black"},
        style,
      ]}
      {...rest}
      >
      <ThemedText type='defaultSemibold' style={[
        {color : txtColor ? txtColor : "white"}
      ]}>{txt}</ThemedText> 
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    paddingVertical: 12,  // Adjust padding to control button height
    paddingHorizontal: 24,  // Horizontal padding for button width (you can adjust this)
    alignSelf: 'center',  // Centers the button horizontally in the parent container
    borderRadius: 8,  // Optional: add border radius for rounded corners
    marginVertical: 10,  // Vertical margin between buttons
    // Ensures the button adjusts based on its content
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
