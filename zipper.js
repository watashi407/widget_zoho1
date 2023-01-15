const AdmZip = require("adm-zip");
const fs = require("fs");

const dist = "./dist";

const createZipArchive = async () => {
  const zip = new AdmZip();

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const outputFile = "./dist/app.zip";
  zip.addLocalFolder("./build");
  zip.writeZip(outputFile);

  console.log(`created ${outputFile} sucessfully`);
};

createZipArchive();
