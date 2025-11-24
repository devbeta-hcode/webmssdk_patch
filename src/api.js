import axios from "axios";
import { headers, get_payload_like, get_payload_info } from "./utils.js";
import createWebmssdk from "./webmssdk.js";

class API_TIKTOK {
  constructor({ cookie = "" }) {
    this.user_info = null;
    this.headers = headers;
    this.headers["cookie"] = cookie;
    this.objCookie = this.obj_cookie(cookie);
    this.webmssdk = createWebmssdk();
    this.verifyFp = "verify_mi9wamgx_3rGBmMqB_uahW_4yAj_BgbF_PAxQ56l1gSyb";
    this.device_id = "7574744688575268373";
  }

  format_payload(data) {
    const newData = [];
    Object.keys(data).forEach(function (n) {
      newData.push(`${n}=${encodeURIComponent(data[n])}`);
    });
    return newData.join("&");
  }

  obj_cookie(cookie) {
    const newData = {};
    const cookies = cookie.split(";");
    Object.keys(cookie.split(";")).forEach(function (n) {
      const sp = cookies[n].split("=");
      newData[sp[0].trim()] = decodeURIComponent(sp[1].trim());
    });
    return newData;
  }

  async get_user_info(user_id="") {
    const bash_url = "https://www.tiktok.com/passport/account/info/v2/?";

    const obj_payload = get_payload_info({
      odinId: user_id,
      device_id: this.device_id,
      verifyFp: this.verifyFp,
    });

    let payload = this.format_payload(obj_payload);
    const resp = await axios.get(bash_url+payload, {
      headers: this.headers,
    });

    this.user_info = resp.data;
    return resp.data;
  }

  async likePost({ aweme_id }) {
    const bash_url = "https://www.tiktok.com/api/commit/item/digg/?";

    const obj_payload = get_payload_like({
      aweme_id,
      odinId: this.user_info.data.user_id_str || "",
      device_id: this.device_id,
      verifyFp: this.verifyFp,
      msToken: this.objCookie.msToken,
    });

    let payload = this.format_payload(obj_payload);
    const X_Bogus = this.webmssdk.u[970].v.call(void 0, payload, undefined);
    const X_Gnarly = this.webmssdk.u[971].v.call(
      void 0,
      payload,
      undefined,
      bash_url + payload,
      {
        totalXHRRequests: 8,
        totalFetchRequests: 4,
        interceptedXHRRequests: 0,
        interceptedFetchRequests: 1,
      }
    );

    payload = this.webmssdk.u[969].v.call(void 0, bash_url + payload, [
      "X-Bogus",
      X_Bogus,
    ]);
    const full_url = this.webmssdk.u[969].v.call(void 0, payload, [
      "X-Gnarly",
      X_Gnarly,
    ]);

    const resp = await axios.post(full_url, "", {
      headers: this.headers,
    });

    return resp.data;
  }
}

export default API_TIKTOK;
