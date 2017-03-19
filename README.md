Pi-center-control

This project allows you to uses your raspberry pi 2 or 3 as a media center.

You can install OSMC or kodi on your raspberry. This allows you to watch all your movies, pictures or musics on your TV with a beautiful screen.

All your file (movies, ...) can be located on a hard drive and connected on your raspberry pi. I don't put all steps to install OSMC or how to use it. But this project allows you to have the same objective than OSMC, but on your PC, tablet or smarthones.

Indeed, this project is split on two steps.

The first is an IHM makes with angular2 (called pi-screen-controll): On this IHM you have different screen, with a view on your differents files. Each tab correspond to a folder. (Videos folder, pictures folder, music folder, ...). For exemple, in videos folder you have a lot of video, and you can click on ones of them, and do streaming on it. The same things for the gallery of picture.

The second part of this project is the server part (called pi-server-controll): To have your entire file on your screen. You have to make a server who allows this. I have chosen API with python for this part.

How to install all of this.

First on your raspberry pi, install Raspbian.
Developer's guide.

Pi-screen-control based on angular 2.

    Clone or fork this repository

    Make sure you have node.js installed version 5+

    Make sure you have NPM installed version 3+

    WINDOWS ONLY run npm install -g webpack webpack-dev-server typescript to install global dependencies

    run npm install to install dependencies

    run npm start to fire up dev server

    open browser to http://localhost:3000

    If you want to use other port, open package.json file, then change port in --port 3000 script

    if using nvm : ** sudo apt-get install nvm ** select node version : nvm ls-remote ** install node version : nvm install v7.2.0

    For use this appication on a server you can install nginx or apache. Because npm start works but it's for devellop your application.

Pi-server-control based on python3.5 and not on python2.7.

    Install pip (for python 2.7 apt-get install python-pip, for python 3.5 apt-get install pip).
    Install pew (pip install pew).
    pew new p3.5 -p python3.5 for create a new environement python and use python3.5 and don't pertub your environnement.
    pew workon p3.5, for use your new environnement. And exit for exit.
    Now your are under python3.5 and not on python2.7, and you can use pi-server-control.
    For run server.py, you must install dependence. So run pip install -r requirements.txt.
    And run python server.py. After if you want you can use geunicorn for manage your api.

Bravo. Now you have your server and your web application that works. :)

For use it on your devices, you must enter the ip adress on your raspery pi followed by : 3000, like this: xx.xx.xxx.xxx:3000.
