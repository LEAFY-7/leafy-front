import React from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import MainViewModel from 'viewModel/main/main.viewModel';
import useViewModel, { ViewModelName } from 'hooks/useViewModel';
import { FeedDto } from 'dto/feed/feed.dto';
import useAutoResize from 'hooks/useAutoResize';
import useToggle from 'hooks/useToggleProvider';

import MonoTemplate from 'components/templates/mono-template';
import Div from 'components/atoms/Div/default-div';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import LazyImage from 'components/atoms/LazyImage/default-image';
import Flyout from 'components/molecules/Flyout/headless-flyout';
import FlyoutMenu from 'components/molecules/Flyout/flyout-menu';

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

const src = 'https://api.slingacademy.com/public/sample-photos/1.jpeg';
// 연습장
const Temp = () => {
    const mainViewModel: MainViewModel = useViewModel(ViewModelName.MAIN);

    const { values } = useToggle({});

    const { value, textRef: textareaRef, handleChange } = useAutoResize({ height: 100, maximumHeight: 300 });

    const [error, setError] = React.useState<any>();

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

    React.useEffect(() => {
        mainViewModel.getList();
    }, []);

    if (error) throw new Error(error);

    return (
        <>
            <MonoTemplate
                mainSection={
                    <Div width={100} height={100} direction="column" padding={8}>
                        <Flex direction="column" style={{ height: '500px' }}>
                            <Flyout isOpen={values.isOpen} toggle={values.toggle}>
                                <Flyout.Toggle>토글버튼</Flyout.Toggle>
                                <Flyout.OverLay />
                                <Flyout.Wrapper>
                                    <Flyout.List>
                                        <Flyout.Header>헤더</Flyout.Header>
                                        <Flyout.Item>1</Flyout.Item>
                                        <Flyout.Item>2</Flyout.Item>
                                        <Flyout.Item>3</Flyout.Item>
                                        <Flyout.Item>4</Flyout.Item>
                                    </Flyout.List>
                                </Flyout.Wrapper>
                            </Flyout>
                        </Flex>
                        <Flex direction="column" style={{ height: '500px' }}>
                            <FlyoutMenu
                                userId={0}
                                userShowState={true}
                                toggleEl={
                                    <Flex>
                                        <LazyImage src={src} width={40} height={40} />
                                        <Typography variant="BODY2" marginLeft={8}>
                                            유저아이디
                                        </Typography>
                                    </Flex>
                                }
                            />
                        </Flex>

                        {Array.from({ length: 5 }).map((d, index) => (
                            <Div key={index} variant="primary" size="lg" marginBottom={10}>
                                {index}
                            </Div>
                        ))}
                        <Div>
                            {mainViewModel.feedList.map(
                                (item: FeedDto, index: number) =>
                                    index <= 1 && (
                                        <div>
                                            <LazyImage
                                                key={index}
                                                src={item.imgUrl}
                                                width={150}
                                                height={300}
                                            />
                                        </div>
                                    ),
                            )}
                        </Div>
                    </Div>
                }
            />
        </>
    );
};

export default observer(Temp);

{
    /* <Div width={100} variant="translucent" marginBottom={16} padding={16}>
    {text}
</Div>; */
}

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
