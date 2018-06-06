import React from "react";

const Form = (props) => {
  return(<form onSubmit={props.onSubmit}>
  <input type="text" name="City" placeholder="Enter the city name"/>
  <input type="text" name="Country" placeholder="Enter the country name"/>
  <button>Submit</button>
  </form>);
}

export default Form;
