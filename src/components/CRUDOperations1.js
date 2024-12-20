// Working program to fetch from rest api and do the CRUD operation. I tested it for get ops AI Version

import React, { useState, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

const CRUDOperations1 = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Inside handleInputChange $$$ ${name} And ${value}`);
    setUserData({ ...userData, [name]: value });
  };

  const handleCreateOrUpdate = async () => {
    const url = editingUser
      ? `https://reqres.in/api/users/${editingUser.id}`
      : "https://reqres.in/api/users";
    const method = editingUser ? "PUT" : "POST";

    try {
      setLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      fetchUsers();
      setUserData({ first_name: "", last_name: "", email: "" });
      setEditingUser(null);
    } catch (error) {
      console.error("Error creating/updating user:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await fetch(`https://reqres.in/api/users/${id}`, {
        method: "DELETE",
      });
      setLoading(false);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setUserData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email || "",
    });
    setEditingUser(user);
  };

  return (
    <div>
      <h2>CRUD Operations</h2>
      <Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={userData.first_name}
            onChange={handleInputChange}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={userData.last_name}
            onChange={handleInputChange}
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group controlId="formJob">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleCreateOrUpdate}
          disabled={loading}
        >
          {loading ? "Loading..." : editingUser ? "Update User" : "Create User"}
        </Button>
      </Form>
      <ListGroup className="mt-4">
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            {user.first_name} {user.last_name} -{" "}
            {user.email || "No email specified"}
            <Button
              variant="warning"
              onClick={() => handleEdit(user)}
              className="ms-5"
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(user.id)}
              className="ms-5"
              style={{ backgroundColor: "blue" }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CRUDOperations1;
