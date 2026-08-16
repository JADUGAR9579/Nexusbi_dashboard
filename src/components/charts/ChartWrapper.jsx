import { Card, CardHeader } from '../../ui/Card/Card'
import { Loader } from '../../ui/Loader/Loader'

export const ChartWrapper = ({ title, subtitle, action, loading, children, className }) => (
  <Card className={className}>
    <CardHeader title={title} subtitle={subtitle} action={action} />
    {loading
      ? <div className="flex items-center justify-center h-48"><Loader /></div>
      : children
    }
  </Card>
)
