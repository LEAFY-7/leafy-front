import React from "react";
import styled from "@emotion/styled";

const TextAvatar = ({ text }: { text: string }) => {
  const stringToColor = (str: string) => {
    let hash = 0;
    let i;

    for (i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";

    for (i = 0; i < 3; i += 1) {
      // 16진수 0xff = 255
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  return (
    <Avatar backgroundColor={stringToColor(text)}>{`${
      text.split(" ")[0][0]
    }`}</Avatar>
  );
};

export default TextAvatar;

const Avatar = styled.div<{ backgroundColor?: string }>`
  width: ${({ theme }) => theme.imgSize.sm};
  height: ${({ theme }) => theme.imgSize.sm};
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
