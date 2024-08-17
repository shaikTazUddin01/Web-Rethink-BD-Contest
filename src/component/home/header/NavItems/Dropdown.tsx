import { Menu } from "antd";

export const aboutContent = (
  <Menu className="flex flex-wrap ">
    <Menu.ItemGroup
      title={<strong className="text-primaryColor">About Division</strong>}
    >
      <Menu.Item key="1">History & Activities</Menu.Item>
      <Menu.Item key="2">Vision & Mission</Menu.Item>
      <Menu.Item key="3">Honorable Adviser</Menu.Item>
      <Menu.Item key="4">List of Ex-Ministers</Menu.Item>
      <Menu.Item key="5">Secretary</Menu.Item>
      <Menu.Item key="6">List of Ex-Secretaries</Menu.Item>
      <Menu.Item key="7">Organogram</Menu.Item>
      <Menu.Item key="8">Allocation of Business</Menu.Item>
      <Menu.Item key="9">Principal Function</Menu.Item>
      <Menu.Item key="10">Work Distribution</Menu.Item>
      <Menu.Item key="11">Member Nomination</Menu.Item>
    </Menu.ItemGroup>

    <Menu.ItemGroup
      title={<strong className="text-primaryColor">Manpower</strong>}
    >
      <Menu.Item key="12">Officers</Menu.Item>
      <Menu.Item key="13">Work Distribution</Menu.Item>
      <Menu.Item key="14">Information Officer</Menu.Item>
      <Menu.Item key="15">GRS and Appellate Officer</Menu.Item>
      <Menu.Item key="16">Focal Point Officers</Menu.Item>
    </Menu.ItemGroup>

    <Menu.ItemGroup
      title={
        <strong className="text-primaryColor">Services of Divisions</strong>
      }
    >
      <Menu.Item key="17">Citizen Charter</Menu.Item>
      <Menu.Item key="18">List of Citizen e-Services</Menu.Item>
    </Menu.ItemGroup>

    <Menu.ItemGroup
      title={
        <strong className="text-primaryColor">
          Committees of Ministry/Division
        </strong>
      }
    >
      <Menu.Item key="19">
        Committees chaired by Honorable PM & Honorable Minister Regarding
        Ministry/Division
      </Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

export const affiliatedContent = (
  <Menu className="flex flex-wrap">
    <Menu.ItemGroup title={<b className="text-primaryColor">Contact</b>}>
      <Menu.Item key="ongoing-projects">List of Offices/Institutions</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

export const projectContent = (
  <Menu className="flex flex-wrap">
    <Menu.ItemGroup title={<b className="text-primaryColor">Project</b>}>
      <Menu.Item key="ongoing-projects">On going Projects</Menu.Item>
      <Menu.Item key="procurement-plan">Procurement Plan</Menu.Item>
      <Menu.Item key="completed-projects">Completed Projects</Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title={<b className="text-primaryColor">Programme</b>}>
      <Menu.Item key="completed-programme">Completed Programme</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

export const galleryContent = (
    <Menu className="flex flex-wrap">
      <Menu.ItemGroup title={<b className="text-primaryColor">Gallery</b>}>
        <Menu.Item key="ongoing-projects">Photo Gallery</Menu.Item>
        <Menu.Item key="ongoing-projects">Video Gallery</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );



  export const actsContent = (
    <Menu className="flex flex-wrap">
      <Menu.ItemGroup title={<b className="text-primaryColor">Acts & Policies</b>}>
        <Menu.Item key="act">Act</Menu.Item>
        <Menu.Item key="policy">Policy</Menu.Item>
        <Menu.Item key="guidelines-strategies">Guidelines and Strategies</Menu.Item>
        <Menu.Item key="draft-acts-rules-policy">Draft Acts, Rules, and Policy</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  export const eserviceContent = (
    <Menu className="flex flex-wrap">
      <Menu.ItemGroup title={<b className="text-primaryColor">E-Services</b>}>
        <Menu.Item key="innovation-info">Innovation Information System Management System</Menu.Item>
        <Menu.Item key="casual-leave">Casual Leave Management</Menu.Item>
        <Menu.Item key="smart-dashboard">Smart Dashboard</Menu.Item>
        <Menu.Item key="freelancer-id">Get Your Freelancer ID</Menu.Item>
        <Menu.Item key="fellowship-innovation-fund">Fellowship & Innovation Fund Application</Menu.Item>
        <Menu.Item key="e-nothi">e-Nothi</Menu.Item>
        <Menu.Item key="web-mail">Web mail</Menu.Item>
        <Menu.Item key="online-salary-submission">Online Salary Submission</Menu.Item>
        <Menu.Item key="e-tendering">e-Tendering (e-GP)</Menu.Item>
        <Menu.Item key="mygov">Mygov</Menu.Item>
        <Menu.Item key="grp">GRP</Menu.Item>
        <Menu.Item key="project-monitoring">Project Monitoring System</Menu.Item>
        <Menu.Item key="online-acr">Online ACR</Menu.Item>
        <Menu.Item key="online-recruitment">Online Recruitment</Menu.Item>
        <Menu.Item key="emporia">EMPORIA</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

export const contactContent = (
  <Menu className="flex flex-wrap">
    <Menu.ItemGroup title={<b className="text-primaryColor">Contact</b>}>
      <Menu.Item key="ongoing-projects">Office Address</Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title={<b className="text-primaryColor">Comment</b>}>
      <Menu.Item key="completed-programme">Question & comment</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);
