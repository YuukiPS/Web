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
              oS.host = "eu.genshin.ps.yuuki.me";
            //oS.host = "sg.genshin.ps.yuuki.me";
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
## iOS User (Shadowrocket)
Don't have tools & phone to do test.
## Android User (Root) (Fiddler Windows for Proxy) (Not recommended for beginners)
- follow step "Windows User Fiddler"
- After you follow it, Go to Tools -> Options -> Connection -> Check "Allow remote computer to connect" and make sure the windows firewall is off and don't forget to change the port other than 8888 (change it like 8887) - [more info](https://www.telerik.com/blogs/how-to-capture-android-traffic-with-fiddler)
- On Phone (Android 7+), Install Magisk+MagiskTrustUserCerts - [more info](https://platinmods.com/threads/intercepting-https-traffic-from-apps-on-android-7-and-above-root.131373/)
- Change proxy on wifi settings with your server ip
- Login with your username then password with random then login.