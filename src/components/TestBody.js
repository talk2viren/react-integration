import React, { useState, useEffect } from "react";

function TestBody() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const [editingItem, setEditingItem] = useState(null);

  // Simulate fetching data from an API
  useEffect(() => {
    const initialItems = [
      { id: 1, name: "Item 1", description: "Description 1" },
      { id: 2, name: "Item 2", description: "Description 2" },
    ];
    setItems(initialItems);
  }, []);

  // Create
  const handleCreate = () => {
    const newItemWithId = { ...newItem, id: Date.now() };
    setItems([...items, newItemWithId]);
    setNewItem({ name: "", description: "" });
  };

  // Read
  const handleEdit = (item) => {
    setEditingItem(item);
    setNewItem({ name: item.name, description: item.description });
  };

  // Update
  const handleUpdate = () => {
    const updatedItems = items.map((item) => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          name: newItem.name,
          description: newItem.description,
        };
      }
      return item;
    });
    setItems(updatedItems);
    setEditingItem(null);
    setNewItem({ name: "", description: "" });
  };

  // Delete
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>CRUD Example</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        />
        {editingItem ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleCreate}>Create</button>
        )}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestBody;
