import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateHVStudent } from '../component/student/CreateHVStudent';
import { Dashboard } from '../component/dashBoard/Dashboard';
import { DashboardPage } from '../page/dashboardPage/DashboardPage';
import { FamilyPage } from '../page/familyPage/FamilyPage';
import { Footer } from '../component/layout/Footer';
import { ListAssistancePage } from '../page/assistancePage/ListAssistancePage';
import { ListFamilyPage } from '../page/familyPage/ListFamilyPage';
import { ListWelfarePage } from '../page/studentWelfarePage/ListWelfarePage';
import LoguinPage from '../page/loguinPage/LoguinPage';
import { MainLayout } from '../component/layout/MainLayout';
import { NoteList } from '../page/qualificationsPage/NoteList';
import { ProfileListStudent } from '../page/studentPage/ProfileListStudent';
import { ProfilePage } from '../page/profilePage/ProfilePage';
import React from 'react';
import { RegisterAttendancePage } from '../page/assistancePage/RegisterAttendancePage';
import { RegisterNotePage } from '../page/qualificationsPage/RegisterNotePage';
import { StatisticsPage } from '../page/statisticsPage/StatisticsPage';
import { StudentList } from '../page/studentPage/StudentList';
import { StudentPage } from '../page/studentPage/StudentPage';
import { StudentProfile } from '../page/studentPage/StudentProfile';
import { StudentWelfarePage } from '../page/studentWelfarePage/StudentWelfarePage';

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <section>
          <Routes>
            <Route path="/" element={<LoguinPage />} />
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/create-student" element={<StudentPage />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/create-profile" element={<StudentProfile />} />
              <Route path="/profile-list" element={<ProfileListStudent/>} />
              <Route path="/create-family" element={<FamilyPage/>} />
              <Route path="/family-list" element={<ListFamilyPage/>} />
              <Route path="/create-note" element={<RegisterNotePage/>} />
              <Route path="/note-list" element={<NoteList/>} />
              <Route path="/create-assistance" element={<RegisterAttendancePage/>} />
              <Route path="/assistance-list" element={<ListAssistancePage/>} />
              <Route path="/create-welfare" element={<StudentWelfarePage/>} />
              <Route path="/welfare-list" element={<ListWelfarePage/>} />
              <Route path="/statistics" element={<StatisticsPage/>} />

            </Route>
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
};
