export default function About() {
     return (
         <div style={{ padding: '20px', fontFamily: 'Times New Roman, sans-serif', textAlign: 'center' }}>
             
             <img 
                 src="./public/images/kripa.jpeg" 
                 alt="Kripa" 
                 style={{ borderRadius: '35%', width: '200px', height: '250px' }} 
             />
             
             <p>
                 Hello, it's Kripa here !! < br/>
                 A dedicated student pursuing a degree in <strong>Software Engineering</strong>.
                 My journey in software development has fueled my passion for creating efficient and innovative solutions.
                 I enjoy learning new technologies and collaborating on projects that challenge my skills.
             </p>
             <p>
                 My goal is to become a proficient software engineer, contributing to projects that positively impact people's lives.
             </p>
             <a 
                 href="./public/images/bell.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{
                     display: 'inline-block',
                     padding: '10px 20px',
                     marginTop: '10px',
                     backgroundColor: '#007bff',
                     color: 'white',
                     textDecoration: 'none',
                     borderRadius: '5px'
                 }}
             >
                 View My Resume
             </a>
         </div>
     );
 }
 