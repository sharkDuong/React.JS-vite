import React from "react";
import { Input, Button } from "antd";
import axios from "axios";

const UserForm = () => {
  const [FullName, setFullName] = React.useState("NgocDuongDev");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");

  const handleClickBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullName: FullName,
      email: Email,
      password: Password,
      phone: PhoneNumber,
    };
    axios.post(URL_BACKEND, data);
    console.log("BTN", { FullName, Email, Password, PhoneNumber });
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            // value={FullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
        <div>
          <Button onClick={handleClickBtn} type="primary">
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
