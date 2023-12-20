import { Gpio } from "onoff";
const button = new Gpio(4, "in", "both");

button.watch((err, value) => {
  console.log("Button value change!", value);
});
