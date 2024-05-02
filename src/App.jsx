 import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

 export function App () {
   const formatUserName = (userName) => `@${userName}`
 return (
    <section className='App'>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName= "Angelita1719" name= "Angela Ramírez" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName= "Diegosernavs1" name= "Diego Serna" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName= "Lory07" name= "Laura Ramírez" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName= "Nana31" name= "Ana María Ramírez" />
    </section>
 )
}