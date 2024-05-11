export function distanceFromOrigin([x, y]: [number, number]): number {
    return Math.sqrt(x ** 2 + y ** 2)
}

distanceFromOrigin([10, 20])