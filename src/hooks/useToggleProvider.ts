import { useCallback, useMemo, useState } from 'react';

interface ToggleProviderProps {
    open?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
    callback?: () => void; // 추가: callback prop
}

const useToggle = ({ open = false, onOpenChange = undefined, callback = undefined }: ToggleProviderProps) => {
    const [defaultOpenState, setDefaultOpenState] = useState<boolean>(false);
    const handleToggle = useCallback(() => {
        if (onOpenChange === undefined) {
            setDefaultOpenState((prev) => !prev);
        } else if (onOpenChange) {
            onOpenChange((prev) => !prev);
        }

        if (callback) {
            callback();
        }
    }, [callback, onOpenChange]);

    const values = useMemo(() => {
        return {
            isOpen: open ?? defaultOpenState,
            toggle: handleToggle,
        };
    }, [defaultOpenState, handleToggle, open]);

    return { values };
};

export default useToggle;
