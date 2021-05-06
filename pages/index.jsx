import { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { encodeText, decodeText } from "utils/encodeText";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 5px;
  }
`;

const Home = () => {
  const [text, setText] = useState({ decoded: "", encoded: "" });

  const handleEncode = ({ target }) => {
    const { value } = target;
    setText({ encoded: value, decoded: encodeText(value) });
  };

  const handleDecode = ({ target }) => {
    const { value } = target;
    setText({ decoded: value, encoded: decodeText(value) });
  };

  return (
    <Wrapper>
      <TextField
        label="Tekst"
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        multiline
        rows={15}
        onChange={handleEncode}
        value={text.encoded}
      />
      <TextField
        label="Zakodowany Tekst"
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        multiline
        rows={15}
        onChange={handleDecode}
        value={text.decoded}
      />
    </Wrapper>
  );
};

export default Home;
