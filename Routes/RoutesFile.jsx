import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Components/Auth/Auth.jsx'
import LandingPage from '../Components/LandingPage/LandingPage.jsx'
import ResumeAnalyzer from '../Components/Resume/ResumeAnalyzer.jsx'
import Skilltest from '../Components/SkillTest/Skilltest.jsx'
import Skillagremnet from '../Components/SkillTest/Skillagremeent.jsx'
import SkilltestResult from '../Components/SkillTest/SkilltestResult.jsx'
import JobSearch from '../Components/StudentPanel/SearchSection/JobSearch.jsx'
import JobDetail from '../Components/StudentPanel/SearchSection/JobDetail.jsx'
import JobApplication from '../Components/StudentPanel/SearchSection/JobApplication.jsx'

const RoutesFile = () => {
  return (
    <div>
        <Routes>
            {/* <Route index path='/' element={<LandingPage/>} /> */}
            <Route  path="/auth" element={ <Auth/>}/>
            <Route  path='/resumeanalyse' element={<ResumeAnalyzer/>} />
            <Route path="/skill" element={<Skillagremnet />} />
        <Route path="/skill-test/:skillName" element={<Skilltest />} />
        <Route path="/skill-test-completion/:score" element={<SkilltestResult />} />
        

        <Route path="/" element={<JobSearch />} />
          <Route path="/job/:id" element={<JobDetail/>} />
          <Route path="/job/:id/apply" element={<JobApplication/>} />
        </Routes>
      
    </div>
  )
}

export default RoutesFile
