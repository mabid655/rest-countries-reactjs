export const addComma = (num) => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");