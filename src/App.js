import { BrowserRouter, Route, Switch } from "react-router-dom"

//import Layout
import Header from "./components/Header"
import Footer from "./components/Footer"

// Import Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Build from "./pages/Build"

function App() {
  return (
    <BrowserRouter>
      {/* Header Area */}
      <div className="max-w-full">
        <Header />
      </div>
      {/* Route Area */}
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/About" />
        <Route component={Build} path="/Build" />
      </Switch>
      {/* Footer Area */}
      <div className="max-w-full">
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
