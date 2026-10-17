
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>VIP Verification Gateway Generator</title>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  min-height: 100vh !important;
  background-color: #03050b !important;
  color: #f5f8ff !important;
  font-family: Inter, Arial, sans-serif !important;
  overflow-x: hidden !important;
}

*, *:before, *:after {
  box-sizing: border-box !important;
}

.app-frame-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  max-width: 100% !important;
  height: 100vh !important;
  background: radial-gradient(circle at 10% 0%, rgba(45,210,255,.12), transparent 28%), 
              radial-gradient(circle at 90% 10%, rgba(125,76,255,.14), transparent 30%), 
              radial-gradient(circle at 50% 100%, rgba(0,180,255,.06), transparent 35%), #03050b !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  z-index: 999999 !important;
  -webkit-overflow-scrolling: touch;
}

.app-frame-container::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .18;
  background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 55px 55px;
}

:root {
  --bg: #03050b;
  --cyan: #42e8ff;
  --purple: #8c6cff;
  --green: #4ce3a8;
  --red: #ff647c;
  --text: #f5f8ff;
  --muted: #7f8ca3;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(3, 7, 15, .95);
  border-bottom: 1px solid rgba(255, 255, 255, .07);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
}
.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #bdf6ff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}
.brand-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: 1px solid rgba(70, 225, 255, .25);
  background: rgba(50, 220, 255, .07);
}
.brand-icon:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 8px var(--cyan), 0 0 20px rgba(66, 232, 255, .7);
}
.admin {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #65738a;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}
.admin:before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 10px var(--green);
}

.wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 40px 14px 60px;
}
.hero {
  text-align: center;
  padding: 0 8px 30px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 13px;
  border-radius: 50px;
  color: #72eaff;
  background: linear-gradient(135deg, rgba(55, 220, 255, .10), rgba(100, 90, 255, .06));
  border: 1px solid rgba(72, 222, 255, .20);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.7px;
}
.badge i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 7px var(--cyan), 0 0 15px var(--cyan);
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .4; transform: scale(.7); }
}

h1 {
  margin-top: 17px !important;
  font-size: 36px !important;
  line-height: 1.1 !important;
  font-weight: 700 !important;
  letter-spacing: -1.8px !important;
  background: linear-gradient(110deg, #ffffff 15%, #b9f7ff 45%, #9e8cff 90%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: #b9f7ff !important;
}
.hero p {
  max-width: 430px;
  margin: 12px auto 0;
  color: #93a4be !important;
  font-size: 12px;
  line-height: 1.8;
}

.panel {
  position: relative;
  width: 100%;
  padding: 16px;
  border-radius: 26px;
  background: linear-gradient(145deg, rgba(16, 25, 43, .92), rgba(5, 9, 17, .94));
  border: 1px solid rgba(255, 255, 255, .09);
  box-shadow: 0 40px 100px rgba(0, 0, 0, .55), inset 0 1px 0 rgba(255, 255, 255, .045);
  backdrop-filter: blur(20px);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}
.form-label {
  display: block;
  margin-bottom: 8px;
  color: #93a4be;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

input, select {
  width: 100%;
  height: 46px;
  padding: 0 14px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, .075);
  border-radius: 12px;
  background: #060d18 !important;
  color: #fff !important;
  font-family: Inter, Arial, sans-serif;
  font-size: 12px;
  transition: .25s;
}
select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2342e8ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
  background-repeat: no-repeat !important;
  background-position: right 14px center !important;
  background-size: 16px !important;
  cursor: pointer;
}
select option {
  background-color: #060d18 !important;
  color: #f5f8ff !important;
  padding: 12px !important;
}

input::placeholder { color: #455268; }
input:focus, select:focus {
  border-color: rgba(66, 232, 255, 0.8) !important;
  box-shadow: 0 0 15px rgba(66, 232, 255, 0.35), inset 0 0 5px rgba(66, 232, 255, 0.2) !important;
}

.add-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  background: #060d18;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, .075);
}
.platform-select {
  flex: 1;
  height: 44px;
  border-radius: 10px;
  background: #03050b !important;
  color: #42e8ff !important;
  font-weight: bold;
}
.add-btn-main {
  padding: 0 16px;
  height: 44px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  color: #061019;
  font-size: 12px;
  font-weight: 800;
  background: linear-gradient(110deg, #42e5ff, #7288ff 55%, #a174ff);
  box-shadow: 0 8px 28px rgba(70, 150, 255, .14);
  white-space: nowrap;
}
.add-btn-main:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(70, 170, 255, .25);
}

.url-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.url-card {
  padding: 12px;
  border-radius: 14px;
  background: #060d18;
  border: 1px solid rgba(255, 255, 255, .075);
}
.url-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.platform-tag {
  font-size: 12px;
  font-weight: bold;
  color: #bdf6ff;
  display: flex;
  align-items: center;
  gap: 6px;
}
.edit-label-btn {
  background: none;
  border: none;
  color: #42e8ff;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 4px;
}
.inline-edit-input {
  width: 130px !important;
  height: 32px !important;
  padding: 4px 8px !important;
  border-radius: 6px !important;
  border: 1px solid #42e8ff !important;
  background: #03050b !important;
  color: #fff !important;
  font-size: 12px !important;
  font-weight: bold !important;
}
.url-row {
  display: flex;
  gap: 8px;
}
.url-row input {
  flex: 1;
  height: 42px;
}
.remove-btn {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border: 1px solid rgba(255, 80, 110, .2);
  border-radius: 10px;
  background: #24131b;
  color: #ff6c8c;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.remove-btn:hover { background: #381522; }

.timer-config-box {
  margin-bottom: 16px;
  padding: 14px;
  border-radius: 14px;
  background: #060d18;
  border: 1px solid rgba(255, 255, 255, .075);
}
.timer-inputs-grid {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}
.custom-timer-wrap {
  flex: 1;
  display: none;
}
.custom-timer-wrap.show { display: block; }

.toggle-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  margin-bottom: 16px;
  border-radius: 14px;
  background: #060d18;
  border: 1px solid rgba(255, 255, 255, .075);
}
.toggle-title {
  font-size: 13px;
  font-weight: bold;
  color: #f5f8ff;
}
.toggle-desc {
  font-size: 11px;
  color: #7f8ca3;
}

/* Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
  flex-shrink: 0;
}
.switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
  background-color: #03050b; transition: .3s; border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, .15);
}
.slider:before {
  position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px;
  background-color: #fff; transition: .3s; border-radius: 50%;
}
input:checked + .slider {
  background: linear-gradient(110deg, #42e5ff, #7288ff);
  border-color: #42e8ff;
}
input:checked + .slider:before { transform: translateX(22px); }

.mode-selector {
  display: flex;
  gap: 10px;
  margin-top: 6px;
  font-size: 11px;
  font-weight: 600;
}
.mode-selector label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #060d18;
  border: 1px solid rgba(255, 255, 255, .075);
  padding: 6px 12px;
  border-radius: 8px;
  color: #7f8ca3;
}
.mode-selector label:has(input:checked) {
  border-color: #42e8ff;
  background: rgba(66, 232, 255, .1);
  color: #42e8ff;
}
.mode-selector input[type="radio"] { all: unset; }

.password-container {
  display: none;
  margin-top: 8px;
}
.password-container.show {
  display: block;
}

button.generate-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: 12px;
  color: #061019;
  font-family: Inter, Arial, sans-serif;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  background: linear-gradient(110deg, #42e5ff, #7288ff 55%, #a174ff);
  box-shadow: 0 8px 28px rgba(70, 150, 255, .14);
  margin-top: 10px;
}
button.generate-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(70, 170, 255, .25);
}

.loader {
  width: 16px; height: 16px; display: inline-block; vertical-align: -2px; margin-right: 8px;
  border: 2px solid rgba(6, 16, 25, .35); border-top-color: #061019; border-radius: 50%;
  animation: spin .7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.message { min-height: 18px; margin-top: 10px; text-align: center; color: #42e8ff; font-size: 11px; font-weight: 600; }

/* Result Box */
.result {
  display: none;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .09);
  background: #060d18;
}
.result.show { display: block; }
.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0a1324;
  border-bottom: 1px solid rgba(255, 255, 255, .07);
}
.result-heading { font-size: 13px; font-weight: bold; color: #f5f8ff; }
.tabs { display: flex; gap: 6px; }
.tab {
  border: 0; padding: 6px 12px; border-radius: 8px; background: #03050b;
  color: #7f8ca3; cursor: pointer; font-size: 11px; font-weight: bold;
}
.tab.active { color: #061019; background: #42e8ff; }
.code-box {
  display: block; width: 100%; height: 320px; padding: 14px; resize: vertical; outline: none;
  border: 0; background: #03050b; color: #f5f8ff; font-family: Consolas, monospace; font-size: 11px; line-height: 1.5;
}
.preview-frame { width: 100%; height: 650px; border: 0; background: #03050b; }
.result-actions {
  display: flex; gap: 8px; padding: 12px; border-top: 1px solid rgba(255, 255, 255, .07); background: #0a1324; flex-wrap: wrap;
}
.action-btn {
  flex: 1; border: 0; border-radius: 10px; padding: 10px; cursor: pointer; color: #fff; font-weight: bold; font-size: 11px; min-width: 120px;
}
.copy-code { background: #12313a; color: #42e8ff; }
.preview-btn { background: #271b43; color: #c5adff; }
.newtab-btn { background: #1a3326; color: #4ce3a8; }
.sharelink-btn { background: #382712; color: #ffb042; }

/* History Box */
.history-container {
  margin-top: 20px;
  padding: 14px;
  background: #060d18;
  border: 1px solid rgba(255, 255, 255, .075);
  border-radius: 16px;
}
.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #bdf6ff;
}
.history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 240px;
  overflow-y: auto;
}
.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #03050b;
  border: 1px solid rgba(255, 255, 255, .06);
  padding: 10px 14px;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  transition: 0.2s;
}
.history-item:hover {
  border-color: rgba(66, 232, 255, 0.4);
  background: rgba(16, 25, 43, 0.6);
}
.history-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
}
.history-url {
  font-size: 11.5px;
  color: #42e8ff;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.history-date { font-size: 9.5px; color: #7f8ca3; margin-top: 3px;}
.history-actions { display: flex; gap: 6px; }
.history-btn {
  padding: 5px 10px; font-size: 10px; border-radius: 6px; border: none; cursor: pointer; background: #4ce3a8; color: #02110c; font-weight: bold;
}
.history-btn.del {
  background: rgba(255, 100, 124, 0.15); color: #ff647c; border: 1px solid rgba(255, 100, 124, 0.3);
}

/* Informative Article Section (500+ Words) */
.article-panel {
  background: linear-gradient(145deg, rgba(16, 25, 43, .92), rgba(5, 9, 17, .94));
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 26px;
  padding: 24px;
  margin-top: 25px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, .55);
}
.article-panel h2 {
  font-size: 18px;
  color: #bdf6ff;
  margin-bottom: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.article-panel h3 {
  font-size: 15px;
  color: #72eaff;
  margin: 16px 0 8px;
  font-weight: 700;
}
.article-panel p {
  font-size: 11.5px;
  color: #8a9bb8;
  line-height: 1.8;
  margin-bottom: 12px;
}
.article-panel ul {
  margin-left: 18px;
  margin-bottom: 12px;
}
.article-panel li {
  font-size: 11.5px;
  color: #8a9bb8;
  line-height: 1.7;
  margin-bottom: 6px;
}
.article-panel code {
  background: #060d18;
  color: #42e8ff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
}

/* Footer Stats Container */
.footer-stats-box {
  display: flex;
  gap: 12px;
  margin-top: 25px;
  margin-bottom: 15px;
}
.stat-box {
  flex: 1;
  background: linear-gradient(145deg, rgba(16, 25, 43, .92), rgba(5, 9, 17, .94));
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: 16px;
  padding: 12px;
  text-align: center;
}
.stat-value {
  font-size: 18px;
  font-weight: 800;
  color: #42e8ff;
  font-family: monospace;
  margin-bottom: 3px;
  text-shadow: 0 0 10px rgba(66,232,255,0.4);
}
.stat-label {
  font-size: 9.5px;
  color: #7f8ca3;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Footer Links */
.footer-links-box {
  margin-top: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 12px;
  font-weight: 600;
}
.footer-links-box a {
  color: #42e8ff;
  text-decoration: none;
  transition: 0.2s;
}
.footer-links-box a:hover {
  text-decoration: underline;
  color: #bdf6ff;
}
.minimal-footer {
  margin-top: 12px;
  text-align: center;
  color: #4a5568;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
</head>
<body>

<div class="app-frame-container">
  <header class="header">
    <div class="brand"><span class="brand-icon"></span>VIP Verification Gateway</div>
    <div class="admin">Free Verification</div>
  </header>
  
  <main class="wrapper">
    <section class="hero">
      <div class="badge"><i></i>PREMIUM TOOL</div>
      <h1>Verification Gateway</h1>
      <p>Create a premium multi-step verification gateway with custom links instantly.</p>
    </section>

    <!-- Main Tool Panel -->
    <section class="panel">
      <div class="form-group">
        <label class="form-label">Social Verification Links</label>
        <div class="add-bar">
          <select id="platformSelect" class="platform-select">
            <option value="youtube">YouTube (Subscribe)</option>
            <option value="facebook">Facebook (Follow)</option>
            <option value="instagram">Instagram (Follow)</option>
            <option value="telegram">Telegram (Join)</option>
            <option value="twitter">Twitter / X (Follow)</option>
            <option value="snapchat">Snapchat (Add)</option>
            <option value="pinterest">Pinterest (Follow)</option>
            <option value="tiktok">TikTok (Follow)</option>
            <option value="discord">Discord (Join Server)</option>
            <option value="whatsapp">WhatsApp (Join Channel)</option>
          </select>
          <button type="button" class="add-btn-main" onclick="addSelectedPlatform()">+ Add Social Link</button>
        </div>
      </div>

      <!-- DYNAMIC LIST CONTAINER -->
      <div class="url-list" id="dynamicSocialList"></div>

      <!-- STEP TIMER SELECTOR -->
      <div class="timer-config-box">
        <label class="form-label">Verification Timer</label>
        <div class="timer-inputs-grid">
          <select id="timerPresetSelect" onchange="handleTimerPresetChange()">
            <option value="5">5 Seconds</option>
            <option value="10" selected>10 Seconds (Standard)</option>
            <option value="15">15 Seconds</option>
            <option value="20">20 Seconds</option>
            <option value="30">30 Seconds</option>
            <option value="60">60 Seconds (1 Minute)</option>
            <option value="custom">✏️ Custom Seconds</option>
          </select>
          <div id="customTimerWrap" class="custom-timer-wrap">
            <input type="number" id="customTimerInput" min="1" max="300" placeholder="e.g. 12 seconds">
          </div>
        </div>
      </div>

      <!-- CAPTCHA TOGGLE -->
      <div class="toggle-box">
        <div>
          <div class="toggle-title">Final Captcha Verification</div>
          <div class="toggle-desc">Require math captcha before unlocking</div>
        </div>
        <label class="switch">
          <input type="checkbox" id="enableCaptcha" checked>
          <span class="slider"></span>
        </label>
      </div>

      <!-- PASSWORD TOGGLE ON/OFF -->
      <div class="toggle-box" style="margin-bottom: 8px;">
        <div>
          <div class="toggle-title">Verification Password Protection</div>
          <div class="toggle-desc">Enable or disable password verification step</div>
        </div>
        <label class="switch">
          <input type="checkbox" id="enablePassword" onchange="togglePasswordBox()">
          <span class="slider"></span>
        </label>
      </div>

      <div class="form-group password-container" id="passwordBoxContainer">
        <label class="form-label">Password Value</label>
        <input id="verificationPassword" type="text" placeholder="e.g. 9918">
      </div>

      <!-- OUTPUT MODE -->
      <div class="form-group" style="margin-top: 14px;">
        <label class="form-label" id="outputFieldLabel">Custom Access Key</label>
        <div class="mode-selector">
          <label><input type="radio" name="outputMode" value="key" checked onchange="toggleOutputMode()"> Key</label>
          <label><input type="radio" name="outputMode" value="url" onchange="toggleOutputMode()"> URL</label>
        </div>
        <div style="margin-top: 8px;">
          <input id="customAccessKey" type="text" placeholder="e.g. VIP-AIM-LIFE-TIME-TIS">
        </div>
      </div>

      <!-- GENERATE BUTTON -->
      <button class="generate-btn" id="generateBtn" type="button" onclick="generateGateway()">
        ⚡ Generate Verification Gateway
      </button>

      <div class="message" id="message"></div>
    </section>

    <!-- RESULT -->
    <div class="panel result" id="result" style="padding: 0; overflow: hidden;">
      <div class="result-header">
        <div class="result-heading">Generated Result</div>
        <div class="tabs">
          <button class="tab active" id="codeTab" onclick="showCode()">CODE</button>
          <button class="tab" id="previewTab" onclick="showPreview()">PREVIEW</button>
        </div>
      </div>

      <div class="code-view" id="codeView">
        <textarea id="generatedCode" class="code-box" readonly></textarea>
      </div>

      <div class="preview-view" id="previewView" style="display:none;">
        <iframe id="previewFrame" class="preview-frame" sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-modals" allow="clipboard-write"></iframe>
      </div>

      <div class="result-actions">
        <button class="action-btn copy-code" type="button" onclick="copyCode()">📋 Copy Code</button>
        <button class="action-btn preview-btn" type="button" onclick="showPreview()">👁 Preview</button>
        <button class="action-btn newtab-btn" type="button" onclick="openTestInNewTab()">🚀 Test in New Tab</button>
        <button class="action-btn sharelink-btn" type="button" onclick="copyShareableLink()">🔗 Copy Share Link</button>
      </div>
    </div>

    <!-- HOMEPAGE PERMANENT HISTORY BOX -->
    <section class="panel">
      <div class="history-header">
        <span style="font-size: 12px; font-weight: bold; color: #bdf6ff;">📜 HOMEPAGE GENERATION HISTORY</span>
        <button type="button" class="history-btn del" onclick="clearHistory()">Clear All</button>
      </div>
      <div class="history-list" id="historyListContainer">
        <!-- History items loaded dynamically -->
      </div>
    </section>

    <!-- Informative Article Section (500+ Words) -->
    <section class="article-panel">
      <h2>Complete Guide: How to Use the VIP Verification Gateway Generator</h2>
      
      <p>Welcome to the ultimate <strong>VIP Verification Gateway Generator</strong>—a powerful, multi-purpose, and secure content locking utility designed for digital creators, developers, software distributors, and online community administrators. In today’s competitive digital ecosystem, protecting your proprietary links, download files, premium configuration keys, and VIP service tokens is crucial. If you share resources directly without any interactive security barrier, you miss out on growing your social media footprint and protecting your assets from automated scrapers or leech bots. This advanced online generator allows you to create fully customized, robust, and highly engaging verification gateways within seconds, requiring absolutely zero advanced coding knowledge.</p>

      <h3>Why Do You Need a Verification Gateway?</h3>
      <p>Content locking and social verification gateways serve as a mutual exchange bridge between creators and audiences. When users want to access a premium resource, software crack, configuration file, or private channel, they complete simple, authentic engagement tasks—such as subscribing to your official YouTube channel, joining your Telegram broadcast, or following your social accounts. This organic mechanism drastically boosts your platform visibility, increases subscriber count, and ensures that only genuinely interested users obtain your valuable download keys.</p>

      <h3>Key Features Built into This Tool</h3>
      <ul>
        <li><strong>Multi-Platform Support:</strong> Easily add up to 10 popular social media platforms including YouTube, Telegram, Instagram, Facebook, Twitter/X, Discord, WhatsApp, and TikTok with customized display labels.</li>
        <li><strong>Smart Return Countdown Timers:</strong> Configure precise waiting delays (ranging from 5 seconds up to 60 seconds or custom durations). The intelligent script tracks user tab focus and visibility to ensure they return only after completing the action.</li>
        <li><strong>Dynamic Math Captcha:</strong> Protect your gateway from automated bot scripts by enabling the randomized arithmetic addition/subtraction verification step.</li>
        <li><strong>Optional Password Security:</strong> Turn the password verification step ON or OFF using our slick switch toggle. When enabled, users must input your confidential passcode to unlock the final asset.</li>
        <li><strong>Flexible Output Modes:</strong> Deliver either a custom secret text license key (with a 1-click copy utility) or an automatic direct file download redirection link.</li>
        <li><strong>Persistent Homepage History Log:</strong> Every gateway configuration you build is automatically saved to your browser's persistent storage right on the homepage. Even after refreshing the page or restarting your browser, your history remains fully intact. Simply click on any historical record in the history box to instantly restore all associated social links, timers, passwords, and target keys back into the editor tool.</li>
        <li><strong>Instant Live Preview & Testing:</strong> Switch instantly between the generated raw HTML code and a live interactive preview frame, or test your working gateway instantly in a new browser tab with one click.</li>
      </ul>

      <h3>Step-by-Step Instructions to Create Your Gateway</h3>
      <p>Building and deploying your custom verification gateway takes less than a minute. Follow these simple steps:</p>
      <ul>
        <li><strong>Step 1: Add Social Links:</strong> Select your desired platforms from the dropdown selector and click <code>+ Add Social Link</code>. Paste your channel or profile URLs into the input boxes. You can also click the pen icon (🖊) to rename the platform title dynamically.</li>
        <li><strong>Step 2: Configure Timers & Security:</strong> Choose your preferred countdown duration. Toggle the Math Captcha and Password Protection switches according to your security requirements. If password protection is enabled, specify your secret passphrase.</li>
        <li><strong>Step 3: Define Output Destination:</strong> Choose whether your gateway should unlock a text-based Custom Access Key or redirect users directly to a target Download URL. Fill in your final key string or file link.</li>
        <li><strong>Step 4: Generate & Export:</strong> Click the <strong>⚡ Generate Verification Gateway</strong> button. The tool will instantly render a clean, self-contained, standalone HTML package. You can copy the code, test it live, or reload it anytime directly from your persistent history panel on the homepage.</li>
      </ul>

      <p>Empower your distribution workflow today with professional-grade verification infrastructure. Enjoy seamless performance, bulletproof security, and effortless audience growth!</p>
    </section>

    <!-- LIVE STATS COUNTERS IN FOOTER -->
    <div class="footer-stats-box">
      <div class="stat-box">
        <div class="stat-value" id="activeCount">12,450</div>
        <div class="stat-label">ACTIVE USERS</div>
      </div>
      <div class="stat-box">
        <div class="stat-value" id="newUserCount">3,820</div>
        <div class="stat-label">NEW USERS TODAY</div>
      </div>
    </div>

    <!-- Footer Links Added -->
    <div class="footer-links-box">
      <a href="https://isrartoolzone.blogspot.com/" target="_blank">Home</a>
      <a href="https://isrartoolzone.blogspot.com/?m=1" target="_blank">My Tool</a>
    </div>

    <div class="minimal-footer">VIP ACCESS GENERATOR TOOL</div>
  </main>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Super Fast & Dynamic Live Fluctuating Counters (Active 10k-15k, New 2k-5k)
  let activeUsers = 12450;
  let newUsers = 3820;

  setInterval(() => {
    activeUsers += Math.floor(Math.random() * 81) - 40; // -40 to +40 fast shift
    if(activeUsers < 10000) activeUsers = 10000;
    if(activeUsers > 15000) activeUsers = 15000;
    document.getElementById("activeCount").textContent = activeUsers.toLocaleString();

    newUsers += Math.floor(Math.random() * 51) - 25; // -25 to +25 fast shift
    if(newUsers < 2000) newUsers = 2000;
    if(newUsers > 5000) newUsers = 5000;
    document.getElementById("newUserCount").textContent = newUsers.toLocaleString();
  }, 400); // Super fast interval update

  window.handleTimerPresetChange = function() {
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
      return (!isNaN(customVal) && customVal > 0) ? customVal : 10;
    }
    return parseInt(val, 10) || 10;
  }

  window.togglePasswordBox = function() {
    const isChecked = document.getElementById("enablePassword").checked;
    const box = document.getElementById("passwordBoxContainer");
    if(isChecked) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  }

  window.toggleOutputMode = function() {
    const mode = document.querySelector('input[name="outputMode"]:checked').value;
    const label = document.getElementById("outputFieldLabel");
    const input = document.getElementById("customAccessKey");
    if(mode === 'url') {
      label.textContent = "Target Download URL";
      input.placeholder = "e.g. https://example.com/download-file.zip";
    } else {
      label.textContent = "Custom Access Key";
      input.placeholder = "e.g. VIP-AIM-LIFE-TIME-TIS";
    }
  }

  const PLATFORM_CONFIG = {
    youtube: { name: "YouTube", title: "Subscribe", desc: "Subscribe to our official YouTube channel to continue.", btn: "Subscribe on YouTube", placeholder: "e.g. https://youtube.com/@channel" },
    facebook: { name: "Facebook", title: "Follow Facebook", desc: "Follow our official Facebook page to unlock the next step.", btn: "Follow on Facebook", placeholder: "e.g. https://facebook.com/page" },
    instagram: { name: "Instagram", title: "Follow Instagram", desc: "Follow our official Instagram profile to continue verification.", btn: "Follow Instagram", placeholder: "e.g. https://instagram.com/username" },
    telegram: { name: "Telegram", title: "Join Telegram", desc: "Join our official Telegram channel to unlock the next step.", btn: "Join Telegram", placeholder: "e.g. https://t.me/channel" },
    twitter: { name: "Twitter / X", title: "Follow Twitter (X)", desc: "Follow our official Twitter (X) profile to continue verification.", btn: "Follow on Twitter (X)", placeholder: "e.g. https://x.com/username" },
    snapchat: { name: "Snapchat", title: "Add Snapchat", desc: "Add our official Snapchat account to continue verification.", btn: "Add on Snapchat", placeholder: "e.g. https://snapchat.com/add/username" },
    pinterest: { name: "Pinterest", title: "Follow Pinterest", desc: "Follow our official Pinterest page to continue verification.", btn: "Follow on Pinterest", placeholder: "e.g. https://pinterest.com/username" },
    tiktok: { name: "TikTok", title: "Follow TikTok", desc: "Follow our official TikTok account to continue verification.", btn: "Follow on TikTok", placeholder: "e.g. https://tiktok.com/@username" },
    discord: { name: "Discord", title: "Join Discord", desc: "Join our official Discord server to unlock the next step.", btn: "Join Discord Server", placeholder: "e.g. https://discord.gg/invite" },
    whatsapp: { name: "WhatsApp", title: "Join WhatsApp", desc: "Follow our official WhatsApp channel to unlock the next step.", btn: "Join WhatsApp Channel", placeholder: "e.g. https://whatsapp.com/channel/..." }
  };

  window.addSelectedPlatform = function(platformKey, customTitle, customUrl){
    const select = document.getElementById("platformSelect");
    const key = platformKey || select.value;
    const config = PLATFORM_CONFIG[key] || PLATFORM_CONFIG["youtube"];

    const list = document.getElementById("dynamicSocialList");
    const card = document.createElement("div");
    card.className = "url-card";

    const head = document.createElement("div");
    head.className = "url-card-head";

    const tag = document.createElement("div");
    tag.className = "platform-tag";
    
    const nameSpan = document.createElement("span");
    nameSpan.className = "platform-name-text";
    nameSpan.textContent = customTitle || config.name;

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "edit-label-btn";
    editBtn.innerHTML = "🖊";
    editBtn.title = "Edit name";
    editBtn.onclick = function() {
      if (tag.querySelector(".inline-edit-input")) return;
      const currentText = nameSpan.textContent;
      const inlineInput = document.createElement("input");
      inlineInput.type = "text";
      inlineInput.value = currentText;
      inlineInput.className = "inline-edit-input";
      
      nameSpan.style.display = "none";
      editBtn.style.display = "none";
      tag.insertBefore(inlineInput, nameSpan);
      inlineInput.focus();
      inlineInput.select();
      
      function saveInlineEdit() {
        const newVal = inlineInput.value.trim();
        if (newVal !== "") nameSpan.textContent = newVal;
        inlineInput.remove();
        nameSpan.style.display = "";
        editBtn.style.display = "";
      }
      
      inlineInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") saveInlineEdit();
        if (e.key === "Escape") { inlineInput.remove(); nameSpan.style.display = ""; editBtn.style.display = ""; }
      });
      inlineInput.addEventListener("blur", saveInlineEdit);
    };

    tag.appendChild(nameSpan);
    tag.appendChild(editBtn);
    head.appendChild(tag);

    const row = document.createElement("div");
    row.className = "url-row";

    const input = document.createElement("input");
    input.type = "url";
    input.dataset.platformKey = key;
    input.dataset.platformTitle = config.title;
    input.dataset.platformDesc = config.desc;
    input.dataset.platformBtn = config.btn;
    input.placeholder = config.placeholder;
    input.value = customUrl || "";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.innerHTML = "×";
    removeBtn.onclick = function(){ card.remove(); };

    row.appendChild(input);
    row.appendChild(removeBtn);
    card.appendChild(head);
    card.appendChild(row);
    list.appendChild(card);
  }

  window.addEventListener("DOMContentLoaded", function(){
    if(document.querySelectorAll("#dynamicSocialList .url-card").length === 0){
      addSelectedPlatform("youtube");
      addSelectedPlatform("telegram");
    }
    checkAndRenderSharedGateway();
    renderHistoryList();
  });

  function collectLinks(){
    const result = [];
    const cards = document.querySelectorAll("#dynamicSocialList .url-card");
    cards.forEach(function(card){
      const input = card.querySelector("input[data-platform-key]");
      const nameSpan = card.querySelector(".platform-name-text");
      const url = input.value.trim();
      if(url){
        const customName = nameSpan ? nameSpan.textContent.trim() : input.dataset.platformKey;
        result.push({ 
          key: input.dataset.platformKey, 
          platform: customName, 
          title: input.dataset.platformTitle,
          desc: input.dataset.platformDesc,
          btn: input.dataset.platformBtn,
          url: url 
        });
      }
    });
    return result;
  }

  window.generateGateway = function(){
    const links = collectLinks();
    const enablePassword = document.getElementById("enablePassword").checked;
    const password = enablePassword ? document.getElementById("verificationPassword").value.trim() : "";
    const outputValue = document.getElementById("customAccessKey").value.trim();
    const outputMode = document.querySelector('input[name="outputMode"]:checked').value;
    const enableCaptcha = document.getElementById("enableCaptcha").checked;
    const timerSeconds = getSelectedTimerSeconds();
    const button = document.getElementById("generateBtn");
    const message = document.getElementById("message");

    if(links.length === 0){ message.textContent = "⚠️ Please fill in at least one social media link."; return; }
    if(enablePassword && !password){ message.textContent = "⚠️ Please enter a verification password."; return; }
    if(!outputValue){ message.textContent = outputMode === 'url' ? "⚠️ Please enter a target download URL." : "⚠️ Please enter a custom access key."; return; }

    button.disabled = true;
    button.innerHTML = '<span class="loader"></span>Generating...';
    message.textContent = "";

    setTimeout(function(){
      try{
        const code = createGatewayCode(links, enablePassword, password, outputValue, outputMode, enableCaptcha, timerSeconds);
        document.getElementById("generatedCode").value = code;
        document.getElementById("previewFrame").srcdoc = code;
        document.getElementById("result").classList.add("show");
        showCode();

        const configObj = {
          links: links,
          enablePassword: enablePassword,
          password: password,
          outputValue: outputValue,
          outputMode: outputMode,
          enableCaptcha: enableCaptcha,
          timerSeconds: timerSeconds
        };
        saveToHistory(configObj);

        button.disabled = false;
        button.innerHTML = "✓ Gateway Generated";
        message.textContent = "✓ Your verification gateway code and homepage history have been saved!";
        setTimeout(() => { button.innerHTML = "⚡ Generate Verification Gateway"; }, 1800);
      }catch(error){
        console.error(error);
        button.disabled = false;
        button.innerHTML = "⚡ Generate Verification Gateway";
        message.textContent = "❌ Error generating gateway code.";
      }
    }, 400);
  }

  window.getShareableLink = function() {
    const links = collectLinks();
    const enablePassword = document.getElementById("enablePassword").checked;
    const password = enablePassword ? document.getElementById("verificationPassword").value.trim() : "";
    const outputValue = document.getElementById("customAccessKey").value.trim();
    const outputMode = document.querySelector('input[name="outputMode"]:checked').value;
    const enableCaptcha = document.getElementById("enableCaptcha").checked;
    const timerSeconds = getSelectedTimerSeconds();
    if (links.length === 0 || !outputValue) return "";
    const payload = { l: links, ep: enablePassword ? 1 : 0, p: password, o: outputValue, m: outputMode, c: enableCaptcha ? 1 : 0, t: timerSeconds };
    try {
      const jsonStr = JSON.stringify(payload);
      const encoded = btoa(encodeURIComponent(jsonStr));
      return window.location.origin + window.location.pathname + "?gateway=" + encoded;
    } catch (e) { return ""; }
  };

  window.copyShareableLink = async function() {
    const shareUrl = getShareableLink();
    if (!shareUrl) { alert("Please fill in valid data first."); return; }
    try {
      await navigator.clipboard.writeText(shareUrl);
      document.getElementById("message").textContent = "✓ Shareable hosting link copied successfully!";
    } catch (e) { prompt("Copy link:", shareUrl); }
  };

  function saveToHistory(configObj) {
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem("israr_homepage_history_v7")) || [];
    } catch(e) { history = []; }

    const now = new Date();
    const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const summary = configObj.links.map(l => l.platform).join(" → ");
    
    history.unshift({ config: configObj, summary: summary, date: dateStr });
    if(history.length > 200) history = history.slice(0, 200);

    try {
      localStorage.setItem("israr_homepage_history_v7", JSON.stringify(history));
    } catch(e) {
      console.error("LocalStorage save failed", e);
    }
    renderHistoryList();
  }

  window.renderHistoryList = function() {
    const container = document.getElementById("historyListContainer");
    if(!container) return;
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem("israr_homepage_history_v7")) || [];
    } catch(e) { history = []; }

    if(history.length === 0) {
      container.innerHTML = '<div style="font-size:11px;color:#7f8ca3;text-align:center;padding:12px;">No saved history found on homepage yet. Generate a gateway above!</div>';
      return;
    }

    let html = '';
    history.forEach((item, index) => {
      html += `<div class="history-item" onclick='loadHistoryConfig(${index})'>
        <div class="history-info">
          <span class="history-url">🔗 ${item.summary} (${item.config.outputMode.toUpperCase()})</span>
          <span class="history-date">🕒 ${item.date} — Click to load data</span>
        </div>
        <div class="history-actions" onclick="event.stopPropagation()">
          <button type="button" class="history-btn" onclick='loadHistoryConfig(${index})'>Load</button>
          <button type="button" class="history-btn del" onclick='deleteHistoryItem(${index})'>Del</button>
        </div>
      </div>`;
    });
    container.innerHTML = html;
  }

  window.loadHistoryConfig = function(index) {
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem("israr_homepage_history_v7")) || [];
    } catch(e) { history = []; }

    const item = history[index];
    if(!item || !item.config) return;
    const cfg = item.config;

    // Load Social Links
    document.getElementById("dynamicSocialList").innerHTML = "";
    cfg.links.forEach(l => {
      addSelectedPlatform(l.key, l.platform, l.url);
    });

    // Load Timer
    document.getElementById("timerPresetSelect").value = cfg.timerSeconds;
    handleTimerPresetChange();

    // Load Captcha Toggle
    document.getElementById("enableCaptcha").checked = cfg.enableCaptcha;

    // Load Password Toggle & Value
    document.getElementById("enablePassword").checked = cfg.enablePassword;
    togglePasswordBox();
    if(cfg.enablePassword) {
      document.getElementById("verificationPassword").value = cfg.password || "";
    }

    // Load Output Mode & Key/URL
    if(cfg.outputMode === 'url') {
      document.querySelector('input[name="outputMode"][value="url"]').checked = true;
    } else {
      document.querySelector('input[name="outputMode"][value="key"]').checked = true;
    }
    toggleOutputMode();
    document.getElementById("customAccessKey").value = cfg.outputValue;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("message").textContent = "✓ All gateway data loaded successfully into the form!";
  }

  window.deleteHistoryItem = function(index) {
    let history = [];
    try {
      history = JSON.parse(localStorage.getItem("israr_homepage_history_v7")) || [];
    } catch(e) {}
    history.splice(index, 1);
    try {
      localStorage.setItem("israr_homepage_history_v7", JSON.stringify(history));
    } catch(e) {}
    renderHistoryList();
  }

  window.clearHistory = function() {
    if(confirm("Are you sure you want to clear all homepage history?")) {
      localStorage.removeItem("israr_homepage_history_v7");
      renderHistoryList();
    }
  }

  window.openTestInNewTab = function(){
    const code = document.getElementById("generatedCode").value;
    if(!code) return;
    const newWin = window.open('', '_blank');
    if (newWin) {
      newWin.document.open();
      newWin.document.write(code);
      newWin.document.close();
    } else {
      alert("Please allow popups for this website to test in a new tab.");
    }
  }

  function checkAndRenderSharedGateway() {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get("gateway");
    if (!encodedData) return;
    try {
      const jsonStr = decodeURIComponent(atob(encodedData));
      const data = JSON.parse(jsonStr);
      if (data && data.l && data.o) {
        const code = createGatewayCode(data.l, data.ep === 1, data.p || '', data.o, data.m || 'key', data.c === 1, data.t || 10);
        document.open(); document.write(code); document.close();
      }
    } catch (err) { console.error("Invalid gateway payload", err); }
  }

  function createGatewayCode(links, enablePassword, password, outputValue, outputMode, enableCaptcha, timerSeconds){
    const ops = ['+', '-', '*'];
    const chosenOp = ops[Math.floor(Math.random() * ops.length)];
    let n1, n2, captchaAnswer;
    if (chosenOp === '+') { n1 = Math.floor(Math.random() * 8) + 2; n2 = Math.floor(Math.random() * 8) + 1; captchaAnswer = n1 + n2; }
    else if (chosenOp === '-') { n1 = Math.floor(Math.random() * 8) + 5; n2 = Math.floor(Math.random() * 4) + 1; captchaAnswer = n1 - n2; }
    else { n1 = Math.floor(Math.random() * 5) + 1; n2 = Math.floor(Math.random() * 5) + 1; captchaAnswer = n1 * n2; }

    const totalSocial = links.length;
    const captchaStepNum = enableCaptcha ? (totalSocial + 1) : null;
    
    let passStepNum = null;
    let keyStepNum = null;

    let currentStep = totalSocial;
    if(enableCaptcha) currentStep++;

    if(enablePassword) {
      passStepNum = ++currentStep;
    }
    keyStepNum = ++currentStep;

    function pad(n){ return n < 10 ? "0" + n : "" + n; }

    let html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<title>Secure Verification</title>\n<style>\n';
    html += '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");\n';
    html += '*{margin:0;padding:0;box-sizing:border-box;}\n:root{--bg:#03050b;--cyan:#42e8ff;--purple:#8c6cff;--green:#4ce3a8;--red:#ff647c;--text:#f5f8ff;--muted:#7f8ca3;}\nhtml{scroll-behavior:smooth;}\nbody{min-height:100vh;font-family:Inter,Arial,sans-serif;color:var(--text);background:radial-gradient(circle at 10% 0%,rgba(45,210,255,.12),transparent 28%),radial-gradient(circle at 90% 10%,rgba(125,76,255,.14),transparent 30%),radial-gradient(circle at 50% 100%,rgba(0,180,255,.06),transparent 35%),#03050b;overflow-x:hidden;}\n';
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
    html += '.timer-box{display:none;margin:0 0 14px;padding:16px;text-align:center;border-radius:15px;border:1px solid rgba(66,224,255,.25);background:linear-gradient(145deg,rgba(47,196,255,.08),rgba(115,87,255,.05));animation:timerIn .35s ease;}\n';
    html += '.timer-box.show{display:block;}\n';
    html += '@keyframes timerIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\n';
    html += '.timer-label{color:#64748a;font-size:8px;font-weight:700;letter-spacing:1.5px;}\n';
    html += '.timer{margin-top:7px;color:#5ce6ff;font-size:27px;font-weight:700;letter-spacing:-1px;text-shadow:0 0 18px rgba(66,232,255,.45);}\n';
    html += '.timer-sub{margin-top:4px;color:#526176;font-size:8px;}\n';
    html += '.progress{height:4px;margin-top:12px;overflow:hidden;border-radius:10px;background:rgba(255,255,255,.08);}\n';
    html += '.progress-bar{width:0%;height:100%;border-radius:10px;background:linear-gradient(90deg,var(--cyan),var(--purple));box-shadow:0 0 10px rgba(66,232,255,.5);transition:width .2s linear;}\n';
    html += '.key-wrapper{position:relative;margin-top:12px;}\n';
    html += '.key{padding:16px;border-radius:14px;border:1px solid rgba(76,227,168,.3);background:rgba(65,227,168,.08);color:#65edb7;font-family:monospace;font-size:15px;font-weight:bold;text-align:center;letter-spacing:1px;word-break:break-all;animation:keyReveal .5s ease;user-select:all;-webkit-user-select:all;}\n';
    html += '@keyframes keyReveal{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\n';
    html += '.copy-btn{margin-top:12px;background:linear-gradient(110deg,#4ce3a8,#1ecb88);color:#02110c;font-size:13px;font-weight:800;letter-spacing:0.5px;text-decoration:none;}\n';
    html += '.copy-btn:hover{background:linear-gradient(110deg,#5df5b7,#2cd996);box-shadow:0 8px 25px rgba(76,227,168,.35);}\n';
    html += '.footer{margin-top:22px;text-align:center;color:#3e4a5e;font-size:8px;font-weight:600;letter-spacing:1.2px;}\n';
    html += '@media(max-width:520px){.header{height:64px;padding:0 16px;}.wrapper{padding:30px 11px 45px;}h1{font-size:34px;}.panel{padding:9px;border-radius:24px;}.step{padding:18px;border-radius:18px;}}\n';
    html += '</style>\n</head>\n';
    html += '<body>\n';

    html += '<header class="header">\n  <div class="brand"><span class="brand-icon"></span>SECURE ACCESS</div>\n  <div class="admin">ADMIN PANEL</div>\n</header>\n';
    html += '<main class="wrapper">\n<section class="hero">\n  <div class="badge"><i></i>VERIFICATION REQUIRED</div>\n  <h1>Access Gateway</h1>\n  <p>Complete the verification sequence below to securely unlock your access key or file.</p>\n</section>\n';
    html += '<section class="panel">\n';

    links.forEach(function(item, idx){
      const sNum = idx + 1;
      const isFirst = (idx === 0);
      html += '<div class="step ' + (isFirst ? 'active' : '') + '" id="step' + sNum + '">\n';
      html += '  <div class="head">\n    <span class="num">' + pad(sNum) + '</span>\n    <span class="status" id="status' + sNum + '">' + (isFirst ? 'READY' : 'LOCKED') + '</span>\n  </div>\n';
      html += '  <h2>' + item.platform + '</h2>\n';
      html += '  <p class="desc">' + item.desc + '</p>\n';
      html += '  <button type="button" id="btn' + sNum + '" ' + (isFirst ? '' : 'disabled') + ' onclick="startSocialStep(' + sNum + ')">' + item.btn + '</button>\n';
      html += '  <div id="timer' + sNum + '" class="timer-box">\n    <div class="timer-label">VERIFICATION IN PROGRESS</div>\n    <div class="timer" id="count' + sNum + '">' + timerSeconds + '</div>\n';
      html += '    <div class="timer-sub">Please wait ' + timerSeconds + ' seconds for verification to complete...</div>\n';
      html += '    <div class="progress"><div class="progress-bar" id="progress' + sNum + '"></div></div>\n  </div>\n';
      html += '  <div class="msg" id="msg' + sNum + '"></div>\n</div>\n';
    });

    if(enableCaptcha){
      html += '<div class="step" id="step' + captchaStepNum + '">\n';
      html += '  <div class="head">\n    <span class="num">' + pad(captchaStepNum) + '</span>\n    <span class="status" id="status' + captchaStepNum + '">LOCKED</span>\n  </div>\n';
      html += '  <h2>Final Captcha</h2>\n  <p class="desc">Confirm that you are not a robot.</p>\n';
      html += '  <div class="captcha"><b id="n1">' + n1 + '</b><span>' + chosenOp + '</span><b id="n2">' + n2 + '</b><span>=</span><span>?</span></div>\n';
      html += '  <input id="captchaInput" type="number" placeholder="Enter answer" disabled onkeydown="if(event.key===\'Enter\') verifyCaptcha()">\n';
      html += '  <button type="button" id="captchaBtn" disabled onclick="verifyCaptcha()">Verify Captcha</button>\n';
      html += '  <div class="msg" id="msg' + captchaStepNum + '"></div>\n</div>\n';
    }

    if(enablePassword){
      html += '<div class="step" id="step' + passStepNum + '">\n';
      html += '  <div class="head">\n    <span class="num">' + pad(passStepNum) + '</span>\n    <span class="status" id="status' + passStepNum + '">LOCKED</span>\n  </div>\n';
      html += '  <h2>Verification Password</h2>\n  <p class="desc">Enter the password provided by the administrator.</p>\n';
      html += '  <input id="passwordInput" type="password" placeholder="Enter verification password" disabled onkeydown="if(event.key===\'Enter\') verifyPassword()">\n';
      html += '  <button type="button" id="passwordBtn" disabled onclick="verifyPassword()">Verify Password</button>\n';
      html += '  <div class="msg" id="msg' + passStepNum + '"></div>\n</div>\n';
    }

    const finalTitle = outputMode === 'url' ? 'Download File' : 'Your Access Key';
    const finalDesc = outputMode === 'url' ? 'Your file download link has been unlocked after verification.' : 'Your access key has been unlocked after verification.';

    html += '<div class="step" id="step' + keyStepNum + '">\n';
    html += '  <div class="head">\n    <span class="num">' + pad(keyStepNum) + '</span>\n    <span class="status" id="status' + keyStepNum + '">LOCKED</span>\n  </div>\n';
    html += '  <h2>' + finalTitle + '</h2>\n  <p class="desc">' + finalDesc + '</p>\n';
    html += '  <div id="keyBox">\n    <div style="font-size:11px;color:#596d88;text-align:center;padding:12px;">Locked until previous steps are completed.</div>\n  </div>\n</div>\n';

    html += '</section>\n<div class="footer">SECURE ACCESS GATEWAY</div>\n</main>\n';

    html += '<script>\n';
    html += 'const LINKS = ' + JSON.stringify(links) + ';\n';
    html += 'const ENABLE_PASSWORD = ' + enablePassword + ';\n';
    html += 'const PASSWORD = ' + JSON.stringify(password) + ';\n';
    html += 'const OUTPUT_VAL = ' + JSON.stringify(outputValue) + ';\n';
    html += 'const OUTPUT_MODE = ' + JSON.stringify(outputMode) + ';\n';
    html += 'const ENABLE_CAPTCHA = ' + enableCaptcha + ';\n';
    html += 'const TIMER_SECONDS = ' + timerSeconds + ';\n';
    html += 'const ANSWER = ' + captchaAnswer + ';\n';
    html += 'const CAPTCHA_STEP = ' + (captchaStepNum || 'null') + ';\n';
    html += 'const PASS_STEP = ' + (passStepNum || 'null') + ';\n';
    html += 'const KEY_STEP = ' + keyStepNum + ';\n';

    html += 'function activate(n){\n  var s = document.getElementById("step" + n);\n  var st = document.getElementById("status" + n);\n  if(s) s.classList.add("active");\n  if(st) st.textContent = "READY";\n}\n';
    html += 'function complete(n){\n  var s = document.getElementById("step" + n);\n  var st = document.getElementById("status" + n);\n  if(s){\n    s.classList.remove("active");\n    s.classList.add("done");\n  }\n  if(st) st.textContent = "DONE";\n}\n';
    
    html += 'function openPlatformUrl(url){\n  if(!/^https?:\\/\\//i.test(url)) url = "https://" + url;\n  var win = null;\n  try{ win = window.open(url, "_blank"); }catch(e){}\n';
    html += '  if(!win || win.closed || typeof win.closed === "undefined"){ try{ if(window.top && window.top !== window){ win = window.top.open(url, "_blank"); } }catch(e){} }\n';
    html += '  if(!win || win.closed || typeof win.closed === "undefined"){ try{ var a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; document.body.appendChild(a); a.click(); setTimeout(function(){ try{ document.body.removeChild(a); }catch(e){} }, 500); }catch(e){ window.location.href = url; } }\n';
    html += '}\n';

    html += 'var pendingStep = null;\nvar timerRunning = false;\nvar safetyTimer = null;\n';
    html += 'function startSocialStep(stepNum){\n  if(timerRunning) return;\n  var item = LINKS[stepNum - 1];\n  var btn = document.getElementById("btn" + stepNum);\n  var msg = document.getElementById("msg" + stepNum);\n';
    html += '  btn.disabled = true;\n  btn.textContent = "⏳ Action Opened... Return to verify";\n  btn.style.opacity = "0.85";\n';
    html += '  if(msg){ msg.textContent = "👉 Page opened. Please complete action and return back to this page."; msg.style.color = "#42e8ff"; }\n';
    html += '  pendingStep = stepNum;\n  openPlatformUrl(item.url.trim());\n';
    html += '  if(safetyTimer) clearTimeout(safetyTimer);\n  safetyTimer = setTimeout(function(){ if(pendingStep === stepNum){ startStepCountdown(stepNum); } }, 3500);\n';
    html += '}\n';

    html += 'function handleUserReturn(){ if(pendingStep !== null && !timerRunning){ var s = pendingStep; pendingStep = null; if(safetyTimer) clearTimeout(safetyTimer); startStepCountdown(s); } }\n';
    html += 'window.addEventListener("focus", handleUserReturn);\ndocument.addEventListener("visibilitychange", function(){ if(!document.hidden && document.visibilityState === "visible"){ handleUserReturn(); } });\n';

    html += 'function startStepCountdown(stepNum){\n  timerRunning = true;\n  pendingStep = null;\n  var item = LINKS[stepNum - 1];\n  var btn = document.getElementById("btn" + stepNum);\n  var timerBox = document.getElementById("timer" + stepNum);\n  var countEl = document.getElementById("count" + stepNum);\n  var progressEl = document.getElementById("progress" + stepNum);\n  var msg = document.getElementById("msg" + stepNum);\n';
    html += '  if(timerBox) timerBox.classList.add("show");\n  if(msg){ msg.textContent = "Verifying your action... Please wait " + TIMER_SECONDS + " seconds."; msg.style.color = "#718096"; }\n';
    html += '  var timeLeft = TIMER_SECONDS;\n  btn.disabled = true;\n  btn.textContent = "⏳ Verifying... " + timeLeft + "s";\n  if(countEl) countEl.textContent = timeLeft;\n  if(progressEl) progressEl.style.width = "0%";\n';
    html += '  var interval = setInterval(function(){\n    timeLeft--;\n    if(timeLeft > 0){\n      btn.textContent = "⏳ Verifying... " + timeLeft + "s";\n      if(countEl) countEl.textContent = timeLeft;\n      var pct = ((TIMER_SECONDS - timeLeft) / TIMER_SECONDS) * 100;\n      if(progressEl) progressEl.style.width = pct + "%";\n    }else{\n      clearInterval(interval);\n      timerRunning = false;\n      if(progressEl) progressEl.style.width = "100%";\n      if(countEl) countEl.textContent = "0";\n';
    html += '      setTimeout(function(){\n        if(timerBox) timerBox.classList.remove("show");\n        complete(stepNum);\n        btn.textContent = "✓ Completed";\n        btn.style.opacity = "0.85";\n        btn.style.background = "rgba(76,227,168,.15)";\n        btn.style.color = "#5ce5ae";\n        btn.style.borderColor = "rgba(76,227,168,.3)";\n';
    html += '        if(msg){ msg.textContent = "✓ " + item.platform + " verification completed!"; msg.style.color = "#5adca8"; }\n';
    html += '        unlockNextStep(stepNum);\n      }, 350);\n    }\n  }, 1000);\n';
    html += '}\n';

    html += 'function unlockNextStep(currentStepNum){\n  var nextNum = currentStepNum + 1;\n';
    html += '  if(nextNum <= LINKS.length){\n    activate(nextNum);\n    var nextBtn = document.getElementById("btn" + nextNum);\n    if(nextBtn){ nextBtn.disabled = false; nextBtn.style.opacity = "1"; }\n';
    html += '    var nextCard = document.getElementById("step" + nextNum);\n    if(nextCard) nextCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
    html += '  }else if(ENABLE_CAPTCHA && nextNum === CAPTCHA_STEP){\n    activate(CAPTCHA_STEP);\n    var cIn = document.getElementById("captchaInput");\n    var cBtn = document.getElementById("captchaBtn");\n    if(cIn) cIn.disabled = false;\n    if(cBtn){ cBtn.disabled = false; cBtn.style.opacity = "1"; }\n';
    html += '    var cCard = document.getElementById("step" + CAPTCHA_STEP);\n    if(cCard) cCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
    html += '  }else if(ENABLE_PASSWORD && nextNum === PASS_STEP){\n    activate(PASS_STEP);\n    var pIn = document.getElementById("passwordInput");\n    var pBtn = document.getElementById("passwordBtn");\n    if(pIn) pIn.disabled = false;\n    if(pBtn){ pBtn.disabled = false; pBtn.style.opacity = "1"; }\n';
    html += '    var pCard = document.getElementById("step" + PASS_STEP);\n    if(pCard) pCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
    html += '  }else if(!ENABLE_PASSWORD && nextNum === KEY_STEP){\n    finishGateway();\n  }\n';
    html += '}\n';

    if(enableCaptcha){
      html += 'function verifyCaptcha(){\n  var input = document.getElementById("captchaInput");\n  var val = Number(input.value.trim());\n  var msg = document.getElementById("msg" + CAPTCHA_STEP);\n  var btn = document.getElementById("captchaBtn");\n';
      html += '  if(input.value.trim() === "" || isNaN(val) || val !== ANSWER){ msg.textContent = "❌ Incorrect answer. Please try again."; msg.style.color = "#ff647c"; return; }\n';
      html += '  complete(CAPTCHA_STEP);\n  input.disabled = true;\n  btn.disabled = true;\n  btn.textContent = "✓ Captcha Verified";\n  btn.style.opacity = "0.85";\n  btn.style.background = "rgba(76,227,168,.15)";\n  btn.style.color = "#5ce5ae";\n  btn.style.borderColor = "rgba(76,227,168,.3)";\n';
      html += '  msg.textContent = "✓ Captcha verified successfully!";\n  msg.style.color = "#5adca8";\n';
      
      if(enablePassword){
        html += '  activate(PASS_STEP);\n  var pIn = document.getElementById("passwordInput");\n  var pBtn = document.getElementById("passwordBtn");\n  pIn.disabled = false;\n  pBtn.disabled = false;\n  pBtn.style.opacity = "1";\n';
        html += '  var pCard = document.getElementById("step" + PASS_STEP);\n  if(pCard) pCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
      } else {
        html += '  finishGateway();\n';
      }
      html += '}\n';
    }

    if(enablePassword){
      html += 'function verifyPassword(){\n  var input = document.getElementById("passwordInput");\n  var val = input.value.trim();\n  var msg = document.getElementById("msg" + PASS_STEP);\n  var btn = document.getElementById("passwordBtn");\n';
      html += '  if(!val || val !== PASSWORD){ msg.textContent = "❌ Invalid verification password. Please try again."; msg.style.color = "#ff647c"; return; }\n';
      html += '  complete(PASS_STEP);\n  input.disabled = true;\n  btn.disabled = true;\n  btn.textContent = "✓ Password Verified";\n  btn.style.opacity = "0.85";\n';
      html += '  btn.style.background = "rgba(76,227,168,.15)";\n  btn.style.color = "#5ce5ae";\n  btn.style.borderColor = "rgba(76,227,168,.3)";\n';
      html += '  msg.textContent = "✓ Password verified successfully!";\n  msg.style.color = "#5adca8";\n';
      html += '  finishGateway();\n';
      html += '}\n';
    }

    html += 'function finishGateway(){\n';
    html += '  complete(KEY_STEP);\n';
    html += '  var keyBox = document.getElementById("keyBox");\n';
    html += '  if(OUTPUT_MODE === "url"){\n    var finalUrl = OUTPUT_VAL;\n    if(!/^https?:\\/\\//i.test(finalUrl)) finalUrl = "https://" + finalUrl;\n    keyBox.innerHTML = \'<div class="key-wrapper"><a href="\' + finalUrl + \'" target="_blank" rel="noopener noreferrer" class="copy-btn" style="text-align:center;padding:16px;display:block;border-radius:14px;font-size:15px;">📥 Download File Now</a></div>\';\n';
    html += '  }else{\n';
    html += '    keyBox.innerHTML = \'<div class="key-wrapper"><div class="key" id="rawKeyText">\' + OUTPUT_VAL + \'</div><button type="button" class="copy-btn" id="keyCopyBtn" onclick="copyAccessKeyNow()" style="width:100%;">📋 Copy Access Key</button></div>\';\n';
    html += '  }\n';
    html += '  var kCard = document.getElementById("step" + KEY_STEP);\n  if(kCard) kCard.scrollIntoView({ behavior: "smooth", block: "center" });\n';
    html += '}\n';

    html += 'function copyAccessKeyNow(){\n  var btn = document.getElementById("keyCopyBtn");\n  var text = OUTPUT_VAL;\n';
    html += '  if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(function(){ indicateKeyCopied(btn); }).catch(function(){ fallbackCopyKey(btn, text); }); }\n';
    html += '  else { fallbackCopyKey(btn, text); }\n';
    html += '}\n';

    html += 'function fallbackCopyKey(btn, text){\n  try{\n    var ta = document.createElement("textarea");\n    ta.value = text;\n    ta.style.position = "fixed";\n    ta.style.top = "-9999px"; ta.style.left = "-9999px";\n    document.body.appendChild(ta);\n    ta.focus(); ta.select();\n    var res = document.execCommand("copy");\n    document.body.removeChild(ta);\n    if(res) indicateKeyCopied(btn);\n  }catch(e){ indicateKeyCopied(btn); }\n';
    html += '}\n';

    html += 'function indicateKeyCopied(btn){\n  if(!btn) return;\n  btn.textContent = "✓ Key Copied!";\n  btn.style.background = "#4ce3a8";\n  btn.style.color = "#000";\n  setTimeout(function(){\n    btn.textContent = "📋 Copy Access Key";\n    btn.style.background = "";\n    btn.style.color = "";\n  }, 2200);\n';
    html += '}\n';

    html += '<' + '/script>\n</body>\n</html>';
    return html;
  }

  window.showCode = function(){
    document.getElementById("codeView").style.display = "block";
    document.getElementById("previewView").style.display = "none";
    document.getElementById("codeTab").classList.add("active");
    document.getElementById("previewTab").classList.remove("active");
  }

  window.showPreview = function(){
    const code = document.getElementById("generatedCode").value;
    if(!code) return;
    document.getElementById("codeView").style.display = "none";
    document.getElementById("previewView").style.display = "block";
    document.getElementById("codeTab").classList.remove("active");
    document.getElementById("previewTab").classList.add("active");
    document.getElementById("previewFrame").srcdoc = code;
  }

  window.openTestInNewTab = function(){
    const code = document.getElementById("generatedCode").value;
    if(!code) return;
    const newWin = window.open('', '_blank');
    if (newWin) {
      newWin.document.open();
      newWin.document.write(code);
      newWin.document.close();
    } else {
      alert("Please allow popups for this website to test in a new tab.");
    }
  }

  window.copyCode = async function(){
    const code = document.getElementById("generatedCode").value;
    if(!code) return;
    try{
      await navigator.clipboard.writeText(code);
      document.getElementById("message").textContent = "✓ Code copied successfully.";
    }catch(e){
      document.getElementById("generatedCode").select();
      document.execCommand("copy");
      document.getElementById("message").textContent = "✓ Code copied successfully.";
    }
  }
});
</script>
</body>
</html>
