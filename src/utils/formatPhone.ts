function addHyphen(phoneNumber: string): string {
    const numericOnly = phoneNumber.replace(/\D/g, '');
    const formattedPhoneNumber = numericOnly.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    return formattedPhoneNumber;
}

export default { addHyphen };
