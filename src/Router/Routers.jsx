import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateHVStudent } from '../component/student/CreateHVStudent';
import { Dashboard } from '../component/dashBoard/Dashboard';
import { DashboardPage } from '../page/dashboardPage/DashboardPage';
import { Footer } from '../component/layout/Footer';
import LoguinPage from '../page/loguinPage/LoguinPage';
import { MainLayout } from '../component/layout/MainLayout';
import { ProfileListStudent } from '../page/studentPage/ProfileListStudent';
import React from 'react';
import { StudentList } from '../page/studentPage/StudentList';
import { StudentPage } from '../page/studentPage/StudentPage';
import { StudentProfile } from '../page/studentPage/StudentProfile';

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <section>
          <Routes>
            <Route path="/login" element={<LoguinPage />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/home" element={<DashboardPage />} />
              <Route path="/create-student" element={<StudentPage />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/create-profile" element={<StudentProfile />} />
              <Route path="/profile-list" element={<ProfileListStudent/>} />
            </Route>
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};
