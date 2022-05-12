import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";


const AddItem = () => {
  const [user] = useAuthState(auth);
  
  const handleAddCar = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const email = user.email;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const img = e.target.image.value;

    const item = { name, supplier, email, price, quantity, description, img };

    fetch('http://localhost:5000/add-item',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      toast(`${name} - Item Added Successfully`);    
      e.target.reset();

    });
    


  }

  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6 mx-auto">
            <h2 className="my-5 bg-dark text-center text-white p-3 rounded"> New Car Add</h2>
            <Form onSubmit={handleAddCar}>
              <Form.Group className="mb-3" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSupplier">
                <Form.Label>Supplier</Form.Label>
                <Form.Control type="text" name="supplier" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={user.email}
                  readOnly
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" required />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" name="quantity" required />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <br />
                <textarea
                  className="w-100"
                  rows="5"
                  style={{ resize: "none" }}
                  name="description"
                  required
                ></textarea>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="image" required />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 fw-bold">
                Submit New Car
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AddItem;
