import React, { useEffect } from "react"
import { useState } from "react"
import { Table } from "reactstrap";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";
import "../index.css";

export default function Todo() {
    const [Employee, setEmployee] = useState({
        Username: "",
        Email: "",
        Password: "",
    })
    console.log("Employee", Employee);

    const [Data, setData] = useState([])

    console.log("Data", Data);


    const [updateItem, setupdateItem] = useState(null)

    console.log("UpdatedItem2", updateItem);





    const Handle = (e) => {
        setEmployee({ ...Employee, [e.target.name]: e.target.value })

    }

    const fetchdata = async () => {
        try {
            const response = await fetch("http://localhost:5000/get-todo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            console.log("Response", response);

            const result = await response.json();
            console.log("Result", result.emp);
            setData(result.emp)

        }
        catch (err) {
            console.log("Fetch error");

        }
    }


    useEffect(() => {
        fetchdata()
    }, [])

    const Submit = async (e) => {
        e.preventDefault();
        const apiUrl = updateItem
            ? `http://localhost:5000/update/${updateItem.emp_name}`
            : "http://localhost:5000/todo";

        const method = updateItem ? "PUT" : "POST";

        try {
            const response = await fetch(apiUrl, {
                method: method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    Username: Employee.Username,
                    Email: Employee.Email,
                    Password: Employee.Password,

                })
            })

            const res = await response.json();


            if (res.message) {
                console.log("Todo add successfully");


                setEmployee({
                    Username: "",
                    Email: "",
                    Password: "",
                })
                fetchdata()

            }
            else {
                console.log("Todo error");
            }

        }
        catch (error) {
            console.log("Error in data");
        }






    }


    const Deletes = async (obj) => {
        try {
            await fetch(`http://localhost:5000/get-todo/${obj}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const newdata = Data.filter((item) => item.emp_name !== obj.emp_name);
            setData(newdata)



        }
        catch (err) {
            console.log("Delete error");
        }
    }

    const Delete = async (obj) => {
        console.log("Delete Name", obj.emp_name);
        try {
            await fetch(`http://localhost:5000/delete/${obj.emp_name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const newdata = Data.filter((item) => item.emp_name !== obj.emp_name);
            setData(newdata)



        }
        catch (err) {
            console.log("Delete error");
        }
    }


    const updates = (obj) => {
        console.log("UpdateItem", obj);

        setupdateItem(obj);
    }

    useEffect(() => {
        if (updateItem) {
            setEmployee({

                Username: updateItem.emp_name,
                Email: updateItem.emp_email,
                Password: updateItem.emp_password,
            });
        }
    }, [updateItem]);






    return (
        <div style={{ paddingTop: "70px" }} className="d-flex align-items-center justify-content-center flex-column" >
            <h4>Todo List</h4>
            <Input
                type="text"
                placeholder="Username"
                name="Username"
                value={Employee.Username}
                onChange={Handle} />

            <Input
                type="email"
                placeholder="Email"
                name="Email"
                value={Employee.Email}
                onChange={Handle} />

            <Input
                type="password"
                placeholder="Password"
                name="Password"
                value={Employee.Password}
                onChange={Handle} />

            <div className="mt-3">
                <Button onClick={Submit} name="Add" />
            </div>



            <Table className="mt-3 todotable" responsive striped bordered hover >
                <thead>
                    <tr style={{ backgroundColor: "#408d9d" }}>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.emp_name}</td>
                            <td>{obj.emp_email}</td>
                            <td>{obj.emp_password}

                            </td>
                            <td className="d-flex justify-content-center">

                                <Button onClick={() => Delete(obj)} name="Delete" />&nbsp;
                                <Button onClick={() => updates(obj)} name="Update" />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>


            
        </div>
    )
}