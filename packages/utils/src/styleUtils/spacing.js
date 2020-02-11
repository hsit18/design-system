export const spacing = factor => (...units) =>
  units.map(u => `${u * factor}px`).join(' ');
