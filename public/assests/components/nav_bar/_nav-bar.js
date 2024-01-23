import { getToken,getUrlParam } from "../utilities/utilities.js";
const nav_template = document.createElement("template");
nav_template.innerHTML = `

<link rel="stylesheet" href="./assests/css/main-page/app.css" />
<svg class="hidden">
<symbol id="outline-chevron-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</symbol>
<symbol id="outline-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</symbol>
<symbol
id="moon"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
>
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</symbol>
<symbol
id="sun"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
/>
</symbol>
<symbol id="user-small-device" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</symbol>
<symbol id="dashboard-home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</symbol>
<symbol id="folder" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</symbol>
<symbol id="chat-bubble" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</symbol>
<symbol id="log-out-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</symbol>
<symbol id="bars" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</symbol>
<symbol id="logo-type" xmlns="http://www.w3.org/2000/svg" class="fill-[#3a3a3a] dark:text-white" viewBox="0 0 739 344.219">
<g transform="translate(-168 -159)">
  <path d="M4277,469l-35,10-.038,46.04s-.644,12.671-15.155,12.671c-15.7,0-14.92-12.671-14.92-12.671V479.118h-35.858V525.04s1.019,12.876-14.45,12.876-14.7-12.876-14.7-12.876V479.118H4111.02V525.04s.318,13.109-24.273,13.109c-25.855,0-25.813-13.109-25.813-13.109V469.17h-37.015v55.87s-.108,6.226-3.954,9.523-11.431,3.664-11.431,3.664h-84.325l-20.014,20.015V469.17h-36.2V587.985l-19.33,19.33,25.895,25.895,29.638-29.638V572.779h104.34s10.642-.012,19.315-3.575,15.378-10.68,15.378-10.68a34.648,34.648,0,0,0,16.578,11.905c10.88,3.564,14.468,2.334,26.941,2.571,12.614-.157,12.813.615,23.288-2.571a56.489,56.489,0,0,0,18.612-10.392,42.57,42.57,0,0,0,14.609,9.982c8.453,3.186,19.2,2.761,19.2,2.761s9.581.2,17.634-2.761a49.155,49.155,0,0,0,14.577-9.092,42.813,42.813,0,0,0,14.28,9.092c8.253,2.963,9.02,2.828,18.731,2.761s18.2,1.883,34.005-13.452a49.579,49.579,0,0,0,15.2-34.287Z" transform="translate(-3370 -250)"></path>
  <rect width="36" height="36" transform="translate(498 159)"></rect>
  <rect width="36" height="36" transform="translate(618 347)"></rect>
  <path d="M3841,409.025h-35.98l-.031,114.023s1.207,7.253-7,11.716c-5.884,3.316-16.336,3.525-16.336,3.525l-34.175-.07-20.047,20.031.016-89.078H3691.26L3691.229,588l-19.344,19.313,25.922,25.906,29.625-29.625.016-30.812h65.361s17.6-.51,33.153-15.884c15.486-16,14.91-33.867,14.91-33.867Z" transform="translate(-3367.004 -250.009)"></path>
  <path d="M3657.909,469.262l-36.659-.106-.031,115.991s-.755,6.012-4.126,9.292-8.788,3.771-8.788,3.771H3579.61s-6.907-.491-10.559-3.771-3.821-9.3-3.821-9.3L3565.5,529H3529l.022,52.672a54.781,54.781,0,0,0,15.336,36.476,49.256,49.256,0,0,0,35.255,14.816h27.845s18.5,1.476,34.513-14.57a53.928,53.928,0,0,0,15.943-35.173Z" transform="translate(-3357.698 -250)"></path>
  <rect width="36" height="36" transform="translate(208 219)"></rect>
  <g class="fill-[#5f5f5f] dark:fill-white" transform="translate(20.991 638.909)">
      <path d="M483.775-189.183c-.663.751-.707,2.827-.618,24.692l.133,23.941,1.1,1.06c1.988,1.988,8.084,3.4,15.46,3.666,9.674.353,14.489-1.1,18.6-5.477,3.048-3.269,4.02-6.184,4.285-13.031.4-11.4-2.871-17.978-10.16-20.54a25.178,25.178,0,0,0-11.971-.4c-3.49.8-8,3.313-9.365,5.257-.618.839-.663,0-.663-8.79,0-8.879-.088-9.806-.8-10.469C488.59-190.331,484.791-190.287,483.775-189.183Zm26.238,21.291c3.578,1.944,5.3,5.919,5.3,12.1,0,5.168-.928,7.907-3.49,10.425a10.721,10.721,0,0,1-4.285,2.65c-2.871.839-8.834.707-13.3-.265l-3.666-.8v-17.713l1.193-1.679a17.3,17.3,0,0,1,7.333-5.477C502.063-169.614,507.629-169.217,510.014-167.892Z" transform="translate(-187.644 0)"></path>
      <path d="M1660.079-188.9a4.454,4.454,0,0,0-.221,5.654c1.678,2.12,6.626,1.944,8.172-.265a4.58,4.58,0,0,0-.442-5.389c-.883-.928-1.5-1.1-3.755-1.1S1660.962-189.823,1660.079-188.9Z" transform="translate(-844.083 -0.022)"></path>
      <path d="M159.55-180.517c-4.2.618-6.847,1.767-9.011,3.931-2.3,2.341-3.092,4.417-3.092,8.26,0,4.771,1.634,8,5.257,10.292,2.915,1.9,4.771,2.474,14.4,4.461,4.682.972,9.188,2.032,9.983,2.385,3.49,1.458,5.257,3.8,5.257,6.891a5.652,5.652,0,0,1-3.534,5.433c-1.9.928-2.518.972-16.432,1.1-16.255.133-15.681,0-15.2,3.4.53,3.445.309,3.4,16.7,3.225,13.208-.177,14.489-.265,17.227-1.148,3.71-1.237,7.023-4.064,8.172-7.068a19.882,19.882,0,0,0,.177-10.425,11.966,11.966,0,0,0-2.164-3.445c-3-3.357-6.8-4.859-17.051-6.758-8.26-1.59-11.4-2.606-13.252-4.329a5.426,5.426,0,0,1,1.06-8.923c1.458-.839,2.429-.883,13.914-1.016,6.8-.044,12.81-.221,13.384-.309.839-.221.972-.53.972-2.429,0-1.634-.221-2.429-.883-3.092-.839-.839-1.414-.883-12.236-.839C166.927-180.87,160.787-180.694,159.55-180.517Z" transform="translate(0 -5.088)"></path>
      <path d="M801.6-180.372l-1.1.574v18.95c0,14.93.132,19.436.618,21.114a12.488,12.488,0,0,0,7.023,7.421c2.341.928,3.357,1.016,14.8,1.193,14.135.177,14.179.177,14.709-3.225.486-3.357.663-3.313-11.529-3.313-11.485,0-13.914-.353-15.946-2.253-2.164-2.032-2.385-4.02-2.385-22.528v-17.139l-.972-.663A5.964,5.964,0,0,0,801.6-180.372Z" transform="translate(-364.828 -5.1)"></path>
      <path d="M327.357-157.351c-3.666.883-5.522,1.811-7.863,4.02-4.064,3.8-5.61,8.7-5.257,16.83.353,9.32,2.739,14.091,8.437,17.006,3,1.546,3.092,1.546,8.614,1.546,6.758-.044,9.365-.883,13.031-4.241,2.562-2.341,2.915-2.253,2.915.751,0,2.827,3.18,4.285,5.654,2.562l.972-.663v-33.394l-1.06-.972C349.8-156.732,333.851-158.9,327.357-157.351Zm14.886,6.67c5.036,1.06,4.55.088,4.55,9.63,0,9.365-.044,9.585-3.18,12.545-3.092,3-5.212,3.843-10.071,4.064-3.931.177-4.329.088-6.626-1.1a6.971,6.971,0,0,1-3.755-3.843c-1.148-2.3-1.325-3.136-1.458-7.112-.309-7.6,1.5-11.529,6.317-13.738,1.855-.883,2.915-1.06,6.714-1.06A45.15,45.15,0,0,1,342.244-150.681Z" transform="translate(-93.333 -17.962)"></path>
      <path d="M960.92-157.131c-9.144,2.385-13.208,9.1-12.678,20.849.4,9.276,3.931,14.356,11.794,16.83,2.385.8,4.329.972,11.794,1.193,10.2.221,10.866.088,11.308-2.827.53-3.18.265-3.269-7.554-3.269-10.734,0-14.356-.883-17.183-4.152-1.325-1.5-2.65-4.506-2.209-4.991.133-.133,6.493-1.016,14.091-1.944,7.6-.972,14.268-1.9,14.8-2.164,1.369-.574,1.678-2.253,1.1-6.449-1.016-7.73-4.594-11.662-11.971-13.252A34.434,34.434,0,0,0,960.92-157.131Zm11.043,5.875a8.952,8.952,0,0,1,6.228,4.506c1.148,2.606,1.1,4.2-.133,4.461-1.281.265-21.2,2.915-22,2.915-.839,0-.265-4.02,1.016-6.8a8.738,8.738,0,0,1,5.742-4.947A21.871,21.871,0,0,1,971.963-151.257Z" transform="translate(-447.283 -17.96)"></path>
      <path d="M1117.357-157.351c-3.666.883-5.522,1.811-7.863,4.02-4.064,3.8-5.61,8.7-5.256,16.83.353,9.32,2.739,14.091,8.437,17.006,3,1.546,3.092,1.546,8.614,1.546,6.758-.044,9.365-.883,13.031-4.241,2.562-2.341,2.915-2.253,2.915.751,0,2.827,3.18,4.285,5.654,2.562l.972-.663v-33.394l-1.06-.972C1139.8-156.732,1123.851-158.9,1117.357-157.351Zm14.886,6.67c5.036,1.06,4.55.088,4.55,9.63,0,9.365-.044,9.585-3.18,12.545-3.092,3-5.213,3.843-10.071,4.064-3.931.177-4.329.088-6.626-1.1a6.971,6.971,0,0,1-3.755-3.843c-1.148-2.3-1.325-3.136-1.458-7.112-.309-7.6,1.5-11.529,6.317-13.738,1.855-.883,2.915-1.06,6.714-1.06A45.152,45.152,0,0,1,1132.244-150.681Z" transform="translate(-534.371 -17.962)"></path>
      <path d="M1292.507-157.344a14.828,14.828,0,0,0-9.144,4.2c-2.385,2.164-2.739,2.076-2.739-.839a4.2,4.2,0,0,0-.574-2.164c-.707-.972-3.269-1.413-4.815-.8l-1.237.486V-138c0,21.026-.177,19.966,3.622,19.966,3.49,0,3.445.088,3.445-13.3v-11.662l1.679-2.209c3.269-4.329,7.024-5.963,13.693-5.963,3.931,0,4.505-.353,4.505-2.695C1300.943-157.256,1298.779-158.139,1292.507-157.344Z" transform="translate(-629.17 -18.101)"></path>
      <path d="M1421.563-157.3a16.329,16.329,0,0,0-7.465,3.843c-2.076,1.855-2.474,1.723-2.474-.883a2.98,2.98,0,0,0-.8-1.944c-.972-.883-4.505-1.016-5.3-.221-.4.4-.53,5.168-.53,18.685,0,20.673-.177,19.657,3.622,19.657,3.49,0,3.446.133,3.446-13.782V-144.1l2.164-2.253c3.269-3.4,6.052-4.638,10.866-4.859,3.49-.133,4.2-.044,5.963.883,3.666,1.9,3.711,2.164,3.975,17.492.221,12.633.265,13.428,1.06,14.047,1.325.928,4.506.8,5.566-.265.839-.839.883-1.458.883-12.943,0-6.582-.221-13.3-.486-14.886-.884-5.61-3.887-9.055-9.011-10.38A28.728,28.728,0,0,0,1421.563-157.3Z" transform="translate(-702.304 -17.963)"></path>
      <path d="M1777.507-157.344a14.828,14.828,0,0,0-9.144,4.2c-2.385,2.164-2.739,2.076-2.739-.839a4.2,4.2,0,0,0-.574-2.164c-.707-.972-3.269-1.413-4.815-.8l-1.237.486V-138c0,21.026-.177,19.966,3.622,19.966,3.49,0,3.445.088,3.445-13.3v-11.662l1.679-2.209c3.269-4.329,7.024-5.963,13.693-5.963,3.931,0,4.505-.353,4.505-2.695C1785.943-157.256,1783.779-158.139,1777.507-157.344Z" transform="translate(-899.934 -18.101)"></path>
      <path d="M644.706-155.382a5.028,5.028,0,0,0-.4,2.783l.132,2.12,12.28.221c11.529.221,12.368.265,12.943,1.06,1.767,2.429.265,3.578-12.236,9.674-14.224,6.891-15.681,8.26-15.372,14.533.221,3.71.928,4.991,3.711,6.626,1.723,1.016,2.076,1.016,15.637,1.148,7.642.088,14.356.044,14.886-.088,1.369-.353,2.3-3.313,1.59-4.9l-.53-1.1H664.186c-11.176,0-13.3-.088-14.135-.707a2.8,2.8,0,0,1-.044-4.2c.53-.53,5.831-3.313,11.75-6.184,11.617-5.654,14.312-7.553,15.151-10.513,1.193-4.329-.221-8.437-3.534-10.115-1.9-.928-2.341-.972-15.063-.972C647.533-156,645.1-155.867,644.706-155.382Z" transform="translate(-276.353 -19.003)"></path>
      <path d="M1662.528-155.47c-.4.4-.53,5.168-.53,18.685,0,20.673-.177,19.657,3.622,19.657,3.578,0,3.446.883,3.446-19.7,0-13.517-.132-18.243-.53-18.641a6.072,6.072,0,0,0-3-.53A6.073,6.073,0,0,0,1662.528-155.47Z" transform="translate(-845.781 -19.003)"></path>
      <path d="M1566.943-85.315c-1.59.707-1.944,1.414-1.944,4.02s1.414,3.755,4.638,3.755c3.269,0,4.638-1.148,4.638-3.8,0-2.562-.53-3.49-2.253-4.108A6.722,6.722,0,0,0,1566.943-85.315Z" transform="translate(-791.63 -58.15)"></path>
  </g>
</g>
</symbol>
<symbol id="close-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</symbol>
<symbol id="chevron-down" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</symbol>
<symbol id="play" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</symbol>
<symbol id="arrow-mini-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
</symbol>
<symbol id="card-user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</symbol>
<symbol id="card-clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</symbol>
<symbol id="card-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</symbol>
<symbol id="solid-users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</symbol>
<symbol id="toman" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="4" stroke="currentColor" viewBox="0 0 57.988 55.588">
<g transform="translate(-4013.907 176.406)">
  <path d="M4068.117-146.108s3,8.61,1.066,11.035-4.839,1.921-11.736,1.921-10.552.731-12.355-1.6-2.288-7.952,2.547-9.55,7.877,3.5,7.877,9.231.668,5.874-.732,8.36c-1.858,2.6-10.917,3.915-10.917,3.915"></path>
  <path d="M4069.56-152.461v3.969" transform="translate(0 -1.945)"></path>
  <path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)"></path>
  <path d="M4069.56-152.461v3.969" transform="translate(-7 -1.945)"></path>
  <path d="M4027.592-128.435s5.376,4.632,8.167,3.124a5.918,5.918,0,0,0,3.034-6.158c-.446-4.24-4.144-5.625-6.783-4.418s-4.016,5.866-4.016,5.866-1.857,4.934-6.114,4.934-4.928-2.6-5-4.934-.98-19.76-.98-19.76"></path>
  <path d="M4069.56-152.461v3.969" transform="translate(-44 -23.945)"></path>
  <path d="M4017.55-171.009s-3.525,12.094,2.454,15.619c5.623,3.035,12.585-.714,12.585-.714s3.473-2.1,3.436-4.864c-.089-3.883-1.651-12.986-1.651-12.986"></path>
</g>
</symbol>
<symbol id="outline-chevron-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</symbol>
<symbol id="calender-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</symbol>
<symbol id="arrow-left-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
<path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</symbol>
<symbol id="chevron-left-banner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
<path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
</symbol>
<symbol id="instagram" fill="currentColor" viewBox="0 0 1024 1024.008" xmlns="http://www.w3.org/2000/svg">
<path d="M273.92 43.776c-35.243 4.395-64.043 13.056-92.843 27.947A257.28 257.28 0 0 0 46.72 253.44c-3.03 16.17-3.2 29.91-3.2 258.56s.17 242.39 3.2 258.56a257.152 257.152 0 0 0 134.23 181.59c22.23 11.562 42.07 18.645 68.223 24.405l17.92 3.925h489.814l17.92-3.925c79.19-17.45 141.482-64.342 177.322-133.504 11.562-22.23 18.645-42.07 24.405-68.223l3.925-17.92V267.093l-3.925-17.92c-23.04-104.576-97.28-178.944-201.558-201.856-16.213-3.584-18.986-3.626-256.17-3.882-131.883-.17-242.09 0-244.907.34m494.165 89.6A172.8 172.8 0 0 1 891.99 261.974c2.986 12.97 3.157 25.6 3.157 250.027s-.17 237.056-3.158 250.027c-14.85 63.83-61.825 111.83-126.55 129.322-13.653 3.71-13.91 3.71-246.485 4.223-203.18.427-234.752.17-247.98-2.09a165.888 165.888 0 0 1-92.67-47.83 169.173 169.173 0 0 1-44.93-77.568l-4.522-16.298V272.213l4.523-16.298a169.173 169.173 0 0 1 44.928-77.568 165.675 165.675 0 0 1 91.733-47.83c9.984-1.792 58.24-2.176 247.083-1.962l234.667.298 16.298 4.523M727.21 240c-15.53 7.765-23.253 22.016-22.058 40.747a39.552 39.552 0 0 0 19.2 32.34c11.477 7.126 28.885 8.193 40.79 2.604 10.24-4.82 19.285-15.317 22.527-26.24 3.157-10.58 3.157-13.653 0-24.234C780.16 240 751.36 227.968 727.21 240m-243.327 58.752c-27.18 4.267-55.296 14.38-79.275 28.5-55.552 32.684-94.507 92.588-102.443 157.4-2.474 20.095-2.218 34.985.896 56.105 13.996 94.25 86.743 166.528 181.633 180.438 43.18 6.314 86.016-1.11 127.062-22.016 57.3-29.185 99.157-85.377 112.085-150.487 3.5-17.706 3.03-62.89-.81-80.725a211.285 211.285 0 0 0-61.782-111.147 205.78 205.78 0 0 0-101.46-54.953c-16.812-3.883-59.777-5.632-75.905-3.115m63.104 87.723a130.133 130.133 0 0 1 81.024 66.645c8.662 17.536 11.947 30.165 13.185 50.39 3.456 57.642-31.872 108.927-88.235 128.17-14.848 5.077-18.005 5.547-37.547 5.59-25.685.042-36.778-2.518-59.733-13.782-13.653-6.7-18.645-10.368-31.7-23.467-13.1-13.055-16.77-18.047-23.468-31.7-11.392-23.21-13.952-34.133-13.824-59.733.085-19.456.597-22.784 5.632-37.547 15.275-44.715 49.75-75.99 94.933-86.016 14.72-3.285 44.843-2.56 59.734 1.45"></path>
</symbol>
<symbol id="telegram" fill="currentColor" viewBox="0 0 1024 1027" xmlns="http://www.w3.org/2000/svg">
<path d="M834.25 127.875c-10.75.5-20.875 3.625-29.875 7.125h-.125c-9.125 3.625-52.5 21.875-118.375 49.5C620 212.25 534.5 248.25 449.625 284 280.125 355.375 113.5 425.625 113.5 425.625l2-.75s-11.5 3.75-23.5 12c-6.125 4-12.875 9.5-18.75 18.125s-10.625 21.875-8.875 35.5c2.875 23.125 17.875 37 28.625 44.625 10.875 7.75 21.25 11.375 21.25 11.375h.25l156.25 52.625c7 22.5 47.625 156 57.375 186.75 5.75 18.375 11.375 29.875 18.375 38.625 3.375 4.5 7.375 8.25 12.125 11.25 1.875 1.125 3.875 2 5.875 2.75.625.375 1.25.5 2 .625l-1.625-.375c.5.125.875.5 1.25.625 1.25.375 2.125.5 3.75.75 24.75 7.5 44.625-7.875 44.625-7.875l1.125-.875 92.25-84L662.5 866l3.5 1.5c32.25 14.125 64.875 6.25 82.125-7.625C765.5 845.875 772.25 828 772.25 828l1.125-2.875L892.875 213c3.375-15.125 4.25-29.25.5-43s-13.375-26.625-25-33.5c-11.75-7-23.375-9.125-34.125-8.625zM831 193.5c-.125 2 .25 1.75-.625 5.625v.375L712 805.25c-.5.875-1.375 2.75-3.75 4.625-2.5 2-4.5 3.25-14.875-.875L504.25 664 390 768.125l24-153.25s296.25-276.125 309-288 8.5-14.375 8.5-14.375c.875-14.5-19.25-4.25-19.25-4.25L322.625 549.625 322.5 549l-186.75-62.875V486c-.125 0-.375-.125-.5-.125.125 0 1-.375 1-.375l1-.5 1-.375S305 414.375 474.5 343c84.875-35.75 170.375-71.75 236.125-99.5 65.75-27.625 114.375-47.875 117.125-49 2.625-1 1.375-1 3.25-1z"></path>
</symbol>
</svg>
<section class="  header-sec flex items-center justify-between px-9 md:px-16 lg:px-5 xl:px-8 h-[88px] md:h-32 dark:border-b dark:border-b-gray-700 mx-auto max-w-[1920px]">
<!-- bars-mobile-icon -->
<div class="navigation__open_btn lg:hidden flex items-center justify-center">
    <svg class="w-9 h-9 dark:text-gray-500"><use xlink:href="#bars"></use></svg>
</div>
<!-- right side  -->
<div class="nav-side right-side flex items-center ">
    <div class="logo-desktop-wrapper  lg:ml-5 lg:pl-5 lg:border-l border-l-gray-100 dark:border-l-gray-700">
      <a href="index.html">  <img src="assests/imges/logos/main-logo.png" class="w-20 md:w-[104px]" alt=""></a>
    </div>
    <nav class="  flex items-center h-14 ">
        <!-- mobile menu -->
        <div class="navigation lg:hidden bg-white dark:bg-navColor w-64 h-screen overflow-y-auto fixed top-0 bottom-0 -right-[100rem]  transition-all duration-300">
            <div class="mobil-logo-wrapper flex gap-x-5 items-center justify-between px-7 pb-5 mt-5 relative border-b border-b-gray-200 dark:border-b-slate-600">
                <div class="flex items-center gap-x-2">
                    <img src="assests/imges/logos/logo-mobile.png" class="w-[62px]" alt="سبزلرن">
                    <svg class="w-[81px] h-[37px] dark:text-white">
                        <use xlink:href="#logo-type"></use>
                    </svg>
                </div>
                <div class="close-mobil-menu-btn flex items-center justify-center w-9 h-9">
                    <svg class="h-7 w7 text-slate-500 "><use xlink:href="#close-btn"></use></svg>
                </div>
            </div>
            <!-- search mobile form -->
            <form class="block mt-7 px-7">
                <label class="relative w-full h-12 flex justify-between transition-all">
                    <input type="text" class="global-search-input rounded-xl bg-gray-100 dark:focus:text-white text-slate-500 placeholder:text-slate-500 dark:text-gray-500
                     dark:placeholder-gray-500 w-full h-full dark:border dark:border-gray-700
                      dark:focus:border-gray-600 dark:bg-gray-800 text-base pl-12 pr-5 block
                       transition-all"  placeholder="جستجو">
                       <button class="global-search-btn absolute flex left-0  pl-4   top-0 bottom-0 h-6 my-auto text-slate-500 dark:text-gray-500" type="submit" role="button">
                        <svg class="w-6 h-6  flex items-center justify-center  "><use xlink:href="#outline-search-icon"></use></svg>
                       </button>
                </label>
            </form>
            <!-- mobile-menu items -->
            <div class="mt-5">
                <ul id="mobile-sub-menu-wrapper" class="flex flex-col gap-y-5 child:px-7 child:cursor-pointer child:transition-all">
                <!-- renden in backend -->
                <!-- renden in backend -->
                </ul>
            </div>
            <!-- mobile change-theme-btn -->
            <div class="mt-5 px-7 border-t border-t-gray-200 dark:border-t-slate-600">
                <div class="switch-theme hidden dark:inline-flex items-center gap-x-2.5 mt-3 select-none dark:text-slate-400 text-slate-500 ">
                    <div class=" w-[38px] h-[38px] flex items-center justify-center rounded-xl dark:text-slate-400 text-slate-500 bg-gray-100 dark:bg-transparent dark:border dark:border-slate-600">
                <svg id="light-mode" class="w-7 h-7 hidden dark:inline-block"><use xlink:href="#sun"></use></svg>
                    </div>
                    تم روشن
                </div>
                <div class="switch-theme dark:hidden inline-flex items-center gap-x-2.5 mt-3 select-none dark:text-slate-400 text-slate-500 ">
                    <div class="w-[38px] h-[38px] flex items-center justify-center rounded-xl dark:text-slate-400 text-slate-500 bg-gray-100 dark:bg-transparent dark:border dark:border-slate-600">
                        <svg id="dark-mode" class="w-7 h-7 dark:hidden"><use xlink:href="#moon"></use></svg>
                    </div>
                    تم تیره
                </div>
            </div>
        </div>
        <!-- desktop menu -->
        <ul id="menu-wrappper-item" class="hidden lg:flex child:text-base xl:child:text-lg  lg:gap-x-3 xl:gap-x-3 2xl:gap-x-5 items-center">
        <!--render with backend data --> 
        </ul>
    </nav>

</div>
<!-- left side -->
<div class="relative left-side flex items-center   lg:gap-x-3 h-14">
    <!-- search-box -->
    <div class="relative group hidden lg:block  "  >
        <form class=" hidden xl:block">
            <label class="relative h-14 block transition-all">
                <input type="text"  placeholder="جستجو" class="global-search-input rounded-full dark:focus:text-white text-slate-500
                dark:text-gray-600 placeholder:text-slate-50 dark:placeholder-gray-600 w-48 focus:w-64 focus:outline-none
                h-full border border-transparent focus:border-gray-200
                dark:border-gray-700 focus:text-zinc-700 dark:focus:border-gray-600
                bg-gray-300 dark:bg-grayTheme   text-base placeholder:text-lg pl-14 pr-5 block 
                  transition-all">
                  <button class="global-search-btn absolute left-5 top-0 bottom-0 h-7 w-7 my-auto text-slate-500 dark:text-gray-600" type="submit" role="button">
                    <svg class="h-7 w-7"><use xlink:href="#outline-search-icon"></use></svg>
                  </button>
            </label>
        </form>
        <!-- lg searchbox -->
        <div class="xl:hidden relative" >
            <div class="search-box flex items-center justify-center h-14 w-14 rounded-full relative
             bg-gray-100 dark:bg-transparent dark:border
             dark:border-gray-700 dark:hover:border-gray-600 transition-colors cursor-pointer" id="search-box">
                <svg class="h-6 w-6 text-slate-500 dark:text-gray-600"><use xlink:href="#outline-search-icon"></use></svg>
            </div>
            <!-- lg-search-box-is-active -->
            <div class="lg-search-btn hide absolute -left-24 top-full pt-4 z-50 transition-all" id="active-search-box">
                <form >
                    <label class="relative flex justify-around items-center w-64  ">
                        <input type="text"  placeholder="جستجو بین دوره ها" 
                        class="global-search-input w-full h-[68px] pr-4 pl-16 text-lg bg-white
                         dark:bg-gray-700 placeholder:text-slate-500
                          dark:placeholder:text-gray-400 text-gray-700
                           dark:text-gray-500 rounded-2xl">
                           <button class="global-search-btn absolute left-0 top-0 bottom-0 h-full my-auto text-slate-500 dark:text-gray-600" type="submit" role="button">
                            <svg class="ml-5 w-6 h-6"><use xlink:href="#outline-search-icon"></use></svg>
                           </button>
                    </label>
                </form>
            </div>
        </div>
    </div>
    <!-- change theme  -->
        <div class="switch-theme hidden lg:flex items-center justify-center h-14 
        w-14 rounded-full bg-gray-100 dark:bg-grayTheme
         text-slate-500 dark:text-gray-600 dark:border dark:border-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:border-gray-600 transition-colors">
        <svg id="light-mode" class="w-7 h-7 hidden dark:inline-block"><use xlink:href="#sun"></use></svg>
        <svg id="dark-mode" class="w-7 h-7 dark:hidden"><use xlink:href="#moon"></use></svg>
        </div>
        <!-- login-reg-section -->
        <div id="regLogBtns" class="relative text-base xl:text-lg text-white md:h-full md:w-[155px] xl:w-[180px]">
            <a href="login.html" class=" absolute right-0 w-[100px] lg:w-28 hidden md:flex items-center justify-start h-full bg-sky-300 hover:bg-sky-600 dark:bg-secondary/60 rounded-full pr-5 transition-colors">ورود</a>
            <a href="sign-up.html" class="absolute left-0 w-[100px] xl:w-28 hidden md:flex items-center justify-center
             h-full bg-sky-500 hover:bg-sky-600 dark:bg-secondary dark:hover:bg-[#3f6CD8] rounded-full z-10 transition-colors">عضویت</a>
             <!-- small devices login section -->
             <a href="#" class="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-slate-500 dark:bg-gray-800 dark:text-gray-500">
                <svg class="w-6 h-6"><use xlink:href="#user-small-device"></use></svg>
             </a>
        </div> 
        <!-- login&regiter confirmed -->
        <div class="relative group hidden" id="userProfile">
            <div class="user-profile">
                <img src="assests/imges/logos/7b23b6906e8ac542eda8771562fffc66.png" alt="user-profile"
                class="object-cover w-12 h-12 md:h-14  md:w-14 rounded-full inline-block cursor-pointer "
                >
            </div>
        </div>
        <!-- sub-login-section -->
        <div class="absolute left-0 top-full  pt-4  transition-all hide" id="user-profile-dropdown">
           <div class="w-[278px] bg-white dark:bg-gray-700 py-5 px-6 rounded-2xl">
            <!-- user-info -->
            <div class="flex items-center border-b border-b-gray-200 dark:border-b-slate-600 pb-5 mb-2">
                <a href="#" class="shrink-0">
            <img id="user-photo" src="assests/imges/logos/7b23b6906e8ac542eda8771562fffc66.png" class="object-cover h-14 w-14 rounded-full inline-block" loading="lazy" alt="">
                </a>
                <div class="mr-2.5 flex flex-col gap-y-1 overflow-hidden">
                    <span id="userDataName" class="text-lg text-zinc-700 dark:text-white inline-block truncate">علیرضا نقویان</span>
                    <span id="userDataVallet" class="text-sm text-sky-500 dark:text-secondary inline-block font-DanaMedium">موجودی :۰ تومان</span>
                </div>
            </div>
            <!-- Dashboard links -->
            <a href="#" class="dashBoard-link">
                <span class="flex items-center gap-x-3 ">
                    <svg class="w-5 h-5"><use xlink:href="#dashboard-home"></use></svg> 
                    پیشخوان
                </span>
            </a>
            <a href="#" class="dashBoard-link">
                <span class="flex items-center gap-x-3 ">
                    <svg class="w-5 h-5"><use xlink:href="#folder"></use></svg> 
                    دوره های من
                </span>
            </a>
            <a href="#" class="dashBoard-link">
                <span class="flex items-center gap-x-3 ">
                    <svg class="w-5 h-5"><use xlink:href="#chat-bubble"></use></svg> 
                    تیکت های پشتیبانی
                </span>
            </a>
            <a href="#" class="dashBoard-link">
                <span class="flex items-center gap-x-3 ">
                    <svg class="w-5 h-5"><use xlink:href="#user-small-device"></use></svg> 
                    جزئیات حساب
                </span>
            </a>
            <!-- log-out-link -->
            <div class="mt-2 pt-2 border-t border-t-gray-200 dark:border-t-slate-600" id="userLogOut">
               <a href="#" class="flex items-center justify-between  dark:bg-transparent dark:text-white px-2.5 
               py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate dark:hover:text-zinc-800 transition-colors">
            <span class="flex items-center gap-x-3">
                <svg class="w-5 h-5"><use xlink:href="#log-out-icon"></use></svg>
                خروج
            </span>
            </a> 
            </div>
            </div> 
        </div>
</div>
</section>
<div class="overlay invisible opacity-0 fixed w-full h-full top-0 left-0 right-0 bg-black/40 z-40 transition-all"></div>
<div class="app-overlay fixed hide md:backdrop-blur w-full h-full top-0 left-0 right-0 bg-black/40 z-40 transition-all"></div>
`;
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(nav_template.content.cloneNode(true));
    this.barsBtn = this.shadowRoot.querySelector(".navigation__open_btn");
    this.overlayShadow = this.shadowRoot.querySelector(".app-overlay");
    this.getMobileNavigation = this.shadowRoot.querySelector(".navigation");
    this.closeBtn = this.shadowRoot.querySelector(".close-mobil-menu-btn");
    this.searchBox = this.shadowRoot.querySelector("#search-box");
    this.switchTheme = this.shadowRoot.querySelectorAll(".switch-theme");
    this.getLgSearchBtn  = this.shadowRoot.querySelector("#active-search-box");
    this.getProfileIcon = this.shadowRoot.getElementById("user-profile-dropdown");
    this.wrapper = this.shadowRoot.querySelector(".header-sec");
    this.userProfileWrapper= this.shadowRoot.getElementById("userProfile");
    this.regLogBtns = this.shadowRoot.getElementById("regLogBtns");
    // show mobile menu
    this.barsBtn.addEventListener("click", () => {
      this.getMobileNavigation.classList.add("right-0");
      this.getMobileNavigation.classList.add("z-50");
      this.overlayShadow.classList.add("show");
      this.getMobileNavigation.classList.remove("-right-[100rem]");
    });
    // close mobile menu
    this.closeBtn.addEventListener("click", () => {
      this.getMobileNavigation.classList.remove("right-0");
      this.getMobileNavigation.classList.remove("z-50");
      this.overlayShadow.classList.remove("show");
      this.overlayShadow.classList.add("hide");
      this.getMobileNavigation.classList.add("-right-[100rem]");
    });
    // darkmode active
    this.switchTheme.forEach((btnEvent)=>{
        btnEvent.addEventListener("click",()=>{
            this.wrapper.classList.toggle("dark")
            document.querySelector("html").classList.toggle("dark");
            if (document.querySelector("html").classList.contains("dark")) {
                localStorage.setItem("theme","dark");
            } else {
                localStorage.setItem("theme","light")
            }
        })
    })
    // save on l-storage
    let checkTheme = () => {
        let getThemeData = localStorage.getItem("theme");
        if (getThemeData == "dark") {
            this.wrapper.classList.add("dark")
          document.querySelector("html").classList.add("dark");
        }
      };
    //   use overlay serach box
      this.searchBox.addEventListener("click",()=>{
        this.getLgSearchBtn.classList.toggle("hide");
        this.getLgSearchBtn.classList.toggle("show");
        this.searchBox.classList.toggle("z-50");
        this.overlayShadow.classList.toggle("hide");
        this.overlayShadow.classList.toggle("show")
      })
    //   userprofile
    const showUserProfile = ()=>{
        this.getProfileIcon.classList.toggle("hide")
        this.getProfileIcon.classList.toggle("show")
        this.getProfileIcon.classList.toggle("z-50")
        this.userProfileWrapper.classList.toggle("z-50");
        this.overlayShadow.classList.toggle("hide")
        this.overlayShadow.classList.toggle("show")
    }
      // clickable overlay
    const onClickOverlay= ()=>{
        this.getLgSearchBtn.classList.add("hide");
        this.getLgSearchBtn.classList.remove("show");
        this.searchBox.classList.remove("z-50");
        this.overlayShadow.classList.add("hide");
        this.overlayShadow.classList.remove("show");
        this.getProfileIcon.classList.add("hide")
        this.getProfileIcon.classList.remove("show");
        this.getProfileIcon.classList.remove("z-50");
        this.getMobileNavigation.classList.add("-right-[100rem]");
        this.getMobileNavigation.classList.remove("right-0");
        this.getMobileNavigation.classList.remove("z-50");
    }
    // logout user 
     const logOut = ()=>{
        localStorage.removeItem("user")
        location.href = "index.html"
     }
    //get user token
    const token = async()=>{
        this.userName= this.shadowRoot.getElementById("userDataName");
        this.userWallet = this.shadowRoot.getElementById("userDataVallet")
        this.logOutBtn = this.shadowRoot.getElementById("userLogOut");
        const token = getToken();
      if(!token){
        return false    
      }
      let fetchGetMe = await fetch(`http://localhost:4000/v1/auth/me`,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
      })
      let getMeResponse = await fetchGetMe.json();
      this.userProfileWrapper.classList.remove("hidden")
      this.regLogBtns.classList.add("hidden")
      this.userName.textContent = getMeResponse.name;
      this.userWallet.textContent = `موجودی : ${getMeResponse.__v} تومان`
      this.logOutBtn.addEventListener("click",logOut)
    }
    // dynamic desktop menu & submenu
    const dynamicDesktopMenus = async()=>{
        this.menuItemWrapper = this.shadowRoot.querySelector("#menu-wrappper-item");
        // ////////////
        // get menu data
        // ////////////
        const fetchMenudatas = await fetch("http://localhost:4000/v1/menus");
        const menuResponse = await fetchMenudatas.json();
        // desktop menu
        menuResponse.forEach(menuItem =>{
            this.menuItemWrapper.insertAdjacentHTML("beforeend",`
            <li  class="relative group child-hover:text-baseColor">
            <a class="flex items-center active:text-baseColor gap-x-1.5 h-full text-zinc-700 dark:text-white text-lg font-normal font-Dana leading-7 " href="category.html?cat=${menuItem.href}">
           ${menuItem.title}
            <svg class="w-4 h-4"><use xlink:href="#outline-chevron-down"></use></svg>
        </a>
                <!-- sub-menu items -->
                <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute ring-0 top-full pt-1 xl:pt-4 transition-all z-10">
                    <div id="sub_menu_item" class="flex flex-col  gap-y-5 child:dark:text-white  child:text-zinc-700 bg-white dark:bg-gray-700 shadow-md dark:shadow-none py-5 px-6 rounded-2xl text-base ">
                    ${menuItem.submenus.map(submenuItems =>{
                        return ` <a href="${submenuItems.href}" class="submenu__link">${submenuItems.title}</a>`
                    }).join("")}
                    </div>
                </div>
            </li>
            `)
        })
    }
    // dynamic mobile menu & submenu
    const dynamicMobileMenus = async ()=>{
        this.mobileMenuWrapper = this.shadowRoot.querySelector("#mobile-sub-menu-wrapper");
        const fetchMenudatas = await fetch("http://localhost:4000/v1/menus");
        const menuResponse = await fetchMenudatas.json();
        menuResponse.forEach(mobileItem =>{
            this.mobileMenuWrapper.insertAdjacentHTML("beforeend",`
            <li class="mobile-menu-list-item ">
                        <span class="mobile-menu-link-item transition-all  flex  items-center justify-between">
                          ${mobileItem.title}
                        <svg  class=" w-4 h-4 transition-all"><use xlink:href="#chevron-down"></use></svg>
                        </span>
                        <ul  class=" mobile-sub-menu transition-all duration-300  flex flex-col gap-y-2 mt-2 mr-2 child:text-slate-500 dark:child:text-slate-400  child:relative">
                           
                           ${mobileItem.submenus.map(mItem =>{
                            return ` <li class="child:text-sm"><a href="${mItem.href}">${mItem.title}</a></li>`
                           }).join("")}
                        </ul>
                    </li>
            `)
        })
        this.subMenuTitle = this.shadowRoot.querySelectorAll(".mobile-menu-link-item");
         // show sub menu
    this.subMenuTitle.forEach((items) => {
        items.addEventListener("click", (event) => {
          const subMenu = event.target.nextElementSibling;
          this.subMenuTitle.forEach((newItem) => {
            if (newItem !== items) {
              newItem.nextElementSibling.classList.remove("active");
              newItem.classList.remove("dark:text-white");
              newItem.firstElementChild.classList.remove("rotate-180");
            }
          });
          subMenu.classList.toggle("active");
          items.classList.toggle("dark:text-white");
          event.target.firstElementChild.classList.toggle("rotate-180");
          
        });
      });
    }
    // /////////////
    // global search section
    // /////////////

    const leadToResultSearch = (e)=>{
        this.globalSearchInput = this.shadowRoot.querySelectorAll(".global-search-input")
        this.globaSearchBtns=this.shadowRoot.querySelectorAll(".global-search-btn");
        
      if(e.value){

          const urlParam = getUrlParam("value");
          location.href =`global-search.html?value=${e.value.trim()}`
      }
    }
    this.globalSearchInput = this.shadowRoot.querySelectorAll(".global-search-input")
    this.globaSearchBtns=this.shadowRoot.querySelectorAll(".global-search-btn");
    this.globaSearchBtns.forEach(searchBtn =>{
        searchBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            this.globalSearchInput.forEach(inputs =>{
                console.log(inputs.value);
                leadToResultSearch(inputs)
            })
        })
    })
    this.overlayShadow.addEventListener("click",onClickOverlay)
      this.userProfileWrapper.addEventListener("click",showUserProfile)
      window.addEventListener("load",async()=>{
        checkTheme();
        token();
        dynamicDesktopMenus();
        dynamicMobileMenus();
      })
  }
}
export { NavBar };
