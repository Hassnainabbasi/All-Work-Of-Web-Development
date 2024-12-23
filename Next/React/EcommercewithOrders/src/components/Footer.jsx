import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    YoutubeOutlined,
  } from "@ant-design/icons";
  const Footer = () => {
    return (
      <footer className=" py-3">
        <div className="flex justify-between items-center container mx-auto">
          <h1>All Rights Reserved</h1>
  
          <div className="flex gap-3 items-center">
           <a href="" target="_blank"><FacebookOutlined className="text-black hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
           <a href="" target="_blank"><InstagramOutlined className="text-black hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
           <a href="" target="_blank"><GithubOutlined className="text-black hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
           <a href="" target="_blank"><YoutubeOutlined className="text-black hover:text-blue-600" style={{ fontSize: 35  }} /></a> 
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;