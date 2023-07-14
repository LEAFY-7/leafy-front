import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { RiLockPasswordLine } from 'react-icons/ri';

import Div from 'components/atoms/Div/default-div';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import EffectiveButton from 'components/atoms/Button/effective-button';
import useAutoResize from 'hooks/useAutoResize';

import Flyout from 'components/atoms/Flyout/headless-flyout';
import MonoTemplate from 'components/templates/mono-template';
import WaterButton from 'components/atoms/Button/drop-button';
import RoundButton from 'components/atoms/Button/round-button';

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem
Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem
Ipsum.`;

// 연습장
const Temp = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const { value, textRef: textareaRef, handleChange } = useAutoResize({ height: 100, maximumHeight: 300 });
    const [open, setOpen] = React.useState(false);

    const [toggle, setToggle] = React.useState(false);

    const [error, setError] = React.useState<any>();
    const handleClickDialog = () => {
        setOpen((prev) => !prev);
    };

    const handleClick = async () => {
        try {
            // 의도적으로 에러를 내는 요청을 보냅니다.
            const response = await axios.get('https://example.com/error');
            console.log(response.data);
        } catch (error) {
            // 에러가 발생하면 에러를 처리합니다.
            setError(error);
        }
    };

    if (error) throw new Error(error);

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Div width={100} direction="column" padding={8}>
                        <Div id="temp" width={100} size="xl">
                            <EffectiveButton
                                variant="primary"
                                leftIcon={<RiLockPasswordLine />}
                                onClick={handleClick}
                            >
                                에러 요청 보내기
                            </EffectiveButton>
                            <EffectiveButton variant="secondary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                        </Div>

                        <Div width={100} variant="translucent" marginBottom={16} padding={16}>
                            {text}
                        </Div>

                        <WaterButton variant="primary">Primary</WaterButton>
                        <WaterButton variant="secondary">Secondary</WaterButton>
                        <WaterButton variant="default">Default</WaterButton>
                        <WaterButton variant="default">Default</WaterButton>
                        <WaterButton variant="default" disabled>
                            Disabled
                        </WaterButton>
                        <WaterButton variant="default" backgroundColor="red">
                            Default
                        </WaterButton>

                        <RectangleButton variant="primary">버튼</RectangleButton>
                        <RoundButton variant="primary">버튼</RoundButton>

                        <Flyout open={false} toggle={() => setToggle((prev) => !prev)}>
                            <Flyout.Toggle>토글버튼</Flyout.Toggle>
                            <Flyout.List>
                                <Flyout.Item>1</Flyout.Item>
                                <Flyout.Item>2</Flyout.Item>
                                <Flyout.Item>3</Flyout.Item>
                                <Flyout.Item>4</Flyout.Item>
                            </Flyout.List>
                        </Flyout>
                    </Div>
                }
            />
        </>
    );
};

export default Temp;
{
    /* <CheckboxWrapper
                            id="checkbox-1"
                            isChecked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        >
                            <CheckboxWrapper.Label>체크박스</CheckboxWrapper.Label>
                            <CheckboxWrapper.Checkbox variant="primary" />
                        </CheckboxWrapper> */
}

{
    /* <Textarea value={value} onChange={handleChange} ref={textareaRef} />
                        <WaterModal
                            open={open}
                            handleModal={handleClickDialog}
                            onOpenChange={setOpen}
                            toggleEl={<EffectiveButton variant="secondary">모달 버튼</EffectiveButton>}
                            header={<h2>모달 제목</h2>}
                        >
                            <p>
                                가장 아래에 지정된 흰색이 깔려있습니다. 그 위에 물방울 그라데이션이 들어가
                                있는 div가 있는 형태 입니다.
                            </p>
                        </WaterModal> */
}

{
    /* <EffectiveButton variant="tertiary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton variant="quaternary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton
                                variant="important"
                                leftIcon={<RiLockPasswordLine />}
                                onClick={handleClickDialog}
                            >
                                모달
                            </EffectiveButton> */
}
