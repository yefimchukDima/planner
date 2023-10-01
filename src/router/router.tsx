import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { PATH } from '@router/path.enum';
import NotFoundPage from '@pages/NotFoundPage';
import PlannerPage from '@pages/PlannerPage';

/**
 * Creates a browser router with defined routes for the application.
 *
 * - `PATH.NOT_FOUND`: Route for displaying the "Not Found" page.
 * - `PATH.HOME`: Route for displaying the main PlannerPage.
 *
 * @returns A configured BrowserRouter with the defined routes.
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={PATH.HOME} element={<PlannerPage />} />
    </Route>,
  ),
);
