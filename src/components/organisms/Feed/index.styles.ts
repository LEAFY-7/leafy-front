import styled from "@emotion/styled";
import { css } from "@emotion/react";
import styleConfig from "@configs/style.config";

export const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Empty = styled.div`
  width: ${styleConfig.theme.imgSize.sm};
  height: ${styleConfig.theme.imgSize.sm};
  border-radius: 50%;
  background-color: ${styleConfig.theme.colors.gray};
`;
export const IconImg = styled.img`
  width: ${styleConfig.theme.imgSize.sm};
  height: ${styleConfig.theme.imgSize.sm};
  border-radius: 50%;
`;
export const Content = styled.div`
  width: 100%;
`;

export const CountStatus = styled.span`
  background-color: ${styleConfig.theme.colors.red};
  width: 20px;
  height: 20px;
  color: white;
  font-size: 5px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
`;