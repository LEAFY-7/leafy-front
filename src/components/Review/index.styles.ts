import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 10px;
  margin-bottom: 5px;
`;
export const Empty = styled.div`
  width: ${({ theme }) => theme.imgSize.sm};
  height: ${({ theme }) => theme.imgSize.sm};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
`;
