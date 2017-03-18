from flask import Flask, jsonify, request, redirect, url_for, send_from_directory, json
from flask.ext.cors import CORS
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/home/boudet_a/dev_api_python/pi-server-control2/images'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)

### Allow Cross-origin resource sharing (CORS)
app.config['CORS_HEADERS'] = 'Auth-Token, Content-Type, User, Content-Length'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


from resources.evtOnFile import *

evtOnFile_resource = operationOnFile(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route("/", methods=['GET'])
def heartbeat():
    return "Api Ok"


@app.route("/getListDir/<folder>", methods=['GET'])
def getListDir(folder):
    return json.dumps(evtOnFile_resource.getListDir(folder))

@app.route("/downloadFileTest", methods=['GET'])
def downloadFileTest():
    print ('download ...')
    return send_from_directory(directory="/home/boudet_a/dev_api_python/pi-server-control2/images", filename="photo_antoine.jpg", as_attachment=True)

@app.route('/uploadFile', methods=['GET', 'POST'])
def upload_file():
    print(request)
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return jsonify({"status": "ok"})

    return jsonify({"status": "ko"})

@app.route("/copyFile/<fileCopy>/<folder>", methods=['GET'])
def copyFile(fileCopy, folder):
    return jsonify(evtOnFile_resource.copyFile(fileCopy, folder))

@app.route("/renameFile/<fileCopy>/<folder>", methods=['GET'])
def renameFile(fileCopy, folder):
    return jsonify(evtOnFile_resource.renameFile(fileCopy, folder))

if __name__ == "__main__":
    app.run(host='0.0.0.0')
