import { FileText, Table2, Download } from 'lucide-react'
import { exportToCSV, exportToExcel, exportToPDF } from '../../../utils/exportHelpers'
import { Button } from '../../ui/Button/Button'

export const ExportActions = ({ data, filename = 'export', pdfTitle = 'Report', pdfColumns = [], pdfRows = [] }) => (
  <div className="flex items-center gap-1.5">
    <Button size="sm" onClick={() => exportToCSV(data, filename)} icon={FileText}>CSV</Button>
    <Button size="sm" onClick={() => exportToExcel(data, filename)} icon={Table2}>Excel</Button>
    <Button size="sm" onClick={() => exportToPDF(pdfTitle, pdfColumns, pdfRows, filename)} icon={Download}>PDF</Button>
  </div>
)
