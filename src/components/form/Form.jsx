import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Form.module.css";
import Button from "@mui/material/Button";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(true);

  React.useEffect(() => {
    console.log(userName, "////////UserName///////");
  }, [userName]);

  const saveName = (e) => {
    // console.log('name is saved',e.target.value)
  };

  return (
    <div className={styles.parent}>
      <div className={styles.formParent}>
        <div className={styles.formField}>
          <TextField
            id="formName"
            label="Name"
            variant="outlined"
            required
            // error={error}
            onChange={() => {
              console.log(
                document.getElementById("formName").value,
                "///UserNmane////"
              );
              setUserName(document.getElementById("formName").value);
            //   document.getElementById("formName").value.length < 3
            //     ? setError(true)
            //     : setError(false);
            }}
            // helperText={error ? "Name should be atleast of 3 characters" : ""}
          />
        </div>
        <div className={styles.formField}>
          <TextField id="FormNumber" label="Phone Number" variant="outlined" />
        </div>
        <div className={styles.formField}>
          <TextField id="outlined-basic" label="Make" variant="outlined" />
        </div>
        <div className={styles.formField}>
          <TextField id="outlined-basic" label="Model" variant="outlined" />
        </div>
        <div className={styles.formField}>
          <TextField id="outlined-basic" label="Year" variant="outlined" />
        </div>
        <div className={styles.formField}>
          <TextField id="outlined-basic" label="ZipCode" variant="outlined" />
        </div>

        
      </div>
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default Form;
