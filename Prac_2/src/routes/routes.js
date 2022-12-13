import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page'
import PricePage from '../pages/price-page'

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    private: false,
  },

  {
    path: "/about",
    element: <AboutPage />,
    private: false,
  },

  {
    path: "/price",
    element: <PricePage />,
    private: false,
  }
]
