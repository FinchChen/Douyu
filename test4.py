# -*- coding: UTF-8 -*-

import requests
import md5
import time

print time.time()

#headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'}

tmp = str(int(time.time()))
auth = md5.new("room/208114?aid=android&client_sys=android&time="+tmp).hexdigest()

print type(auth)

url = 'http://capi.douyucdn.cn/api/v1/room/208114?aid=android&client_sys=android&time='+tmp+'&auth='+auth

r = requests.post(url)

print r.content
