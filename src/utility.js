export function bytesToSize(bytes) {
  var mbytes = 0.000001;
  if (bytes == 0) return "0 Byte";
  let bytesToMb = bytes * mbytes;
  return bytesToMb;
}

export function calcolateCompression(cr) {
  return 100 / cr;
}
