Developer's guide.

Pi-server-control based on python3.5 and not on python2.7.

    Install pip (for python 2.7 apt-get install python-pip, for python 3.5 apt-get install pip).
    Install pew (pip install pew).
    pew new p3.5 -p python3.5 for create a new environement python and use python3.5 and don't pertub your environnement.
    pew workon p3.5, for use your new environnement. And exit for exit.
    Now your are under python3.5 and not on python2.7, and you can use pi-server-control.
    For run server.py, you must install dependence. So run pip install -r requirements.txt.
    And run python server.py. After if you want you can use geunicorn for manage your api.
