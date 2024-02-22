import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header/>

            {/* Landing Page */}
            <Landing/>

            {/* Footer */}
            <Footer/>
        </div>

    )
};

export default App;