import Swal, { SweetAlertInput } from 'sweetalert2';

interface IConfirmOptions {
    title: string;
    callback: any;
    confirm?: string;
    cancel?: string;
    cancelAction?: any;
}

interface IPromptOptions {
    title: string;
    text?: string;
    inputType: SweetAlertInput;
    showCancel?: boolean;
    placeholder?: string;
    confirm?: string;
    cancel?: string;
    callback?: any;
    error?: string;
    validation?: any;
}

interface ISelectorOptions {
    title: string;
    input: 'text' | 'email' | 'password' | 'number' | 'tel' | 'range' | 'textarea' | 'select' | 'radio';
    options: any;
    inputValue?: any;
    error: string;
    callback: (value) => void;
}

export const Alert = {
    alert: alert,
    confirm: confirm,
    prompt: prompt,
    selector: selector,
};

function alert(message: string, callback?: any, closeModalOption: boolean = true) {
    return Swal.fire({
        title: message,
        confirmButtonText: '확인',
        allowOutsideClick: closeModalOption,
        allowEscapeKey: closeModalOption,
        allowEnterKey: closeModalOption,
    }).then(callback);
}

function confirm(options: IConfirmOptions) {
    return Swal.fire({
        title: options.title,
        confirmButtonText: options.confirm ?? '확인',
        cancelButtonText: options.cancel ?? '취소',
        showConfirmButton: true,
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            options.callback();
        } else {
            if (typeof options.cancelAction !== 'undefined') {
                options.cancelAction();
            }
        }
    });
}

function prompt(options: IPromptOptions) {
    return Swal.fire({
        title: options.title,
        text: options.text ?? '',
        input: options.inputType,
        inputPlaceholder: options.placeholder,
        confirmButtonText: options.confirm ?? '확인',
        cancelButtonText: options.cancel ?? '취소',
        validationMessage: options.error ?? '에러발생',
        inputAttributes: {
            autocapitalize: 'off',
        },
        showConfirmButton: true,
        showCancelButton: options.showCancel ? true : false,
        inputValidator: (value) => {
            if (options.validation) {
                return new Promise((resolve) => {
                    options.validation(value, resolve);
                });
            }
        },
    }).then((result) => {
        if (options.callback && result.isConfirmed) {
            options.callback(result.value);
        }
    });
}

function selector(options: ISelectorOptions) {
    return Swal.fire({
        title: options.title,
        input: options.input,
        inputValue: options.inputValue,
        inputOptions: options.options,
        inputValidator: (value) => {
            if (!value) {
                return options.error;
            }
        },
    }).then((result) => {
        if (options.callback && result.isConfirmed) {
            options.callback(result.value);
        }
    });
}
