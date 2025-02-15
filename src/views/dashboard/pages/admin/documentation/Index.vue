<template>
  <div class="documentation">
    <h2 >Documentation <a href="#" class="online-docs">View Online Documentation ↗</a></h2>
    <div class="doc-container">
      <div class="doc-card">
        <h3><i class="icon">📖</i> General</h3>
        <ul>
          <li><a href="#">Introduction</a></li>
          <li><a href="#">Requirements</a></li>
          <li><a href="#">What’s Included In My Purchase?</a></li>
          <li><a href="#">Where Is My Purchase Code?</a></li>
          <li><a href="#">How To Get Support</a></li>
          <li><a href="#">Licensing</a></li>
          <li><a href="#">Hosting</a></li>
        </ul>
        <a href="#" class="doc-link">Documentation ↗</a>
      </div>

      <div class="doc-card">
        <h3><i class="icon">📖</i> Get Started</h3>
        <ul>
          <li><a href="#">Download Files</a></li>
          <li><a href="#">Install Theme Via WordPress Admin Panel (Recommended)</a></li>
          <li><a href="#">Install Theme Via FTP (Expert)</a></li>
          <li><a href="#">Theme Activation</a></li>
          <li><a href="#">Import The Demo Content</a></li>
          <li><a href="#">Switch Between Different Demos</a></li>
          <li><a href="#">How To Update Houzez</a></li>
          <li><a href="#">Child Theme Installation</a></li>
          <li><a href="#">Common Installation Errors</a></li>
        </ul>
        <a href="#" class="doc-link">Documentation ↗</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.documentation {
  height: 500px;
  background-color: #ffffff;
  position: relative;
  left: 120px; 
  max-width: 1000px; 
  width: 90%; 
  margin: 30px auto;
  font-family: Arial, sans-serif;
  top: 30px;
  padding: 20px; 
  border-radius: 10px; 
}

.documentation h2{
  position: relative;
  top: 20px;
}
.main-wrap {
  
  background-color: #f3f3f3;
  width: 100%;
}
h2 {
  font-size: 24px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.online-docs {
  font-size: 14px;
    text-decoration: none;
    color: #007bff;
    position: relative;
    right: 56%;
    top: 3px;

}

.doc-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.doc-card {
  margin-top: 20px;
 width: 48%;
    padding: 15px;
    border-radius: 8px;
    background: #ffffff;
    border: 1px solid gray;
}

h3 {
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  margin-right: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
}

ul li {
  margin-bottom: 5px;
}

ul li a {
  text-decoration: none;
  color: #007bff;
  font-size: 14px;
}

.doc-link {
  display: block;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin-top: 10px;
}
</style>
