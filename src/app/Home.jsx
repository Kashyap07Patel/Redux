import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

export default function Home() {

    const change = useSelector(state => state.write);
    console.log(change);
    const dispatch = useDispatch()
    return (
        <>
            <h1 className="text-center">The Maha-Discount is here</h1>
            <button className='btn btn-dark my-2' onClick={() => { dispatch({ type: "write" }) }}>view discounts</button>
            {change.change == 1 && <ListGroup>
                <ListGroup.Item variant="primary">Glasses 20% off</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Tops 10% off
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                Shirts 50% off
                </ListGroup.Item>
                
            </ListGroup>}
            <img src="../IMGS/backg.jpg" width="100%" height="500px" />
        </>
    )
}
