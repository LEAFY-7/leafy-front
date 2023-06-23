import React from "react";
import styled from "@emotion/styled";
import Box from "@components/atoms/Box";
import Flex from "@components/atoms/Group/flex";
import Typography from "@components/atoms/Typograph";

/**
 * 디자인 -> 색상 변경 필요
 */

interface Props {
  header: string;
  headerLine?: boolean;
  marginTop?: number;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({
  header,
  headerLine = false,
  marginTop = 10,
  children,
}) => {
  return (
    <Box marginTop={marginTop} width={100}>
      <Flex direction="column">
        <Box width={100} overflow="hidden">
          {header && <Typography variant="BODY1">{header}</Typography>}
        </Box>
        {headerLine && <Hr />}
        {children}
      </Flex>
    </Box>
  );
};

export default Container;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid #000;
`;