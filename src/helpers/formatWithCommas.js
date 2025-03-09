export function formatWithCommas(value) {
  let valueStr = value.toString();
  let formattedValue = valueStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedValue;
}
