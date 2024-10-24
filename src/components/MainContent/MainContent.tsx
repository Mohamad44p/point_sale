import React from "react";
import HomeContent from "./HomeContent";
import CustomersContent from "./CustomersContent";
import ProductsContent from "./ProductsContent";
import OrdersContent from "./OrdersContent";
import StatisticsContent from "./StatisticsContent";
import SettingsContent from "./SettingsContent";

interface MainContentProps {
  activeTab: string;
}

export const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "home":
      return <HomeContent />;
    case "customers":
      return <CustomersContent />;
    case "products":
      return <ProductsContent />;
    case "orders":
      return <OrdersContent />;
    case "statistics":
      return <StatisticsContent />;
    case "settings":
      return <SettingsContent />;
    default:
      return <HomeContent />;
  }
};
