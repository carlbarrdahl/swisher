export function formatMoney(val = 0, currency?: string, decimals = 2) {
  return Number(val).toLocaleString("sv-SE", {
    currency,
    style: currency && "currency",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
