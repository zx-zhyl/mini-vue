export function effect(raw) {
  return new Proxy(raw, {});
}
