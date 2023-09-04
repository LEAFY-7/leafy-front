import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { BsFillArrowDownCircleFill as BottomArrow } from 'react-icons/bs';

import FullWidthTemplate from 'components/templates/full-width.template';
import PageContainer from 'components/templates/page-container';
import Youtube from 'components/molecules/Youtube/youtube';
import Flex from 'components/atoms/Group/flex';
import Typography from 'components/atoms/Typograph/default-typography';
import DefaultAnchor from 'components/atoms/Anchor/default-anchor';

const publicUrl = process.env.PUBLIC_URL + '/image/background/';
const youtubeUrl = 'https://www.youtube.com/embed/cjieummbZeA?si=kU-aa1Xg7f6aL3z';
const slogan = '초록으로 물들이는 일상, 그린라이프';
const IntroView = () => {
    return (
        <FullWidthTemplate>
            <PageContainer style={{ padding: 0, gap: 0, scrollBehavior: 'smooth' }}>
                <CommonSection
                    id="section1"
                    style={{
                        height: '100vh',
                        background: '#E9EEF2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        scrollSnapAlign: 'start',
                    }}
                >
                    <img
                        src={`${publicUrl}intro.png`}
                        alt="메인이미지"
                        style={{ width: '400px', height: '60%', position: 'absolute' }}
                    />
                    {/* <h1 style={{ fontSize: '60px', zIndex: 9, display: 'inline-block' }}>
                        초록으로 물들이는 일상
                    </h1>
                    <h3 style={{ fontSize: '48px', zIndex: 9, display: 'inline-block' }}>그린라이프</h3> */}

                    <DefaultAnchor href="#section2" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                        <BottomArrow size={30} color="gray" />
                    </DefaultAnchor>
                </CommonSection>
                <section
                    id="section2"
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        scrollSnapAlign: 'start',
                    }}
                >
                    <Youtube
                        src={`${youtubeUrl}&mute=1&autoplay=1&playlist=cjieummbZeA&loop=1`}
                        title="Leafyer Intro"
                    />

                    <Shadow style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            background: `url(${publicUrl}media_wrapper.png)`,
                            zIndex: 8,
                        }}
                    />

                    <DefaultAnchor
                        href="#section3"
                        style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 90 }}
                    >
                        <BottomArrow size={30} color="gray" />
                    </DefaultAnchor>
                </section>

                <CommonSection
                    id="section3"
                    style={{
                        height: '600px',
                        background: '#E9EEF2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <DefaultAnchor href="#section4" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                        <BottomArrow size={30} color="gray" />
                    </DefaultAnchor>
                </CommonSection>

                <CommonSection
                    id="section4"
                    style={{
                        height: '600px',
                        background: '#E9EEF2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            marginTop: '200px',
                            position: 'absolute',
                            width: '100%',
                            // backgroundColor: 'red',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <Flex.Default style={{ width: '600px' }}>
                            <PlantImage src={`${publicUrl}plant_02.png`} alt="화분_2" />
                            <PlantImage src={`${publicUrl}plant_03.png`} alt="화분_3" />
                            <PlantImage src={`${publicUrl}plant_04.png`} alt="화분_4" />
                        </Flex.Default>
                        <Flex.Default style={{ width: '600px' }}>
                            <PlantImage src={`${publicUrl}plant_05.png`} alt="화분_5" />
                            <PlantImage src={`${publicUrl}plant_06.png`} alt="화분_6" />
                        </Flex.Default>
                    </div>
                </CommonSection>

                <MoveSection url={`${publicUrl}intro_02.svg`} style={{ height: '800px' }}>
                    <Shadow style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                </MoveSection>
                <MoveSection url={`${publicUrl}intro_03.svg`} style={{ height: '900px' }}>
                    <Shadow style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                </MoveSection>
            </PageContainer>
        </FullWidthTemplate>
    );
};
export default IntroView;

const CommonSection = styled.section<{ url?: string }>`
    background-image: ${({ url }) => (url ? `url("${url}")` : 'none')};
    background-position: center;
    background-size: cover;
    width: 100%;
`;

const MoveSection = styled.section<{ url?: string }>`
    position: relative;
    background-image: ${({ url }) => (url ? `url("${url}")` : 'none')};
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const PlantImage = styled.img`
    width: 300px;
    height: 400px;
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: multiply;
`;
