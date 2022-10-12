import React from "react";
import Users from "./data";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      users: Users,
      filteredUsers: [],
      Input: ""
    };
  }

  handlerInput = (event) => {
    this.setState({ Input: event.target.value });
  };

  render() {
    const { Input, users } = this.state;
    return (
      <div className="main-container">
        <input
          type="search"
          placeholder="search..."
          value={Input}
          onChange={this.handlerInput}
        />

        {users.map((user) => {
          if (Input === "") {
            return [];
          } else if (user.name.toLowerCase().includes(Input)) {
            return (
              <li
                onClick={() => {
                  this.setState({ Input: user.name });
                }}
                key={user.id}
                className="user-card"
              >
                <img src={user.photo} alt={user.photo} />
                <p>{user.name}</p>
              </li>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

export default Input;
