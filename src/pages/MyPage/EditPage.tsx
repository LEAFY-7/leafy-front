import React from 'react';
import Box from '@components/atoms/Box/default-box';
import Typography from '@components/atoms/Typograph/default-typography';
import EditPageRequire from './EditPageRequire';
import EditPageAdditional from './EditPageAdditional';
import Container from '@components/molecules/Container';
import DiTemplate from '@components/templates/di-template';
import SideNavigation from '@components/organisms/Navigation/side-navigation';

const EditPage = () => {
    return (
        <DiTemplate
            variant="1/3"
            templateWidth="1280px"
            leftSection={
                <>
                    <Box as="article" width={'1000px'} overflow="hidden" display="flex" direction="column">
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
                    <Container as="article" header="필수 정보" headerLine>
                        <EditPageRequire />
                    </Container>
                    <Container as="article" header="추가 정보" headerLine>
                        <EditPageAdditional />
                    </Container>
                </>
            }
            rightSection={<SideNavigation />}
        />
    );
};

export default EditPage;
{
    /* <Flex as="div" direction="column">
<Box as="section" width={'1000px'} overflow="hidden" display="flex" direction="column">
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
</Flex> */
}
