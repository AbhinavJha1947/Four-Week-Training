// length.ts

type StringOrArray = string | any[];

function getLength(input: StringOrArray): number {
    return input.length;
}
