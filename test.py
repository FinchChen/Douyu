# -*- coding: UTF-8 -*-

import struct
import multiprocessing
import socket
import time
import re
import requests
from bs4 import BeautifulSoup

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostbyname("openbarrage.douyutv.com")
port = 8601
client.connect((host, port))

danmu = re.compile(b'/txt@=(.+?)/cid@')
user = re.compile(b'/nn@=(.+?)/txt@')
types = re.compile(b'type@=(.+?)/rid@')

def sendmsg(msgstr):
    msg = msgstr.encode('utf-8')
    data_length = len(msg) + 8
    code = 689
    msgHead = struct.pack('<I',data_length) \
              + struct.pack('<I',data_length) + struct.pack('<H',code) + b'\x00\x00'
    client.send(msgHead)
    client.send(msg)
    '''
    sent = 0
    while sent < len(msg):
        tn = client.send(msg[sent:])
        sent = sent + tn
    '''

def start(roomid):
    msg = 'type@=loginreq/username@=rieuse/password@=douyu/roomid@={}/\0'.format(roomid)
    sendmsg(msg)
    msg_more = 'type@=joingroup/rid@={}/gid@=-9999/\0'.format(roomid)
    sendmsg(msg_more)

    print '开始'.decode(encoding='utf-8')
    while True:
        data = client.recv(2048)
        #data = unicode(data, "ascii", errors="ignore")
        tmp = repr(data)
        tmp = tmp.replace('@A','@')
        tmp = tmp.replace('@S','/')
        tmp = tmp.replace('@=',':')
        tmp = tmp.replace('/','\n')
        print tmp,'\n'
        
        '''
        danmu_more = danmu.findall(data)
        user_more = user.findall(data)
        types_more = types.findall(data)
        if not data:
            break
        else:
            for i in range(0, len(danmu_more)):
                print 'User:'+user_more[i]
                print 'Danmu:'+danmu_more[i],'\n'
            for i in range(0, len(types_more)):
                print 'Type:'+types_more[i],'\n'
        '''
                


'''
def keeplive():
    while True:
        msg = 'type@=keeplive/tick@=' + str(int(time.time())) + '/\0'
        sendmsg(msg)
        time.sleep(10)
'''
if __name__ == '__main__':
    #room_id = input('请输入房间ID： ')
    #p1 = multiprocessing.Process(target=start, args=(room_id,))
    #p2 = multiprocessing.Process(target=keeplive)
    #p1.start()
    #p2.start()
    start(891464)
