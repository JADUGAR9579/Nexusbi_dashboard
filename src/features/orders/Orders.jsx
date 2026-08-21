import { PageContainer, PageHeader } from '../../components/layout/PageContainer'
import { Card } from '../../components/ui/Card'

export default function Orders() {
  return (
    <PageContainer>
      <PageHeader title="Orders" subtitle="Recent order activity and fulfillment status" />
      <Card>
        <div className="text-sm text-gray-400">Orders overview coming soon.</div>
      </Card>
    </PageContainer>
  )
}
