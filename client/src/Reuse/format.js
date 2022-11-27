export function numberWithCommas(b) {
    return b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }