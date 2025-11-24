
## Welcome
This is webmssdk.js patch,  is not complete, missing parameters please learn more because it is too easy, 2 important things `X_Bogus` and `X_Gnarly` please do not use for bad purposes, we are not responsible

## APIs I have tried
    tiktok api like video
    tiktok api get profile info
    .... 

## X_Bogus breakpoint
```node
u[970].v.call(...)
```

## X_Gnarly breakpoint
```node
u[971].v.call(...)
```

## Run test

'''node
import API_TIKTOK from "./src/api.js"
import fs from "fs"

(async () => {
  const cookie = "";

  const api = new API_TIKTOK(cookie);
  const userInfo = await api.get_user_info();

  console.log(userInfo); // or api.user_info

  const resp_like = await api.likePost({
    aweme_id: "7565883984064924935" // video_id
  });

  console.log(resp_like);

})();
'''