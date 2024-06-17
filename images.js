import path from "path";
import fs from "fs-extra";
import Promise from "bluebird";

import ThumbGenerator from "fs-thumbnail";

const thumbGen = new ThumbGenerator({ verbose: true });

const inputDir = path.join("./public/files");
const outputDir = path.join("./public/thumbs");

const files = fs.readdirSync(inputDir);

const createThumbPromise = (index) => {
  if (index >= files.length) return Promise.resolve();

  const file = files[index];
  const parsed = path.parse(file);
  const inPath = path.join(inputDir, file);
  const outPath = path.join(outputDir, `${parsed.name}.jpg`);

  return thumbGen
    .getThumbnail({
      path: inPath,
      output: outPath,
      size: [300, 300],
      quality: 95,
    })
    .then((thumbnailPath) => {
      if (!thumbnailPath)
        console.log(`${file}: Could not generate the thumbnail!`);
      else
        console.log(`${file}: Thumbnail generated! Find it here: ${outPath}`);
    })
    .then(() => createThumbPromise(index + 1));
};

createThumbPromise(0).catch((error) =>
  console.error(`Unexpected error occurred: ${error}`)
);
