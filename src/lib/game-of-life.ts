/** Conway's B3/S23 rules, with wrapping edges so patterns can cross the field. */
export function advanceLife(
  cells: Uint8Array,
  next: Uint8Array,
  columns: number,
  rows: number,
): number {
  let changed = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let neighbors = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          neighbors +=
            cells[
              ((y + dy + rows) % rows) * columns +
                ((x + dx + columns) % columns)
            ];
        }
      }
      const i = y * columns + x;
      next[i] = neighbors === 3 || (cells[i] === 1 && neighbors === 2) ? 1 : 0;
      changed += Number(next[i] !== cells[i]);
    }
  }
  return changed;
}
