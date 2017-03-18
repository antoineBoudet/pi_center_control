from flask import current_app, request
import datetime, time, json
import os, shutil

class operationOnFile():
	def __init__(self, app):
		super().__init__()

	def getListDir(self, folder=None):
		if folder:
			if (os.path.isdir('./' + folder)) == True:
				listdir =  (os.listdir('./' + folder))
				dic = {}
				content = []
				nb = 0
				for file in listdir:
                                        nb += 1
                                        filename, file_extension = os.path.splitext(file)
                                        if file_extension == ".mp4" or file_extension == ".avi" or file_extension == ".mkv" or file_extension == ".ogg" or file_extension == ".wmv" or file_extension == ".m4v" or file_extension == ".mpg" or file_extension == ".webm":
                                                typeFile = "video"
                                        elif file_extension == ".jpg" or file_extension == ".png" or file_extension == ".jpeg" or file_extension == ".bmp" or file_extension == ".gif":
                                                typeFile = "img"
                                        elif file_extension == ".mp3" or file_extension == ".wav" or file_extension == "." or file_extension == ".ogg" or file_extension == ".wma":
                                                typeFile = "musiques"
                                        elif file_extension == "":
                                                typeFile = "folder"
                                        else:
                                                typeFile = "undefined"
                                        print(file)
                                        dic = {
                                                "nameExtension" : file,
						"name" : filename,
						"type" : typeFile,
					        "nb" : nb
                                        }
                                        content.append(dic)
			else:
				listdir = "null"
			return content
		return "OK"

	def renameFile(self, file=None, folder=None):
                if file and folder:
                        file = file.replace("-", "/");
                        folder = folder.replace("-", "/");
                        os.system("mv " + file + " " + folder)
                        return {"hits": file}
                return "OK"

	def copyFile(self, file=None, folder=None):
		if file and folder:
                        file = file.replace("-", "/");
                        folder = folder.replace("-", "/");
                        os.system("cp -r " + file + " " + folder)
                        return {"hits": file}
		
		return "OK"
