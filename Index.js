
/* =========================================
   10 SOCIAL PLATFORMS METADATA
========================================= */
const PLATFORM_CONFIG = {
  youtube: {
    name: "YouTube",
    placeholder: "e.g. https://youtube.com/@channel",
    title: "Subscribe",
    desc: "Subscribe to our official YouTube channel to continue.",
    btn: "Subscribe on YouTube"
  },
  facebook: {
    name: "Facebook",
    placeholder: "e.g. https://facebook.com/page",
    title: "Follow Facebook",
    desc: "Follow our official Facebook page to unlock the next step.",
    btn: "Follow on Facebook"
  },
  instagram: {
    name: "Instagram",
    placeholder: "e.g. https://instagram.com/username",
    title: "Follow Instagram",
    desc: "Follow our official Instagram profile to continue verification.",
    btn: "Follow Instagram"
  },
  telegram: {
    name: "Telegram",
    placeholder: "e.g. https://t.me/channel",
    title: "Join Telegram",
    desc: "Join our official Telegram channel to unlock the next step.",
    btn: "Join Telegram"
  },
  twitter: {
    name: "Twitter (X)",
    placeholder: "e.g. https://x.com/username",
    title: "Follow Twitter (X)",
    desc: "Follow our official Twitter (X) profile to continue verification.",
    btn: "Follow on Twitter (X)"
  },
  snapchat: {
    name: "Snapchat",
    placeholder: "e.g. https://snapchat.com/add/username",
    title: "Add Snapchat",
    desc: "Add our official Snapchat account to continue verification.",
    btn: "Add on Snapchat"
  },
  pinterest: {
    name: "Pinterest",
    placeholder: "e.g. https://pinterest.com/username",
    title: "Follow Pinterest",
    desc: "Follow our official Pinterest page to continue verification.",
    btn: "Follow on Pinterest"
  },
  tiktok: {
    name: "TikTok",
    placeholder: "e.g. https://tiktok.com/@username",
    title: "Follow TikTok",
    desc: "Follow our official TikTok account to continue verification.",
    btn: "Follow on TikTok"
  },
  discord: {
    name: "Discord",
    placeholder: "e.g. https://discord.gg/invite",
    title: "Join Discord",
    desc: "Join our official Discord server to unlock the next step.",
    btn: "Join Discord Server"
  },
  whatsapp: {
    name: "WhatsApp",
    placeholder: "e.g. https://whatsapp.com/channel/...",
    title: "Join WhatsApp",
    desc: "Follow our official WhatsApp channel to unlock the next step.",
    btn: "Join WhatsApp Channel"
  }
};

/* =========================================
   TIMER PRESET CHANGE
========================================= */
function handleTimerPresetChange(){
  const val = document.getElementById("timerPresetSelect").value;
  const wrap = document.getElementById("customTimerWrap");
  if(val === "custom"){
    wrap.classList.add("show");
    document.getElementById("customTimerInput").focus();
  } else {
    wrap.classList.remove("show");
  }
}

function getSelectedTimerSeconds(){
  const val = document.getElementById("timerPresetSelect").value;
  if(val === "custom"){
    const customVal = parseInt(document.getElementById("customTimerInput").value.trim(), 10);
    if(!isNaN(customVal) && customVal > 0){
      return customVal;
    }
    return 10;
  }
  return parseInt(val, 10) || 10;
}

/* =========================================
   ADD SOCIAL LINK VIA DROPDOWN (BLUR PLACEHOLDER ONLY)
========================================= */
function addSelectedPlatform(platformKey){
  const select = document.getElementById("platformSelect");
  const key = platformKey || select.value;
  const config = PLATFORM_CONFIG[key];
  if(!config) return;

  const list = document.getElementById("dynamicSocialList");

  const card = document.createElement("div");
  card.className = "url-card";

  const head = document.createElement("div");
  head.className = "url-card-head";

  const tag = document.createElement("div");
  tag.className = "platform-tag";
  tag.innerHTML = config.name + ' <span>●</span>';

  head.appendChild(tag);

  const row = document.createElement("div");
  row.className = "url-row";

  const input = document.createElement("input");
  input.type = "url";
  input.dataset.platformKey = key;
  input.dataset.platformName = config.name;
  input.placeholder = config.placeholder; // Only blurred example
  input.value = ""; // Empty input!

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = "×";
  removeBtn.title = "Remove this link";
  removeBtn.onclick = function(){
    card.remove();
  };

  row.appendChild(input);
  row.appendChild(removeBtn);

  card.appendChild(head);
  card.appendChild(row);

  list.appendChild(card);
}

// Initial defaults with blurred examples only
window.addEventListener("DOMContentLoaded", function(){
  addSelectedPlatform("youtube");
  addSelectedPlatform("facebook");
});

/* =========================================
   COLLECT ALL LINKS FROM DYNAMIC LIST
========================================= */
function collectLinks(){
  const result = [];
  const inputs = document.querySelectorAll("#dynamicSocialList input[data-platform-key]");
  inputs.forEach(function(input){
    const url = input.value.trim();
    if(url){
      result.push({
        key: input.dataset.platformKey,
        platform: input.dataset.platformName,
        url: url
      });
    }
  });
  return result;
}

/* =========================================
   GENERATE GATEWAY
========================================= */
function generateGateway(){
  const links = collectLinks();
  const password = document.getElementById("verificationPassword").value.trim();
  const accessKey = document.getElementById("customAccessKey").value.trim();
  const enableCaptcha = document.getElementById("enableCaptcha").checked;
  const timerSeconds = getSelectedTimerSeconds();

  const button = document.getElementById("generateBtn");
  const message = document.getElementById("message");

  if(links.length === 0){
    message.textContent = "⚠️ कम से कम एक सोशल मीडिया लिंक में अपना URL भरें।";
    return;
  }
  if(!password){
    message.textContent = "⚠️ Verification Password डालें (उदा. PASS123)।";
    return;
  }
  if(!accessKey){
    message.textContent = "⚠️ Custom Access Key डालें (उदा. VIP-ACCESS-9821)।";
    return;
  }

  button.disabled = true;
  button.innerHTML = '<span class="loader"></span>Generating...';
  message.textContent = "";

  setTimeout(function(){
    try{
      const code = createGatewayCode(links, password, accessKey, enableCaptcha, timerSeconds);
      document.getElementById("generatedCode").value = code;
      document.getElementById("previewFrame").srcdoc = code;
      document.getElementById("result").classList.add("show");

      showCode();

      button.disabled = false;
      button.innerHTML = "✓ Gateway Generated";
      message.textContent = "✓ आपका verification gateway (" + timerSeconds + "s टाइमर के साथ) तैयार है।";

      setTimeout(function(){
        button.innerHTML = "⚡ Generate Verification Gateway";
      }, 1800);
    }catch(error){
      console.error(error);
      button.disabled = false;
      button.innerHTML = "⚡ Generate Verification Gateway";
      message.textContent = "❌ Generate करते समय error आया।";
    }
  }, 400);
}

/* =========================================
   CREATE GATEWAY CODE
========================================= */
function createGatewayCode(links, password, accessKey, enableCaptcha, timerSeconds){
  const n1 = Math.floor(Math.random() * 8) + 2;
  const n2 = Math.floor(Math.random() * 8) + 1;
  const captchaAnswer = n1 + n2;

  const totalSocial = links.length;
  const captchaStepNum = enableCaptcha ? (totalSocial + 1) : null;
  const passStepNum = enableCaptcha ? (totalSocial + 2) : (totalSocial + 1);
  const keyStepNum = enableCaptcha ? (totalSocial + 3) : (totalSocial + 2);

  function pad(n){
    return n < 10 ? "0" + n : "" + n;
  }

  function getDetails(item){
    const conf = PLATFORM_CONFIG[item.key];
    if(conf) return conf;
    return {
      name: item.platform,
      title: "Follow " + item.platform,
      desc: "Complete the official action on " + item.platform + " to continue.",
      btn: "Open " + item.platform
    };
  }

  let html = '<!DOCTYPE html>\n';
  html += '<html lang="en">\n<head>\n';
  html += '<meta charset="UTF-8">\n';
  html += '<meta name="viewport" content="width=device-width,initial-scale=1.0">\n';
  html += '<title>Secure Verification</title>\n';
  html += '<style>\n';
  html += '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");\n';
  html += '*{margin:0;padding:0;box-sizing:border-box;}\n';
  html += ':root{--bg:#03050b;--cyan:#42e8ff;--purple:#8c6cff;--green:#4ce3a8;--red:#ff647c;--text:#f5f8ff;--muted:#7f8ca3;}\n';
  html += 'html{scroll-behavior:smooth;}\n';
  html += 'body{min-height:100vh;font-family:Inter,Arial,sans-serif;color:var(--text);background:radial-gradient(circle at 10% 0%,rgba(45,210,255,.12),transparent 28%),radial-gradient(circle at 90% 10%,rgba(125,76,255,.14),transparent 30%),radial-gradient(circle at 50% 100%,rgba(0,180,255,.06),transparent 35%),#03050b;overflow-x:hidden;}\n';
  html += 'body:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.18;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:55px 55px;}\n';
  html += '.header{position:sticky;top:0;z-index:50;height:72px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;background:rgba(3,7,15,.72);border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);}\n';
  html += '.brand{display:flex;align-items:center;gap:11px;color:#bdf6ff;font-size:10px;font-weight:800;letter-spacing:2.5px;}\n';
  html += '.brand-icon{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:9px;border:1px solid rgba(70,225,255,.25);background:rgba(50,220,255,.07);}\n';
  html += '.brand-icon:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan),0 0 20px rgba(66,232,255,.7);}\n';
  html += '.admin{display:flex;align-items:center;gap:8px;color:#65738a;font-size:9px;font-weight:600;letter-spacing:1px;}\n';
  html += '.admin:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 10px var(--green);}\n';
  html += '.wrapper{position:relative;z-index:2;width:min(680px,100%);margin:auto;padding:48px 16px 60px;}\n';
  html += '.hero{text-align:center;padding:0 12px 30px;}\n';
  html += '.badge{display:inline-flex;align-items:center;gap:8px;padding:8px 13px;border-radius:50px;color:#72eaff;background:linear-gradient(135deg,rgba(55,220,255,.10),rgba(100,90,255,.06));border:1px solid rgba(72,222,255,.20);font-size:8px;font-weight:800;letter-spacing:1.7px;}\n';
  html += '.badge i{width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 7px var(--cyan),0 0 15px var(--cyan);animation:pulse 1.8s infinite;}\n';
  html += '@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.4;transform:scale(.7);}}\n';
  html += 'h1{margin-top:17px;font-size:42px;line-height:1.1;font-weight:600;letter-spacing:-1.8px;background:linear-gradient(110deg,#ffffff 15%,#b9f7ff 45%,#9e8cff 90%);-webkit-background-clip:text;background-clip:text;color:transparent;}\n';
  html += '.hero p{max-width:430px;margin:12px auto 0;color:#718097;font-size:11px;line-height:1.8;}\n';
  html += '.panel{position:relative;padding:12px;border-radius:30px;background:linear-gradient(145deg,rgba(16,25,43,.92),rgba(5,9,17,.94));border:1px solid rgba(255,255,255,.09);box-shadow:0 40px 100px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.045);backdrop-filter:blur(20px);}\n';

  // STEP CARDS
  html += '.step{position:relative;padding:21px;margin-bottom:11px;border-radius:21px;background:linear-gradient(145deg,rgba(11,20,35,.86),rgba(5,11,21,.82));border:1px solid rgba(255,255,255,.065);overflow:hidden;transition:.35s ease;opacity:0.42;}\n';
  html += '.step:last-child{margin-bottom:0;}\n';
  html += '.step:before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(to bottom,var(--cyan),var(--purple));opacity:.08;}\n';
  html += '.step.active{opacity:1;border-color:rgba(66,218,255,.35);background:linear-gradient(145deg,rgba(12,28,45,.95),rgba(5,12,23,.90));box-shadow:0 15px 45px rgba(0,0,0,.35),0 0 25px rgba(66,218,255,.08);}\n';
  html += '.step.active:before{opacity:1;}\n';
  html += '.step.done{opacity:0.9;border-color:rgba(76,227,168,.25);}\n';
  html += '.step.done:before{background:var(--green);opacity:.9;}\n';

  html += '.head{display:flex;align-items:center;justify-content:space-between;}\n';
  html += '.num{color:#5be4ff;font-size:9px;font-weight:800;letter-spacing:2px;}\n';
  html += '.status{padding:5px 9px;border-radius:20px;color:#56647a;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.045);font-size:7px;font-weight:800;letter-spacing:1.5px;}\n';
  html += '.active .status{color:#59dcff;background:rgba(65,220,255,.1);border-color:rgba(65,220,255,.3);}\n';
  html += '.done .status{color:#5ce5ae;background:rgba(76,227,168,.1);border-color:rgba(76,227,168,.3);}\n';
  html += 'h2{margin-top:14px;font-size:17px;font-weight:600;}\n';
  html += '.desc{margin:6px 0 15px;color:#718096;font-size:10px;line-height:1.7;}\n';

  // BUTTON STYLING
  html += 'button{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-height:44px;padding:0 18px;border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#061019;font-family:Inter,Arial,sans-serif;font-size:12px;font-weight:800;cursor:pointer;background:linear-gradient(110deg,#42e5ff,#7288ff 55%,#a174ff);box-shadow:0 8px 28px rgba(70,150,255,.14),inset 0 1px 0 rgba(255,255,255,.4);transition:.25s ease;}\n';
  html += 'button:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 35px rgba(70,170,255,.25);}\n';
  html += 'button:disabled{opacity:.35;cursor:not-allowed;transform:none;box-shadow:none;}\n';

  html += 'input{width:100%;height:46px;padding:0 14px;margin-bottom:10px;outline:none;border:1px solid rgba(255,255,255,.075);border-radius:12px;background:#060d18;color:#fff;font-family:Inter,Arial,sans-serif;font-size:11px;transition:.25s;}\n';
  html += 'input::placeholder{color:#455268;}\n';
  html += 'input:focus{border-color:rgba(62,207,255,.4);box-shadow:0 0 0 3px rgba(62,207,255,.045);}\n';
  html += '.captcha{height:55px;margin-bottom:10px;display:flex;justify-content:center;align-items:center;gap:10px;border-radius:13px;border:1px solid rgba(255,255,255,.075);background:radial-gradient(circle,rgba(68,214,255,.07),transparent 65%),#060e1a;color:#77869d;font-size:17px;letter-spacing:3px;}\n';
  html += '.captcha b{color:#58e5ff;text-shadow:0 0 15px rgba(65,220,255,.5);}\n';
  html += '.msg{min-height:15px;margin-top:9px;color:#536278;font-size:9px;line-height:1.5;}\n';
  html += '.step.done .msg{color:#5adca8;}\n';

  // TIMER BOX
  html += '.timer-box{display:none;margin:0 0 14px;padding:16px;text-align:center;border-radius:15px;border:1px solid rgba(66,224,255,.25);background:linear-gradient(145deg,rgba(47,196,255,.08),rgba(115,87,255,.05));animation:timerIn .35s ease;}\n';
  html += '.timer-box.show{display:block;}\n';
  html += '@keyframes timerIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\n';
  html += '.timer-label{color:#64748a;font-size:8px;font-weight:700;letter-spacing:1.5px;}\n';
  html += '.timer{margin-top:7px;color:#5ce6ff;font-size:27px;font-weight:700;letter-spacing:-1px;text-shadow:0 0 18px rgba(66,232,255,.45);}\n';
  html += '.timer-sub{margin-top:4px;color:#526176;font-size:8px;}\n';
  html += '.progress{height:4px;margin-top:12px;overflow:hidden;border-radius:10px;background:rgba(255,255,255,.08);}\n';
  html += '.progress-bar{width:0%;height:100%;border-radius:10px;background:linear-gradient(90deg,var(--cyan),var(--purple));box-shadow:0 0 10px rgba(66,232,255,.5);transition:width .2s linear;}\n';

  // ACCESS KEY BOX & COPY BUTTON
  html += '.key-wrapper{position:relative;margin-top:12px;}\n';
  html += '.key{padding:16px;border-radius:14px;border:1px solid rgba(76,227,168,.3);background:rgba(65,227,168,.08);color:#65edb7;font-family:monospace;font-size:15px;font-weight:bold;text-align:center;letter-spacing:1px;word-break:break-all;animation:keyReveal .5s ease;user-select:all;-webkit-user-select:all;}\n';
  html += '@keyframes keyReveal{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\n';
  html += '.copy-btn{margin-top:12px;background:linear-gradient(110deg,#4ce3a8,#1ecb88);color:#02110c;font-size:13px;font-weight:800;letter-spacing:0.5px;}\n';
  html += '.copy-btn:hover{background:linear-gradient(110deg,#5df5b7,#2cd996);box-shadow:0 8px 25px rgba(76,227,168,.35);}\n';
  html += '.footer{margin-top:22px;text-align:center;color:#3e4a5e;font-size:8px;font-weight:600;letter-spacing:1.2px;}\n';
  html += '@media(max-width:520px){.header{height:64px;padding:0 16px;}.wrapper{padding:30px 11px 45px;}h1{font-size:34px;}.panel{padding:9px;border-radius:24px;}.step{padding:18px;border-radius:18px;}}\n';
  html += '</style>\n</head>\n';
  html += '<body>\n';

  // HEADER
  html += '<header class="header">\n';
  html += '  <div class="brand"><span class="brand-icon"></span>SECURE ACCESS</div>\n';
  html += '  <div class="admin">ADMIN PANEL</div>\n';
  html += '</header>\n';

  // MAIN WRAPPER
  html += '<main class="wrapper">\n';
  html += '<section class="hero">\n';
  html += '  <div class="badge"><i></i>VERIFICATION REQUIRED</div>\n';
  html += '  <h1>Access Gateway</h1>\n';
  html += '  <p>Complete the verification sequence below to securely unlock your access key.</p>\n';
  html += '</section>\n';

  // PANEL WITH DYNAMIC STEPS
  html += '<section class="panel">\n';

  // Social Steps
  links.forEach(function(item, idx){
    const sNum = idx + 1;
    const isFirst = (idx === 0);
    const details = getDetails(item);

    html += '<div class="step ' + (isFirst ? 'active' : '') + '" id="step' + sNum + '">\n';
    html += '  <div class="head">\n';
    html += '    <span class="num">' + pad(sNum) + '</span>\n';
    html += '    <span class="status" id="status' + sNum + '">' + (isFirst ? 'READY' : 'LOCKED') + '</span>\n';
    html += '  </div>\n';
    html += '  <h2>' + details.title + '</h2>\n';
    html += '  <p class="desc">' + details.desc + '</p>\n';
    html += '  <button type="button" id="btn' + sNum + '" ' + (isFirst ? '' : 'disabled') + ' onclick="startSocialStep(' + sNum + ')">' + details.btn + '</button>\n';
    html += '  <div id="timer' + sNum + '" class="timer-box">\n';
    html += '    <div class="timer-label">VERIFICATION IN PROGRESS</div>\n';
    html += '    <div class="timer" id="count' + sNum + '">' + timerSeconds + '</div>\n';
    html += '    <div class="timer-sub">Please wait ' + timerSeconds + ' seconds for verification to complete...</div>\n';
    html += '    <div class="progress"><div class="progress-bar" id="progress' + sNum + '"></div></div>\n';
    html += '  </div>\n';
    html += '  <div class="msg" id="msg' + sNum + '"></div>\n';
    html += '</div>\n';
  });

  // Captcha Step
  if(enableCaptcha){
    html += '<div class="step" id="step' + captchaStepNum + '">\n';
    html += '  <div class="head">\n';
    html += '    <span class="num">' + pad(captchaStepNum) + '</span>\n';
    html += '    <span class="status" id="status' + captchaStepNum + '">LOCKED</span>\n';
    html += '  </div>\n';
    html += '  <h2>Final Captcha</h2>\n';
    html += '  <p class="desc">Confirm that you are not a robot.</p>\n';
    html += '  <div class="captcha"><b id="n1">' + n1 + '</b><span>+</span><b id="n2">' + n2 + '</b><span>=</span><span>?</span></div>\n';
    html += '  <input id="captchaInput" type="number" placeholder="Enter answer" disabled onkeydown="if(event.key===\'Enter\') verifyCaptcha()">\n';
    html += '  <button type="button" id="captchaBtn" disabled onclick="verifyCaptcha()">Verify Captcha</button>\n';
    html += '  <div class="msg" id="msg' + captchaStepNum + '"></div>\n';
    html += '</div>\n';
  }

  // Password Step
  html += '<div class="step" id="step' + passStepNum + '">\n';
  html += '  <div class="head">\n';
  html += '    <span class="num">' + pad(passStepNum) + '</span>\n';
  html += '    <span class="status" id="status' + passStepNum + '">LOCKED</span>\n';
  html += '  </div>\n';
  html += '  <h2>Verification Password</h2>\n';
  html += '  <p class="desc">Enter the password provided by the administrator.</p>\n';
  html += '  <input id="passwordInput" type="password" placeholder="Enter verification password" disabled onkeydown="if(event.key===\'Enter\') verifyPassword()">\n';
  html += '  <button type="button" id="passwordBtn" disabled onclick="verifyPassword()">Verify Password</button>\n';
  html += '  <div class="msg" id="msg' + passStepNum + '"></div>\n';
  html += '</div>\n';

  // Access Key Step
  html += '<div class="step" id="step' + keyStepNum + '">\n';
  html += '  <div class="head">\n';
  html += '    <span class="num">' + pad(keyStepNum) + '</span>\n';
  html += '    <span class="status" id="status' + keyStepNum + '">LOCKED</span>\n';
  html += '  </div>\n';
  html += '  <h2>Your Access Key</h2>\n';
  html += '  <p class="desc">Your access key has been unlocked after verification.</p>\n';
  html += '  <div id="keyBox">\n';
  html += '    <div style="font-size:11px;color:#596d88;text-align:center;padding:12px;">Locked until previous steps are completed.</div>\n';
  html += '  </div>\n';
  html += '</div>\n';

  html += '</section>\n';

  // FOOTER
  html += '<div class="footer">SECURE ACCESS GATEWAY</div>\n';
  html += '</main>\n';

  // CLIENT SCRIPT
  html += '<script>\n';
  html += 'const LINKS = ' + JSON.stringify(links) + ';\n';
  html += 'const PASSWORD = ' + JSON.stringify(password) + ';\n';
  html += 'const ACCESS_KEY = ' + JSON.stringify(accessKey) + ';\n';
  html += 'const ENABLE_CAPTCHA = ' + enableCaptcha + ';\n';
  html += 'const TIMER_SECONDS = ' + timerSeconds + ';\n';
  html += 'const ANSWER = ' + captchaAnswer + ';\n';
  html += 'const CAPTCHA_STEP = ' + (captchaStepNum || 'null') + ';\n';
  html += 'const PASS_STEP = ' + passStepNum + ';\n';
  html += 'const KEY_STEP = ' + keyStepNum + ';\n';

  html += 'function activate(n){\n';
  html += '  var s = document.getElementById("step" + n);\n';
  html += '  var st = document.getElementById("status" + n);\n';
  html += '  if(s) s.classList.add("active");\n';
  html += '  if(st) st.textContent = "READY";\n';
  html += '}\n';

  html += 'function complete(n){\n';
  html += '  var s = document.getElementById("step" + n);\n';
  html += '  var st = document.getElementById("status" + n);\n';
  html += '  if(s){\n';
  html += '    s.classList.remove("active");\n';
  html += '    s.classList.add("done");\n';
  html += '  }\n';
  html += '  if(st) st.textContent = "DONE";\n';
  html += '}\n';

  // RELIABLE SOCIAL URL OPENER FOR MOBILE BROWSERS & WEBVIEWS
  html += 'function openPlatformUrl(url){\n';
  html += '  if(!/^https?:\\/\\//i.test(url)) url = "https://" + url;\n';
  html += '  var win = null;\n';
  html += '  try{\n';
  html += '    win = window.open(url, "_blank");\n';
  html += '  }catch(e){}\n';
  html += '  if(!win || win.closed || typeof win.closed === "undefined"){\n';
  html += '    try{\n';
  html += '      if(window.top && window.top !== window){\n';
  html += '        win = window.top.open(url, "_blank");\n';
  html += '      }\n';
  html += '    }catch(e){}\n';
  html += '  }\n';
  html += '  if(!win || win.closed || typeof win.closed === "undefined"){\n';
  html += '    try{\n';
  html += '      var a = document.createElement("a");\n';
  html += '      a.href = url;\n';
  html += '      a.target = "_blank";\n';
  html += '      a.rel = "noopener noreferrer";\n';
  html += '      document.body.appendChild(a);\n';
  html += '      a.click();\n';
  html += '      setTimeout(function(){ try{ document.body.removeChild(a); }catch(e){} }, 500);\n';
  html += '    }catch(e){\n';
  html += '      window.location.href = url;\n';
  html += '    }\n';
  html += '  }\n';
  html += '}\n';

  // RETURN-BASED STEP VERIFICATION
  html += 'var pendingStep = null;\n';
  html += 'var timerRunning = false;\n';
  html += 'var safetyTimer = null;\n';

  html += 'function startSocialStep(stepNum){\n';
  html += '  if(timerRunning) return;\n';
  html += '  var item = LINKS[stepNum - 1];\n';
  html += '  var btn = document.getElementById("btn" + stepNum);\n';
  html += '  var msg = document.getElementById("msg" + stepNum);\n';

  html += '  btn.disabled = true;\n';
  html += '  btn.textContent = "⏳ Action Opened... Return to verify";\n';
  html += '  btn.style.opacity = "0.85";\n';
  html += '  if(msg){\n';
  html += '    msg.textContent = "👉 Page opened. Please complete action and return back to this page.";\n';
  html += '    msg.style.color = "#42e8ff";\n';
  html += '  }\n';

  html += '  pendingStep = stepNum;\n';
  html += '  openPlatformUrl(item.url.trim());\n';

  // Fallback: If user stays on page / split-screen, timer automatically starts after 3.5s
  html += '  if(safetyTimer) clearTimeout(safetyTimer);\n';
  html += '  safetyTimer = setTimeout(function(){\n';
  html += '    if(pendingStep === stepNum){\n';
  html += '      startStepCountdown(stepNum);\n';
  html += '    }\n';
  html += '  }, 3500);\n';
  html += '}\n';

  // USER RETURN LISTENER
  html += 'function handleUserReturn(){\n';
  html += '  if(pendingStep !== null && !timerRunning){\n';
  html += '    var s = pendingStep;\n';
  html += '    pendingStep = null;\n';
  html += '    if(safetyTimer) clearTimeout(safetyTimer);\n';
  html += '    startStepCountdown(s);\n';
  html += '  }\n';
  html += '}\n';

  html += 'window.addEventListener("focus", handleUserReturn);\n';
  html += 'document.addEventListener("visibilitychange", function(){\n';
  html += '  if(!document.hidden && document.visibilityState === "visible"){\n';
  html += '    handleUserReturn();\n';
  html += '  }\n';
  html += '});\n';

  // DYNAMIC VERIFICATION COUNTDOWN (Using user selected TIMER_SECONDS)
  html += 'function startStepCountdown(stepNum){\n';
  html += '  timerRunning = true;\n';
  html += '  pendingStep = null;\n';
  html += '  var item = LINKS[stepNum - 1];\n';
  html += '  var btn = document.getElementById("btn" + stepNum);\n';
  html += '  var timerBox = document.getElementById("timer" + stepNum);\n';
  html += '  var countEl = document.getElementById("count" + stepNum);\n';
  html += '  var progressEl = document.getElementById("progress" + stepNum);\n';
  html += '  var msg = document.getElementById("msg" + stepNum);\n';

  html += '  if(timerBox) timerBox.classList.add("show");\n';
  html += '  if(msg){\n';
  html += '    msg.textContent = "Verifying your action... Please wait " + TIMER_SECONDS + " seconds.";\n';
  html += '    msg.style.color = "#718096";\n';
  html += '  }\n';

  html += '  var timeLeft = TIMER_SECONDS;\n';
  html += '  btn.disabled = true;\n';
  html += '  btn.textContent = "⏳ Verifying... " + timeLeft + "s";\n';
  html += '  if(countEl) countEl.textContent = timeLeft;\n';
  html += '  if(progressEl) progressEl.style.width = "0%";\n';

  html += '  var interval = setInterval(function(){\n';
  html += '    timeLeft--;\n';
  html += '    if(timeLeft > 0){\n';
  html += '      btn.textContent = "⏳ Verifying... " + timeLeft + "s";\n';
  html += '      if(countEl) countEl.textContent = timeLeft;\n';
  html += '      var pct = ((TIMER_SECONDS - timeLeft) / TIMER_SECONDS) * 100;\n';
  html += '      if(progressEl) progressEl.style.width = pct + "%";\n';
  html += '    }else{\n';
  html += '      clearInterval(interval);\n';
  html += '      timerRunning = false;\n';
  html += '      if(progressEl) progressEl.style.width = "100%";\n';
  html += '      if(countEl) countEl.textContent = "0";\n';

  html += '      setTimeout(function(){\n';
  html += '        if(timerBox) timerBox.classList.remove("show");\n';
  html += '        complete(stepNum);\n';
  html += '        btn.textContent = "✓ Completed";\n';
  html += '        btn.style.opacity = "0.85";\n';
  html += '        btn.style.background = "rgba(76,227,168,.15)";\n';
  html += '        btn.style.color = "#5ce5ae";\n';
  html += '        btn.style.borderColor = "rgba(76,227,168,.3)";\n';
  html += '        if(msg){\n';
  html += '          msg.textContent = "✓ " + item.platform + " verification completed!";\n';
  html += '          msg.style.color = "#5ce5ae";\n';
  html += '        }\n';
  html += '        unlockNextStep(stepNum);\n';
  html += '      }, 350);\n';
  html += '    }\n';
  html += '  }, 1000);\n';
  html += '}\n';

  // UNLOCK NEXT STEP IN SEQUENCE
  html += 'function unlockNextStep(currentStepNum){\n';
  html += '  var nextNum = currentStepNum + 1;\n';
  html += '  if(nextNum <= LINKS.length){\n';
  html += '    activate(nextNum);\n';
  html += '    var nextBtn = document.getElementById("btn" + nextNum);\n';
  html += '    if(nextBtn){\n';
  html += '      nextBtn.disabled = false;\n';
  html += '      nextBtn.style.opacity = "1";\n';
  html += '    }\n';
  html += '    var nextCard = document.getElementById("step" + nextNum);\n';
  html += '    if(nextCard) nextCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
  html += '  }else if(ENABLE_CAPTCHA && nextNum === CAPTCHA_STEP){\n';
  html += '    activate(CAPTCHA_STEP);\n';
  html += '    var cIn = document.getElementById("captchaInput");\n';
  html += '    var cBtn = document.getElementById("captchaBtn");\n';
  html += '    if(cIn) cIn.disabled = false;\n';
  html += '    if(cBtn){\n';
  html += '      cBtn.disabled = false;\n';
  html += '      cBtn.style.opacity = "1";\n';
  html += '    }\n';
  html += '    var cCard = document.getElementById("step" + CAPTCHA_STEP);\n';
  html += '    if(cCard) cCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
  html += '  }else if(!ENABLE_CAPTCHA && nextNum === PASS_STEP){\n';
  html += '    activate(PASS_STEP);\n';
  html += '    var pIn = document.getElementById("passwordInput");\n';
  html += '    var pBtn = document.getElementById("passwordBtn");\n';
  html += '    if(pIn) pIn.disabled = false;\n';
  html += '    if(pBtn){\n';
  html += '      pBtn.disabled = false;\n';
  html += '      pBtn.style.opacity = "1";\n';
  html += '    }\n';
  html += '    var pCard = document.getElementById("step" + PASS_STEP);\n';
  html += '    if(pCard) pCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
  html += '  }\n';
  html += '}\n';

  // DIRECT CAPTCHA VERIFY (No timer)
  if(enableCaptcha){
    html += 'function verifyCaptcha(){\n';
    html += '  var input = document.getElementById("captchaInput");\n';
    html += '  var val = Number(input.value.trim());\n';
    html += '  var msg = document.getElementById("msg" + CAPTCHA_STEP);\n';
    html += '  var btn = document.getElementById("captchaBtn");\n';

    html += '  if(input.value.trim() === "" || isNaN(val) || val !== ANSWER){\n';
    html += '    msg.textContent = "❌ Incorrect answer. Please try again.";\n';
    html += '    msg.style.color = "#ff647c";\n';
    html += '    return;\n';
    html += '  }\n';

    html += '  complete(CAPTCHA_STEP);\n';
    html += '  input.disabled = true;\n';
    html += '  btn.disabled = true;\n';
    html += '  btn.textContent = "✓ Captcha Verified";\n';
    html += '  btn.style.opacity = "0.85";\n';
    html += '  btn.style.background = "rgba(76,227,168,.15)";\n';
    html += '  btn.style.color = "#5ce5ae";\n';
    html += '  btn.style.borderColor = "rgba(76,227,168,.3)";\n';
    html += '  msg.textContent = "✓ Captcha verified successfully!";\n';
    html += '  msg.style.color = "#5adca8";\n';

    html += '  activate(PASS_STEP);\n';
    html += '  var pIn = document.getElementById("passwordInput");\n';
    html += '  var pBtn = document.getElementById("passwordBtn");\n';
    html += '  pIn.disabled = false;\n';
    html += '  pBtn.disabled = false;\n';
    html += '  pBtn.style.opacity = "1";\n';

    html += '  var pCard = document.getElementById("step" + PASS_STEP);\n';
    html += '  if(pCard) pCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
    html += '}\n';
  }

  // DIRECT PASSWORD VERIFY & INSTANT ACCESS KEY SHOW (No timer)
  html += 'function verifyPassword(){\n';
  html += '  var input = document.getElementById("passwordInput");\n';
  html += '  var val = input.value.trim();\n';
  html += '  var msg = document.getElementById("msg" + PASS_STEP);\n';
  html += '  var btn = document.getElementById("passwordBtn");\n';

  html += '  if(!val || val !== PASSWORD){\n';
  html += '    msg.textContent = "❌ Invalid verification password. Please try again.";\n';
  html += '    msg.style.color = "#ff647c";\n';
  html += '    return;\n';
  html += '  }\n';

  html += '  complete(PASS_STEP);\n';
  html += '  complete(KEY_STEP);\n';
  html += '  input.disabled = true;\n';
  html += '  btn.disabled = true;\n';
  html += '  btn.textContent = "✓ Password Verified";\n';
  html += '  btn.style.opacity = "0.85";\n';
  html += '  btn.style.background = "rgba(76,227,168,.15)";\n';
  html += '  btn.style.color = "#5ce5ae";\n';
  html += '  btn.style.borderColor = "rgba(76,227,168,.3)";\n';
  html += '  msg.textContent = "✓ Password verified successfully!";\n';
  html += '  msg.style.color = "#5adca8";\n';

  // DIRECTLY REVEAL ACCESS KEY WITH 1-CLICK INSTANT COPY BUTTON
  html += '  var keyBox = document.getElementById("keyBox");\n';
  html += '  keyBox.innerHTML =\n';
  html += '    \'<div class="key-wrapper">\' +\n';
  html += '    \'  <div class="key" id="rawKeyText">\' + ACCESS_KEY + \'</div>\' +\n';
  html += '    \'  <button type="button" class="copy-btn" id="keyCopyBtn" onclick="copyAccessKeyNow()">📋 Copy Access Key</button>\' +\n';
  html += '    \'</div>\';\n';

  html += '  var kCard = document.getElementById("step" + KEY_STEP);\n';
  html += '  if(kCard) kCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
  html += '}\n';

  // BULLETPROOF 1-CLICK COPY FUNCTION
  html += 'function copyAccessKeyNow(){\n';
  html += '  var btn = document.getElementById("keyCopyBtn");\n';
  html += '  var text = ACCESS_KEY;\n';
  html += '  var success = false;\n';

  html += '  if(navigator.clipboard && navigator.clipboard.writeText){\n';
  html += '    navigator.clipboard.writeText(text).then(function(){\n';
  html += '      indicateKeyCopied(btn);\n';
  html += '    }).catch(function(){\n';
  html += '      fallbackCopyKey(btn, text);\n';
  html += '    });\n';
  html += '  }else{\n';
  html += '    fallbackCopyKey(btn, text);\n';
  html += '  }\n';
  html += '}\n';

  html += 'function fallbackCopyKey(btn, text){\n';
  html += '  try{\n';
  html += '    var ta = document.createElement("textarea");\n';
  html += '    ta.value = text;\n';
  html += '    ta.style.position = "fixed";\n';
  html += '    ta.style.top = "-9999px";\n';
  html += '    ta.style.left = "-9999px";\n';
  html += '    document.body.appendChild(ta);\n';
  html += '    ta.focus();\n';
  html += '    ta.select();\n';
  html += '    var res = document.execCommand("copy");\n';
  html += '    document.body.removeChild(ta);\n';
  html += '    if(res) indicateKeyCopied(btn);\n';
  html += '  }catch(e){\n';
  html += '    indicateKeyCopied(btn);\n';
  html += '  }\n';
  html += '}\n';

  html += 'function indicateKeyCopied(btn){\n';
  html += '  if(!btn) return;\n';
  html += '  btn.textContent = "✓ Key Copied!";\n';
  html += '  btn.style.background = "#4ce3a8";\n';
  html += '  btn.style.color = "#000";\n';
  html += '  setTimeout(function(){\n';
  html += '    btn.textContent = "📋 Copy Access Key";\n';
  html += '    btn.style.background = "";\n';
  html += '    btn.style.color = "";\n';
  html += '  }, 2200);\n';
  html += '}\n';

  // PROPERLY FORMATTED SCRIPT CLOSING TAG
  html += '<' + '/script>\n';
  html += '<' + '/body>\n<' + '/html>';

  return html;
}

/* =========================================
   CODE TAB
========================================= */
function showCode(){
  document.getElementById("codeView").style.display = "block";
  document.getElementById("previewView").style.display = "none";
  document.getElementById("codeTab").classList.add("active");
  document.getElementById("previewTab").classList.remove("active");
}

/* =========================================
   PREVIEW TAB
========================================= */
function showPreview(){
  const code = document.getElementById("generatedCode").value;
  if(!code) return;

  document.getElementById("codeView").style.display = "none";
  document.getElementById("previewView").style.display = "block";
  document.getElementById("codeTab").classList.remove("active");
  document.getElementById("previewTab").classList.add("active");

  const frame = document.getElementById("previewFrame");
  frame.srcdoc = code;
}

/* =========================================
   TEST IN NEW TAB
========================================= */
function openTestInNewTab(){
  const code = document.getElementById("generatedCode").value;
  if(!code) return;
  const blob = new Blob([code], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

/* =========================================
   COPY CODE
========================================= */
async function copyCode(){
  const code = document.getElementById("generatedCode").value;
  if(!code) return;

  try{
    await navigator.clipboard.writeText(code);
    document.getElementById("message").textContent = "✓ Code copied successfully.";
  }catch(error){
    const box = document.getElementById("generatedCode");
    box.select();
    document.execCommand("copy");
    document.getElementById("message").textContent = "✓ Code copied successfully.";
  }
}

