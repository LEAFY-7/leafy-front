import { useCallback, useMemo, useState } from 'react';

interface ToggleProviderProps {
    open?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const useToggleProvider = ({ open, onOpenChange }: ToggleProviderProps) => {
    const [defaultOpenState, setDefaultOpenState] = useState<boolean>(false);

    const handleToggle = useCallback(() => {
        if (onOpenChange === undefined) {
            return setDefaultOpenState((prev) => !prev);
        }

        if (onOpenChange) {
            return onOpenChange((prev) => !prev);
        }
    }, [onOpenChange]);

    const values = useMemo(() => {
        return {
            isOpen: open ?? defaultOpenState,
            toggle: handleToggle,
        };
    }, [defaultOpenState, handleToggle, open]);

    return { values };
};

export default useToggleProvider;
