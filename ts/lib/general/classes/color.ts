export class Color {
  name: string;
  hex: string;
  red: number;
  green: number;
  blue: number; 
  alpha: number;
  hue: number;
  saturation: number;
  light: number;
}
// Example
export interface Red extends Color {
  name: 'basic red';
  hex: '#ff0000';
  red: 255;
  green: 0; 
  blue: 0;
  alpha:  1;
  hue: 360;
  saturation: 100;
  light:  50;

}
