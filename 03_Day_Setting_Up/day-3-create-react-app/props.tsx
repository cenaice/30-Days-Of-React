// function syntax

const getUserInfo = (firstName, lastName, country) => {
    return `${firstName} ${lastName}. Lives in ${country}.`
  }
  
  // calling a functons
  
  getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')
  
  //component syntax
  
  // User component, props/properties takes in any value and will output based on props.(variable)
  const User = (props) => {
    return (
      <div>
        <h1>
          {props.firstName}
          {props.lastName}
        </h1>
        <small>{props.country}</small>
      </div>
    )
  }
  // calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
  <User firstName = 'Asabeneh' lastName='Yetayeh' country = 'Finland' />