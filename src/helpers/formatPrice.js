export const formatPrice = (amount) => {
    return isNaN(amount)
        ? amount
        : `$${parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};