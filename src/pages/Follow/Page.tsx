import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

import Box from '@components/atoms/Box';
import Flex from '@components/atoms/Group/flex';
import Typography from '@components/atoms/Typograph';

const Follow = () => {
    const { reviewShow } = useSelector((state: RootState) => state.toggle);
    const { reviewList } = useSelector((state: RootState) => state.user);

    return (
        <Flex as="div" direction="column">
            <Box
                width={100}
                display="flex"
                justifyContent="left"
                alignItems="center"
                margin="auto"
                overflow="hidden"
            >
                <Typography variant="BODY3" marginTop={20}>
                    가장 최근에 업데이트한 팔로우입니다.
                </Typography>
            </Box>
            {/* 템플릿 */}
        </Flex>
    );
};

export default Follow;
