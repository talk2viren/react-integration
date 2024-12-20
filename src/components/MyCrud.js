// Viren Crud operation from scrach
import { useState } from "react";
import { Button, FormControl, Form, Alert } from "react-bootstrap";

function MyCrud() {
  const [userData, setUserData] = useState({ empId: "", empName: "" });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const URL = "http://localhost:8080/api/employee";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Inside rest call !!! ");

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      setResponse(data);
      setLoading(false);
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const handleGetEmp = async (event) => {
    event.preventDefault();

    const response = await fetch(URL);
    const data = await response.json();
    setResponse(data);
    setLoading(false);

    console.log(data);
  };

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group className="mb-3" controlId="formEmpId">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control
          type="text"
          name="empId"
          value={userData.empId}
          onChange={handleInputChange}
          placeholder="Employee Id"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmpName">
        {" "}
        <Form.Label>Employee Name</Form.Label>{" "}
        <Form.Control
          type="text"
          name="empName"
          value={userData.empName}
          onChange={handleInputChange}
          placeholder="Employee Name"
        />{" "}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {" "}
        {loading ? "Loading..." : "Submit Employee"}{" "}
      </Button>

      <Button
        variant="primary"
        type="button"
        className="ms-3"
        onClick={handleGetEmp}
      >
        Get Employees
      </Button>

      {response && (
        <Alert variant="success" className="mt-3">
          {" "}
          <pre>{JSON.stringify(response, null, 2)}</pre>{" "}
        </Alert>
      )}
    </Form>
  );
}

export default MyCrud;
