import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import About from "./components/Cart/About/About";
import Contact from "./components/Cart/Contact/Contact";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PaymentFailure from "./components/Payment Failure/PaymentFailure";
import PaymentSuccess from "./components/Payment Success/PaymentSuccess";
import PrivacyPolicy from "./components/Privacy Policy/PrivacyPolicy";
import RequestNew from "./components/Request New/RequestNew";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import TermsAndCondtions from "./components/Terms and Conditions/TermsAndCondtions";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="/termsandconditions" element={<TermsAndCondtions />} />
                    <Route path="/success" element={<PaymentSuccess />} />
                    <Route path="/failed" element={<PaymentFailure />} />
                    
                    <Route path="/requestnew" element={<RequestNew />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
