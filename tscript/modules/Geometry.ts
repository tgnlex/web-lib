import {Color} from '../classes/Color'
export module Geometry {
  export class Circle {
    polygon = false;
    color?: string | Color;
    radius: number;
    circumference?: number;
    diameter: number;
    area?: number;
  }
  export class Triangle {
      polygon = true;
      sides = 3;
      color?: string | Color;
      base: number;
      height: number;
      length_a: number;
      length_b: number;
      length_c: number;
      angle_a: number;
      angle_b: number;
      angle_c: number;
      type?: 'equilateral' | 'isosceles' | 'scalene';
      angle_type?: 'acute' | 'right' | 'obtuse';
    }
    export class Square {
      polygon = true;
      sides = 4;
      color?: string;
      length: number;
      height: number;
    }
    export class Rectangle {
      polygon = true;
      sides = 4;
      color?: string | Color;
      length: number;
      height: number;
    } 
    export class Pentagon {
      polygon = true; 
      sides = 5;
      color?: string | Color;
      length: string;
      height: string; 
    }  
    export class Hexagon {
      polygon = true;
      sides = 6;
      color?: string | Color;
      length: number;
      height: number;
    }
    export class Octagon {
      polygon = true;
      sides = 8;
      color?: string | Color;
      length: number;
      height: number;
     }
     export type Shape = Circle | Square | Rectangle | Triangle | Hexagon | Octagon | Pentagon;  
  }   