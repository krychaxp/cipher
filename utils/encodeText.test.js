import { encodeText, decodeText, charArr } from "./encodeText";

test("check texts", () => {
  for (let i = 0; i < 1000; i++) {
    const randomText = Array(50)
      .fill()
      .map((v) => {
        const position = Math.floor(Math.random() * charArr.length);
        return charArr[position];
      })
      .join("");
    const result = decodeText(encodeText(randomText));
    expect(result).toBe(randomText);
  }
});
