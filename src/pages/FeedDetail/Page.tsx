import useWindowSize from 'hooks/useWindowSize';

import Div from 'components/atoms/Div/default-div';
import MonoTemplate from 'components/templates/mono-template';
import RightSection from './RightSection';

const FeedDetail = () => {
    const { width } = useWindowSize();

    return (
        <MonoTemplate
            height={100}
            mainSection={
                <Div id="feed_section" width="800px" height={100} direction="column">
                    <RightSection />
                </Div>
            }
        />
    );
};

export default FeedDetail;
