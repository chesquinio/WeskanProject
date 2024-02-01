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
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: subject,
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      
          <table width="100%" style="max-width: 500px; margin: 0 auto; background-color: #db4272;">
            <tr>
              <td style="padding: 1rem;">
                <table style="width: 100%; display: flex; flex-direction: row; align-items: center;">
                  <tr>
                    <td style="width: 3.5rem; height: 3.5rem; margin: 1.25rem;">
                      <img src="https://weskan.s3.sa-east-1.amazonaws.com/image/weskan-logo-small.png" alt="Logo Weskan" style="border-radius: 0.25rem; margin-right: 0.5rem;" />
                    </td>
                    <td style="color: #fff; font-weight: 600; font-size: 1.25rem; margin: 0.625rem 0 0 0.625rem;">Weskan S.A.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 1rem; background-color: #fff;">
                <h3 style="font-weight: 500; font-size: 1.125rem; color: #333;">Tienes un nuevo mensaje!</h3>
                <p style="color: #666; margin-top: 1rem;">${message}</p>
                <p style="color: #666; text-align: right; margin-top: 1rem;">- Equipo de Weskan S.A.</p>
              </td>
            </tr>
            <tr>
              <td style="margin: 1rem; color: #fff; text-align: center; padding: 1rem;">
                No somos únicos, sí los primeros
              </td>
            </tr>
          </table>
      
        </body>
      </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `http://localhost:3000/nueva-verificacion?token=${token}`;

  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Verificación de correo electronico",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      
          <table width="100%" style="max-width: 500px; margin: 0 auto; background-color: #db4272;">
            <tr>
              <td style="padding: 1rem;">
                <table style="width: 100%; display: flex; flex-direction: row; align-items: center;">
                  <tr>
                    <td style="width: 3.5rem; height: 3.5rem; margin: 1.25rem;">
                      <img src="https://weskan.s3.sa-east-1.amazonaws.com/image/weskan-logo-small.png" alt="Logo Weskan" style="border-radius: 0.25rem; margin-right: 0.5rem;" />
                    </td>
                    <td style="color: #fff; font-weight: 600; font-size: 1.25rem; margin: 0.625rem 0 0 0.625rem;">Weskan S.A.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 1rem; background-color: #fff;">
                <h3 style="font-weight: 500; font-size: 1.125rem; color: #333;">Tienes un nuevo mensaje!</h3>
                <p style="color: #666; margin-top: 1rem;"> Ingresa <a href="${confirmLink}">aquí</a> para verificar tu email! </p>
                <p style="color: #666; text-align: right; margin-top: 1rem;">- Equipo de Weskan S.A.</p>
              </td>
            </tr>
            <tr>
              <td style="margin: 1rem; color: #fff; text-align: center; padding: 1rem;">
                No somos únicos, sí los primeros
              </td>
            </tr>
          </table>
      
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
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Recuperación de contraseña",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          </head>
          <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
        
            <table width="100%" style="max-width: 500px; margin: 0 auto; background-color: #db4272;">
              <tr>
                <td style="padding: 1rem;">
                  <table style="width: 100%; display: flex; flex-direction: row; align-items: center;">
                    <tr>
                      <td style="width: 3.5rem; height: 3.5rem; margin: 1.25rem;">
                        <img src="https://weskan.s3.sa-east-1.amazonaws.com/image/weskan-logo-small.png" alt="Logo Weskan" style="border-radius: 0.25rem; margin-right: 0.5rem;" />
                      </td>
                      <td style="color: #fff; font-weight: 600; font-size: 1.25rem; margin: 0.625rem 0 0 0.625rem;">Weskan S.A.</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 1rem; background-color: #fff;">
                  <h3 style="font-weight: 500; font-size: 1.125rem; color: #333;">Tienes un nuevo mensaje!</h3>
                  <p style="color: #666; margin-top: 1rem;"> Ingresa <a href="${confirmLink}">aquí</a> para recuperar tu contraseña! </p>
                  <p style="color: #666; text-align: right; margin-top: 1rem;">- Equipo de Weskan S.A.</p>
                </td>
              </tr>
              <tr>
                <td style="margin: 1rem; color: #fff; text-align: center; padding: 1rem;">
                  No somos únicos, sí los primeros
                </td>
              </tr>
            </table>
        
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
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Cambio en el acceso de listas",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      
          <table width="100%" style="max-width: 500px; margin: 0 auto; background-color: #db4272;">
            <tr>
              <td style="padding: 1rem;">
                <table style="width: 100%; display: flex; flex-direction: row; align-items: center;">
                  <tr>
                    <td style="width: 3.5rem; height: 3.5rem; margin: 1.25rem;">
                      <img src="https://weskan.s3.sa-east-1.amazonaws.com/image/weskan-logo-small.png" alt="Logo Weskan" style="border-radius: 0.25rem; margin-right: 0.5rem;" />
                    </td>
                    <td style="color: #fff; font-weight: 600; font-size: 1.25rem; margin: 0.625rem 0 0 0.625rem;">Weskan S.A.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 1rem; background-color: #fff;">
                <h3 style="font-weight: 500; font-size: 1.125rem; color: #333;">Tienes un nuevo mensaje!</h3>
                <p style="color: #666; margin-top: 1rem;">Se le ha denegado el acceso a la lista especial de precios.</p>
                <p style="color: #666; text-align: right; margin-top: 1rem;">- Equipo de Weskan S.A.</p>
              </td>
            </tr>
            <tr>
              <td style="margin: 1rem; color: #fff; text-align: center; padding: 1rem;">
                No somos únicos, sí los primeros
              </td>
            </tr>
          </table>
      
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
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Cambio en el acceso de listas",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
      
          <table width="100%" style="max-width: 500px; margin: 0 auto; background-color: #db4272;">
            <tr>
              <td style="padding: 1rem;">
                <table style="width: 100%; display: flex; flex-direction: row; align-items: center;">
                  <tr>
                    <td style="width: 3.5rem; height: 3.5rem; margin: 1.25rem;">
                      <img src="https://weskan.s3.sa-east-1.amazonaws.com/image/weskan-logo-small.png" alt="Logo Weskan" style="border-radius: 0.25rem; margin-right: 0.5rem;" />
                    </td>
                    <td style="color: #fff; font-weight: 600; font-size: 1.25rem; margin: 0.625rem 0 0 0.625rem;">Weskan S.A.</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 1rem; background-color: #fff;">
                <h3 style="font-weight: 500; font-size: 1.125rem; color: #333;">Tienes un nuevo mensaje!</h3>
                <p style="color: #666; margin-top: 1rem;">Se le ha otorgado acceso a la lista de precios especiales en el apartado de catálogo.</p>
                <p style="color: #666; text-align: right; margin-top: 1rem;">- Equipo de Weskan S.A.</p>
              </td>
            </tr>
            <tr>
              <td style="margin: 1rem; color: #fff; text-align: center; padding: 1rem;">
                No somos únicos, sí los primeros
              </td>
            </tr>
          </table>
      
        </body>
      </html>
    `,
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};
