import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutusPage from './pages/AboutusPage';
import WorkDetailsPage from './pages/WorkDetailsPage';
import DemoFramePage from './pages/DemoFramePage';
import AuthPage from './pages/AuthPage';
import SplashScreen from './components/SplashScreen';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* شاشة السبلايش */}
        <Route path="/splash" element={<SplashScreen />} />

        {/* الصفحات الأساسية */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        
        <Route
          path="/works"
          element={
            <MainLayout>
              <WorksPage />
            </MainLayout>
          }
        />
        
        <Route
          path="/aboutus"
          element={
            <MainLayout>
              <AboutusPage />
            </MainLayout>
          }
        />
        
        <Route
          path="/work/:id"
          element={
            <MainLayout>
              <WorkDetailsPage />
            </MainLayout>
          }
        />

        {/* تسجيل و انشاء حساب   */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />

        {/* صفحة العرض المنتجج */}
        <Route path="/demo/:id" element={<DemoFramePage />} />
      </Routes>
    </Router>
  );
}

export default App;