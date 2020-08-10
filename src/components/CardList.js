import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        //both works
        return (
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />
        );
        //return <Card id={user.id} name={user.name} email={user.email}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;