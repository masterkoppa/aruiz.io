import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Image from './components/ImageWithLB.jsx';

export default class PhotographerSection extends React.Component {
    render() {

        let images = [
            "https://photos.smugmug.com/photos/i-Q2V42cm/3/X2/i-Q2V42cm-X2.jpg",
            "https://photos.smugmug.com/photos/i-MpZwhfg/2/X2/i-MpZwhfg-X2.jpg",
            "https://photos.smugmug.com/photos/i-ghhbw4V/1/X2/i-ghhbw4V-X2.jpg",
            "https://photos.smugmug.com/photos/i-JwdgXQT/2/X2/i-JwdgXQT-X2.jpg",
            "https://photos.smugmug.com/photos/i-TFWFkhP/2/X2/i-TFWFkhP-X2.jpg",
            "https://photos.smugmug.com/photos/i-jmB67Wx/4/X2/i-jmB67Wx-X2.jpg"
        ].map((item) => {
            return <Image key={item} imgSrc={item} height={450}/>
        });

        return (
            <Paper className="section photo-section" elevation={5}>
                <Typography variant="title">The Photographer</Typography>
                <Typography variant="body1">
                    I consider myself to be an amateur photographer. I love exploring
                    places both near and far for good shots. Most of my work is
                    Landscape, but I ocassionally do some portraits and wildlife
                    photography as well.
                </Typography>
                <Typography variant="body1">
                    My main camera is currently a Sony A7R. The Sony 24-240mm is
                    main main lens because of how flexible it is, but I like shooting
                    with the Sony 55mm F/1.8 and Sony 28mm F/2.0 as well.
                </Typography>
                <Typography variant="body1">
                    Bellow is a small selection of my favorite shots, you can check
                    out some more <a href="https://masterkoppa.smugmug.com/">here</a>.
                </Typography>

                <div className="image-row">
                    {images}
                </div>
            </Paper>
        );
    }
}
