/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "logodownload.org",
      "upload.wikimedia.org",
      "a0.muscache.com",
      "links.papareact.com",
      "www.whitmorerarebooks.com",
      "i.ibb.co",
    ],
  },
  nextConfig,
  env: {
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    STRIPE_WEBHOOK_SECRET:
      "whsec_e155d0da4a69a1647e51b250f571ea4ec25544b2e414d4b8b81e45ccf8a230ea",
    STRIPE_API_KEY:
      "pk_test_51Ki2G1CrYc1pyS6LtLLDjEKsUeWTSYcr0dCvU4t9rHhqnhmNbLHM8IJZAAhWfEbA1Knwpbh6JvxIewT3vfbXRArU00wxkPEQgG",
    STRIPE_SECRET_KEY:
      "sk_test_51Ki2G1CrYc1pyS6LezEpx7y5qZ7oYrgXeBFrBra2cQTjlRDUPOnDcde14XmXaDLzyxfCmBIaP2tRSrlweMrrpNZN00kQMzaTLA",
    mapbox_key:
      "pk.eyJ1IjoiNG40cyIsImEiOiJja3lyZTNxY28wbTZoMm90ZzliZHBmOXdkIn0.jHN4TGb4AqL0B8Tn2opPdQ",
    CLOUDINARY_CLOUD_NAME: "drckds98u",
    CLOUDINARY_API_KEY: "718781855449732",
    CLOUDINARY_SECRET_KEY: "Oi-2K01Rv16q3_sxOUWI61nLWl8",
    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "c05501ad918635",
    SMTP_PASSWORD: "519761e7251733",
    SMTP_FROM_NAME: "CozyCasa",
    SMTP_FROM_EMAIL: "noreply@cozycasa.com",
  },
};
