import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
import "@/styles/emails.css";

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

const template = (message) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="54" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="54" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://efftnng.stripocdn.email/content/guids/CABINET_9857eb01a1e7451fccb7735c04dab2756a04b225c69334b4f7e48f05e25513cc/images/captura_de_pantalla_20240103_190922_CFR.png" alt style="display: block;" width="54"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20"></td><td width="486" valign="top"><![endif]-->
                                                        <table class="es-right" cellpadding="0" cellspacing="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="486" align="left" class="esd-container-frame">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text">
                                                                                        <p style="line-height: 120%; color: #ffffff; font-size: 30px; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;"><strong>Weskan S.A.</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p5r es-p5l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="590" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10" bgcolor="#ffffff">
                                                                                        <p style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif; font-size: 18px; color: #2f2d2d;">Tienes un nuevo mensaje!</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10" bgcolor="#ffffff">
                                                                                        <p style="line-height: 200%;">${message}</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right" class="esd-block-text es-p5" bgcolor="#ffffff">
                                                                                        <p style="color: #666666;">- Equipo de Weskan S.A.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                        <table cellspacing="0" cellpadding="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="560" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text">
                                                                                        <p style="font-size: 16px; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif; color: #ffffff;"><strong>No somos únicos, sí los primeros</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>`;
};

const templateWithLink = (message, link) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title></title>
      <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  
  <body>
      <div dir="ltr" class="es-wrapper-color">
          <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#f6f6f6"></v:fill>
              </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr>
                      <td class="esd-email-paddings" valign="top">
                          <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                          <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                          <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="54" valign="top"><![endif]-->
                                                          <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="54" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://efftnng.stripocdn.email/content/guids/CABINET_9857eb01a1e7451fccb7735c04dab2756a04b225c69334b4f7e48f05e25513cc/images/captura_de_pantalla_20240103_190922_CFR.png" alt style="display: block;" width="54"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td><td width="20"></td><td width="486" valign="top"><![endif]-->
                                                          <table class="es-right" cellpadding="0" cellspacing="0" align="right">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="486" align="left" class="esd-container-frame">
                                                                          <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text">
                                                                                          <p style="line-height: 120%; color: #ffffff; font-size: 30px; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;"><strong>Weskan S.A.</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <!--[if mso]></td></tr></table><![endif]-->
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                          <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p5r es-p5l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="590" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text es-p10" bgcolor="#ffffff">
                                                                                          <p style="font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif; font-size: 18px; color: #2f2d2d;">Tienes un nuevo mensaje!</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="left" class="esd-block-text es-p10" bgcolor="#ffffff">
                                                                                          <p style="line-height: 200%;">Ingresa <a href="${link}">aquí</a> para ${message}</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="right" class="esd-block-text es-p5" bgcolor="#ffffff">
                                                                                          <p style="color: #666666;">- Equipo de Weskan S.A.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                          <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left" bgcolor="#d20d6b" style="background-color: #d20d6b;">
                                                          <table cellspacing="0" cellpadding="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="560" align="left">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text">
                                                                                          <p style="font-size: 16px; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif; color: #ffffff;"><strong>No somos únicos, sí los primeros</strong></p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  
  </html>
  `;
};

export const sendEmail = async (email, subject, message) => {
  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: subject,
      html: template(message),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendVerificationEmail = async (email, token) => {
  const confirmLink = `${process.env.NEXTAUTH_URL}nueva-verificacion?token=${token}`;

  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Verificación de correo electronico",
      html: templateWithLink("verificar tu email!", confirmLink),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendPasswordRecoverEmail = async (email, token) => {
  const confirmLink = `${process.env.NEXTAUTH_URL}confirmar?token=${token}`;

  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Recuperación de contraseña",
      html: templateWithLink("recuperar tu contraseña!", confirmLink),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendRequestNoticeEmail = async (name) => {
  const link = `${process.env.NEXTAUTH_URL}administrador/accessos`;

  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: "ventas@weskan.com.ar",
      subject: "Nueva solicitud de usuario!",
      html: templateWithLink(
        `permitir el acceso de ${name} a las listas de precios.`,
        link
      ),
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
      html: template("Se le ha denegado el acceso a la lista de precios."),
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
      html: template(
        "Se le ha otorgado acceso a la lista de precios en el apartado de catálogo."
      ),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendAllowedSpecialListEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Cambio en el acceso de listas",
      html: template(
        "Se le ha otorgado acceso a la lista de precios de promoción."
      ),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendChangeRequestEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Cambio en el acceso de listas",
      html: template("Se le ha cambiado el acceso a la lista de precios."),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};

export const sendAllowedAdminEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `Weskan S.A. <${domain_address}>`,
      to: email,
      subject: "Cambio en los permisos",
      html: template(
        "Se le ha otorgado permisos de administrador a tu cuenta."
      ),
    });
    return response?.messageId ? { ok: true } : { ok: false };
  } catch (error) {
    return { ok: false };
  }
};
