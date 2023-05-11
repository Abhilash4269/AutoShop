import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function IconsRadio({radioValue, setRadioValue}) {
  // const [radioValue, setRadioValue] = React.useState();

  // const handleChange = (x) => {
  //   setRadioValue(x.target.value);
  // };

  // React.useEffect(() => {
  //   console.log(radioValue,'the radio vaalue');
  //   if(radioValue){}
  // }, [radioValue])
  
  return (
    <RadioGroup
      aria-label="platform"
      //   value
      // onChange={(e,val) => console.log(val, '&^%&^%&^^*&^*&valueeeee')}
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: "row",
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: "3px solid",
            borderColor: "primary.500",
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: "contents",
          "& > svg": {
            zIndex: 2,
            position: "absolute",
            top: "-8px",
            right: "-8px",
            bgcolor: "background.body",
            borderRadius: "50%",
          },
        },
      }}
    >
      {["Engine", "Transmission", "Both"].map((value) => (
        <Sheet
          key={value}
          variant="outlined"
          sx={{
            borderRadius: "md",
            bgcolor: "background.body",
            boxShadow: "sm",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            p: 2,
            minWidth: 120,
          }}
        >
          <Radio
            id={value}
            value={value}
            checkedIcon={<CheckCircleRoundedIcon />}
            onChange={() => {
              console.log(document.getElementById(value).value);
              setRadioValue(document.getElementById(value).value);
            }}
          />
          {/* <Avatar variant="soft" size="sm" /> */}
          {/* <img src="https://www.shutterstock.com/image-vector/vector-icon-automotive-engine-260nw-253027477.jpg" class="r48jcc pT0Scc iPVvYb" alt="engine logo"></img> */}
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
  );
}
