export default function Home() {
     return (
         <div style={{ padding: '20px',
          fontFamily: 'Times New Roman, sans-serif',
          textAlign: 'center' ,
           }}>
             <h3>Welcome to My Portfolio</h3>
             <p>
                 Hi, I'm a student of <strong> Software Engineering</strong> with a passion for building innovative software solutions. <br />
                 I am constantly learning new technologies and improving my skills in areas like web development, software architecture, and problem-solving.
             </p>
             <p>
                 Feel free to explore my portfolio to learn more about me, check out my projects, and see the services I offer.
             </p>
             <button
                 onClick={() => window.location.href = '/about'}
                 style={{
                     padding: '10px 20px',
                     backgroundColor: '#007bff',
                     color: 'white',
                     border: 'none',
                     borderRadius: '5px',
                     cursor: 'pointer'
                 }}
             >
                 Learn More About Me
             </button>
         </div>
     );
 }
 