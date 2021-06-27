import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import '../style.css'

export default function Markdown() {

    const [content, setContent] = useState('');

    return (
        <div>
            <div className='container bodyContent'>
                <div className='row'>
                    <div className='col-md-6'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Write your Content</Card.Title>
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                        </Card.Body>
                    </Card>
                    </div>
                    <div className='col-md-6'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Preview</Card.Title>
                            <Card.Text>
                            {content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
