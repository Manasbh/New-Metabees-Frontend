import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      <div className="flex max-sm:flex-col items-center justify-center h-screen">
        <div className="dashboard-add-btn">
          <a href="/dashboard/upload">Add Product</a>
        </div>
        <div className="dashboard-viewprod-btn">
          <a href="/viewproduct">View Product</a>
        </div>
        <div className="dashboard-payment-btn">
          <a href="/payment">Payment & Plans</a>
        </div>
        <div className="dashboard-market-btn">
          <a href="/marketplace">Marketplace</a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
