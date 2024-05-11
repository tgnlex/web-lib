type Either2dOr3d = [number, number, number?];

export function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;

    console.log(`Provided coordinates has ${coord.length} dimensions`)
}

setCoordinate([1, 4, 3])