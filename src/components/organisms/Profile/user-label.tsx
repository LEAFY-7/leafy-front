import type { HTMLAttributes } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'configs/ui.config';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import UserResponseDataDto from 'dto/user/userResponseData.dto';
import formatPhone from 'utils/formatPhone';

interface UserLabelProps {
    user: UserResponseDataDto;
}

type Props = React.PropsWithChildren<UserLabelProps> & HTMLAttributes<HTMLElement>;

const UserLabel = ({ user }: Props) => {
    const formatePhone = React.useMemo(() => formatPhone.addHyphen(user.phone), [user.phone]);
    const newUser = { ...user, phone: formatePhone };
    return (
        <>
            {labelList.map((label, key) => {
                return (
                    newUser[label.name] && (
                        <LabelWrapper key={key}>
                            <Label htmlFor={label.name}>{label.display}</Label>
                            <Typography variant="BODY2" marginLeft={16}>
                                {newUser[label.name]}
                            </Typography>
                        </LabelWrapper>
                    )
                );
            })}
        </>
    );
};
export default UserLabel;

const labelList = [
    { name: 'name', display: '이름' },
    { name: 'nickName', display: '닉네임' },
    { name: 'email', display: '이메일' },
    { name: 'phone', display: '연락처' },
];

const Label = styled.label`
    width: 100px;
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.grey};
`;

const LabelWrapper = styled(Flex.Default)`
    margin-bottom: 16px;
`;
