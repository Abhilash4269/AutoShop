import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Form.module.css";
// import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Radio from "../radioGroup/RadioGroup"
import car from '../../assets/formulaCar.png'
import './Form.css'

const Form = () => {
  const [userName, setUserName] = useState();
  const [userNumber, setUserNumber] = useState();
  const [userMake, setUserMake] = useState();
  const [userModel, setUserModel] = useState();
  const [userYear, setUserYear] = useState();
  const [userAreaCode, setAreaCode] = useState();
  const [radioValue, setRadioValue] = React.useState();

  const [obj, setObj] = useState({});
  const [error, setError] = useState(true);

  React.useEffect(() => {
    console.log(userName, "////////UserName///////");
  }, [userName]);

  React.useEffect(() => {
    console.log(radioValue,'the radio vaalue');
    if(radioValue){}
  }, [radioValue])

  const saveName = (e) => {
    // console.log('name is saved',e.target.value)
  };

  const submitForm = () => {
    if (userName === undefined) {
      toast.error("Enter your details", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (
      userName.length > 3 &&
      userNumber.length > 9 &&
      userMake.length > 2 &&
      userModel.length > 1 &&
      userYear.length > 1 &&
      radioValue.length > 0
    ) {
      const uObj = {
        name: userName,
        make: userMake,
        model: userModel,
        year: userYear,
        number: userNumber,
        type: radioValue
      };
      console.log("dataSubmitted 😄");
      // axios.post()
      axios
        .post("http://localhost:3000/cdata",uObj, {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Methods": "POST",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      toast.success("Submitted Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Please submit correct information", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.formParent}>
        <div className={styles.formField}>
          <TextField
            id="FormName"
            label="Name"
            variant="outlined"
            required
            // error={error}
            onChange={() => {
              console.log(
                document.getElementById("FormName").value,
                "///UserNmane////"
              );
              setUserName(document.getElementById("FormName").value);
              //   document.getElementById("formName").value.length < 3
              //     ? setError(true)
              //     : setError(false);
            }}
            // helperText={error ? "Name should be atleast of 3 characters" : ""}
          />
          {/* <input type="text"/> */}
        </div>
        <div className={styles.formField}>
          <TextField
            id="FormNumber"
            label="Phone Number"
            variant="outlined"
            onChange={() => {
              console.log(
                document.getElementById("FormNumber").value,
                "///Phone-Number////"
              );
              setUserNumber(document.getElementById("FormNumber").value);
            }}
          />
        </div>
        <div className={styles.formField}>
          <TextField
            id="FormMake"
            label="Make"
            variant="outlined"
            onChange={() => {
              console.log(
                document.getElementById("FormMake").value,
                "///car-make////"
              );
              setUserMake(document.getElementById("FormMake").value);
            }}
          />
        </div>
        <div className={styles.formField}>
          <TextField
            id="FormModel"
            label="Model"
            variant="outlined"
            onChange={() => {
              console.log(
                document.getElementById("FormModel").value,
                "///car-model////"
              );
              setUserModel(document.getElementById("FormModel").value);
            }}
          />
        </div>
        <div className={styles.formField}>
          <TextField
            id="FormYear"
            label="Year"
            variant="outlined"
            onChange={() => {
              console.log(
                document.getElementById("FormYear").value,
                "///mfd-year////"
              );
              setUserYear(document.getElementById("FormYear").value);
            }}
          />
        </div>
        <div className={styles.formField}>
          <TextField
            id="FormZip"
            label="ZipCode"
            variant="outlined"
            onChange={() => {
              console.log(
                document.getElementById("FormZip").value,
                "///zip-code////"
              );
              setAreaCode(document.getElementById("FormZip").value);
            }}
          />
        </div>
        <Radio radioValue={radioValue} setRadioValue={setRadioValue}/>
      </div>
      {/* <Button variant="contained" onClick={() => submitForm()}>
        Submit
      </Button> */}
      <div className={styles.submitButton} onClick={() => submitForm()}>Submit</div>
    </div>
  );
};

export default Form;
