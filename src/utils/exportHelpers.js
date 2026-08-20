import Papa from 'papaparse'
import * as XLSX from 'xlsx'

export const exportToCSV = (data, filename = 'export') => {
  const csv = Papa.unparse(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename}_${new Date().toISOString().slice(0,10)}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

export const exportToExcel = (data, filename = 'export', sheetName = 'Sheet1') => {
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  XLSX.writeFile(wb, `${filename}_${new Date().toISOString().slice(0,10)}.xlsx`)
}

export const exportToPDF = async (title, columns, rows, filename = 'export') => {
  const { jsPDF } = await import('jspdf')
  const autoTable = (await import('jspdf-autotable')).default
  const doc = new jsPDF()
  doc.setFontSize(16)
  doc.text(title, 14, 20)
  doc.setFontSize(10)
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28)
  autoTable(doc, { head: [columns], body: rows, startY: 35, styles: { fontSize: 9 }, headStyles: { fillColor: [99, 102, 241] } })
  doc.save(`${filename}_${new Date().toISOString().slice(0,10)}.pdf`)
}
