import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_DEFAULT_REGION;

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: region,
});

export async function upload(file) {
  try {
    const ext = file.name.split(".").pop();
    const date = new Date();
    const filename =
      "catalogo_de_precios_" +
      new Date().toLocaleDateString().split("/").join("-") +
      "_" +
      new Date().toLocaleTimeString() +
      "." +
      ext;

    const buffer = Buffer.from(await file.arrayBuffer());

    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: `price-list/${filename}`,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const link = `https://${bucketName}.s3.${region}.amazonaws.com/price-list/${filename}`;
    return { link, date };
  } catch (error) {
    return null;
  }
}

export async function uploadImage(image) {
  try {
    const ext = image.name.split(".").pop();
    const filename =
      new Date().toLocaleDateString().split("/").join("-") +
      "_" +
      new Date().toLocaleTimeString() +
      "." +
      ext;

    const buffer = Buffer.from(await image.arrayBuffer());

    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: `image/${filename}`,
        Body: buffer,
        ContentType: image.type,
      })
    );

    const link = `https://${bucketName}.s3.${region}.amazonaws.com/image/${filename}`;
    return link;
  } catch (error) {
    return null;
  }
}
