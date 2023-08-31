import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const CreateEvent = lazy(() => import('./pages/CreateEvent/CreateEvent'));
const EventDetails = lazy(() => import('./pages/EventDetails/EventDetails'));
const EditEvent = lazy(() => import('./pages/EditEvent/EditEvent'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateEvent />} />
        {/* <Route path="event/:id" element={<EventDetails />} /> */}
        <Route path="event" element={<EventDetails />} />
        <Route path="edit" element={<EditEvent />} />
        {/* 404 Not Found Page with delayed redirect */}
        {/* <Route path="*" element={
          <NotFoundPage component={NotFound} redirectTo="/" />
        } /> */}
      </Route>
    </Routes>
  );
}

export default App;
