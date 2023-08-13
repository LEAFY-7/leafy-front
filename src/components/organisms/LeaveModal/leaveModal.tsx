import Box from 'components/atoms/Box/default-box';
import Button from 'components/atoms/Button/button';
import Typography from 'components/atoms/Typograph/default-typography';
import WaterModal from 'components/molecules/Modal/water-modal';
import { MouseEventHandler, ReactNode, SetStateAction } from 'react';

interface Props {
    open: boolean;
    onOpenChange: React.Dispatch<SetStateAction<boolean>>;
    toggleEl: ReactNode;
    onLeave: MouseEventHandler;
}
const LeaveModal = ({ open = false, onOpenChange = undefined, toggleEl, onLeave }: Props) => {
    const onStay = () => {
        onOpenChange(true);
        open = true;
    };
    return (
        <WaterModal open={open} onOpenChange={onOpenChange} toggleEl={toggleEl}>
            <Typography variant="BODY1">정말 페이지를 떠나실 건가요?</Typography>
            <Box
                style={{
                    display: `flex`,
                    flexShrink: `0`,
                    flexGrow: `1`,
                    justifyContent: `space-between`,
                    marginTop: `32px`,
                }}
            >
                <Button
                    type="button"
                    size="l"
                    state="default"
                    variant="basic"
                    text="나가기"
                    showText={true}
                    showIcon={false}
                    onClick={onLeave}
                />
                <Button
                    type="button"
                    size="l"
                    state="default"
                    variant="primary"
                    text="머무르기"
                    showText={true}
                    showIcon={false}
                    onClick={onStay}
                />
            </Box>
        </WaterModal>
    );
};

export default LeaveModal;
