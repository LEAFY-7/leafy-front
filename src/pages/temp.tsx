import React from 'react';
import MonoTemplate from 'components/templates/mono-template';
import Div from 'components/atoms/Div/default-div';
import CheckboxWrapper from 'components/atoms/CheckBox/default-checkBox';
import RectangleButton from 'components/atoms/Button/rectangle-button';
import EffectiveButton from 'components/atoms/Button/effective-button';
import { RiLockPasswordLine } from 'react-icons/ri';
import styled from '@emotion/styled';
import Dialog from 'components/atoms/Dialog/default-dialog';
import WaterModal from 'components/molecules/Modal/water-modal';
import Textarea from 'components/atoms/Textarea/default-textarea';
import useAutoResize from 'hooks/useAutoResize';
import Flex from 'components/atoms/Group/flex';

// 연습장
const Temp = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const { value, textRef: textareaRef, handleChange } = useAutoResize({ height: 100, maximumHeight: 300 });
    const [open, setOpen] = React.useState(false);

    const handleClickDialog = () => {
        console.log('오픈>>>>');

        setOpen((prev) => !prev);
    };

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Flex direction="column">
                        <Div id="temp" height="100px" size="xl">
                            <EffectiveButton variant="primary" leftIcon={<RiLockPasswordLine />}>
                                버튼dd
                            </EffectiveButton>
                            <EffectiveButton variant="secondary" leftIcon={<RiLockPasswordLine />}>
                                클릭입니다.
                            </EffectiveButton>
                            <EffectiveButton variant="tertiary" leftIcon={<RiLockPasswordLine />}>
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
                            </EffectiveButton>
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
                        <CheckboxWrapper
                            id="checkbox-1"
                            isChecked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        >
                            <CheckboxWrapper.Label>체크박스</CheckboxWrapper.Label>
                            <CheckboxWrapper.Checkbox variant="primary" />
                        </CheckboxWrapper>

                        <Textarea value={value} onChange={handleChange} ref={textareaRef} />
                        <WaterModal
                            open={open}
                            onOpenChange={setOpen}
                            toggleEl={<EffectiveButton variant="secondary">모달 버튼</EffectiveButton>}
                            header={<h2>모달 제목</h2>}
                        >
                            <p>
                                가장 아래에 지정된 흰색이 깔려있습니다. 그 위에 물방울 그라데이션이 들어가
                                있는 div가 있는 형태 입니다.
                            </p>
                        </WaterModal>
                        <Div id="1" size="xs" variant="green" style={{ marginBottom: '10px' }}>
                            xs
                        </Div>
                        <Div id="2" size="sm" variant="green" style={{ marginBottom: '10px' }}>
                            sm
                        </Div>
                        <Div id="3" size="md" variant="green" style={{ marginBottom: '10px' }}>
                            md
                        </Div>
                        <Div id="4" size="lg" variant="green" style={{ marginBottom: '10px' }}>
                            lg
                        </Div>
                        <Div id="5" size="xl" variant="green" style={{ marginBottom: '10px' }}>
                            xl
                        </Div>
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
