import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFilteredRobots } from '../redux/robots/robots.selectors';

const CardList = ({ robots }) => {
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

const mapStateToProps = createStructuredSelector({
    robots: selectFilteredRobots
})

export default connect(mapStateToProps)(CardList);