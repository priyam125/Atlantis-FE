import React,{useState} from 'react'
// import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/CollectionPreview'
import { useSelector } from 'react-redux'

const ShopPage = ({match, history}) => {

    const collections = useSelector(state => state.shop.collections)
    console.log(collections);

    console.log(match);
    console.log(history);
    // const [collections, setCollections] = useState(SHOP_DATA)

    return (
        <div className='md:py-8 py-4 md:px-12 px-2'>
            {collections.map(({id, title, items, routeName}) => (
                <CollectionPreview key={id} title={title} items={items} routeName={routeName} match={match} history={history}/>
            ))}
        </div>
    )
}

export default ShopPage
