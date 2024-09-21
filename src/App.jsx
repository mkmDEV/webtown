import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MasonryPage } from '@/pages/MasonryPage.jsx';
import { TimeLinePage } from '@/pages/TimeLinePage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <MasonryPage /> },
  { path: '/time-line/', element: <TimeLinePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
