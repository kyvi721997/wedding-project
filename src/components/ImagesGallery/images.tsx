const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.yet-another-react-lightbox.com/_next/image?url=${encodeURIComponent(
      `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

export const slides = [
  { asset: "image01.cd7ee301.jpeg", width: 3840, height: 5760 },
  { asset: "image02.da10388f.jpeg", width: 3840, height: 5070 },
  { asset: "image03.a6580cde.jpeg", width: 3840, height: 5120 },
  { asset: "image04.cb767d7c.jpeg", width: 3840, height: 2546 },
  { asset: "image05.fdbef001.jpeg", width: 3840, height: 5760 },
  { asset: "image06.2e6597a1.jpeg", width: 3840, height: 2553 },
  { asset: "image07.27dd139c.jpeg", width: 3840, height: 2553 },
  { asset: "image08.f646dad6.jpeg", width: 3840, height: 5760 },
  { asset: "image09.7f346735.jpeg", width: 3840, height: 5760 },
  { asset: "image10.41ba7faa.jpeg", width: 3840, height: 2560 },
  { asset: "image11.d57d7fe1.jpeg", width: 3840, height: 5760 },
  { asset: "image12.faa02319.jpeg", width: 3840, height: 5124 },
  { asset: "image13.94108f7d.jpeg", width: 3840, height: 5643 },
  { asset: "image14.953c7b70.jpeg", width: 3840, height: 5781 },
  { asset: "image15.5ebdf6ed.jpeg", width: 3840, height: 4800 },
  { asset: "image16.e81dbeb1.jpeg", width: 3840, height: 5760 },
  { asset: "image17.6546cfcd.jpeg", width: 3840, height: 2560 },
  { asset: "image18.31163d01.jpeg", width: 3840, height: 6834 },
  { asset: "image19.7d89a265.jpeg", width: 3840, height: 5771 },
  { asset: "image20.05176f17.jpeg", width: 3840, height: 5735 },
  { asset: "image21.bbfb647d.jpeg", width: 3840, height: 2560 },
  { asset: "image22.e8ce81ce.jpeg", width: 3840, height: 5124 },
  { asset: "image23.9dc5eb2c.jpeg", width: 3840, height: 4800 },
  { asset: "image24.3fd5c729.jpeg", width: 3840, height: 2560 },
  { asset: "image25.77de342d.jpeg", width: 3840, height: 5760 },
  { asset: "image26.3ca53ad1.jpeg", width: 3840, height: 4654 },
  { asset: "image27.c8fde361.jpeg", width: 3840, height: 2553 },
  { asset: "image28.0ab6b361.jpeg", width: 3840, height: 6837 },
  { asset: "image29.b3972088.jpeg", width: 3840, height: 2272 },
  { asset: "image30.785ba204.jpeg", width: 3840, height: 5120 },

].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset, breakpoint),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));
export default slides;
