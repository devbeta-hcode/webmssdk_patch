
## Welcome
This is webmssdk.js patch,  is not complete, missing parameters please learn more because it is too easy, 2 important things `X_Bogus` and `X_Gnarly` please do not use for bad purposes, we are not responsible

## update headers 
```node
"tt-csrf-token": "VtZhDuGD-STsUQy43Dj6-oDjZOIfZyetcoxY",
"tt-ticket-guard-client-data": "eyJ0c19zaWduIjoidHMuMS4wOGI1ZWQ2MmNmY2QwMDM2OWRlY2MwMWU2YzNmZjczMTE5OWY4MGQwODg1M2ExZmJjZjdmNTA3NTM4YWI5Y2M1MGU3MGI0YmRhODJjMTM4MzZlNWNmYTE4Mzk0ZDcwMjQwZjhhZjE2MzFmMTY1YWU5NjAxMjJlZWZmZDQ1MzNkZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJNRVlDSVFEL0twd2cwUVJ1ZExXMnB1NEUwNWx2Q1pIcFcvcWpUT3h4NXJqT3UxRk5nQUloQU9NendVMkczOWppN1k1MzJUaHpTME9mcFc3RWkxam1ncXo1c0xxNU9Bc3EiLCJ0aW1lc3RhbXAiOjE3NjM5NjY4MDR9",
"tt-ticket-guard-public-key": "BHyNwZ32A59NI0M6aPbA6qddpq/ex+b07SQEEP3CqC4Lr2xElba16e8AqJ3fYvyC2Xz1I7VbN5B2Sg6j85b5mQQ=",

you can update it here, i was quite busy so i missed it

POST: https://www.tiktok.com/ttwid/union/register/

'''

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