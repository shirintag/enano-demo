export function bytesToSize(bytes) {
  var mbytes = 0.000001;
  if (bytes == 0) return "0 Byte";
  let bytesToMb = bytes * mbytes;
  return bytesToMb;
}

export function calcolateCompression(cr) {
  return 100 / cr;
}

export function download(filename, model) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:model/plain;charset=utf-8," + encodeURIComponent(model)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}
