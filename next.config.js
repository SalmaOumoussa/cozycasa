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
    mapbox_key:
      "pk.eyJ1IjoiNG40cyIsImEiOiJja3lyZTNxY28wbTZoMm90ZzliZHBmOXdkIn0.jHN4TGb4AqL0B8Tn2opPdQ",
    CLOUDINARY_CLOUD_NAME: "drckds98u",
    CLOUDINARY_API_KEY: "718781855449732",
    CLOUDINARY_SECRET_KEY: "Oi-2K01Rv16q3_sxOUWI61nLWl8",
  },
};
