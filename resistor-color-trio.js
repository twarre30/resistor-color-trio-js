const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const colorCode = (color) => COLORS.indexOf(color);

const UNITS = [
  {
    name: "giga",
    numberOfZeros: 9,
    representation: "000000000",
  },
  {
    name: "mega",
    numberOfZeros: 6,
    representation: "000000",
  },
  {
    name: "kilo",
    numberOfZeros: 3,
    representation: "000",
  },
];

export const decodedResistorValue = ([tens, ones, exponent]) => {
  const numericValue =
    (colorCode(tens) * 10 + colorCode(ones)) * 10 ** colorCode(exponent);
  const stringifiedValue = numericValue.toString();

  let readableUnit = "";
  let readableValue = stringifiedValue;

  for (const unit of UNITS) {
    if (stringifiedValue.endsWith(unit.representation)) {
      readableUnit = unit.name;
      readableValue = readableValue.slice(0, -unit.numberOfZeros);
      break;
    }
  }

  return `${readableValue} ${readableUnit}ohms`;
};
