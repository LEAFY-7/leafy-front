import useWindowSize from 'hooks/useWindowSize';
import LeftSection from './LeftSection';
import BottomSection from './BottomSection';

import Div from 'components/atoms/Div/default-div';
import MonoTemplate from 'components/templates/mono-template';

const FeedDetail = () => {
    const { width } = useWindowSize();

    return (
        <MonoTemplate
            height={100}
            mainSection={
                <Div id="feed_section" width="800px" height={100} direction="column">
                    <LeftSection />
                    {/* <Feed /> */}
                    <BottomSection />
                </Div>
            }
        />
    );
};

export default FeedDetail;
