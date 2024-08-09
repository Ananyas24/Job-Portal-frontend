
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h2 style={styles.heading}>Job<span style={styles.span}>Portal</span></h2>
            <p>Your gateway to the best job opportunities. Join us to find your dream job with ease and convenience.</p>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.subHeading}>Quick Links</h3>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Home</a></li>
              <li><a href="#" style={styles.link}>Jobs</a></li>
              <li><a href="#" style={styles.link}>Browse</a></li>
              <li><a href="#" style={styles.link}>Contact Us</a></li>
            </ul>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.subHeading}>Follow Us</h3>
            <div style={styles.socialLinks}>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" style={styles.icon} /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" style={styles.icon} /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" style={styles.icon} /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" style={styles.icon} /></a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: '#fff',
    padding: '20px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerSection: {
    flex: 1,
    marginRight: '20px',
  },
  heading: {
    color: '#fff',
    marginBottom: '15px',
  },
  span: {
    color: '#f83002',
  },
  subHeading: {
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'block',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#f83002',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
    transition: 'transform 0.3s',
  },
  iconHover: {
    transform: 'scale(1.2)',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #555',
    paddingTop: '10px',
  }
};

export default Footer;

