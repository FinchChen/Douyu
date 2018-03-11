import xlsxwriter

print 'input filename:'
workbook = xlsxwriter.Workbook(raw_input()+'.xlsx')
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
