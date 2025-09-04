import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Suspense, lazy } from "react";
import { CookieBanner } from "./components/CookieBanner";
import { LoadingPage } from "./pages/Loading";

const Home = lazy(() =>
    import("./pages/Home").then((module) => ({ default: module.Home })),
);
const About = lazy(() =>
    import("./pages/About").then((module) => ({ default: module.About })),
);
const Services = lazy(() =>
    import("./pages/Services").then((module) => ({ default: module.Services })),
);
const OurBuilds = lazy(() =>
    import("./pages/OurBuilds").then((module) => ({
        default: module.OurBuilds,
    })),
);
const Contact = lazy(() =>
    import("./pages/Contact").then((module) => ({ default: module.Contact })),
);
const LegalAdvise = lazy(() =>
    import("./pages/Policies/LegalAdvise").then((module) => ({
        default: module.LegalAdvise,
    })),
);
const PrivacyPolicies = lazy(() =>
    import("./pages/Policies/Privacypolicies").then((module) => ({
        default: module.PrivacyPolicies,
    })),
);
const CookiePreferences = lazy(() =>
    import("./pages/Policies/Cookieprefrences").then((module) => ({
        default: module.CookiePreferences,
    })),
);
const CookiePolicies = lazy(() =>
    import("./pages/Policies/Cookiepolicies").then((module) => ({
        default: module.CookiePolicies,
    })),
);
const BudgetForm = lazy(() =>
    import("./pages/BudgetForm").then((module) => ({
        default: module.BudgetForm,
    })),
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ourBuilds" element={<OurBuilds />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/legalAdvise" element={<LegalAdvise />} />
                    <Route
                        path="/privacyPolicies"
                        element={<PrivacyPolicies />}
                    />
                    <Route
                        path="/cookiePolicies"
                        element={<CookiePolicies />}
                    />
                    <Route
                        path="/cookiePreferences"
                        element={<CookiePreferences />}
                    />
                    <Route path="/budgetForm" element={<BudgetForm />} />
                </Routes>
                <CookieBanner />
            </Suspense>
        </Router>
    );
}

export default App;
