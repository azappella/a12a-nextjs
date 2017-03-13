import React from 'react';
import axios from 'axios';
import { ACCESS_TOKEN } from '../config/index';

export default class extends React.Component {
  
    static async getInitialProps ({ req }) {
    
        const res = await axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`, {
            withCredentials: true
        });

        return { response: res.data };
    }

    render () {
    
        const { response } = this.props;
        
        let images = response.data.map((item, index) => <img key={index} src={item.images.thumbnail.url} alt={(item.caption && item.caption.text) || ''} />);

        return <div>{images}</div>;

    }
}