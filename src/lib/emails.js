import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "sa-east-1",
});

AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack);
  }
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });
const domain_address = process.env.DOMAIN_ADDRESS;

const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendEmail = async (email, subject, message) => {
  try {
    const response = await transporter.sendMail({
      from: domain_address,
      to: email,
      subject: subject,
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                <div style="padding:20px;">
                    <div style="max-width: 500px;">
                        <p>
                          ${message} 
                        </p>
                    </div>
                </div>
            </body>
        </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendPasswordRecoverEmail = async (email, token) => {
  const confirmLink = `http://localhost:3000/confirmar?token=${token}`;

  try {
    const response = await transporter.sendMail({
      from: domain_address,
      to: email,
      subject: "Recuperación de contraseña",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                <div style="padding:20px;">
                    <div style="max-width: 500px;">
                        <p>
                          Ingresa <a href="${confirmLink}">aquí</a> para recuperar tu contraseña! 
                        </p>
                    </div>
                </div>
            </body>
        </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendDeniedRequestEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: domain_address,
      to: email,
      subject: "Su solicitud ha sido denegada",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                <div style="padding:20px;">
                    <div style="max-width: 500px;">
                        <p>
                          La solicitud de registro adjuntada no contaba con datos validos para su aceptacion.
                        </p>
                    </div>
                </div>
            </body>
        </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendAllowedRequestEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: domain_address,
      to: email,
      subject: "Su solicitud ha sido aceptada",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            </head>
            <body>
                <div style="padding:20px;">
                    <div style="max-width: 500px;">
                        <p>
                          La solicitud de registro adjuntada ha cumplido con datos validos para su aceptacion.
                        </p>
                        <p>
                          Desde Weskan le damos la bienvenida, esta cuenta le permite tener acceso a funciones como la descarga de nuestro catalogo de precios.
                        </p>
                    </div>
                </div>
            </body>
        </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};
