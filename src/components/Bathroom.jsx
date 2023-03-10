import React, { useState } from "react";
import { Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { bathroomDecrement, bathroomIncrement } from "../redux/reducer";
const Bathroom = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  // console.log(count);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return count;
    }
  };

  const bathroom = {
    image:
      "bathroom",
    title: ` Bathroom ${count + 1}`,
    number: "1",
  };

  return (
    <>
      <div className="mx-auto " style={{ width: "300px" }}>
        <div className="row">
          {/* <Card style={{ width: "500px" }} className="col mx-5 shadow">
            <Card.Body>
              <Card.Title>BATHROOMS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Start with how many Baathrooms do you have?
              </Card.Subtitle>
              <InputGroup className="mb-3">
                <button
                  className="btn bg-primary"
                  onClick={() => {
                    dispatch(bathroomDecrement(count));
                    decrement();
                  }}
                >
                  -
                </button>
                <Form.Control placeholder={count} />
                <button
                  className=" btn bg-primary"
                  onClick={() => {
                    dispatch(bathroomIncrement(bathroom));
                    console.log(bathroom);
                    increment();
                  }}
                >
                  +
                </button>
              </InputGroup>
            </Card.Body>
          </Card> */}


          <Card style={{ width: "500px" }} className="col mx-3">
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
              Baathrooms
              </Card.Subtitle>
              <InputGroup className="mb-3">
                <button variant="success"onClick={() => {
                    dispatch(bathroomDecrement(count));
                    decrement();
                  }}>
                  -
                </button>
                <Form.Control placeholder={count} />
                <button variant="success" onClick={() => {
                    dispatch(bathroomIncrement(bathroom));
                    console.log(bathroom);
                    increment();
                  }}>
                  +
                </button>
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Bathroom;




