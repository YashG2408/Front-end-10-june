import react from "react";
// import Class from "./Component/Class";
// import FunCompo from "./Component/FunCompo";
// import MainState from "./Component/State/MainState";
// import DemoJsx from "./Jsx/DemoJsx";
// import Demoprops from "./Props/Demoprops";
// import Mainprops from "./Props/Mainprops";
// import Effect from "./Effect/Effect";
// import EffectApi from "./Effect/EffectApi";
// import EffectApi1 from "./Effect/EffectApi1";
// import EffectApi2 from "./Effect/EffectApi2";
// import FakeProducts from "./Effect/FakeProducts";
// import ProductAxios from "./Effect/ProductAxios";
// import MainData from "./Context/MainData";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import Footer from "./Layout/Comman/Footer";
// import Header from "./Layout/Comman/Header";
import Home from "./Layout/Pages/Home";
import Feauters from "./Layout/Pages/Feauters";
import Pricing from "./Layout/Pages/Pricing";
import About from "./Layout/Pages/About";
import NotFound from "./Layout/Pages/NotFound";
import About1 from "./Layout/Pages/About1";
import About2 from "./Layout/Pages/About2";
import LifeCycle from "./LifeCycle";
import Fakeapi from "./Effect/Fakeapi";
// import Footer from "./MdbBoots.jsx/Footer";
// import ProductsAxios from "./Effect/ProductsAxios";
// import RecipesAxios from "./Effect/RecipesAxios";
// import UserApi from "./Effect/UserApi";
// import FormData from "./FormHandling/FormData";
// import FormObj from "./FormHandling/FormObj";
// import MainState from "./State/MainState";

function App(){
    return(
        <BrowserRouter>

        <div>

            {/* Component */}
            {/* <Class /> */}
            {/* <FunCompo /> */}

            {/* <DemoJsx /> */}

            {/* props */}
            {/* <Mainprops /> */}

            {/* state */}
            {/* <MainState /> */}

            {/* formhandling */}
            {/* <FormData /> */}
            {/* <FormObj /> */}

            {/* Effect */}
            {/* <Effect /> */}
            {/* <EffectApi /> */}
            {/* <EffectApi1 /> */}
            {/* <EffectApi2 /> */}
            {/* <UserApi /> */}
            {/* <FakeProducts /> */}
            {/* <ProductAxios /> */}
            {/* <ProductsAxios /> */}
            {/* <RecipesAxios /> */}

            {/* context */}
            {/* <MainData /> */}

            {/* <Footer /> */}

            {/* Layout  */}
            {/* <Header /> */}
            {/* <Footer /> */}

            <Routes>
                {/* <Route path="/" element={<Home />}/>
                <Route path="/Feauters" element={<Feauters />} />
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/About" element={<About />} >
                 <Route path="About1" element={<About1 />} />
                 <Route path="About2" element={<About2 />} /> */}
                 {/* </Route> */}
                 
                {/* <Route path="/About/About1" element={<About1 />} />
                <Route path="/About/About2" element={<About2 />} /> */}
                {/* <Route path="*" element={<NotFound />}/> */}
                {/* <Route path="/Life" element={<LifeCycle />}/> */}
            </Routes>
            <Fakeapi />
        </div>
          </BrowserRouter>
    )
}

export default App;