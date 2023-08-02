// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

import { Home } from './pages/Home/Home';
// import { CreateEvent } from './pages/CreateEvent/CreateEvent';
// import { EventDetails } from './pages/EventDetails/EventDetails';
// import { EditEvent } from './pages/EditEvent/EditEvent';

// const Home = lazy(() => import('./pages/Home/Home'));
// const CreateEvent = lazy(() => import('./pages/CreateEvent/CreateEvent'));
// const EventDetails = lazy(() => import('./pages/EventDetails/EventDetails'));
// const EditEvent = lazy(() => import('./pages/EditEvent/EditEvent'));

function App() {
  return (
    <Layout>
      <Home></Home>
      {/* <CreateEvent></CreateEvent>
      <EventDetails></EventDetails>
      <EditEvent></EditEvent> */}
    </Layout>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //       <Route path='create' element={<CreateEvent />} />
    //       <Route path='event/:id' element={<EventDetails />} />
    //       <Route path='edit' element={<EditEvent />} />
    //     {/* 404 Not Found Page with delayed redirect */}
    //     <Route path="*" element={
    //       <NotFoundPage component={NotFound} redirectTo="/" />
    //     } />
    //   </Route>
    // </Routes>
  );
}

export default App;
