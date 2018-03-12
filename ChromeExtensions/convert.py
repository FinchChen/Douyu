import xlsxwriter
import time

print 'filename?:'
input1 = raw_input()
name = str(time.localtime().tm_mon)+'.'+str(time.localtime().tm_mday)+'.'+str(time.localtime().tm_hour)+'.'+str(time.localtime().tm_min)
workbook = xlsxwriter.Workbook(input1+name+'.xlsx')
worksheet = workbook.add_worksheet('sheet')

a = open('dataset.txt','r')
tmp = a.read()

tmp2 = ''
total = []
row = 0
col = 0

for i in tmp:
    if i == '/':
        worksheet.write(row,col,float(tmp2))
        col += 1
        row = 0
        tmp2 = ''   
    elif i == ',':
        worksheet.write(row,col,float(tmp2))
        row += 1
        tmp2 = ''
    else:        
        tmp2 += i

workbook.close()
print 'success'
