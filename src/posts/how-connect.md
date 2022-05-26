---
title: 'Connect to Server'
short: 'Join us and play together'
date: "2022-05-25"
---

## Windows User
- Before starting, open game first and then logout if you have logged in before and then exit again.
- Install [Fiddler](https://file.yuuki.me/0:/Leak/FiddlerSetup.exe) then Open Fiddler then click Tools -> Options -> HTTPS -> Check "Capture HTTPS" and "Decrypt HTTPS" then click "Actions" then click "Trues Root" then click yes if a popup appears.
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
              oS.host = "de.game.yuuki.me";
            //oS.host = "sg.game.yuuki.me";
			//oS.host = "localhost";
            //oS.host = "2.0.0.100";
        }
    }
};
```
- In Fiddler in "FiddlerScript" tab, copy this script then click save.
- Login with your username then password with random then login.

## Android User (No-Root) (Apk Switch Server)
- Do backup first (apk & data game) because patching apk cannot be updated with game that is installed now.
- Install [Install APK Switch Server](https://github.com/577fkj/GenshinProxy/releases/download/releases/genshin-impact-lv0-lspatched.apk)
- Open Game
- After you open it, a message will appear telling you to select the Official Server (please click once if it's the first time, to download game data) after that you select "settings" on the input page type "https://sg.game.yuuki.me" after that checklist "forced mode" then press return and select "custom server"

## Android User (No-Root) (Termux)
- Do backup first (apk & data game) because patching apk cannot be updated with game that is installed now.
- Install patched apk that accepts user ca certs, unfortunately you will have to uninstall regular and [install apk patched](https://file.yuuki.me/0:/Leak/uc-patched.apk) (If file is miss/not trusted you can do it yourself with [apk-mitm](https://github.com/shroudedcode/apk-mitm))
- Install Termux
- use these commands
```sh
apt update && apt full-upgrade
pkg install python wget rustc-dev nano
python3 -m ensurepip --upgrade
python3 -m pip install --user pipx
python3 -m pipx ensurepath
export CARGO_BUILD_TARGET=aarch64-linux-android
pipx install mitmproxy
```
- Now download proxy config: 
```sh
git clone https://gitlab.com/yukiz/grasscutter-proxy
cd grasscutter-proxy
mitmdump -s proxy.py -k --ssl-insecure --set block_global=false
```
- Then go to wifi settings and set proxy to 127.0.0.1 and 8080. Note that proxies are ignored if you are using a VPN.
- Open http://mitm.it/ in your browser, download certificate. Then go to settings and install it.
- Play Game

## Android User (Root) (Fiddler Windows for Proxy)
- Open Fiddler then click Tools -> Options -> HTTPS -> Check "Capture Https" and "Decrypt Https".
- After you follow it, Go to Tools -> Options -> Connection -> Check "Allow remote computer to connect" and make sure the windows firewall is off and don't forget to change the port other than 8888 (change it like 8887) - [more info](https://www.telerik.com/blogs/how-to-capture-android-traffic-with-fiddler)
- In Fiddler in "FiddlerScript" tab, copy script from [directed.cs](directed.cs) then click save.
- On Phone (Android 7+), Install Magisk+MagiskTrustUserCerts - [more info](https://platinmods.com/threads/intercepting-https-traffic-from-apps-on-android-7-and-above-root.131373/)
- Change proxy on wifi settings with your server ip
- Login with your username then password with random then login.