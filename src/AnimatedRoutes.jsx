import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import myNewRoutes from "./routes";

const AnimatedRoutes = () => {
    return (
        <Router>
            <Routes>
                {myNewRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={<AnimatePresence>{route.element}</AnimatePresence>} />
                ))}
            </Routes>
        </Router>
    );
};

export default AnimatedRoutes;