export const formatPrice = (price, currency) => {
  if (!price) return "N/A";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};
