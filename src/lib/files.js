import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import fs from "fs";

const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

export async function upload(file) {
  try {
    const ext = file.name.split(".").pop();
    const date = new Date();
    const filename = Date.now() + "." + ext;

    const buffer = Buffer.from(await file.arrayBuffer());

    const res = await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: filename,
        Body: buffer,
        ContentType: file.type,
      })
    );

    return { filename, date };
  } catch (error) {
    return null;
  }
}

export async function read(key) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    const ext = key.split(".").pop();

    const res = await s3.send(command);

    const fileStream = fs.createWriteStream(`./public/catalogo.${ext}`);
    res.Body.pipe(fileStream);

    return new Promise((resolve, reject) => {
      fileStream.on("close", () => {
        resolve(`./catalogo.${ext}`);
      });

      fileStream.on("error", (error) => {
        reject(error);
      });
    });
  } catch (error) {
    return null;
  }
}
