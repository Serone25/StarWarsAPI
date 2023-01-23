import React, {Fragment} from "react";
import Accordion from 'react-bootstrap/Accordion';

import "../../styles/home.css";



export const Favoritos = ({nombre}) =>{
    
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Favoritos</Accordion.Header>
                    <Accordion.Body>
                        <Fragment>
                            <p>{nombre}</p>
                        </Fragment>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}