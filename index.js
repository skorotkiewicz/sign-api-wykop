const axios = require("axios");
const MD5 = require("md5.js");
const qs = require("qs");

const md5 = (value) => {
  return new MD5().update(value).digest("hex");
};

const signApi = (url, params, APPKEY, SECRET) => {
  return md5(
    SECRET +
      `https://a2.wykop.pl/${url}/appkey/${APPKEY}/` +
      Object.values(params).join(",")
  );
};

const wykopRequest = (
  request = "",
  params = {},
  APPKEY,
  SECRET,
  method = "post"
) => {
  const url = `https://a2.wykop.pl/${request}/appkey/${APPKEY}/`;

  return axios({
    method,
    url: url,
    headers: {
      apisign: signApi(request, params, APPKEY, SECRET),
    },
    data: qs.stringify(params),
  });
};

module.exports = { signApi, wykopRequest };
