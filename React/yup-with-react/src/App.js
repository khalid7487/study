import './App.css';

function App() {
  
  return (
    <div className="App">
        <form >
          <input type="text" name="firsName" placeholder= "Enter first name" />

          <input type="text" name="lastName" placeholder= "Enter last name" />

          <input type="text" name="age" placeholder= "Enter age" />
          
          <input type="password" name="password" />

          <input type="password" name="confirmPassword"/>

          <input type="submit" id="submit" />

        </form>
    </div>
  );
}

export default App;
