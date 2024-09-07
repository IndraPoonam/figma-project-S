import React, { Component } from 'react';

// Define a type for the component state
type ApiComponentState = {
  data: any[]; // to store fetched data
  newItem: string; // to store input value for adding a new item
  updateItem: string; // to store input value for updating an item
};

class ApiUse extends Component<{}, ApiComponentState> {
  // Initialize state
  state: ApiComponentState = {
    data: [],
    newItem: '',
    updateItem: '',
  };

  // Fetch data from API (GET request)
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Add new item to API (POST request)
  addData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: this.state.newItem }),
      });
      const newData = await response.json();
      this.setState((prevState) => ({
        data: [...prevState.data, newData],
        newItem: '',
      }));
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  // Update item in API (PUT request)
  updateData = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: this.state.updateItem }),
      });
      const updatedData = await response.json();
      this.setState((prevState) => ({
        data: prevState.data.map((item) => (item.id === id ? updatedData : item)),
        updateItem: '',
      }));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Partially update item in API (PATCH request)
  patchData = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: this.state.updateItem }),
      });
      const patchedData = await response.json();
      this.setState((prevState) => ({
        data: prevState.data.map((item) => (item.id === id ? patchedData : item)),
        updateItem: '',
      }));
    } catch (error) {
      console.error('Error patching data:', error);
    }
  };

  // Delete item from API (DELETE request)
  deleteData = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      this.setState((prevState) => ({
        data: prevState.data.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  render() {
    const { data, newItem, updateItem } = this.state;

    return (
      <div>
        <h1>API CRUD Operations</h1>
        {/* Input for adding a new item */}
        <input
          type="text"
          value={newItem}
          onChange={(e) => this.setState({ newItem: e.target.value })}
          placeholder="Add new item"
        />
        <button onClick={this.addData}>Add Item</button>

        {/* Input for updating an item */}
        <input
          type="text"
          value={updateItem}
          onChange={(e) => this.setState({ updateItem: e.target.value })}
          placeholder="Update item"
        />

        {/* List of data items */}
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => this.updateData(item.id)}>Update (PUT)</button>
              <button onClick={() => this.patchData(item.id)}>Patch (PATCH)</button>
              <button onClick={() => this.deleteData(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ApiUse;
