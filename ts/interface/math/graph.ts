
  interface Point {
      x: number;
      y: number;
    }
  interface Segment {
        start: Point;
        end: Point;
        length: number;
      }
   interface Angle {
        degree: number;
        vertex: Point;
        endpoint_a: Point;
        endpoint_b: Point;
      }
    interface Graph {
        title?: string;
        x_axis_title?: string;
        y_axis_title?: string;
        x_axis_length: number;
        y_axis_length: number;
        origin: Point;
        points?: Point[];
        lines?: Segment[];
  }
}
