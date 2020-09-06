import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Extremely passionate Full Stack Developer with good knowledge and experience over 4 years in the field of Information Technology. Strongly determined learner with constantly enhancing my skills by welcoming the opportunity to learn new technologies and put them into practice. Enthusiast to learn and liverage anything in the orbit of Information Technology. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>    
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>Experience in building applications using JavaScript, React, HTML, CSS, SQL, C#, MVC Dot Net Framework.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                <img src="https://img.icons8.com/color/48/000000/power-bi.png"/>
                </span>
                <div className="desc">
                    <h3>Data Analysis & Visualization</h3>
                    <p>Worked as a Data Analyst. Experience over fundamental concepts of Data Analysis, Modelling and Visualization. Developed Power BI reports and dasboards to visualize the data.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                <img src="https://img.icons8.com/color/48/000000/microsoft-sharepoint-2019.png"/>
                </span>
                <div className="desc">
                    <h3>SharePoint Deveopment</h3>
                    <p>Experience in deveoping Sharepoint Modern Websites. Migrated classic sharepoint websites to Modern. Developed Custom Webparts. Created forms using Microsoft Power Apps.</p>
                </div>
                </div>
            </div>
          
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                <img src="https://img.icons8.com/color/48/000000/azure-1.png"/>
                </span>
                <div className="desc">
                    <h3>Azure Web Services</h3>
                    <p>Experience on Azure web hosting, Azure SQL, App Services, Azure Repos, Logic Apps, Azure Dev Ops for Team Collaboration.</p>
                </div>
                </div>
            </div>
              
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                <img src="https://img.icons8.com/material/48/000000/dynamics-365.png"/>
                </span>
                <div className="desc">
                    <h3>Microsoft Dynamics 365 CRM</h3>
                    <p>Experience in developing Model Driven, Canvas Apps on Microsoft Power Platform IDE. Automated Processes using Microsoft RPA tool Power Automate.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
