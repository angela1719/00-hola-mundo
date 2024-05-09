 import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

 export function App () {


   return (
    <section className='App'>
    <TwitterFollowCard 
    isFollowing={true} 
    userName= "Angelita1719" 
    name= "Angela Ramírez" />

    <TwitterFollowCard
    isFollowing={false} 
    userName= "Diegosernavs1" 
    name= "Diego Serna" />

    <TwitterFollowCard 
    isFollowing userName= "Lory07" 
    name= "Laura Ramírez" />

    <TwitterFollowCard 
    isFollowing userName= "Nana31" 
    name= "Ana María Ramírez" />
    </section>
 )
}