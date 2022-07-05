import React, { useEffect } from 'react'
import { getAllPizzas } from '../actions/Pizaaaction'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Filters from '../components/Filters'
const Homescreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzareducer);
  const { loading, pizzas, error } = pizzastate;
  // console.log(pizzas);
  useEffect(() => { dispatch(getAllPizzas()) }, [dispatch]);
  return (
  <>
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizzas {error}</Error>
      ) : (
        <Row>
         {/* <Filters /> */}
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza.name}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  </>
  );
};

export default Homescreen;