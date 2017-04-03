import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Image from './components/ImageWithLB.jsx';

export default class TravelSection extends React.Component {
    render() {

        let images = [
            "https://photos.smugmug.com/photos/i-59ZrVbv/2/X2/i-59ZrVbv-X2.jpg",
            "https://photos.smugmug.com/photos/i-7CvgCQK/2/X2/i-7CvgCQK-X2.jpg",
            "https://photos.smugmug.com/photos/i-p2K2Btm/1/X2/i-p2K2Btm-X2.jpg",
            "https://photos.smugmug.com/photos/i-2rdmqtx/2/X2/i-2rdmqtx-X2.jpg",
            "https://photos.smugmug.com/photos/i-jmB67Wx/4/X2/i-jmB67Wx-X2.jpg",
            "https://photos.smugmug.com/photos/i-pFD9xZX/2/X2/i-pFD9xZX-X2.jpg",
            "https://photos.smugmug.com/photos/i-xwSJ3DX/1/X2/i-xwSJ3DX-X2.jpg"
        ].map((item) => {
            return <Image key={item} imgSrc={item} height={450}/>
        });

        return (
            <Paper className="section photo-section" zDepth={5}>
                <h2>The Traveler</h2>
                <p>
                    I've been lucky early in my life and have gotten the chance
                    to travel to some amazing places and experience some of the
                    great things this world has to offer.
                </p><p>
                    Bellow is a small selection of photos from my adventures.
                </p>
                <div className="image-row dragscroll">
                    {images}
                </div>
            </Paper>
        );
    }
}
