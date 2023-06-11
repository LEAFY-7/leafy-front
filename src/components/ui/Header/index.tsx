import React from "react";
import * as Styled from "./index.styles";
import { Props } from "./index.types";

import Box from "../Box";
import Flex from "../Flex";
import Typography from "../Typograph";

const Header = React.forwardRef(function Header(
    {

    }: React.PropsWithChildren<Props>,
  forwardedRef: React.Ref<HTMLElement>
){
    return (
        <Styled.Header>
            
        </Styled.Header>
    );
});

export default Header;