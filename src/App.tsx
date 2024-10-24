import AllContent from '@/components/All/AllContent';
import { MainContent } from '@/components/MainContent/MainContent'
import '@/index.css'

export default function Page() {
  return (
    <div>
      <AllContent>
        <MainContent activeTab="home"/>
      </AllContent>
    </div>
  )
}