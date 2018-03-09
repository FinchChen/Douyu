# -*- coding: UTF-8 -*-

import socket
import requests

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostbyname("broadcastlv.chat.bilibili.com")
port = 2243
client.connect((host, port))