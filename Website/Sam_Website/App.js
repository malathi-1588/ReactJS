import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Whoweare from "./components/Whoweare";
import Whatwedo from "./components/Whatwedo";
import News from "./components/News";
import Careers from "./components/Careers";
import Investors from "./components/Investors";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Whoweare />} />
          <Route path="/Whatwedo" element={<Whatwedo />} />
          <Route path="/News" element={<News />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Investors" element={<Investors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Bonus Question & Answers:
// Exxon Mobil Corporation is one of the largest publicly traded international oil and gas companies and holds an industry-leading inventory of resources.
// 1. They have data scientists and optimization experts releated roles
// 2. They partner with domain experts across the corporation to identify, scope, and develop machine learning solutions to reduce costs and/or increase revenue. 
// 3. Bachelor's for opening and Master's or PhD for advanced from a recognized university in engineering and experience in the domain and in Python & R and related packages such as numpy, pandas, sklearn, Keras, Tensorflow, PyTorch
// 4. As the demand and hence the price of oil and gas are continuously increasing, it is most probable that the company grows exponentially in the future 
// 5. AI and DS will only help this sector grow and not disrupt it(refer point 2)
// 6. Same as 5
// 7. I would definitely like to work as theier work is interesting and they have a requirements for data analysts and scientists