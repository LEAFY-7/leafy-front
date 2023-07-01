import React from 'react';
import { useForm } from 'react-hook-form';

interface FormState {
    defaultValues: { [key: string]: string };
}

const useFormState = ({ defaultValues }: FormState) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    return { register, handleSubmit, watch };
};
export default useFormState;
