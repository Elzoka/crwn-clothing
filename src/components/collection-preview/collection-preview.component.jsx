import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';
import {CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer> {title} </TitleContainer>
        <PreviewContainer>
            {items.slice(0, 4).map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;