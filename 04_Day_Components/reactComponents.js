// React Component syntax
// it can be arrow function, function declaration or function expression

const jsx = <tag> COntent </tag>
const ComponentName = () => {
    return jsx
}

// JSX element, header
const header = (
    <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )
  
  // React Component
  const Header = () => {
    return header
  }
  