import xlsxwriter

workbook = xlsxwriter.Workbook('this is a test.xlsx')
worksheet = workbook.add_worksheet('test2')

a = open('transfer.txt','r')
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
