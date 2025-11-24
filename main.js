import API_TIKTOK from "./src/api.js"
import fs from "fs"

(async () => {
  const cookie = fs.readFileSync("cookie.txt").toString();

  const api = new API_TIKTOK({ cookie });
  const userInfo = await api.get_user_info();

  // console.log(api.user_info);

  const resp_like = await api.likePost({
    aweme_id: "7565883984064924935"
  });

  console.log(resp_like);

})();