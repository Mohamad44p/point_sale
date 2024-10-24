import React from 'react'

const HomeRightSidebar: React.FC = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
    <ul className="space-y-2">
      <li>Create new project</li>
      <li>View recent notifications</li>
      <li>Schedule a meeting</li>
    </ul>
  </div>
)

const CustomersRightSidebar: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Customer Stats</h3>
    <ul className="space-y-2">
      <li>Total Customers: 1,234</li>
      <li>New This Month: 56</li>
      <li>Retention Rate: 92%</li>
    </ul>
  </div>
)

const ProductsRightSidebar: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Product Overview</h3>
    <ul className="space-y-2">
      <li>Total Products: 567</li>
      <li>Low Stock Items: 23</li>
      <li>Top Seller: Product XYZ</li>
    </ul>
  </div>
)

const OrdersRightSidebar: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
    <ul className="space-y-2">
      <li>Pending Orders: 45</li>
      <li>Completed Today: 78</li>
      <li>Total Revenue: $12,345</li>
    </ul>
  </div>
)

const StatisticsRightSidebar: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
    <ul  className="space-y-2">
      <li>Monthly Growth: 15%</li>
      <li>User Engagement: 78%</li>
      <li>Conversion Rate: 3.2%</li>
    </ul>
  </div>
)

const SettingsRightSidebar: React.FC = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Quick Settings</h3>
    <ul className="space-y-2">
      <li>Notifications: On</li>
      <li>2FA: Enabled</li>
      <li>Language: English</li>
    </ul>
  </div>
)

interface RightSidebarProps {
  activeTab: string
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'home':
      return <HomeRightSidebar />
    case 'customers':
      return <CustomersRightSidebar />
    case 'products':
      return <ProductsRightSidebar />
    case 'orders':
      return <OrdersRightSidebar />
    case 'statistics':
      return <StatisticsRightSidebar />
    case 'settings':
      return <SettingsRightSidebar />
    default:
      return <HomeRightSidebar />
  }
}