import React, { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarComponent } from "@/components/Sidebar/Sidebar"
import { RightSidebar } from "@/components/RightSide/RightSide"

export default function AllContent({children}:{
  children: React.ReactNode
}) {
  const [activeTab, setActiveTab] = useState("home")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const savedTab = localStorage.getItem("activeTab")
    if (savedTab) {
      setActiveTab(savedTab)
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("activeTab", activeTab)
    }
  }, [activeTab, isClient])

  return (
    <SidebarProvider>
      <div className="flex w-full h-screen">
        <SidebarComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-[3] overflow-y-auto p-6">
          {children}
        </main>
        <aside className="flex-1 border-l p-4 overflow-y-auto">
          <RightSidebar activeTab={activeTab} />
        </aside>
      </div>
    </SidebarProvider>
  )
}