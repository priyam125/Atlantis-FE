import React from 'react'
import CollectionItem from './CollectionItem'

const CollectionPreview = ({title, items, match, history}) => {
    console.log(match);
    console.log();
    return (
        <div className='flex flex-col mb-8 items-center md:items-start'>
            <h1 onClick={() => history.push(`${match.path}/${title}`)} className='text-3xl mb-6 cursor-pointer'>{title}</h1>
            <div className='md:flex justify-between grid grid-cols-2 gap-4'>
                {items.filter((item, idx) => idx < 4).map((item) => {
                    // console.log(item);
                    return (
                    <CollectionItem key={item.id} item={item} >{item.name}</CollectionItem>
                )})}
            </div>
        </div>
    )
}

export default CollectionPreview
