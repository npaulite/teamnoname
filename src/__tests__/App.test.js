import { render, screen } from '@testing-library/react';
import App from '../App';
import AuthContext from '../components/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

function renderAuth(user) {
  return render(
    <BrowserRouter>
    <AuthContext.Provider value={user}>
      <App />
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

it('renders Auth', () => {
  const user = {
    user: "Test Doctor 1",
    id: "tav93aBIRSWiwDMiNOgAoMc25a53",
    authorized: "urayujaymteuvwmdby@tcwlx.com"
  }
  renderAuth(user)
  expect(screen.getByText(`Vendia`)).toBeInTheDocument();
});
