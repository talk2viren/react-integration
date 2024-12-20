import { useEffect, useState } from "react";
import "../my.css";
import { Color } from "antd/es/color-picker";
import { Button, Form, ListGroup } from "react-bootstrap";

const CRUD = () => {
  const [userData, setUserData] = useState({ name: "", job: "" });
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      setLoading(false);
      fetchUsers();
      setUserData({ name: "", job: "" });
      setEditingUser(null);
    } catch (error) {
      console.error("Error creating/updating user:", error);
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });
      setLoading(false);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      setLoading(false);
    }
  };
  const handleEdit = (user) => {
    setUserData({ name: user.first_name, job: user.job || "" });
    setEditingUser(user);
  };
  return (
    <div>
      {" "}
      <h2>CRUD Operations</h2>{" "}
      <Form>
        {" "}
        <Form.Group controlId="formName">
          {" "}
          <Form.Label>Name</Form.Label>{" "}
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />{" "}
        </Form.Group>{" "}
        <Form.Group controlId="formJob">
          {" "}
          <Form.Label>Job</Form.Label>{" "}
          <Form.Control
            type="text"
            name="job"
            value={userData.job}
            onChange={handleInputChange}
            placeholder="Enter job"
          />{" "}
        </Form.Group>{" "}
        <Button
          variant="primary"
          onClick={handleCreateOrUpdate}
          disabled={loading}
        >
          {" "}
          {loading
            ? "Loading..."
            : editingUser
            ? "Update User"
            : "Create User"}{" "}
        </Button>{" "}
      </Form>{" "}
      <ListGroup className="mt-4">
        {" "}
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            {" "}
            {user.first_name} {user.last_name} -{" "}
            {user.job || "No job specified"}{" "}
            <Button
              variant="warning"
              onClick={() => handleEdit(user)}
              className="ms-3"
            >
              {" "}
              Edit{" "}
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(user.id)}
              className="ms-3"
            >
              {" "}
              Delete{" "}
            </Button>{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>{" "}
    </div>
  );
};

export default CRUD;
