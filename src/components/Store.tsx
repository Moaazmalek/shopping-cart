import { DiVim } from 'react-icons/di'
import storeItems from '../data/items.json'
import { StoreItem } from './StoreItem'
export function Store() {
    return <div className='overflow-x-hidden '>
    <h1 className="my-6 text-center text-3xl ">Store </h1>
    <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center md:place-items-start    '>
        {storeItems.map(item=> (
               <div key={item.id}>  <StoreItem {...item} /></div>
            )
        )
            }
    </section>
    </div>
}