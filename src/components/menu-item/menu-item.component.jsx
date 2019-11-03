import React from 'react';
import {withRouter} from 'react-router-dom';

// import './menu-item.styles.scss'
import {MenuItemContainer, BackgroundImage, ContentContainer, Title, Subtitle} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemContainer size={size} onClick={() => history.push(match.url + linkUrl)}>

        <BackgroundImage image={imageUrl}/>
        <ContentContainer>
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>SHOP NOW</Subtitle>
        </ContentContainer>
        
    </MenuItemContainer>
);

export default withRouter(MenuItem);