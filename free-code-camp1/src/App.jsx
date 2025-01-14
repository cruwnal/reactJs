
import './App.css'

function Footer(){
    return(

        <footer>Here is footer</footer>
    )
}

function Header(){
    return (
        <header>here is header</header>
    );
}

function App() {


  return (
    <>
        <Header/>
      <div>
        <ul>
            <li>capital of Nigeria is Abuja </li>
            <li>capital of Zimbabwe is Harare </li>
            <li>capital of south Korea is Seoul</li>
        </ul>
      </div>


        <Footer/>
    </>
  )
}

export default App
