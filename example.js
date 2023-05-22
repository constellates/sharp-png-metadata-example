const sharp = require('sharp');

async function example() {
  // create jpeg with metadata -----------------------------------
  await sharp({
    create: {
      width: 300,
      height: 300,
      channels: 3,
      background: { r: 0, g: 0, b: 0 }
    }
  })
  .withMetadata({
    exif: {
      IFD0: {
        ImageDescription: 'example'
      }
    }
  })
  .toFile('example.jpg');

  // read jpeg exif metadata -------------------------------------
  const jpgMetadata = await sharp('example.jpg').metadata();
  console.log('logging jpg exif metadata...');
  console.log(jpgMetadata.exif);


  // create png with metadata ------------------------------------
  await sharp({
    create: {
      width: 300,
      height: 300,
      channels: 3,
      background: { r: 0, g: 0, b: 0 }
    }
  })
  .withMetadata({
    exif: {
      IFD0: {
        ImageDescription: 'example'
      }
    }
  })
  .toFile('example.png');

  // read png exif metadata --------------------------------------
  const pngMetadata = await sharp('example.png').metadata();
  console.log('logging png exif metadata...');
  console.log(pngMetadata.exif);
}

example();
