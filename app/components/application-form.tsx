"use client";
import React, { useState } from 'react';
import './application-form.css';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    highestQualification: '',
    course: '',
    agreedToTerms: false
  });

  const [showQualificationDropdown, setShowQualificationDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  const qualifications = [
    'Select Highest Qualification',
    '10th Standard',
    '12th / Diploma',
    'Graduate',
    'Post Graduate'
  ];

  const courses = [
    'Select Course',
    'MBA - International Business',
    'MBA - Event Management',
    'MBA - Entrepreneurship Management',
    'MBA - Logistics & Supply Chain Management',
    'MBA - Retail Management',
    'MBA - Human Resource Management',
    'MBA - Hospital And Healthcare Management',
    'MBA - Sales And Marketing',
    'MBA - Finance',
    'MBA - Data Science and Business Analytics',
    'MBA - Digital Marketing',
    'BBA - Retail Operations',
    'BBA - Human Resources',
    'BBA - Marketing Management',
    'BBA - Logistics & Supply chain',
    'BBA - General',
    'BBA - Event Management',
    'BBA - Investment Banking',
    'BBA - Hospital Management',
    'BBA - Investment Banking',
    'BBA - Hospital Management',
    'MBA Plus - Sales & Marketing',
    'MBA Plus - Human Resource Management',
    'MBA Plus - Healthcare and Hospital Management',
    'MBA Plus - Finance Management',
    'MBA Plus - International Business',
    'MBA Plus - Logistic & Supply Chain Management',
    'MBA Plus - Entrepreneurship Management',
    'MBA Plus - Event Management',
    'MBA Plus - Retail Management',
    'MBA Plus - Digital Marketing',
    'MBA Plus - Data Science and Business Analytics',
    'AI and Machine Learning',
    'Cyber Security',
    'Data Analytics',
    'Internet of Things',
    'Cloud Computing',
    'Block Chain Management',
    'Full Stack Development',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleQualificationSelect = (qualification : string) => {
    setFormData({ ...formData, highestQualification: qualification });
    setShowQualificationDropdown(false);
  };

  const handleCourseSelect = (course : string) => {
    setFormData({ ...formData, course: course });
    setShowCourseDropdown(false);
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <div className="form-modal">
        <div className="form-header">
          <h2>Apply online</h2>
          <button className="close-button">×</button>
        </div>
        
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Id"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            
            <div className="form-group dropdown-container">
              <div 
                className="dropdown-selector"
                onClick={() => setShowQualificationDropdown(!showQualificationDropdown)}
              >
                {formData.highestQualification || "Select Highest Qualification"}
                <span className="dropdown-arrow">▼</span>
              </div>
              
              {showQualificationDropdown && (
                <div className="dropdown-menu">
                  {qualifications.map((qualification, index) => (
                    <div 
                      key={index} 
                      className={`dropdown-item ${index === 0 ? 'dropdown-header' : ''}`}
                      onClick={() => index !== 0 && handleQualificationSelect(qualification)}
                    >
                      {qualification}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="form-group dropdown-container">
              <div 
                className="dropdown-selector"
                onClick={() => setShowCourseDropdown(!showCourseDropdown)}
              >
                {formData.course || "Select Course"}
                <span className="dropdown-arrow">▼</span>
              </div>
              
              {showCourseDropdown && (
                <div className="dropdown-menu dropdown-menu-scrollable">
                  {courses.map((course, index) => (
                    <div 
                      key={index} 
                      className={`dropdown-item ${index === 0 ? 'dropdown-header' : ''} ${course === formData.course ? 'selected' : ''}`}
                      onClick={() => index !== 0 && handleCourseSelect(course)}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="form-group checkbox-container">
              <input
                type="checkbox"
                id="terms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="terms">
                By proceeding, you agree to our <span className="privacy-link">privacy policy</span> and also agree to receive information from D Y Patil University through Email / SMS / WhatsApp & other means of communication.
              </label>
            </div>
            
            <button
              type="submit"
              className="submit-button"
              disabled={!formData.agreedToTerms}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}