import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

function Lightbox({ onClose, img }) {
    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
          onClose={onClose}
        >
            <Paper onClick={onClose} className="lightbox-container">
                <img className="lightbox-image" src={img} />
            </Paper>
        </Modal>
    )
}

export default Lightbox;
