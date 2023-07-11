import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { RiLockPasswordLine } from 'react-icons/ri';

import Div from 'components/atoms/Div/default-div';
import CheckboxWrapper from '@components/atoms/CheckBox/headlesst-checkBox';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import Flex from 'components/atoms/Group/flex';
import EffectiveButton from 'components/atoms/Button/effective-button';
import Dialog from 'components/atoms/Dialog/default-dialog';
import WaterModal from 'components/molecules/Modal/water-modal';
import Textarea from 'components/atoms/Textarea/default-textarea';
import useAutoResize from 'hooks/useAutoResize';
import DefaultDrop from 'components/atoms/Div/drop-div';

import MonoTemplate from 'components/templates/mono-template';

import Flyout from 'components/atoms/Flyout/headless-flyout';

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
                    <Flex direction="column">
                        <Div id="temp" height="100px" size="xl">
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
                            {/* <EffectiveButton variant="tertiary" leftIcon={<RiLockPasswordLine />}>
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
                            </EffectiveButton> */}
                        </Div>
                        <EffectiveButton
                            variant="secondary"
                            size="lg"
                            leftIcon={<RiLockPasswordLine />}
                            isBorder
                        >
                            버튼 버튼 버튼 버튼 버튼
                        </EffectiveButton>
                        <EffectiveButton variant="secondary">버튼 버튼 버튼 버튼 버튼</EffectiveButton>
                        {/* <CheckboxWrapper
                            id="checkbox-1"
                            isChecked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        >
                            <CheckboxWrapper.Label>체크박스</CheckboxWrapper.Label>
                            <CheckboxWrapper.Checkbox variant="primary" />
                        </CheckboxWrapper> */}

                        <Textarea value={value} onChange={handleChange} ref={textareaRef} />
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
                        </WaterModal>

                        <Div id="1" size="xs" variant="default" marginBottom={1}>
                            xs
                        </Div>
                        <Div id="1" size="xs" variant="primary" marginBottom={1}>
                            xs
                        </Div>
                        <Div id="2" size="sm" variant="primary" marginBottom={1}>
                            sm
                        </Div>
                        <Div id="3" size="md" variant="primary" marginBottom={1}>
                            md
                        </Div>
                        <Div id="4" size="lg" variant="primary" marginBottom={1}>
                            lg
                        </Div>
                        <Div id="5" size="xl" variant="primary" marginBottom={1}>
                            xl
                        </Div>

                        <Div id="7" size="xs" variant="translucent" marginBottom={1}>
                            trans
                        </Div>
                        <Div id="8" size="sm" variant="translucent" marginBottom={1}>
                            translucent sm
                        </Div>
                        <Div id="9" size="md" variant="translucent" marginBottom={1}>
                            translucent md
                        </Div>
                        <Div id="10" size="lg" variant="translucent" marginBottom={1}>
                            {text}
                        </Div>
                        <Div id="11" size="xl" variant="translucent" alignItems="flex-start" marginBottom={1}>
                            {text}
                        </Div>
                        <Div id="12" width={100} variant="translucent" marginBottom={1}>
                            default
                        </Div>

                        <Div
                            id="9"
                            width="70%"
                            direction="column"
                            variant="translucent"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            marginBottom={1}
                        >
                            <Div id="9" size="sm" variant="translucent">
                                Lorem
                            </Div>
                            <Div id="9" size="md" variant="translucent">
                                Lorem Ipsum
                            </Div>

                            <Div id="9" size="lg" variant="translucent">
                                Lorem Ipsum is simply dumm
                            </Div>
                        </Div>
                        {/* <DefaultDrop size="xxs" />
                        <DefaultDrop size="xs" />
                        <DefaultDrop size="sm" />
                        <DefaultDrop size="md" />
                        <DefaultDrop size="lg" />
                        <DefaultDrop size="xl" />
                        <DefaultDrop size="xxl" />
                        <DefaultDrop size="xxxl" /> */}

                        <Flyout open={false} toggle={() => setToggle((prev) => !prev)}>
                            <Flyout.Toggle>토글버튼</Flyout.Toggle>
                            <Flyout.List>
                                <Flyout.Item>1</Flyout.Item>
                                <Flyout.Item>2</Flyout.Item>
                                <Flyout.Item>3</Flyout.Item>
                                <Flyout.Item>4</Flyout.Item>
                            </Flyout.List>
                        </Flyout>
                    </Flex>
                }
            />
        </>
    );
};

export default Temp;

const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
`;

const Content = styled(Dialog.Content)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .content-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 600px;
        padding: 20px;
        border-radius: 8px;
        background-color: #fff;
        color: #1e1e1e;
    }

    .content-toggle-container {
        display: flex;
        justify-content: end;
    }
`;
