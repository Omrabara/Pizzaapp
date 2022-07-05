import React from 'react'
import { Container, Row, Col, Table,Image } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <Container style={{ margin: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Contact Us</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt aliquid, cum dolor ad adipisci similique maxime sit tempore! Non libero beatae nemo labore, ea numquam eius enim atque rerum in consequatur molestiae corrupti asperiores sequi nulla repudiandae sed, sint quibusdam repellendus accusamus mollitia maxime. Odio sequi, odit asperiores magni adipisci repellendus quo non iste voluptates. Eaque ratione tenetur quidem ea aliquid aliquam quae impedit ipsum. Suscipit doloribus aliquid dolorum nihil delectus explicabo consectetur iusto earum? Illo quasi ipsa id vero obcaecati voluptatum pariatur iure quidem fugiat, adipisci necessitatibus dignissimos impedit sapiente hic aliquid temporibus voluptas aliquam! Nostrum, suscipit ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum doloremque quis doloribus, sapiente, obcaecati nemo labore in delectus quam nulla mollitia fugit tempora placeat dignissimos molestiae, minus maxime corrupti.</p>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center ' colSpan={3}>...Contact Details...</th>

                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td><FiPhoneCall></FiPhoneCall></td>
                                    <td>Phone</td>
                                    <td>1234567890</td>
                                  
                                </tr>
                                <tr>
                                    <td><ImMobile></ImMobile></td>
                                    <td>Call</td>
                                    <td>+91 1234567890</td>
                                  
                                </tr>
                                <tr>
                                    <td><AiOutlineMail></AiOutlineMail></td>
                                    <td>Email</td>
                                    <td>123@gmail.com</td>
                                  
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src='images/farmhouse.jpg' style={{width:'100%',height:'100%'}}></Image>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact