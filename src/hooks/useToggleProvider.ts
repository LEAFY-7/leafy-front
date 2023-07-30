import React from 'react';

interface ToggleProviderProps {
    open?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
    callback?: () => void;
}

const useToggle = ({ open = false, onOpenChange = undefined, callback = undefined }: ToggleProviderProps) => {
    const [defaultOpenState, setDefaultOpenState] = React.useState<boolean>(false);

    const handleToggle = React.useCallback(() => {
        if (onOpenChange === undefined) {
            setDefaultOpenState((prev) => !prev);
        } else if (onOpenChange) {
            onOpenChange((prev) => !prev);
        }

        if (callback) {
            callback();
        }
    }, [callback, onOpenChange]);

    const values = React.useMemo(() => {
        return {
            isOpen: open ?? defaultOpenState,
            toggle: handleToggle,
        };
    }, [defaultOpenState, handleToggle, open]);

    return { values };
};

export default useToggle;
