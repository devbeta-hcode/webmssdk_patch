
## Welcome
Hello, I'm HCODE from DEV BETA.,JSC ,
This is webmssdk.js patch,  is not complete, missing parameters please learn more because it is too easy, 2 important things `X_Bogus` and `X_Gnarly` please do not use for bad purposes, we are not responsible

## Please support me by using the services at
  * https://viewrp.com
  * https://devbeta.vn

# Telegram
  * https://t.me/me_hcode

## update headers 
```node
"tt-csrf-token": "...",
"tt-ticket-guard-client-data": "...",
"tt-ticket-guard-public-key": "...",

you can update it here, i was quite busy so i missed it

POST: https://www.tiktok.com/ttwid/union/register/

```

## APIs I have tried
    * tiktok api like video
    * tiktok api get profile info
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

```node
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
```

## Disclaimer for Use of Open Source Code

  # 1. Scope of Use
  This source code is provided as “as-is” and under an open-source model. By using, copying, modifying, or distributing this code, you agree to the terms stated below.
  
  2. No Liability for Misuse
  The author assumes no responsibility or liability for any misuse, unlawful use, prohibited activities, damage, or any consequences arising from the use of this source code.
  All responsibility lies solely with the end user.
  
  # 3. No Warranty
  This source code is provided without any warranties, including but not limited to:
  
  Fitness for any particular purpose
  
  Reliability, stability, or error-free operation
  
  Security, safety, or non-infringement of third-party rights
  
  Users assume all risks associated with using this code.
  
  # 4. Limitation of Liability
  Under no circumstances shall the author be liable for:
  
  Direct or indirect damages
  
  Loss of data, loss of profits, or business interruption
  
  Any consequences arising from the use or inability to use the code
  
  # 5. User Responsibility
  By using this code, the user agrees to:
  
  Not use it for unlawful or harmful purposes
  
  Take full responsibility for security, safety, and any resulting consequences
