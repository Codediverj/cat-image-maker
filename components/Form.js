import React from "react";

const Form = ({updateMainCat}) => {
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [value, setValue] = React.useState("");
    const [errorMessage, setErrorMassage] = React.useState("");
  
    function handleInputChange (e){
      const userValue = e.target.value;
      setErrorMassage("");
      if(includesHangul(userValue)){
        setErrorMassage("Please type in English");
      }
      setValue(userValue.toUpperCase());
    }
  
    function hadleFormSubmit(e){
      e.preventDefault();
      setErrorMassage("");
      if(value === ""){
        setErrorMassage("Plase type something.");
        return;
      }
      updateMainCat(value);
    }
  
    return(
      <form onSubmit={hadleFormSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Please type something" 
        value={value}
        onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        <p style={{color:"red"}}>{errorMessage}</p>
      </form>
    );
  };

  export default Form;