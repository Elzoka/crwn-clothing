import React from 'react';
import {connect} from 'react-redux'

import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

// import './collection.styles.scss';
import {CollectionPageContainer} from './collection.styles'

const CollectionPage = ({collection: {title, items}}) => (
    <CollectionPageContainer>
        <h2 className="title">{title}</h2>
        <div className='items'>
            {items.map(item => <CollectionItem key={item.id} item={item}/>)}
        </div>
    </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);