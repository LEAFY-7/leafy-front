import React from "react";
import Box from "@components/atoms/Box";
import Flex from "@components/ui/Flex";
import Typography from "@components/atoms/Typograph";
import Container from "@components/Container";
import EditPageRequire from "./EditPageRequire";
import EditPageAdditional from "./EditPageAdditional";

const EditPage = () => {
  return (
    <Flex as="div" direction="column">
      <Box
        as="section"
        width={"1000px"}
        overflow="hidden"
        display="flex"
        direction="column"
      >
        <Typography variant="H2" marginTop={5} marginBottom={5}>
          회원정보수정
        </Typography>
        <Typography variant="BODY2" marginTop={5} marginBottom={5}>
          회원정보를 수정하는 곳입니다.
        </Typography>
        <Typography variant="BODY3" marginTop={5} marginBottom={5}>
          회색 박스는 변경 불가능합니다.
        </Typography>
      </Box>
      <Container header="필수 정보" headerLine>
        <EditPageRequire />
      </Container>
      <Container header="추가 정보" headerLine>
        <EditPageAdditional />
      </Container>
    </Flex>
  );
};

export default EditPage;
