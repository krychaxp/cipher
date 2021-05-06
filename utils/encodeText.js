export const charArr = `ABCDEFGHIJKLMNOPQRSTUVWXYZ!()-:;"',.?abcdefghijklmnopqrstuvwxyz0123456789 \t\n`;

const getPosition = (v) => charArr.indexOf(v);

const getCharacter = (v) => charArr[v];

const filterText = (text = "") => {
  return text
    .split("")
    .filter((v) => charArr.includes(v))
    .join("");
};

export const encodeText = (text = "") => {
  const filtredText = filterText(text);

  if (filtredText.length === 0) return "";

  const position = Math.floor(Math.random() * charArr.length);
  const firstChar = charArr.slice(position, position + 1);
  const result = filtredText
    .split("")
    .map(getPosition)
    .map((v) => (v + position) % charArr.length)
    .map(getCharacter)
    .join("");
  return firstChar + result;
};

export const decodeText = (text = "") => {
  const filtredText = filterText(text);

  if (filtredText.length <= 1) return "";

  const firstChar = filtredText[0];
  const restText = filtredText.slice(1);
  const position = charArr.indexOf(firstChar);
  const result = restText
    .split("")
    .map(getPosition)
    .map((v) => (v + charArr.length - position) % charArr.length)
    .map(getCharacter)
    .join("");
  return result;
};
