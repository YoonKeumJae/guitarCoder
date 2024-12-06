const ImageDownloader = (ref: SVGSVGElement, format: string, name: string) => {
  const serializer = new XMLSerializer();
  const svgData = serializer.serializeToString(ref);
  const svgBlob = new Blob([svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Failed to get canvas context.");
    return;
  }
  const svgWidth = ref.clientWidth || 200;
  const svgHeight = ref.clientHeight || 200;
  canvas.width = svgWidth;
  canvas.height = svgHeight;
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const pngUrl = canvas.toDataURL(`image/${format}`);
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `GuitarChorder-${name}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  img.onerror = () => {
    console.error("Failed to load.");
  };
  img.src = url;
};
export default ImageDownloader;