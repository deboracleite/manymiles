export const formatDate = (dateString) => {
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    };

    const date = new Date(dateString);
    if (isNaN(date)) {
        return dateString;
    }
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const dollarFormat = (valor) => {
    return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
