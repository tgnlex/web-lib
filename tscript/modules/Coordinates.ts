
export module Coordinates {
    export class Point {
      id?: string | undefined;
      x: number;
      y: number;
    }
      export class Segment {
        id?: string | undefined;
        start: Point | [number, number]
        end: Point | [number, number]
        length: number;
      }
      export class Angle {
        type?: 'acute' | 'right' | 'obtuse';
        degree: number;
        vertext: Point | [number, number];
        endpoint_a: Point | [number, number];
        endpoint_b: Point | [number, number];
      }
    export class Graph {
        title?: string;
        x_axis_title?: string;
        y_axis_title?: string;
        x_axis_length: number;
        y_axis_length: number;
        origin: Point | [number, number];
        points?: Point[] | [number, number][] | null;
        lines?: Segment[] | [Point, Point][] | null;
  }
}