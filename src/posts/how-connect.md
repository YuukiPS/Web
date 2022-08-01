---
title: 'Connect to Server'
short: 'Join us and play together'
date: "2022-05-25"
---

## Windows User (Fiddler)
- Before starting, open game first and then logout if you have logged in before and then exit again.
- Install [Fiddler](https://file.yuuki.me/0:/Project/Grasscutter/App/Proxy/PC/Fiddler/FiddlerSetup_YuukiPS.exe) then Open Fiddler then click Tools -> Options -> HTTPS -> Check "Capture HTTPS" and "Decrypt HTTPS" then click "Actions" then click "Trues Root" then click yes if a popup appears.
```sh
import System;
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;
class Handlers
{
    static function OnBeforeRequest(oS: Session) {
        if(oS.host.EndsWith(".yuanshen.com") || oS.host.EndsWith(".hoyoverse.com") || oS.host.EndsWith(".mihoyo.com")) {
            //This can also be replaced with another ip/domain server.
            //oS.oRequest.headers.UriScheme = "http";
              oS.host = "eu.game.yuuki.me";
            //oS.host = "sg.game.yuuki.me";
            //oS.host = "tes.game.yuuki.me";
			//oS.host = "localhost";
            //oS.host = "2.0.0.100";
        }
    }
};
```
- In Fiddler in "FiddlerScript" tab, copy this script then click save.
- Login with your username then password with random then login.

[![Tutorial Fiddler Metode](https://youtube-md.vercel.app/IrqlU-Aaw3Q/640/360)](https://www.youtube.com/watch?v=IrqlU-Aaw3Q)
## Android User (No-Root) (Apk Switch Server)
- Do backup first (apk & data game) because patching apk cannot be updated with game that is installed now.
- Install [Mod Apk](/posts/update)
- Open Game
- After you open it, a message will appear telling you to select **Custom Server** (please click once if it's the first time, to download game data)
- After that please select regional server on right button.

[![Tutorial Apk Switch Server Metode](https://youtube-md.vercel.app/XfHjpvwuZvo/640/360)](https://www.youtube.com/watch?v=XfHjpvwuZvo)
## Android User (No-Root) (Termux)
- Do backup first (apk & data game) because patching apk cannot be updated with game that is installed now.
- Install [Patched APK](https://file.yuuki.me/0:/Project/Grasscutter/Game%20Data/Android/2.8/Release/Global/Genshin%20Impact_2.8.0_MetaData_NOSSL_NOProxy_.apk) that accepts "Any CA Certs" and with Patch MetaData, unfortunately you will have to uninstall regular.
- Install [Termux](https://f-droid.org/repo/com.termux_118.apk) (Don't Install Google Play Store version)
- Copy and run this command
```sh
pkg install -y wget openssh # this is needed to run wget
wget https://s.id/InstallPS
chmod +x InstallPS # permission to be accessed
./InstallPS
```
- then run proxy with
```sh
./run.sh
```
- Then go to wifi settings and set proxy to 127.0.0.1 and 8080. Note that proxies are ignored if you are using a VPN.
- Open http://mitm.it/ in your browser, download certificate. Then go to settings and install it.
- Play Game
## iOS User (Shadowrocket) (Not yet available)
- Make sure you change the nearest server address to deal with high ping (**eu.game.yuuki.me** if you are european and **sg.game.yuuki.me** for asia)
- [Shadowrocket](https://apps.apple.com/id/app/shadowrocket/id932747118?l=id) > Configure Modules > Create New Module and write/copy this code.
```sh
#!name=Genshin Impact Routing Module MitM
#!desc=A module to use Grasscutter, with MITM handled via Surge, moudle written by 𝐖𝐨𝐰.

[URL Rewrite]
# Handle MITM via Surge, discarding mitmdump.
hk4e-api-os-static.mihoyo.com eu.game.yuuki.me header
hk4e-sdk-os.mihoyo.com eu.game.yuuki.me header
dispatchosglobal.yuanshen.com eu.game.yuuki.me header
osusadispatch.yuanshen.com eu.game.yuuki.me header
account.mihoyo.com eu.game.yuuki.me header
log-upload-os.mihoyo.com eu.game.yuuki.me header
dispatchcntest.yuanshen.com eu.game.yuuki.me header
devlog-upload.mihoyo.com eu.game.yuuki.me header
webstatic.mihoyo.com eu.game.yuuki.me header
log-upload.mihoyo.com eu.game.yuuki.me header
hk4e-sdk.mihoyo.com eu.game.yuuki.me header
api-beta-sdk.mihoyo.com eu.game.yuuki.me header
api-beta-sdk-os.mihoyo.com eu.game.yuuki.me header
cnbeta01dispatch.yuanshen.com eu.game.yuuki.me header
dispatchcnglobal.yuanshen.com eu.game.yuuki.me header
cnbeta02dispatch.yuanshen.com eu.game.yuuki.me header
sdk-os-static.mihoyo.com eu.game.yuuki.me header
webstatic-sea.mihoyo.com eu.game.yuuki.me header
hk4e-sdk-os-static.hoyoverse.com eu.game.yuuki.me header
webstatic-sea.hoyoverse.com eu.game.yuuki.me header
sdk-os-static.hoyoverse.com eu.game.yuuki.me header
api-account-os.hoyoverse.com eu.game.yuuki.me header
hk4e-sdk-os.hoyoverse.com eu.game.yuuki.me header
overseauspider.yuanshen.com eu.game.yuuki.me header
gameapi-account.mihoyo.com eu.game.yuuki.me header
minor-api.mihoyo.com eu.game.yuuki.me header
hk4e-sdk-os.hoyoverse.com eu.game.yuuki.me header
uspider.yuanshen.com eu.game.yuuki.me header
sdk-static.mihoyo.com eu.game.yuuki.me header

[MITM]
hostname = %APPEND% api-os-takumi.mihoyo.com,hk4e-api-os-static.mihoyo.com,hk4e-sdk-os.mihoyo.com,dispatchosglobal.yuanshen.com,osusadispatch.yuanshen.com,account.mihoyo.com,log-upload-os.mihoyo.com,dispatchcntest.yuanshen.com,devlog-upload.mihoyo.com,webstatic.mihoyo.com,log-upload.mihoyo.com,hk4e-sdk.mihoyo.com,api-beta-sdk.mihoyo.com,api-beta-sdk-os.mihoyo.com,cnbeta01dispatch.yuanshen.com,dispatchcnglobal.yuanshen.com,cnbeta02dispatch.yuanshen.com,sdk-os-static.mihoyo.com,webstatic-sea.mihoyo.com,hk4e-sdk-os-static.hoyoverse.com,webstatic-sea.hoyoverse.com,sdk-os-static.hoyoverse.com,api-account-os.hoyoverse.com,hk4e-sdk-os.hoyoverse.com,overseauspider.yuanshen.com,gameapi-account.mihoyo.com,minor-api.mihoyo.com,public-data-api.mihoyo.com,uspider.yuanshen.com,sdk-static.mihoyo.com, eu.game.yuuki.me
```
## Android User (Root) (Fiddler Windows for Proxy) (Not recommended for beginners)
- follow step "Windows User Fiddler"
- After you follow it, Go to Tools -> Options -> Connection -> Check "Allow remote computer to connect" and make sure the windows firewall is off and don't forget to change the port other than 8888 (change it like 8887) - [more info](https://www.telerik.com/blogs/how-to-capture-android-traffic-with-fiddler)
- On Phone (Android 7+), Install Magisk+MagiskTrustUserCerts - [more info](https://platinmods.com/threads/intercepting-https-traffic-from-apps-on-android-7-and-above-root.131373/)
- Change proxy on wifi settings with your server ip
- Login with your username then password with random then login.