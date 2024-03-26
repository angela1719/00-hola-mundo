 import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

 export function App () {
 return (
    <section className='App'>
    <TwitterFollowCard userName= "Angelita1719" name= "Angela Ramírez" />
    <TwitterFollowCard userName= "Diegosernavs1" name= "Diego Serna" />
    <TwitterFollowCard userName= "Lory07" name= "Laura Ramírez" />
    <TwitterFollowCard userName= "Nana31" name= "Ana María Ramírez" />
    </section>
 )
}